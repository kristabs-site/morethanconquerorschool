
import React, { useEffect, useState }  from 'react';
import {  MissionContainer, MissionTitle, MissionStatement, 
  AdminStatements,
  ArrowButton} from './MissionElements';
  import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CardSection from '../CardSection';
import { ButtonBack, ButtonNext, CarouselProvider as OriginalCarouselProvider } from 'pure-react-carousel';
import { Slider as StyledSlider } from 'pure-react-carousel';
import { Slide as StyledSlide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
// import { UserImg } from '../CardSection/CardElements';



// import { SliderWrapper, CardWrapper } from './CarouselStyles';

const getSettings = 
(width) => {
  if (width <= 480) {
    return { visibleSlides: 1, naturalSlideWidth: 300, naturalSlideHeight: 500 };
  } else if (width <= 768) {
    return { visibleSlides: 1, naturalSlideWidth: 350, naturalSlideHeight: 550 };
  } else if (width <= 1024) {
    return { visibleSlides: 2, naturalSlideWidth: 400, naturalSlideHeight: 600 };
  }
  return { visibleSlides: 2, naturalSlideWidth: 400, naturalSlideHeight: 600 };
};
const MissionSection = () => {
  const [settings, setSettings] = useState(
    typeof window !==
  'undefined' ?
  getSettings(window.innerWidth) : { visibleSlides: 2,
    naturalSlideWidth: 400, naturalSlideHeight: 600 }
  );

  useEffect(() => {
    const onResize = () =>
      setSettings(getSettings(window.innerWidth));
    
    window.addEventListener('resize', onResize);
    return () =>
      window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
        <MissionContainer id='about'>
         <MissionTitle>About Our School</MissionTitle> 
         <MissionStatement><em>We are a faith-based institution committed to 
          academic excellence and spiritual growth.</em></MissionStatement>
          <AdminStatements>More About Us from The Admins</AdminStatements>

         <div
         style={{
          position: 'relative', maxWidth: '900px', margin: '0 auto', display: 'flex',
          flexDirection: 'column', alignItems: 'center'
         }}>
          <OriginalCarouselProvider 
          naturalSlideWidth={settings.naturalSlideWidth}
         //  naturalSlideWidth={2}
           naturalSlideHeight={settings.naturalSlideHeight} 
         //   naturalSlideHeight={3}  
           totalSlides={6} 
          //  visibleSlides={settings.visibleSlides}
          visibleSlides={settings.visibleSlides}
          // visibleSlides={2}
           isIntrinsicHeight 
           infinite
           hasDotButtons={false}   
           hasMasterSpinner={false}
          //  playDirection="forward"
          //  interval={4000}
          //  isPlaying={true}
           >
              <ButtonBack >
              <ArrowButton left>
                <FaArrowLeft size={20} color='#333'/>
              </ArrowButton>
              
            </ButtonBack>
 <StyledSlider style={{ maxWidth: "900px", margin: "0 auto" }} >
   {/* <StyledSlider style={{ maxWidth: "100%", margin: "0 auto", display: "flex",
      justifyContent: "center", gap: settings.visibleSlides === 2 ? "0.1em" : "0", 
       padding: "0 0", boxSizing: "border-box"
    }} > */}
              <StyledSlide index={0}>
                    <CardSection 
                 image={process.env.PUBLIC_URL + '/pictures/leader.jpg'}
                    name="Prof. Amb Samuel Udenze Nwambu"
                    title="Director"
                    quote={<>
                    <p style ={{ lineHeight: "1.25"}}><em>At <strong>More than Conquerors School of Theology</strong>, we are committed to raising a new 
      generation of leaders who are empowered by the Holy Spirit, grounded in the Word of
      God and equipped to impact their communities and the world.
      <br /><br />
      Our aims and vision are: to give qualitative theological education to ministers
      of God, to train fearless missionaries for mission work, to make theological education 
      affordable, to bring spiritual revolution in the lives of preachers and people,
      to prepare ministers of God that will lead people to know Chrit Jesus, etc. 
      <br /><br />
      </em></p>
      </>
    }
     objectPosition= "50%  35%"
                     />
                 </StyledSlide>
                  <StyledSlide index={1}>
                    <CardSection  
                    image={process.env.PUBLIC_URL + '/pictures/rator.jpg'} 
                    name="Snr. Apostle Mozie Johnpaul"
                    title="School Rator"
                    quote={<>
                    <p style ={{ lineHeight: "1.5"}}><em>Every student at More Than Conquerors Theology School is a living testimony that 
                     we are called to be more than conquerors-trained, empowered and sent to transform the world.
                  <br /><br />
                    Through dedicated study, spiritual growth and practical ministry, we ensure that our graduates
                     are not just hearers of the Word but doers-prepared to face challenges with courage, lead with 
                     humility and serve with excellence wherever God sends them.
                   <br />
                  </em></p>
                   </>
                    }
                     objectPosition= "50%  0%"

                     
                    />
                 </StyledSlide>
                  <StyledSlide index={2}>
                    <CardSection  
                    image={process.env.PUBLIC_URL + '/pictures/bish2.jpg'}
                    name="Bishop Dr. Marcel Onuigbo"
                    title="Board of Regent"
                    quote={<>
                    <p style ={{ lineHeight: "1.5"}}> <em>As an erudite scholar, i wholeheartedly  encourage anyone seeking quality Bible 
                    training to enroll at More than Conquerors School of Theology. It is a decision
                    you will never regret.
                    <br /> <br />
                    Remain blessed {"\u{1F64F}"}</em>
                    </p>
                    </>
                    }
                    objectPosition= "50% 60%"
                    
                    />
                 </StyledSlide>
                 <StyledSlide index={3}>
                    <CardSection  
                    image={process.env.PUBLIC_URL + '/pictures/doctor.jpg'}
                    name="Dr. David Dick Nwolisa"
                    title="Board of Regent"
                    quote={<>
                    <p style ={{ lineHeight: "1.091", fontSize: "15.5px"}}><em><strong>MORE THAN CONQUERORS SCHOOL OF THEOLOGY</strong>, 
                    Not just knowledge
                      .... but life in Christ! <br />
      {"\u{1F4D6}"}While many Bible schools focus only on history and theory, we go further. 
      Here, you will learn to communicate the Gospel effectively and also demonstrate the life 
      and actions of Christ. "As Jesus began to do and to teach" (Acts 1:1).
      <br /><br />Founded by Prof. Samuel Nwambu, a visionary with deep passion for doctrine of 
      Christ, this citadel of higher learning exists to advance the Gospel of the Kingdom to the 
      ends of the earth (Habakkuk 2:14). <br /> Welcome to the Citadel of Empowerment.{"\u{1F525}"}</em>
      </p>
      </>
    }
      objectPosition= "50% 2%"
                    />
                 </StyledSlide>
                 <StyledSlide index={4}>
                    <CardSection  
                    image={process.env.PUBLIC_URL + '/pictures/fac.jpg'}
                    name="Ven Oforkansi Alexander Emeka"
                    title="Dean of Faculty"
                    quote={<>
                    <p style ={{ lineHeight: "1.3"}}><em><strong>More Than Conquerors School of Theology</strong>
                      is indeed a matrix for building faith, spiritual maturity,
                      kingdom of God and academic excellence. <br /><br />
     Our mission is to equip and empower individuals with a strong theological foundation,
     preparing them for ministry, leadership and a deeper understanding of God's Word.
     </em>
      </p>
      </>
    }
      objectPosition= "50% 13%"
                    />
                 </StyledSlide>
                 <StyledSlide index={5}>
                    <CardSection  
                    image={process.env.PUBLIC_URL + '/pictures/admin.jpg'}
                    name="Prof. Okoye Comfort Uzoma"
                    title="Admin"
                    quote={<>
                    <p style ={{ lineHeight: "1.3"}}><em><strong>HELLOOOO!!!</strong> Beloved, you are highly welcome to this great institution with a 
                      vision for the development of the three (3) domians in you.
                  <br />A place where honor is given to those who deserve it - <strong>AN EPITOME OF EFFICIENCY</strong> all around.
                  You will never regret being part of her.
                  <br /><br />Since 1933, <strong>MORE THAN CONQUEROR SCHOOL OF THEOLOGY</strong> has been building personalities across
                  the world. Be one of those to be built, for this is a great opportunity. <strong>GOD BLESS YOU!</strong>
                     
                   <br />
                  </em></p>
                   </>
                    }
      objectPosition="50% 35%"
                    />
                 </StyledSlide>
            </StyledSlider>

            <ButtonNext>
              <ArrowButton>
                 <FaArrowRight size={20} color='#333' />
              </ArrowButton>
              </ButtonNext>
          </OriginalCarouselProvider>
          </div> 

        </MissionContainer>
    </>
  );
};

export default MissionSection;




