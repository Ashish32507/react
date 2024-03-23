import React from "react";
function Productcategory(props) {
  return (
    <>
      {console.log("Not Found")}
      <option value={props.pdcat.toUpperCase()}>
        {props.pdcat.toUpperCase()}
      </option>
    </>
  );
}

export default Productcategory;
