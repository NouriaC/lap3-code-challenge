import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const GithubForm = ({ input, setInput, handleSubmit }) => {
    return (
        <form className="github-form" onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">
                <IoSearchOutline />
            </button>
        </form>
    );
};

export default GithubForm;
