import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Section,
 MovingTitle,
  Subtitle,
  CardGrid,
  Card,
  IconWrapper,
  CardTitle,
  CardText,
  ToggleButton,
  academicPrograms,
  BannerWrapper,
  BannerTrack,
} from "./AcademicElements";

const AcademicSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Section id="academics">
      <BannerWrapper> 
        <BannerTrack>
           <MovingTitle>Our Academics</MovingTitle>
        </BannerTrack>
      </BannerWrapper>
      <Subtitle>
        At <strong>More Than Conquerors School of Theology</strong>, we provide
        faith-driven academic excellence. Our programs equip students with
        theological knowledge, spiritual growth, and leadership skills for
        ministry and service.
      </Subtitle>

      <CardGrid>
        
        {academicPrograms.slice(0, 3).map((program, index) => (
          <Card
            key={program.id}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: index * 0.15, 
            }}
          >
            <IconWrapper>{program.icon}</IconWrapper>
            <CardTitle>{program.title}</CardTitle>
            <CardText>{program.description}</CardText>
          </Card>
        ))}

        <AnimatePresence>
          {showMore &&
            academicPrograms.slice(3).map((program, index) => (
              <Card
                key={program.id}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 60, scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: index * 0.15,
                }}
              >
                <IconWrapper>{program.icon}</IconWrapper>
                <CardTitle>{program.title}</CardTitle>
                <CardText>{program.description}</CardText>
              </Card>
            ))}
        </AnimatePresence>
      </CardGrid>

      <motion.div
        whileTap={{ scale: 0.9 }}        
        animate={{ scale: [1, 1.1, 1] }}  
        transition={{ duration: 0.4 }}
      >
        <ToggleButton onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "View More"}
        </ToggleButton>
      </motion.div>
    </Section>
  );
};

export default AcademicSection;