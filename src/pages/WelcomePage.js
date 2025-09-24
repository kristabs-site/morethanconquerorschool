import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* Reset default body margin so no white strip shows at the top */
const GlobalReset = createGlobalStyle`
  html, body, #root { height: 100%; }
  body { margin: 0; }
`;

const Hero = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;   /* centers the overlay nicely */
  isolation: isolate;    /* ensures z-index stacking is clean */
`;

const Bg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  /* Background layers */
  background-image:
    linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.52)),
    url(${process.env.PUBLIC_URL + '/pictures/newbg.jpg'});
  background-position: top center;  /* keep top visible */
  background-repeat: no-repeat;
  background-size: contain;           
  min-height: 100vh;
  width: 100%;
  background-color: #000;

@media (max-width: 768px) {
  background-position: center top; 
  background-size: contain;
  background-image: 
    linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.52)),
    url(${process.env.PUBLIC_URL + '/pictures/newbg.jpg'});
     background-color: #000;
}
  `;


/* Overlay card that can scroll inside if its content is tall */
const Overlay = styled(motion.div)`
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.19); /* semi-transparent white */
  border-radius: 16px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  width: min(92vw, 820px);
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(255, 255, 255, 0.4);

  /* hide scrollbar (cross-browser) */
  scrollbar-width: none;       /* Firefox */
  -ms-overflow-style: none;    /* IE/Edge */
}
&::-webkit-scrollbar {
  display: none;               /* Chrome/Safari */
}
`

const Logo = styled.img`
  width: 88px;
  height: 88px;
  margin: 0 auto 1rem auto;
  display: block;

  @media (max-width: 768px) {
    width: 64px;
    height: 64px;
  }
`;

const Heading = styled.h1`
  margin: 0 0 0.5rem 0;
  font-size: clamp(22px, 3vw, 32px);
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.8;
  color: yellow;
  margin: 0 0 1rem 0;
  text-align: justify;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.6;
    text-align: left;
  }
`;

export const Evangelistic = styled.span`
diplay: inline-flex;
align-items: center;
gap: 8px;
font-weight: 800;
font-size: 1.1rem;
`;

 export const Highlight = styled.span`
 font-weight: bold;
 color: #fff;
 `;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  margin-top: 0.5rem;
`;

const PrimaryBtn = styled.button`
  background: #0077cc;
  color: #fff;
  border: 0;
  padding: 0.8em 1.4em;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.15s ease;

  &:hover { background: #005fa3; transform: translateY(-1px); }
`;

const SecondaryBtn = styled(PrimaryBtn)`
  background: #0f172a;
  &:hover { background: #0b1221; }
`;

const RouterBtn = styled(Link)`
  display: inline-block;
  background: #2563eb;
  color: #fff;
  text-decoration: none;
  padding: 0.8em 1.4em;
  border-radius: 10px;
  font-weight: 700;
  transition: background 0.3s ease, transform 0.15s ease;

  &:hover { background: #1e40af; transform: translateY(-1px); }
`;

const WelcomePage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <GlobalReset />
      <Hero>
        <Bg />

        <Overlay
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <Logo src={process.env.PUBLIC_URL + '/pictures/more2.png'} alt="School Logo" />
          <Heading>Welcome to More Than Conquerors School of Theology</Heading>

          <Paragraph>
            We are delighted to introduce<Highlight> 
             More than Conquerors School of Theology</Highlight>, a center of spiritual
           learning and divine empowerment. Our institution is proudly 
            affiliated with the <Highlight>City of Dominion Assembly International
              </Highlight>, a community of faith where lives are transformed through
               the Word and Spirit of God. <br /> We also honour the { " "} 
               <Evangelistic>
                 <img src={process.env.PUBLIC_URL + '/evalogo1.png'} alt="eva" width="50" height="50" />
                 <Highlight>Evangelistic Messangers Association</Highlight>
                 </Evangelistic> (founded since March 4, 
                 1933), a vibrant arm of the church under whose guidance and support
                 this vision is carried out. Their unwavering commitment to the Gospel
                 continues to inspire our mission of raising men and women who are
                 deepy rooted in Scripture and equipped to serve in God's vineyard.
          </Paragraph>

          {!showMore ? (
            <Buttons>
              <PrimaryBtn onClick={() => setShowMore(true)}>Read More</PrimaryBtn>
            </Buttons>
          ) : (
            <>
              <Paragraph>
                Our Goal is to prepare ministers, teachers and leaders who
                       will carry the message of truth to the nations and impact 
                       generations for the Glory of God. We also equip and empower individuals
                       with a strong theological foundation, preparing them for ministry, leadership
                       and a deeper understanding of God's word.<br />More than conquerors school of 
                       theology is indeed a matrix for building faith, spritual maturity, kingdom of God and 
                       academic excellence.
                       <br />Through our programs, students will engage in rigorous biblical studies, practical
                       ministry training and spiritual growth enabling them to serve efficiency in their calling.
                       <br />Whether you are pursuing pastoral ministry, evangelism, or simply seeking deeper knowledge of Scripture,
                        this school is designed to strengthen and guide you.
                        <br /><br />As we launch this program, we look forward to training students in sound doctrine,
                        practical ministry and Christian leadership. Whether you are called to pastoral ministry,
                        teaching evamgelism or deeper biblical studies, this is a place where you will be strengthened
                        to walk boldly in your calling.   
                       <br />Our programs include: Certificate in Ministry, Diploma in Theology, 
       Bachelor in Theology, Master of Theology, Ph.D in Theology, Elective courses 
       (on request), English and Management. 
       <br /> Join us as we raise a generation of conquerors, prepared to impact the world for Christ!
       <br /><br />Enrollment is now open! Join us on this incredible journey of faith and learning. Be part of a community 
       that is committed to raising conquerors for the Kingdom of God! 
              </Paragraph>
              <Buttons>
                <SecondaryBtn onClick={() => setShowMore(false)}>Show Less</SecondaryBtn>
              </Buttons>
            </>
          )}

          {/* Always last */}
          <Buttons>
            <RouterBtn to="/">Back to Home</RouterBtn>
          </Buttons>
        </Overlay>
      </Hero>
    </>
  );
};

export default WelcomePage;


// import React, { useState } from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   overflow: hidden;
// `;


//   const FullWidthImage = styled.div`
//   position: fixed;  /* ✅ stays fixed behind content */
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background: url("/pictures/welcome.png") no-repeat center center/cover;
//   z-index: -1;  /* ✅ push it behind overlay */
// `;

// const ContentOverlay = styled(motion.div)`
//   position: absolute;
//   top: 50%;  
//   left: 50%;
//   transform: translate(-50%, -50%);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;

//   background: rgba(255, 255, 255, 0.85);
//   padding: 2em;
//   border-radius: 16px;
//   max-width: 800px;
//   max-height: 90vh;   /* ✅ never taller than viewport */
//   overflow-y: auto;   /* ✅ scroll inside if content too long */
//   box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);

//   /* ✅ nice smooth scrollbar (optional) */
//   scrollbar-width: thin;
//   scrollbar-color: #0077cc #f0f0f0;
// `;

// const Logo = styled.img`
//   width: 90px;
//   height: 90px;
//   margin-bottom: 1em;

//   @media screen and (max-width: 768px) {
//     width: 60px;
//     height: 60px;
//   }
// `;

// const Heading = styled.h1`
//   font-size: 32px;
//   color: #222;
//   margin-bottom: 0.5em;

//   @media screen and (max-width: 768px) {
//     font-size: 22px;
//   }
// `;

// const Paragraph = styled.p`
//   font-size: 18px;
//   line-height: 1.8;
//   color: #444;
//   margin-bottom: 1em;

//   @media screen and (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const Button = styled.button`
//   background: #0077cc;
//   color: #fff;
//   border: none;
//   padding: 0.8em 1.5em;
//   border-radius: 8px;
//   font-size: 16px;
//   font-weight: bold;
//   cursor: pointer;
//   transition: background 0.3s ease, transform 0.2s ease;
//   margin-top: 1em;

//   &:hover {
//     background: #005fa3;
//     transform: translateY(-2px);
//   }

//   @media screen and (max-width: 768px) {
//     font-size: 14px;
//     padding: 0.6em 1.2em;
//   }
// `;

// const WelcomePage = () => {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <Container>
//       <FullWidthImage>
//         <ContentOverlay>
//           <Logo src="/pictures/more2.png" alt="School Logo" />
//           <Heading>Welcome to Our School</Heading>
//           <Paragraph>
//             Our school is a faith-driven institution dedicated to academic
//             excellence and moral values. We focus on nurturing both spiritual
//             and intellectual growth, preparing students to become leaders
//             guided by Christian principles.
//           </Paragraph>

//           {/* ✅ Read More / Show Less first */}
//           {!showMore ? (
//             <Button onClick={() => setShowMore(true)}>Read More</Button>
//           ) : (
//             <>
//               <Paragraph>
//                 We are committed to fostering a community where faith and
//                 learning go hand in hand. Our programs are designed to
//                 challenge students academically while nurturing their
//                 character and preparing them for impactful service.
//               </Paragraph>
//               <Button onClick={() => setShowMore(false)}>Show Less</Button>
//             </>
//           )}

//           {/* ✅ Back to Home button always last */}
//           <Button onClick={() => (window.location.href = "/")}>
//             Back to Home
//           </Button>
//         </ContentOverlay>
//       </FullWidthImage>
//     </Container>
//   );
// };

// export default WelcomePage;

// import React, { useState } from 'react'
// import styled from "styled-components";

// export const WelcomeContainer = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// padding: 40px;
// min-height: 100vh:
// // background-color: #f9f9f9;
// background-color: linear-gradient(135deg, #667eea, #764ba2)
// `;

// export const ContentWrapper = styled.div`
// display: flex;
// flex-direction: row;
// align-items: center;
// gap: 2em;
// width: 100%;
// max-width: 1100px;
// background: #fff;
// padding: 2.5em;
// border-radius: 12px;
// box-shadow: 0 4px 15px rgba(0,0,0,0.1);

// @media screen and (max-width: 768px) {
// flex-direction: column;
// text-align: center;
// // padding: 2em;
// }
// `;

// export const FullWidthImage = styled.img`
// width: 100%;
// height: 100vh;
// background: url("/pictures/bish.jpg") no-repeat
// ceneter center/cover;
// position: relative;
// // object-fit: cover;
// margin-bottom: 2em;
// `;

// export const Logo = styled.img`
// width: 80px;
// height: 80px;
// // flex-shrink: 0;
// margin-bottom: 1em;
// `;

// export const ContentOverlay = styled.div`
// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%, -50%);
// display: flex;
// flex-direction: column;
// align-items: center;
// text-align: center;

// background: rgba(255, 255, 255, 0.8);
// padding: 2em;
// border-radius: 12px;
// max-idth: 800px;
// `

// export const TextBox = styled.div`
// display: flex;
// flex-direction: column;
// line-height: 1.5;
// font-size: 18px;
// font-weight: 400;
// text-align: justify;
// color: #000;

// @media screen and (max-width: 768px) {
// font-size: 16px;
// }
// `;


// export const Heading = styled.h1`
// font-size: 32;
// color: #222;
// margin-bottom: 0.5em;
// // font-size: 28px;
// // margin-bottom: 0.5em;
// // color:  #ffd700;

// @media screen and (max-width: 768px) {
// font-size: 22px;
// }
// `;

// export const Paragraph = styled.p`
// font-size: 18px;
// line-height: 1.6;
// color: #444;
// // font-size: 18px;
// // line-height: 1.6 ! important;
// // color: #555;
// // margin-bottom: 1.2em;
// // text-align: justify;
// // white-space: normal;
// // word-break: break-word;

// // @media screen and (max-width: 768px) {
// // font-size: 16px;
// // }
// // `;

// export const Evangelistic = styled.span`
// diplay: inline-flex;
// align-items: center;
// gap: 8px;
// font-weight: bold;
// font-size: 1.1rem;
// `;

//  export const Highlight = styled.span`
//  font-weight: bold;
//  color: #2c5282;
//  `;

//  export const ReadMoreButton = styled.button`
//  background: none;
//  border: none;
//  color: #0077cc;
//  font-size: 16px;
//  font-weight: bold;
//  cursor: pointer;

//  &:hover {
//  text-decoration: underline;
//  }
//  `;

//  export const ButtonWrapper = styled.div`
//  margin-top: 2em;
//  `;

//  export const BackButton = styled.a`
// display: inline-block;
// margin-top: 8px;
// padding: 12px 24px;
// background: #ffd700;
// color: #000;
// font-weight: bold;
// border-radius: 10px;
// text-decoration: none;
// transition: all 0.6s ease;

// &:hover {
// background: #1a365d;
// transform: scale(1.05);
// }
// `;

// const WelcomePage = () => {
// const [expanded, setExpanded] = 
//   useState(false);
//   return (
//     <>
//     <WelcomeContainer>
//       <FullWidthImage>
//         <ContentOverlay>
          
          
//         </ContentOverlay>
//         {/* <ContentWrapper> */}
//         <Logo src="/pictures/more2.png" alt="School logo" />
//         <TextBox>
//           <Heading> Welcome to More than Conquerors School of Theology </Heading>
//           <paragraph> It is with great joy that we welcome you to  <Highlight> 
//             More than Conquerors School of Theology</Highlight>, a center of spiritual
//             learning and divine empowerment. Our institution is proudly 
//             affiliated with the <Highlight>City of Dominion Assembly International
//               </Highlight>, a community of faith where lives are transformed through
//               the Word and Spirit of God. <br /> We also honour the { " "} 
//               <Evangelistic>
//                 <img src="/evalogo1.png" alt="eva" width="50" height="50" />
//                 <Highlight>Evangelistic Messangers Association</Highlight>
//                 </Evangelistic> (founded since March 4, 
//                 1933), a vibrant arm of the church under whose guidance and support
//                 this vision is carried out. Their unwavering commitment to the Gospel
//                 continues to inspire our mission of raising men and women who are
//                 deepy rooted in Scripture and equipped to serve in God's vineyard.
                
//                 {!expanded && 
//                 (<ReadMoreButton onClick={() => setExpanded(true)}>
//                   ... Read More</ ReadMoreButton>)} 

//                     {expanded && (
//                       <>
//                       <br /><br />
//                       Our Goal is to prepare ministers, teachers and leaders who
//                       will carry the message of truth to the nations and impact 
//                       generations for the Glory of God. <br /><br />
//                       Our programs include: Certificate in Ministry, Diploma in Theology, 
//       Bachelor in Theology, Master of Theology, Ph.D in Theology, Elective courses 
//       (on request), English and Management. 
//       <br /><br />  We invite you to join us on a transformative
//       journey of spiritual growth, biblical studies and practical ministry training.<br />
//                       <ReadMoreButton onClick={() =>setExpanded(false)}>
//                           Show Less</ReadMoreButton>
//                         </>
//                         )}
                      
              
//             </paragraph>
//         </TextBox>
//       {/* </ContentWrapper> */}
//       <ButtonWrapper>
//          <BackButton href="/">Back to Home</BackButton>
//       </ButtonWrapper>
//       </FullWidthImage>
      
//     </WelcomeContainer>
//     </>
//   );
// };

// export default WelcomePage






// import React from 'react'
// import styled from "styled-components";

// export const WelcomeWrapper = styled.div`
// min-height: 100vh;
// background: linear-gradient(to bottom right, #f9fafb, #e8f0fe);
// display: flex;
// justify-content: center;
// align-items: center;
// padding: 40px;
// `;

// export const WelcomeCard = styled.div`
// background: #fff;
// border-radius: 20px;
// box-shadow: 0 8px 20px rgba(0,0,0,0.1);
// max-width: 800px;
// padding: 40px;
// text-align: center;
// `;
// export const Title = styled.h1`
// font-size: 2rem;
// color: #333;
// margin-bottom: 20px;
// `;

// export const Subtitle = styled.h3`
// font-size: 1.2rem;
// color: #666;
// margin-bottom: 30px;
// `;

// export const Message = styled.p`
// font-size: 1.05rem;
// color: #444;
// line-height: 1.8;
// margin-bottom: 25px;
// `;

// export const Highlight = styled.span`
// font-weight: bold;
// color: #2c5282;
// `;

// export const BackButton = styled.a`
// display: inline-block;
// margin-top: 20px;
// padding: 12px 24px;
// background: #2c5282;
// color: white;
// font-weight: bold;
// border-radius: 10px;
// text-decoration: none;
// transition: all 0.6s ease;

// &:hover {
// background: #1a365d;
// transform: scale(1.05);
// }
// `;

// const WelcomePage = () => {
//   return (
//     <>
//     <WelcomeWrapper>
//         <WelcomeCard>
//             <Title>Welcome to Grace International School</Title>
//             <Subtitle>"Raising God-fearing leaders for tomorrow."</Subtitle>
//             <Message>
//                 At <Highlight>Grace International School</Highlight>, our mission is to 
//                 provide a balanced education that nutures the mind, body, and spirit,
//                 Rooted in <Highlight>Christian values</Highlight>, we aim to help 
//                 every child grow in wisdom, character, and faith.
//             </Message>
//             <Message>
//                 Our vision is to cultivate a learning environment here discipline, 
//                 knowledge, and excellence thrive - preparing students to make 
//                 a meaningful impact in their communities and the world.
//             </Message>
//             <BackButton href="/">Back to Home</BackButton>
//         </WelcomeCard>
//     </WelcomeWrapper>
//     </>
//   );
// };

// export default WelcomePage
