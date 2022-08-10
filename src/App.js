import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import GithubForm from "./components/GithubForm";
import RepoList from "./components/RepoList/RepoList";
import Slider from "./components/Slider/Slider";

function App() {
    const [input, setInput] = useState("");
    const [username, setUsername] = useState("octocat");
    const [repos, setRepos] = useState([]);

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
        <div className="App">
            <h2>Lap 3 Code Challenge</h2>
            <GithubForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
            {/* <RepoList repos={repos} /> */}
            <Slider repos={repos} />
        </div>
    );
}

export default App;
