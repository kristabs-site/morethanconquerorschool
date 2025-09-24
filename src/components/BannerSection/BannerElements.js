import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

export const BannerContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
max-width: 100%; 
// max-width: 1200px;
// overflowY: scroll;
overflowY: hidden;
// scrollSnapType: y mandatory;
`;

export const BannerBackground = styled.div`
width: 100%;
height: 100vh;
padding: 0;
background-image: url(${process.env.PUBLIC_URL + '/pictures/newbg.jpg'});
background-repeat: no-repeat;
background-position: center;
background-size: 100% 100%;
position: absolute;
// transform: scale(0.5);
// filter: brightness(50%);
`;
export const BackgroundFilter = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: rgba(55, 55, 55, 0.76);
`

export const BannerContents = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
margin-right: 6em;
// margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;


@media screen and (max-width: 768px){
margin-left: 11em;
}
`;

export const BannerLogoContainer = styled.div`
display: flex;
flex-direction: grid;
width: 100%;
height: 10vh;
justify-content: center;
padding-top: 5em;
margin-left: 14.5em;
// position: relative;

@media screen and (max-width: 768px){
width: 80vw;
height: 5vh;
padding-top: 7em;
margin-left: 5em;
flex-direction: column;
`;

export const BannerLogo1 = styled.img.withConfig({
    shouldForwardProp: (prop) => prop !== 'img',
})`
width: 5em;
height: 5em;
position: relative;

@media screen and (max-width: 768px){
width: 3em;
height: 3em;
margin-left: 5em;
}
`;

export const BannerH1 = styled.h1`
padding: 15px;
font-size: 28px;
color:#fff;
font-weight: bold;

@media screen and (max-width: 768px){
padding: 9px;
margin-left: -25px;
font-size: 15px;
}
`;

export const BannerH2 = styled.h2`
font-size: 25px;
color: #fff;
font-weight: bold;
margin-top: 3em;
margin-left: 9em;

@media screen and (max-width: 768px){
margin-left: -6em;
margin-top: 4em;
font-size: 14px;
}
`;

export const BannerP = styled.p`
font-size: 20px;
color:#fff;
font-weight: bold;
margin-top: 1em;
margin-left: 10em;

@media screen and (max-width: 768px){
padding-top: 0.1em;
margin-left: -7em;
font-size: 15px;
}
`;

export const BannerLogoContainer2 = styled.div`
display: flex;
flex-direction: grid;
width: 100%;
// height: 100px;
justify-content: center;
padding-top: 0.7em;
margin-left: 15em;
// position: relative;

@media screen and (max-width: 768px){
width: 80vw;
height: 5vh;
padding-top: 3em;
margin-left: 10em;
flex-direction: column;
}
`;

export const BannerLogo2 = styled.img.withConfig({
    shouldForwardProp: (prop) => prop !== 'img',
})`
width: 5em;
height: 5em;
position: relative;

@media screen and (max-width: 768px){
width: 3em;
height: 3em;
margin-left: 3em;
}
`;

export const BannerH11 = styled.h1`
padding: 15px;
font-size: 28px;
color:#fff;
font-weight: bold;

@media screen and (max-width: 768px){
padding: 6px;
font-size: 15px;
margin-left: -25px;
}
`;
export const ClickBox = styled.div`
margin-top: 12em;
background: #ff6a00;
// background: #eee8aa;
color: #eee8aa;
padding: 12px 20px;
border-radius: 10px;
font-size: 1rem;
font-weight: bold;
cursor: pointer;
transition: all 0.3s ease;
display: flex;
align-items: center;
gap: 8px;

&: hover{
background: #4169E1;
transform: scale(1.05);
}

@media (max-width: 768px) {
    margin-top: 16em;
  }
`;

// export const IntroBox = styled.div`
// margin-top: 1em;
// background: rgba(255, 255, 255, 0.9);
// color: #222;
// padding: ${({ isVisible }) =>
// (isVisible ? "18px" : "0 18px")
// };
// border-radius: 12px;
// max-width: 700px;
// line-height: 1.6;
// font-size: 1rem;
// text-align: center;

// max-height: $
// {({ isVisible }) =>
// (isVisible ? "500px" : "0")};
// opacity: ${({ isVisible }) =>
//  (isVisible ? "1" : "0")};
// overflow: hidden;
// transition: all 0.5s 
// ease-in-out, padding 0.3s ease-in-out;
// `;

export const ArrowIcon = styled(FaArrowRight)`
font-size: 18px;
color: #eee8aa;
transition: transform 0.3s ease-in-out;

${ClickBox}:hover & {
transform: translateX(5px);
}
`;




