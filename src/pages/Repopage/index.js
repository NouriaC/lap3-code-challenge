import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { VscRepoForked, VscIssues } from "react-icons/vsc";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import HeaderImg from "../../assets/img/header-img.svg";
const Repopage = () => {
  const [repo, setRepo] = useState({});
  const [username] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("username");
    const initialValue = JSON.parse(saved);
    return initialValue || " ";
  });
  const { name } = useParams();
  const navigate = useNavigate();


    useEffect(() => {
        const fetchSingleRepo = async () => {
            const { data } = await axios.get(`https://api.github.com/repos/${username}/${name}`);
            setRepo(data);
        };

        fetchSingleRepo();
    }, [name, username]);

    const date = new Date(repo.created_at).toLocaleString("en-GB");


    return (
        <section className="repoSection">
            <div className="wrapper-container">
                <div className="imgBX">
                    <img className="astro" src={HeaderImg} alt="astro"></img>
                </div>

                <div className="info">
                    <h2>Repository details</h2>
                    <h4>What this repository is about ?</h4>
                    <p>
                        <span>{repo.description ? repo.description : "There are no descriptions for this repo"}</span>
                    </p>
                    <h4>When was it created ?</h4>
                    <p>{date}</p>
                    <div className="inner-info-wrapper">
                        <h4>
                            Number of <VscRepoForked />:{" "}
                        </h4>
                        <p>{repo.forks_count}</p>
                        <h4>Number of <VscIssues />: </h4>
                        <p>{repo.open_issues_count}</p>
                        <h4>Stargazers <AiOutlineStar />: </h4>
                        <p>{repo.stargazers_count}</p>
                        <h4>Subscribers: </h4>
                        <p>{repo.subscribers_count}</p>
                    </div>
                </div>
            </div>
            <button className="btn" onClick={() => navigate(-1)}>
              Back
            </button>
        </section>
    );

};

export default Repopage;
