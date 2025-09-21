import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 10;
display: flex;
align-items: center;
justify-content: space-between;
padding: 15px 30px;
// box-shadow: 0 2px 5px; rgba(0, 0, 0, 0.1);
// background: #eee8aa;
height: 80px;
transition: background 0.3s ease, box-shadow 0.3s ease;
// display: flex;
// justify-content: center;
// align-items: center;
// font-size: 1rem;
// position: sticky;
// // position: fixed;
// top: 0;
// z-index: 10;

@media screen and (max-width: 960px){
transition: 0.8 all ease;
// height: 70px;
}
`;

export const NavbarContainer = styled.div`
// display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1200px;
// max-width: 1100px;
// margin-right: 5rem;
margin: 0 auto;
`; 

export const LogoLink = styled(LinkR)`
display: flex;
align-items: center;
`;

export const NavLogo = styled.img.withConfig({
    shouldForwardProp: (prop) => prop !== 'img',
})`
justify-content: flex-start;
cursor: pointer;
display: flex;
align-items: center;
margin-top: 0;
margin-left: -22px;
height: 80px;
width: auto;
// height: auto;
// width: 100%;

@media screen and (max-width: 760px){
margin-left: 24px;
}
${({ img })=> img && ';'}
`;
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 760px){
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%, 60%);
font-size: 1.8rem;
cursor: pointer;
color: #0b1221;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;
// padding-right: 10px;


@media screen and (max-width: 760px) {
display: none;
}
`;

export const NavItem = styled.li`
height: 80px;
margin-left: 100px;
margin-top: -90px;
padding-right: 30px;
`;

export const NavLinks = styled(LinkS)`
color: #ff6a00;
// color:rgb(31, 185, 0);
font-weight: 800;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

// &:active{
// border-bottom: 3px solid #000;
// }

    &:hover {
      font-weight: 700;   /* gets bolder */
      color: #0077ff;     /* blue text on hover */
    }

    /* underline effect */
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.05px; /* space between text and underline */
      width: 0%;
      height: 2px;
    //   background: #0077ff;
      border-bottom: 3px solid #000;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%; /* animate underline */
    }
  }
`;
