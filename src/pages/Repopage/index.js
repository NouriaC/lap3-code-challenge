import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { VscRepoForked } from "react-icons/vsc";

const Repopage = () => {
  const [repo, setRepo] = useState({});
  const [username] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("username");
    const initialValue = JSON.parse(saved);
    return initialValue || " ";
  });
  const { name } = useParams();

  useEffect(() => {
    const fetchSingleRepo = async () => {
      const { data } = await axios.get(
        `https://api.github.com/repos/${username}/${name}`
      );
      setRepo(data);
    };

    fetchSingleRepo();
  }, [name, username]);

  const date = new Date(repo.created_at).toLocaleString("en-GB");

  return (
    <section>
      <h2>Repository details</h2>
      <h4>What this repository is about ?</h4>
      <p>
        <span>
          {repo.description
            ? repo.description
            : "There are no descriptions for this repo"}
        </span>
      </p>
      <h4>When was it created ?</h4>
      <p>{date}</p>
      <h4>
        Number of <VscRepoForked />:{" "}
      </h4>
      <p>{repo.forks_count}</p>
      <h4>Number of issues: </h4>
      <p>{repo.open_issues_count}</p>
      <h4>Stargazers: </h4>
      <p>{repo.stargazers_count}</p>
      <h4>Subscribers: </h4>
      <p>{repo.subscribers_count}</p>
    </section>
  );
};

export default Repopage;
