// import React from 'react';
// import './description.css';
// import group2 from '../../assets/Group 2.png';

// function Description() {
//   return (
//     <div className='description'>
//       <p>It gives me great pleasure to welcome you to this page. I find it a wonderful opportunity to be able to reach out to so many people. As a licensed clinical psychologist with twenty years of practice, I listen to the life stories of a multitude of people. Every person is special, every journey unique. Some come to be heard, some come to listen. Some come for a safe place to talk about painful things, some come to learn about new ways of being. All come hoping to feel better in some way. Most feel better by just taking that first step.</p>
//       <button className="read-more1">
//         <img src={group2} alt="group icon" className="group-icon" />
//         Read more 
//       </button>
//     </div>
//   );
// }

// export default Description;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './description.css';
import group2 from '../../assets/Group 2.png';

function Description() {
  const navigate = useNavigate();

  return (
    <div className='description'>
      <p>My passion for sharing my knowledge led me from clinical services to publishing books and eventually to reaching wider audiences. I started spreading positivity across different age groups, different settings, backgrounds across the world. I could never refuse an invitation to a school, a university, welfare organization, hospital staff, bank employees or insurance company members. Tv appearances, and radio interviews were the bigger challenge, Arabic
         being my third language, I found it somewhat more difficult to convey my message. </p>
      <button onClick={() => navigate('/nextpage')} className="read-more1">
      <img src={group2} alt="group icon" className="group-icon" />
        Read more 
      </button>
    </div>
  );
}

export default Description;




