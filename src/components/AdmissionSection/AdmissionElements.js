
import styled from "styled-components";

export const AdmissionContainer = styled.section`
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 80px 20px;
  text-align: center;
`;

 export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  background: linear-gradient(to right, #ff6a00, #ee0979);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #444;
  max-width: 600px;
  margin: 0 auto 40px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  justify-content: center;
`;

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 15px;
  color: #ee0979;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #ff6a00;
  margin-bottom: 15px;
`;

export const CardText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

export const RequirementList = styled.ul`
list-style: none;
padding: 0;
margin-top: 15px;
text-align: left;
`;

export const RequirementItem = styled.li`
display: flex;
align-items: center;
font-size: 1rem;
color: #333;
margin-bottom: 10px;

svg{
color: #28a745;
margin-right: 10px;
flex-shrink: 0;
}
`;

export const Button = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 25px;
  background: linear-gradient(90deg, #ff6a00, #ee0979);
  color: white;
  text-decoration: none;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(90deg, #ee0979, #ff6a00);
  }
`;

