import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import CustomInput from "./inputCreate";
// import PrintAside from "./asideElements";

const DivContainer = styled.div`
  background: #ffffff;
  margin: 3rem;
  width: 30vw;
  heigth: 50vh;
`;

export default function AddNewPost() {
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [img, setImg] = useState("");
  const [post, setPost] = useState("");

  const history = useHistory();

  const [show, setShow] = useState("d-none");

  const HasItShown = () => {
    useEffect(() => {
      document.getElementsByTagName("H1").setAttribute("class", show);
    }, []);
    // useEffect(() => {
    //   document.getElementsByTagName("H1").setAttribute("class", show);
    // }, [show]);
  };

  const IsShowed = () => {
    const newShow = show === "d-none" ? "d-block" : "d-none";
    setShow(newShow);
  };

  const makeSubmit = async (event) => {
    event.preventDefault();

    try {
      const newPost = {
        cover,
        title,
        tags,
        img,
        post,
      };
      await console.log(newPost);
      //send to endpoint;
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <DivContainer>
        <form onSubmit={makeSubmit}>
          <div>
            <CustomInput
              id="Cover"
              placeholder="Add a cover url image"
              value={cover}
              callback={setCover}
            />
          </div>
          <div>
            <CustomInput
              id="Title"
              placeholder="New post title here..."
              value={title}
              callback={setTitle}
              onFocus={HasItShown}
            />
          </div>
          <div>
            <CustomInput
              id="Tags"
              placeholder="Add up to 4 tags..."
              value={tags}
              callback={setTags}
            />
          </div>
          <div>
            <CustomInput
              id="Img"
              placeholder="Set an url image"
              value={img}
              callback={setImg}
            />
          </div>
          <div>
            <CustomInput
              id="Post"
              placeholder="Write your post content here..."
              value={post}
              callback={setPost}
            />
          </div>

          <button className="btn btn-primary mt-2" type="submit">
            Publish
          </button>
          <button className="btn btn-primary mt-2" type="button">
            Save Draft
          </button>
        </form>
      </DivContainer>
      <h1 className={`d-none ${IsShowed}`}>hi</h1>
    </React.Fragment>
  );
}
