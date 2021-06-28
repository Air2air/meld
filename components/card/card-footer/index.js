import React from "react";

function CardFooter(props) {
  return (
    <div className="styles.card-footer p-4 d-flex justify-content-end">
      <div className="legend align-items-center">
        <span>Updated </span>
        <b>22</b> mins ago
      </div>
    </div>
  );
}

export default CardFooter;
