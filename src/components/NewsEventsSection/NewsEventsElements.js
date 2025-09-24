import styled, { keyframes } from "styled-components";


export const Section = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, #fffaf0, #f0f9ff);
  text-align: center;
`;


export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #2b2d42;
  margin-bottom: 15px;
`;


export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 40px;
`;


export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 15px;
`;


export const TabButton = styled.button`
  background: ${(props) => (props.active ? "#4f46e5" : "#e0e7ff")};
  color: ${(props) => (props.active ? "#fff" : "#3730a3")};
  border: none;
  padding: 12px 22px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #4f46e5;
    color: #fff;
  }
`;


export const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
`;


export const EventCard = styled.div`
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;


export const EventMedia = styled.div`
  width: 100%;
  height: ${(props) => (props.tall ? "400px" : "300px")}
  // height: 500px;
  overflow: hidden;

  img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  }

  video,
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #000;
  }
`;


export const EventDetails = styled.div`
  padding: 15px;
  text-align: left;
`;

export const EventTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 8px;
`;

export const EventDate = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: #888;
  margin-bottom: 10px;
`;

export const EventDesc = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
`;

export const Button = styled.button`
  margin: 40px auto;
  display: block;
  padding: 12px 24px;
  background: #4f46e5;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #3730a3;
  }
`;

export const StudentLifeWrapper = styled.div`
  max-height: ${(props) => (props.show ? "4000px" : "0")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  overflow: hidden;
  margin-top: ${(props) => (props.show ? "40px" : "0")};
  padding: ${(props) => (props.show ? "30px" : "0 30px")};
  background: #f9fafb;
  border-radius: 12px;
  box-shadow: ${(props) => (props.show ? "0 6px 15px rgba(0, 0, 0, 0.08)" : "none")};
  // text-align: center;
  transition: all 0.6s ease;
`;

export const StudentLifeTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #1f2937;
`;

export const StudentLifeText = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.5;
  text-align: center;
`;

// Keyframes for image fade-in
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const StudentLifeGrid = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
gap: 20px;

@media (min-width: 640px){
grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 1024px){
grid-template-columns: repeat(3, 1fr);
}
`;

export const StudentLifeCard = styled.div`
background: #fff;
border-radius: 12px;
padding: 15px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
opacity: 0;
animation: ${fadeInUp} 0.8s forwards;
animation-delay: ${(props) => props.delay || "0s"};
text-align: center;
`;

export const StudentLifeImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 10px;
`;
export const StudentLifeCaption = styled.p`
font-size: 0.95rem;
color: #444;
font-style: italic;
`;