import styled from "styled-components";

export const CardContainer = styled.div`
width: 100%;
height: 600px;
max-width: 400px;
 margin: 0 auto;
box-shadow: 0px 0px 16px rgba(17, 17, 17, 0.2);
background-color: #daa520;
border-radius: 8px;
box-sizing: border-box;
position: relative;
align-items: center;
padding: 0.3em;

@media (max-width: 768px) {
max-width: 320px;
height: 550px;
// align-items: center;
margin-left: 5em;
}
// @media screen and (max-width: 760px){
// max-width: 320px;
// height: 500px;
// }


// @media (max-width: 768px) {
// max-width: 280px;
// height: 450px;
// }

// @media (max-width: 480px) {
// max-width: 240px;
// height: 420px;
// }
`;

export const UserImg = styled.img.withConfig({
    shouldForwardProp: (prop) => prop !=="$objectPosition"
})`
width: 250px; 
height: 250px;
border-radius: 50%;
display: block;
margin: 0 auto 1em auto;
object-fit: cover;
object-position: ${(props) => props.$objectPosition ||
    "center"};

@media (max-width: 1024px) {
width: 200px;
height: 200px;
}

@media (max-width: 768px) {
width: 150px;
height: 150px;
}

@media (max-width: 480px) {
width: 120px;
height: 120px;
}

// max-width: 100%;
// height: auto;
// border-radius: 50%;
// display: block;
// margin: 0 auto 1em auto;
// object-fit: cover;
`;
export const AdminDetails = styled.div`
display: flex;
flex-direction: column;
// align-items: center;
// justify-content: center;
`;

export const AdminTitle = styled.p`
font-size: 15px;
color: #fff;
// margin-top: -65px;
text-align: center;
font-weight: bold;
`;

export const AdminName = styled.span`
font-size: 20px;
color: #fff;
margin-top: 0.5px;
// margin-left: 0.5em;
font-weight: bold;
text-align: center;
`;
 
export const QuoteIcon = styled.div`
position: absolute;
top: 18em;
left: 5px;
color: #8b008b;
font-size: 18px;

@media (max-width: 768px) {
font-size: 15px;
top: 15.7em;
}
`;


export const AdminQuote = styled.span`
font-size: 1rem;
// margin-left: 2.5em;
// padding-top: 1.8em;
display: flex;
color:  #8b008b;
text-align: justify;
font-weight: 500;
padding: 20px;
// justify-content: center;
line-height: 1.12;

@media (max-width: 768px) {
font-size: 0.9rem;
}
`;




