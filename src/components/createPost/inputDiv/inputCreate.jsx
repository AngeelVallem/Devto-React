import React from "react";
// import styled from "styled-components";

export default function CustomInput(props) {
  return (
    <React.Fragment>
      <input
        type={props.type ? props.type : "text"}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.callback(event.target.value)}
      />
    </React.Fragment>
  );
}
