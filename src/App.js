// import React from 'react';
// import './App.css';
// import Navbar from './Components/navbar/navbar';
// import Header from './Components/header/header';
// import Description from './Components/description/description';
// import Blog from './Components/blog/blog';
// // import Swiper from 'swiper';
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Header />
      
//         <Description />
//         <Blog/>
//         {/* <Swiper/> */}
      
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/navbar';
import Header from './Components/header/header';
import Description from './Components/description/description';
import Blog from './Components/blog/blog';
import NextPage from './Components/nextpage/nextpage';
// import Swiper from 'swiper';
import ContactForm from './Components/contact/contact';

function App() {
  return (
    <div className="App">
       
      <Navbar />
      <Header />
      {/* <Routes>
          <Route path="/" element={<Description />} />
          <Route path="/nextpage" element={<NextPage />} />
        </Routes> */}
      <Description />
      <Blog />
      <ContactForm/>
      {/* <NextPage/> */}
      
      {/* <Swiper /> */}
      
    </div>
  );
}

export default App;
