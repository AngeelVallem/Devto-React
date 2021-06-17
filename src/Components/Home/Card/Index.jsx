import React from "react";
import styled from "styled-components";

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

export default function Card() {
  return (
    <CustomCard className="card shadow-sm">
      <CardImage />
      <div className="d-flex px-3 pt-3">
        <Image
          size="30px"
          circle
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--ksMvsu8E--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/415021/161034a1-87b4-4729-b35c-24dfd4ddb59d.jpg"
        />
        <div className="mx-2">
          <p className="m-0"> User name </p>
          <p>Jun 8 (6 days ago)</p>
        </div>
      </div>
      <h1 className="w-100 px-3 font-weight-bold">
        Card title Card title Card titleCard title
      </h1>
      <ul className='list-inline d-flex mx-3 w-100'>
        <li className='text-muted'>#TAG1</li>
        <li className='text-muted mx-2'>#TAG3</li>
        <li className='text-muted'>#TAG2</li>
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
  );
}
