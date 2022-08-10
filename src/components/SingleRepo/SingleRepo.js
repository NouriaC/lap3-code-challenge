import React from "react";
import "./SingleRepo.css";

export default function SingleRepo({ repo }) {
  return (
    <article className="repo">
      <header>
        <h4>{repo.name}</h4>
        <button className="btn">See Details</button>
      </header>
    </article>
  );
}
