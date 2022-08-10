import React from "react";
import { useParams } from "react-router-dom";
import SingleRepo from "../../components/SingleRepo/SingleRepo";

const Repopage = () => {
  const { id } = useParams();

  return (
    <div>
      Single repo details
      <SingleRepo />
    </div>
  );
};

export default Repopage;
