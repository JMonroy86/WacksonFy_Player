import React from 'react';
import Wacksonfy_top from './components/topButtons.js';
// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x


// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

import Share from './components/share';
import './App.css';
import Carousel from './components/carousel.js';



const App = props => {

  return (
    <div className="container ">
      <div className="row">
        <div className="wacksonfy">
          <div className=" mx-auto my-3">
            <Wacksonfy_top />
            <Carousel />
            <Share />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;