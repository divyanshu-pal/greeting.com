
// import './App.css';



     

// function App() {

//   const elemCard = document.querySelector(".card");
//   const elemClickIcon = document.querySelector(".click-icon");

//   elemCard.addEventListener("click", function () {
//     elemCard.classList.toggle("is-opened");
//     elemClickIcon.classList.toggle("is-hidden");
//   })


//   return (

//     <div className="App">
   
//       <div className="card">
//      <div className="card-page cart-page-front">
//      <div className="card-page cart-page-outside"></div>
//      <div className="card-page cart-page-inside">
//         {/* <span class="new-year"> */}
      
//         <img src="https://shorturl.at/ntzUY" alt=""/>
//         <p id="msg">Happy New Year! My Dear ❤️I Love You❤️</p>
//         {/* </span> */}
//      </div>
//      </div>
//        <div className="sc-page">
       
//         <img id="secondimg" src="https://shorturl.at/BKR36" alt="smtech"/>
//       </div>
//     </div>
//     </div>


//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const toggleCard = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="App">
      <div className={`card ${isOpened ? 'is-opened':''}`} onClick={toggleCard} >
        <div className="card-page cart-page-front">
          <div className="card-page cart-page-outside"></div>
          <div className="card-page cart-page-inside">
          <span className="new-year">
            <img src="https://shorturl.at/ntzUY" alt="" />
           
            <p id="msg">Happy New Year! dear</p>
            </span>
          </div>
        </div>
        <div className="sc-page">
          <img id="secondimg" src="https://shorturl.at/BKR36" alt="smtech" />
        </div>
      </div>
    </div>
  );
}

export default App;
