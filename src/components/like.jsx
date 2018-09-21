import React from "react";
const Like = ({ liked, handleLikeToggle, obj }) => {
  let clsName = "fa fa-heart";

  liked ? clsName : (clsName = clsName + "-o");

  return (
    <React.Fragment>
      <i
        style={{ cursor: "pointer" }}
        className={clsName}
        onClick={() => handleLikeToggle(obj)}
      />
    </React.Fragment>
  );
};

export default Like;
