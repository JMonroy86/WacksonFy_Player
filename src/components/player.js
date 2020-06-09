import React from 'react';

class Player extends React.Component {
  render() {
    return (
      <div className="wacksonfy-player mx-5">
        <div className="row">
          <div className="col-md-2 wacksonfy-band-name text-center pt-4">
            <i className="far fa-heart text-white"></i>
          </div>
          <div className="col-md-2 wacksonfy-band-name text-center pt-4">
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fas fa-step-backward text-white fa-2x"></i></span>
            </a>
          </div>
          <div className="col-md-4 wacksonfy-band-name text-center my-n1 pt-2">
            <i className="far fa-play-circle text-white fa-4x ml-1 my-2"></i>
          </div>
          <div className="col-md-2 wacksonfy-band-name text-center pt-4 ">
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"><i className="fas fa-step-forward text-white fa-2x"></i></span>
            </a>
          </div>
          <div className="col-md-2 wacksonfy-band-name text-center pt-4">
            <i className="fas fa-minus-circle text-white"></i>
          </div>


        </div>
      </div>
    );
  }
}

export default Player;