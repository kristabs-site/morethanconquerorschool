import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Library, ScrollText, Layers,
  Briefcase } from "lucide-react";

export const Section = styled.section`
background: linear-gradient(135deg, #FF7F50 10%, #00008b 100%);
padding: 80px 20px;
color: #fff;
text-align: center;
`;

export const slide = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;
export const BannerWrapper = styled.div`
overflow: hidden;
white-space: nowrap;
width: 100%;
background: transparent;
margin-bottom: 20px;
`;

export const BannerTrack = styled.div`
display: inline-block;
white-space: nowrap;
animation: ${slide} 15s linear infinite;
`;

export const MovingTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  background: linear-gradient(to right, #ff6a00, #ee0979);
  -webkit-background-clip: text;
  -webkit-text-fill-color:  #ffdd57;
  white-space: nowrap;
  display: inline-block;
  animation: ${slide} 8s linear infinite;
  overflow: hidden;
`;


// export const Title = styled.h2`
// fonst-size: 2.5rem;
// font-weight: bold;
// margin-bottom: 15px;
// color: #ffdd57;
// `;

export const Subtitle = styled.p`
max-width: 700px;
margin: 0 auto 50px;
font-size: 1.1rem;
line-height: 1.6;
`;

export const CardGrid = styled.div`
display: grid;
flex-wrap: wrap;
grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
gap: 20px;
margin-top: 0 auto 40px auto;
max-width: 1100px;
justify-content: center;
justify-items: center;
 align-items: stretch;
`;
export const Card = styled(motion.div)`
background: #ffffff10;
// backdrop-filter: blur(6px);
border-radius: 15px;
padding: 30px 20px;
box-shadow: 0 6px 15px rgba(0,0,0,0.2);
transition: all 0.3s ease-in-out;
display: flex;
flex-direction: column;
height: 100%;

&:hover {
transform: translateY(-10px) scale(1.03);
// box-shadow: 0 12px 25px rgba(0, 0, 0.15), 0 0 20px rgba(0, 150, 255, 0.2);
box-shadow: 0 14px 20px  rgba(255, 223, 0, 0.6);
background: #ffffff20;
}
`;

export const IconWrapper = styled.div`
  font-size: 40px;
  margin-bottom: 15px;
  color: #ffdd57;
`;

// CARD TITLE
export const CardTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #fff;
`;

// CARD TEXT
export const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
  flex-grow: 1;
`;

// BUTTON
export const ToggleButton = styled.button`
  margin-top: 40px;
  padding: 12px 30px;
  border: none;
  border-radius: 30px;
  background: #ffdd57;
  color: #333;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
  transition: all 0.3s ease;

  &:hover {
    background: #ffe574;
    transform: scale(1.05);
  }
`;

export const academicPrograms = [
  {
    id: 1,
    icon: <Users size={40} />,
    title: "Certificate in Ministry",
    description:
      "Practical training in ministry skills, leadership, and service for church and community impact.",
  },
  {
    id: 2,
    icon: <BookOpen size={40} />,
    title: "Diploma in Theology",
    description:
      "An introductory program in Biblical studies and Christian doctrine, preparing students for ministry and spiritual growth.",
  },
  {
    id: 3,
    icon: <GraduationCap size={40} />,
    title: "Bachelor in Theology",
    description:
      "An advance study of theology, scripture and patoral leadership to prepare for lifelong ministry.",
  },
  {
    id: 4,
    icon: <Library size={40} />,
    title: "Master of Theology",
    description:
      "An in-depth program for advanced theological research, critical reflection and leadership in ministry or academia.",
  },
  {
    id: 5,
    icon: <ScrollText size={40} />,
    title: "PhD in Theology",
    description:
      "Doctoral-level programfocused on original research, scholarly writing and advanced theological expertise.",
  },
   {
    id: 5,
    icon: <Layers size={40} />,
    title: "Elective Courses",
    description:
      "Specialized subjects allowing students to focus on areas like missions, counselling, worship or Biblical languages .",
  },
   {
    id: 5,
    icon: <Briefcase size={40} />,
    title: "English and Management",
    description:
      "Equips students with communication and leadership skills for ministry, education and organizational growth.",
  },
];

