import React from 'react';
// import hourohg from "../../assets/logo/hourohg.png";
import { BannerContainer, BannerBackground, 
  BannerContents, BannerLogoContainer, BannerLogo1,
  BannerH1, BannerH2, BannerP, BannerH11, BannerLogoContainer2, BannerLogo2, 
  BackgroundFilter,
  ClickBox,
 ArrowIcon} from './BannerElements';
import { Link } from 'react-router-dom';



const BannerSection = () => {
  return (
    <>
    <BannerContainer>
     <BannerBackground>
      <BackgroundFilter>
        <BannerContents>
      <BannerLogoContainer>
         <BannerLogo1 img src="/assests/logo/more.png" alt="hr logo" />
      <BannerH1>More Than Conquerors School of Theology</BannerH1>
      </BannerLogoContainer>
      <BannerH2>Dominion Theological College</BannerH2>
      <BannerP>Affiliated with the</BannerP>
      <BannerLogoContainer2>
      <BannerLogo2 img src="/pictures/city.png" alt="more logo" />
      <BannerH11>City of Dominion Assembly
        <br></br>Int'l a.k.a City of Glory</BannerH11>
      </BannerLogoContainer2>
      <Link to="/welcome" style={{ textDecoration: "none" }}>
      <ClickBox>
        Welcome Message
        <ArrowIcon />
      </ClickBox>
      </Link>
     </BannerContents>
      </BackgroundFilter>
     </BannerBackground>
    </BannerContainer>
    </>
  )
}

export default BannerSection;