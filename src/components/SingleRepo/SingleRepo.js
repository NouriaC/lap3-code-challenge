import React from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./SingleRepo.css";

export default function SingleRepo({ repo }) {
    // const [showInfo, setShowInfo] = useState(false);
    return (
        <article className="repo">
            <header>
                <h4>{repo.name}</h4>
                <button className="btn">See Details</button>
            </header>
        </article>
    );
}
