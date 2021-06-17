import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  background: #d2d6db;
  height: 50vh;
`;
const FooterUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;
const FooterLi = styled.li`
  padding: 0 0.5rem;
`;

const FooterP = styled.p`
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterDiv>
      <FooterUl>
        <FooterLi type="button">Home</FooterLi>
        <FooterLi type="button">Reading List</FooterLi>
        <FooterLi type="button">Listings</FooterLi>
        <FooterLi type="button">Podcast</FooterLi>
        <FooterLi type="button">Videos</FooterLi>
        <FooterLi type="button">Tags</FooterLi>
        <FooterLi type="button">Code of Conduct</FooterLi>
        <FooterLi type="button">FAQ</FooterLi>
      </FooterUl>
      <FooterUl>
        <FooterLi type="button">DEV Shop</FooterLi>
        <FooterLi type="button">Sponsors</FooterLi>
        <FooterLi type="button">About</FooterLi>
        <FooterLi type="button">Privacy Policy</FooterLi>
        <FooterLi type="button">Terms of use</FooterLi>
        <FooterLi type="button">Contact</FooterLi>
        <FooterLi type="button">Create Post</FooterLi>
      </FooterUl>
      <FooterUl>
        <FooterLi type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#64707d">
                <path d="M172,30.82226c-6.4388,2.85547 -12.9056,5.01107 -20.07226,5.73894c7.16667,-4.3112 12.9056,-11.47787 15.76107,-19.3724c-7.16667,4.31119 -14.33333,7.16667 -22.19988,8.6224c-7.16667,-7.16667 -16.48893,-11.47787 -26.51106,-11.47787c-19.3724,0 -35.13347,15.76107 -35.13347,35.10547c0,2.88346 0,5.73893 0.72786,7.89453c-29.39453,-1.42774 -55.17773,-15.06119 -72.39453,-36.56119c-3.58333,5.03906 -5.01107,11.47786 -5.01107,17.91667c0,12.20573 6.43881,22.95573 15.76107,29.39453c-5.73893,-0.72786 -11.44987,-2.1556 -15.76107,-4.31119c0,0 0,0 0,0.72786c0,17.18881 12.17774,31.52214 27.93881,34.4056c-2.85547,0.69988 -5.71094,1.42774 -9.29427,1.42774c-2.1556,0 -4.3112,0 -6.4668,-0.72786c4.31119,14.33333 17.2168,24.38346 32.97786,24.38346c-12.17773,9.32227 -27.23893,15.03321 -43.72786,15.03321c-2.85547,0 -5.73893,0 -8.5944,-0.69988c15.76107,10.02214 34.4056,15.76107 53.75,15.76107c65.22787,0 100.33333,-53.75 100.33333,-100.33333c0,-1.42774 0,-2.85547 0,-4.31119c7.16667,-5.01107 12.9056,-11.44988 17.91667,-18.61654"></path>
              </g>
            </g>
          </svg>
        </FooterLi>
        <FooterLi type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#64707d">
                <path d="M156.23893,0h-140.47786c-8.5944,0 -15.76107,7.16667 -15.76107,15.76107v140.47786c0,8.5944 7.16667,15.76107 15.76107,15.76107h70.23893v-71.66667h-21.5v-21.5h21.5v-21.5c0,-17.91667 7.16667,-28.66667 28.66667,-28.66667h21.5v21.5h-9.32226c-6.43881,0 -12.17774,5.73893 -12.17774,12.17774v16.48893h28.66667l-3.58333,21.5h-25.08333v71.66667h41.57226c8.5944,0 15.76107,-7.16667 15.76107,-15.76107v-140.47786c0,-8.5944 -7.16667,-15.76107 -15.76107,-15.76107z"></path>
              </g>
            </g>
          </svg>
        </FooterLi>
        <FooterLi type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#64707d">
                <path d="M78.11667,15.05c-32.96667,3.58333 -59.48333,30.1 -63.06667,62.35c-4.3,35.83333 17.91667,66.65 49.45,76.68333v-16.48333c0,0 -2.86667,0.71667 -6.45,0.71667c-10.03333,0 -14.33333,-8.6 -15.05,-13.61667c-0.71667,-2.86667 -2.15,-5.01667 -4.3,-7.16667c-2.15,-0.71667 -2.86667,-0.71667 -2.86667,-1.43333c0,-1.43333 2.15,-1.43333 2.86667,-1.43333c4.3,0 7.88333,5.01667 9.31667,7.16667c3.58333,5.73333 7.88333,7.16667 10.03333,7.16667c2.86667,0 5.01667,-0.71667 6.45,-1.43333c0.71667,-5.01667 2.86667,-10.03333 7.16667,-12.9c-16.48333,-3.58333 -28.66667,-12.9 -28.66667,-28.66667c0,-7.88333 3.58333,-15.76667 8.6,-21.5c-0.71667,-1.43333 -1.43333,-5.01667 -1.43333,-10.03333c0,-2.86667 0,-7.16667 2.15,-11.46667c0,0 10.03333,0 20.06667,9.31667c3.58333,-1.43333 8.6,-2.15 13.61667,-2.15c5.01667,0 10.03333,0.71667 14.33333,2.15c9.31667,-9.31667 20.06667,-9.31667 20.06667,-9.31667c1.43333,4.3 1.43333,8.6 1.43333,11.46667c0,5.73333 -0.71667,8.6 -1.43333,10.03333c5.01667,5.73333 8.6,12.9 8.6,21.5c0,15.76667 -12.18333,25.08333 -28.66667,28.66667c4.3,3.58333 7.16667,10.03333 7.16667,16.48333v23.65c29.38333,-9.31667 50.16667,-36.55 50.16667,-68.08333c0,-43 -36.55,-76.68333 -79.55,-71.66667z"></path>
              </g>
            </g>
          </svg>
        </FooterLi>
        <FooterLi type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#64707d">
                <path d="M57.33333,21.5c-19.78717,0 -35.83333,16.04617 -35.83333,35.83333v57.33333c0,19.78717 16.04617,35.83333 35.83333,35.83333h57.33333c19.78717,0 35.83333,-16.04617 35.83333,-35.83333v-57.33333c0,-19.78717 -16.04617,-35.83333 -35.83333,-35.83333zM129,35.83333c3.956,0 7.16667,3.21067 7.16667,7.16667c0,3.956 -3.21067,7.16667 -7.16667,7.16667c-3.956,0 -7.16667,-3.21067 -7.16667,-7.16667c0,-3.956 3.21067,-7.16667 7.16667,-7.16667zM86,50.16667c19.78717,0 35.83333,16.04617 35.83333,35.83333c0,19.78717 -16.04617,35.83333 -35.83333,35.83333c-19.78717,0 -35.83333,-16.04617 -35.83333,-35.83333c0,-19.78717 16.04617,-35.83333 35.83333,-35.83333zM86,64.5c-11.87412,0 -21.5,9.62588 -21.5,21.5c0,11.87412 9.62588,21.5 21.5,21.5c11.87412,0 21.5,-9.62588 21.5,-21.5c0,-11.87412 -9.62588,-21.5 -21.5,-21.5z"></path>
              </g>
            </g>
          </svg>
        </FooterLi>
        <FooterLi type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#64707d">
                <path d="M38.43685,14.33333l-24.10352,33.22982v95.77018h35.83333v21.5h21.5l21.5,-21.5h28.66667l35.83333,-35.83333v-93.16667zM43,28.66667h100.33333v64.5l-21.5,21.5h-35.83333l-21.5,21.5v-21.5h-21.5zM78.83333,50.16667v35.83333h14.33333v-35.83333zM114.66667,50.16667v35.83333h14.33333v-35.83333z"></path>
              </g>
            </g>
          </svg>
        </FooterLi>
      </FooterUl>
      <FooterP>
        DEV Community – A constructive and inclusive social network for software
        developers. With you every step of your journey.
      </FooterP>
      <FooterP>
        Built on Forem — the open source software that powers DEV and other
        inclusive communities. Made with love and Ruby on Rails. DEV Community ©
        2016 - 2021.
      </FooterP>
    </FooterDiv>
  );
}
