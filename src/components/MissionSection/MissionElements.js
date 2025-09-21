import { CarouselProvider as OriginalCarouselProvider} from 'pure-react-carousel';
import { Slider as StyledSlider} from 'pure-react-carousel';
import { Slide as StyledSlide} from 'pure-react-carousel';
import { Element } from "react-scroll";
import styled, { keyframes } from "styled-components";


export const MissionContainer = styled(Element)`
// min-height: 840px;
min-height: 800px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: #fff;
`;

export const MissionTitle = styled.h1`
margin-top: 1em;
font-size: 28px;
font-weight: bold;
`;
export const MissionStatement = styled.p`
margin-top: 1em;
font-size: 18px;
@media screen and (max-width: 760px){
text-align: center;
}
`;
export const AdminStatements = styled.div`
margin: 1em;
font-size: 20px;
font-weight: bold;
`;

export const CarouselProvider = styled(OriginalCarouselProvider)`
width: 50%;
// max-width: 1200px;
// margin: 0 auto;
// position: relative;
`;

export const Slider = styled(StyledSlider)`
display: flex;
justify-content: center;
align-items: center;
`;

export const Slide = styled(StyledSlide)`
.carousel__inner-slide{
display: flex;
justify-content: center;
}
`;

export const bounce = keyframes`
  0%, 100% {
  transform: scale(1);
  }
  50%{
  transform: scale(1.4);
  }
  `;


export const ArrowButton = styled.button`
position: absolute;
top: 50%;
${(props) => props.left ? "left: -50px;" : "right: -50px;"}
transform: translateY(-50%);
background:   #ff00ff;
border: 1px solid #ccc;
border-radius: 50%;
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
z-index: 2;
box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
transition: background 0.3s ease, transform 0.2s ease;

&: hover {
background: #f0f0f0;
transform: translateY(-50%) scale(1.05);
}
@media (max-width: 1024px) {
width: 35px;
height: 35px;
${(props) => props.left ? "left: 10px;" : "right: 10px;"}
}

@media (max-width: 768px) {
width: 30px;
height: 30px;
${(props) => props.left ? "left: 8px;" : "right: 8px;"}
}

`;





















