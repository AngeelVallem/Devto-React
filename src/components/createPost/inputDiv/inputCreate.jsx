import React from "react";
// import styled from "styled-components";

import TitleAside from "./asideElements";

export default function CustomInput(props) {
  const isIdTitle = props.id === "Title";
  const isIdTags = props.id === "Tags";
  const isIdPost = props.id === "Post";

  return (
    <input
      type={props.type ? props.type : "text"}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(event) => props.callback(event.target.value)}
      onFocus={() => {
        if (isIdTitle) {
          console.log("props title");
          TitleAside();
        }
        if (isIdTags) {
          console.log("props is tags");
        }
        if (isIdPost) {
          console.log("props is post");
        }
      }}
    />
  );
}
