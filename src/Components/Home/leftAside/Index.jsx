import React from "react";

import homeImg from "../../../assets/home.svg";
import reading from "../../../assets/reading.svg";
import listingImg from "../../../assets/listings.svg";
import podcastImg from "../../../assets/podcast.svg";
import videoImg from "../../../assets/videos.svg";
import tagsImg from "../../../assets/tags.svg";

import ListItem from "../../ListItem";

import "../../../Styles/left-side-bar.css"

export default function SideBar() {
  return (
    <>
    <ul className="mt-5">
      <ListItem text="Home" url="/#" img={homeImg} />
      <ListItem text="Reading List" url="/#" img={reading} />
      <ListItem text="Listing" url="/#" img={listingImg} />
      <ListItem text="Podcasts" url="/#" img={podcastImg} />
      <ListItem text="Video" url="/#" img={videoImg} />
      <ListItem text="Tags" url="/#" img={tagsImg} />
      <ListItem text="More ..." url="/#" />
    </ul>
    <h5 className='mx-5 mt-5'>Tags</h5>
    <ul>
      <ListItem  text="#javaScript"/>
      <ListItem text="#producity"/>
      <ListItem text="#docker"/>
      <ListItem text="#flutter"/>
      <ListItem text="#vscode"/> 
    </ul>
    </>
  );
}
