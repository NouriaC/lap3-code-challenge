import React from "react";
import SingleRepo from "../SingleRepo/SingleRepo";

export default function RepoList({ repos }) {
    return repos.map((repo) => <SingleRepo key={repo.id} repo={repo} />);
}
