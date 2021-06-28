import React from "react";

import { ImDownload } from "react-icons/im";
import { GoAlert } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

let statusIcon = (jobStatus) => {
  if (jobStatus === "success") {
    return <FaCheck color="#FFF" size="1.8em" />;
  } else if (jobStatus === "alert") {
    return <GoAlert color="#FFF" size="1.8em" />;
  } else if (jobStatus === "complete") {
    return <ImDownload color="#FFF" size="1.8em" />;
  } else {
    return <MdCancel color="#FFF" size="1.8em" />;
  }
};

const CardHeader = (props) => {
  return (
    <div
      className={`styles.card-header p-3 d-flex align-items-center justify-content-between ${props.color}`}
    >
      <div className="styles.card-header-title">
        <h5 style={{ padding: 0, margin: 0 }}>{props.serviceName}</h5>
        <p>{props.serviceDesc}</p>
      </div>
    </div>
  );
};

export default CardHeader;
