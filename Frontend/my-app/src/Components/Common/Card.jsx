import React from "react";

function Card({ record }) {
  return (
    <div
      className="card text-white bg-info mb-3"
      style={{ maxWidth: "22rem", maxHeight: "20rem" }}
    >
      <div className="card-header font-weight-bold">
        {record.id}: {record.title}{" "}
      </div>
      <div className="card-body">
        <h5 className="card-title">User Id: {record.user_id} </h5>
        <p className="card-text">{record.body}</p>
      </div>
    </div>
  );
}

export default Card;
