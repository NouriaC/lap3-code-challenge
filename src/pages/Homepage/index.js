import { useEffect, useState } from "react";
import axios from "axios";
import GithubForm from "../../components/GithubForm/GithubForm";
import Slider from "../../components/Slider/Slider";

const Homepage = () => {
    const [input, setInput] = useState("");
    const [username, setUsername] = useState("octocat");
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        localStorage.setItem("username", JSON.stringify(username));
    }, [username]);

    useEffect(() => {
        const fetchGithubRepo = async () => {
            const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
            console.log(data);
            setRepos(data);
        };
        fetchGithubRepo();
    }, [username]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername(input);
        setInput("");
    };

    return (
        <div className="App home">
            <h2 className="home-heading">GitHub Repo Tracker</h2>
            <GithubForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
            {/* <RepoList repos={repos} /> */}
            <Slider repos={repos} />
        </div>
    );
};

export default Homepage;
