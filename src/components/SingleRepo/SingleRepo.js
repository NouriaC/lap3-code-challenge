import React from "react";
import "./SingleRepo.css";
import { Link } from "react-router-dom";

export default function SingleRepo({ repo }) {
    return (
        <article className="repo">
            <header>
                <h4 className="repo-name">{repo.name}</h4>
                <Link to={`/${repo.name}`} className="btn">
                    See Details
                </Link>
            </header>
        </article>
    );
}
