import React, {useState} from 'react';


import BannerSection from '../components/BannerSection';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MissionSection from '../components/MissionSection';
import AcademicSection from '../components/AcademicSection';
import AdmissionSection from '../components/AdmissionSection';
import NewsEventsSection from '../components/NewsEventsSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };  
  return (
    <> 
    <Sidebar isOpen={isOpen} toggle={toggle} />
     <Navbar toggle={toggle} />
     <BannerSection />
     <MissionSection />
     <AcademicSection />
     <AdmissionSection />
     <NewsEventsSection />
     <ContactSection />
   
    
    
  
    
    
    </>
  );
};

export default Home;