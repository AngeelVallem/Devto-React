import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
 
import CardImage from "./CardImage";
import Image from "../../Image";
import Button from "../../Button"
import Listitem from "../../ListItem"

import reactions from "../../../assets/reactions.svg"
import comments from "../../../assets/comments.svg"

import {colors} from "../../../Globals"

const CustomCard = styled.div`
  border-radius: 5px;
  overflow: hidden;
  margin-bottom : 1rem
`;

export default function Card({post,index}) {
  return (
    <Link to={`/${post._id}`}>
    <CustomCard className="card shadow-sm">
      {index === 0 ?   <CardImage img={post.coverUrl}/> : ''}
      <div className="d-flex px-3 pt-3">
        <Image
          size="30px"
          circle
          src={post.avatar}
        />
        <div className="mx-2">
          <p className="m-0"> {post.author}</p>
          <p>Jun 8 (6 days ago)</p>
        </div>
      </div>
      <h1 className="w-100 px-3 font-weight-bold">
        {post.postTitle}
      </h1>
      <ul className='list-inline d-flex mx-3 w-100'>
        <li className='text-muted'>{post.postTags}</li>
      </ul>
      <div className='d-flex px-3 justify-content-between align-items-center mb-2'>
        <ul className='list-inline d-flex align-items-center m-0'>
          <Listitem text='6 ' img={reactions} url='/#'/>
          <Listitem text='6 ' img={comments} url='/#' />
        </ul>
      <div className='d-flex align-items-center'>
        <small className='mx-1'>8 min read</small>
        <Button color={colors.buttonSecondaty}>Read</Button>
      </div>
      </div>
    </CustomCard>
    </Link>
  );
}
