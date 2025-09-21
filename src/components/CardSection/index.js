
import React from 'react';
import { AdminDetails, AdminName, AdminQuote, AdminTitle, CardContainer,
  QuoteIcon, UserImg } from './CardElements';
import { FaQuoteLeft } from "react-icons/fa";



const CardSection = ({ image, name, title, quote, objectPosition
}) => {
  return (
    <>
 <CardContainer>
         <UserImg src={image} alt={title}
         $objectPosition={objectPosition} />
         <AdminDetails>
         <AdminName>{name}</AdminName>
         <AdminTitle><i>{title}</i></AdminTitle>
      </AdminDetails>
      <QuoteIcon>
        <FaQuoteLeft />
      </QuoteIcon>
     <AdminQuote>{quote}
       </AdminQuote>
    </CardContainer>



    {/* <CardContainer>
      <AdminDetails>
         <UserImg src="/pictures/leader.jpg" alt="Lead" />
         <AdminName>Prof. Amb Samuel Udenze Nwambu</AdminName>
         <AdminTitle><i>Director</i></AdminTitle>
      </AdminDetails>
      <QuoteIcon>
        <FaQuoteLeft />
      </QuoteIcon>
     <AdminQuote>At City of Glory School of Theology, we are committed to raising a new 
      generation of leaders who are empowered by the Holy Spirit, grounded in the Word of
      God and equipped to impact their communities and the world.<br></br>Our programs include: Certificate in Ministry, Diploma in Theology, 
      Bachelor in Theology, Master of Theology, Ph.D in Theology,Elective courses 
      (on request), English and Management. 
      <br></br><br></br>We invite you to join us where you will embark on a transformative
      journey of spiritual growth, biblical studies and practical ministry training.
       </AdminQuote>
    </CardContainer> */}
    </>
  )
}

export default CardSection;
