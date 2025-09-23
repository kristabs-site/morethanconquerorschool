import React from 'react';
import './App.css';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Home from './pages';
import WelcomePage from './pages/WelcomePage';
import ApplyForm from './pages/ApplyForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<WelcomePage />} /> 
        <Route path="/apply" element={<ApplyForm />} />
      </Routes>
    </Router>
  );
}

export default App;



// import React from 'react';
// import './App.css';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Home from './pages';
// import WelcomePage from './pages/WelcomePage';
// import ApplyForm from './pages/ApplyForm';





// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/"
//         element={<Home />} />
//         <Route path="/welcome"
//         element={<WelcomePage />} /> 
//         <Route path="/apply"
//         element={<ApplyForm />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
