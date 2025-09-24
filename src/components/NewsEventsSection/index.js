import React, { useState } from "react";
import { EventCard, EventDate, EventDesc, EventDetails, 
  EventGrid, EventMedia, EventTitle, Section, Subtitle, 
  TabButton, Tabs, Title,StudentLifeImage, StudentLifeWrapper, StudentLifeTitle,
StudentLifeText, Button, 
StudentLifeGrid,
StudentLifeCard,
StudentLifeCaption} from "./NewsEventsElements";

const NewsEventsSection = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = [
    {
      type: "video", 
      title: "Join Our School of Theology: Training Leaders for the Nations",
      date: "Apply Now",
      desc: "We are pleased to announce that admission is now open into our School of Theology. This is a life-transforming opportunity to gain sound Biblical knowledge, spiritual formation and ministerial training to equip men and women for effective service in God's kingdom.",
      media: process.env.PUBLIC_URL + "/videos/advert.mp4",
      poster: process.env.PUBLIC_URL + "/images/conference-poster.jpg",
      tall: true,
      
    },
    {
      type: "image",
      title: "Admission into the School of Theology",
      date: "Ongoing Admission",
      desc: "Enroll now for Biblical, spiritual, and ministerial training at the School of Theology.",
      media: process.env.PUBLIC_URL + "/pictures/advert1.jpg",
      tall: true,
    },
    {
      type: "image",
      title: "3-DayInternational Ministers and Church Workers Conference, Ordination and Enthronement.",
      date: "October 29-31, 2025",
      desc: "A global gathering of God's servants for spiritual empowerment, leadership impartation and divine commissioning. This three-day conference will feature intensive teachings, worship and fellowship, culminating in the ordination and enthronement of Archbishops, Apostles, Prophets,Evangelists and Pastors- equiping them for greater kingdom impact.",
      media: process.env.PUBLIC_URL + "/pictures/advert2.jpg",
    },
  ];

  const pastEvents = [
    {
      type: "image",
      title: "Award Ceremony in Umeri Kingdom",
      date: "July 12, 2025",
      desc: "Visit and award given to his Royal Majesty of Umeri Kingdom.",
      media: process.env.PUBLIC_URL + "/pictures/umeri.jpg",
    },
    {
      type: "image",
      title: "",
      date: "July 12, 2025",
      desc: "",
      media: process.env.PUBLIC_URL + "/pictures/majesty.jpg",
    },
    {
      type: "image",
      title: "Glorious Ordination as Apostle",
      date: "",
      desc: "A solemn ordination service where the call of God into the apostolic office is confirmed and celebrated, dedicating the servant of God to a higher level of ministry, leadership and kingdom impact.",
      media: process.env.PUBLIC_URL + "/pictures/ordination.jpg",
    },
    {
      type: "image",
      title: "Glorious Theology Graduation",
      date: "November 17, 2024",
      desc: "A sacred occassion celebrating the academic and spiritual achievements of graduates in theology, dedicated to advancing knowledge, faith and service in God's Kingdom.",
      media: process.env.PUBLIC_URL + "/pictures/grad1.jpg",
    },
  ];

  const eventsToDisplay = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  const [showStudentLife, setShowStudentLife] = useState(false);

  return (
    <Section id="newsevents">
      <Title>📅 News & Events</Title>
      <Subtitle>Stay updated with what’s happening in our college community.</Subtitle>

      
      <Tabs>
        <TabButton active={activeTab === "upcoming"} onClick={() => setActiveTab("upcoming")}>
          🌟 Upcoming Events
        </TabButton>
        <TabButton active={activeTab === "past"} onClick={() => setActiveTab("past")}>
          📖 Past Events
        </TabButton>
      </Tabs>

      <EventGrid>
        {eventsToDisplay.map((event, index) => (
          <EventCard key={index}>
            <EventMedia tall={event.tall}>
              {event.type === "video" ? (
                <video controls poster={event.poster}>
                  <source src={event.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={event.media} alt={event.title} />
              )}
            </EventMedia>
            <EventDetails>
              <EventTitle>{event.title}</EventTitle>
              <EventDate>{event.date}</EventDate>
              <EventDesc>{event.desc}</EventDesc>
            </EventDetails>
          </EventCard>
        ))}
      </EventGrid>
            <Button onClick={() => setShowStudentLife(!showStudentLife)}>
        🎓 {showStudentLife ? "Hide Student Life" : "View Student Life"}
      </Button>

      {/* Student Life Section with animation */}
      <StudentLifeWrapper show={showStudentLife}>
        <StudentLifeTitle>🎓 Student Life</StudentLifeTitle>
        <StudentLifeText>
          Life at our college is more than academics — students enjoy worship nights, fellowship meals,
          Bible study groups, and community outreach programs that strengthen both faith and friendships.
           </StudentLifeText>

        {/* Fade-in images with delays */}
       
          <StudentLifeGrid>
            <StudentLifeCard delay="0.2s">
              <StudentLifeImage src={process.env.PUBLIC_URL + "/pictures/gradstu.jpg"} alt="Student fellowship" />
              <StudentLifeCaption><span style={{ fontWeight: "bold" }}>SOME STUDENTS IN USA</span> <br /><br />
          Our students graduate with strong faith, deep biblical knowledge 
          and a supportive network of lifelong friends.This journey is about 
          more than academics - it's about transformation, worship and preparing
          for global impact.</StudentLifeCaption>
            </StudentLifeCard>
           
           <StudentLifeCard delay="0.4s">
            <StudentLifeImage src={process.env.PUBLIC_URL + "/pictures/stucla.jpg"} alt="Student fellowship" />
              <StudentLifeCaption>A view of our headquarters main
                classroom where students receive theological training.
              </StudentLifeCaption>
            </StudentLifeCard>
            
            <StudentLifeCard delay="0.6s">
            <StudentLifeImage src={process.env.PUBLIC_URL + "/pictures/sty1.jpg"} alt="Student fellowship" />
              <StudentLifeCaption>
              </StudentLifeCaption>
            </StudentLifeCard>

            <StudentLifeCard delay="0.8s">
           <StudentLifeImage src={process.env.PUBLIC_URL + "/pictures/sty2.jpg"} alt="Student fellowship" />
              <StudentLifeCaption>
              </StudentLifeCaption>
            </StudentLifeCard>

            <StudentLifeCard delay="1.0s">
           <StudentLifeImage src={process.env.PUBLIC_URL + "/pictures/admin2.jpg"} alt="Student fellowship" />
              <StudentLifeCaption>
              </StudentLifeCaption>
            </StudentLifeCard>

            <StudentLifeCard delay="1.2s">
           <StudentLifeImage src={process.env.PUBLIC_URL + "/pictures/sty4.jpg"} alt="Student fellowship" />
              <StudentLifeCaption>
              </StudentLifeCaption>
            </StudentLifeCard>

            <StudentLifeCard delay="1.4s">
           <StudentLifeImage src={process.env.PUBLIC_URL + "/pictures/sty5.jpg"} alt="Student fellowship" />
              <StudentLifeCaption>
              </StudentLifeCaption>
            </StudentLifeCard>

            <StudentLifeCard delay="1.6s">
            <StudentLifeImage src={process.env.PUBLIC_URL + "/pictures/sty6.jpg"} alt="Student fellowship" />
              <StudentLifeCaption>
              </StudentLifeCaption>
            </StudentLifeCard>

            <StudentLifeCard delay="1.8s">
            <StudentLifeImage src={process.env.PUBLIC_URL + "/pictures/sty7.jpg"} alt="Student fellowship" />
              <StudentLifeCaption>
              </StudentLifeCaption>
            </StudentLifeCard>

             <StudentLifeCard delay="2.0s">
            <StudentLifeImage src={process.env.PUBLIC_URL + "/pictures/sty3.jpg"} alt="Student fellowship" />
              <StudentLifeCaption>
              </StudentLifeCaption>
            </StudentLifeCard>

            <StudentLifeCard delay="2.2s">
            <StudentLifeImage src={process.env.PUBLIC_URL + "/pictures/sty8.jpg"} alt="Student fellowship" />
              <StudentLifeCaption>
              </StudentLifeCaption>
            </StudentLifeCard>

          </StudentLifeGrid>

      </StudentLifeWrapper>
    </Section>
  );
};

export default NewsEventsSection;