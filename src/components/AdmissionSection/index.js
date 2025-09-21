import React, { useState } from "react";
import {AdmissionContainer, Title, Subtitle, CardContainer,Card, IconWrapper,
    CardTitle, CardText, Button,
    RequirementList,
    RequirementItem
  } from './AdmissionElements';
import { FaGraduationCap, FaClipboardList, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



export default function AdmissionSection() { 
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  return (
    <AdmissionContainer id="admission">
      <Title>Admissions Open</Title>
      <Subtitle>
        Join <strong>More than Conquerors School of Theology</strong> and prepare for a
        life of faith, knowledge, and service. Our programs are designed to
        equip you spiritually and academically.
      </Subtitle>

      <CardContainer>
        <Card>
          <IconWrapper>
            <FaGraduationCap />
          </IconWrapper>
          <CardTitle>Requirements</CardTitle>
          <CardText>
            Please prepare the following documents for your application.
          </CardText>

          {showMore && (
             <RequirementList>

          <RequirementItem><FaCheckCircle /> Copy of academic certificate</RequirementItem>
          <RequirementItem><FaCheckCircle /> Copy of National ID / Passport</RequirementItem>
          <RequirementItem><FaCheckCircle /> Passport-size photograph</RequirementItem>
          <RequirementItem><FaCheckCircle /> Recommendation letter from pastor</RequirementItem> 
       </RequirementList>
          )}

          <button
          style={{
            marginTop: "10px", border: "none", background: "transparent",
            color: "#0077cc", fontWeight: "bold", cursor: "pointer"
          }}
          onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Read More"}
          </button>
       

        </Card>

        <Card>
          <IconWrapper>
            <FaClipboardList />
          </IconWrapper>
          <CardTitle>Application Process</CardTitle>
          <CardText>
            Fill out the online application form and
            provide your academic records and  recommendation letters for review.
          </CardText>
        </Card>

        <Card>
          <IconWrapper>
            <FaPaperPlane />
          </IconWrapper>
          <CardTitle>Apply Now</CardTitle>
          <CardText>
            Take the first step towards your theological journey today. 
          </CardText>
          <Button onClick={() => navigate("/apply")}>Apply Now</Button>
          {/* <Button href="#apply">Apply Now</Button> */}
        </Card>
      </CardContainer>
    </AdmissionContainer>
  );
}
