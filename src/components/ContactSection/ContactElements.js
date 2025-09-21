import styled from "styled-components";

export const ContactContainer = styled.section`
  background: #000;
  padding: 60px 20px;
  text-align: center;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 120px;
  height: auto;
  cursor: pointer;
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.4);
`;

export const InfoWrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
  background: rgba(255,255,255,0.15);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
`;

export const InfoItem = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #fff;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 25px;
`;

export const IconLink = styled.a`
  font-size: 2rem;
  color: #fff;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.2);
    color: ${({ hoverColor }) => hoverColor || "#000"};
  }
`;

export const SupportCard = styled.div`
  margin-top: 40px;
  padding: 25px;
  border-radius: 16px;
  background: linear-gradient(135deg, #fff8e1, #ffe0b2);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  text-align: center;
  animation: fadeIn 1s ease-in-out;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #b45309; /* warm golden-brown */
    text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
  }

  p {
    margin: 0.5rem 0;
    color: #444;
    font-size: 1rem;
    line-height: 1.6;
  }

  .support-info {
    margin-top: 15px;
    text-align: left;
    padding: 10px 15px;
    background: rgba(255,255,255,0.6);
    border-radius: 10px;
  }

  .donate-btn {
    display: inline-block;
    margin-top: 20px;
    padding: 12px 24px;
    background: #d97706;
    color: #fff;
    font-weight: bold;
    border-radius: 30px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(217,119,6,0.4);
    position: relative;
    overflow: hidden;
    animation: glowPulse 2s infinite ease-in-out;

    &:hover {
      background: #b45309;
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 6px 14px rgba(217,119,6,0.6);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }

`;



