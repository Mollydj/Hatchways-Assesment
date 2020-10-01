import React from "react";

const StudentFilter = (props) => {
  return (
    <div className="input">
      <input type="text" onChange={props.type} />
    </div>
  );
};

export default StudentFilter;
