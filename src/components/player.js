import React from 'react';

class Player extends React.Component {
  render() {
    return (
      <div className="wacksonfy-player mx-5">
        <div className="row">
          <div className="col-md-2 wacksonfy-band-name text-center pt-4">
            <i class="far fa-heart text-white"></i>
          </div>
          <div className="col-md-2 wacksonfy-band-name text-center pt-4">
            <i class="fas fa-step-backward text-white fa-2x" href="#carouselExampleControls" role="button" data-slide="prev"></i>
          </div>
          <div className="col-md-4 wacksonfy-band-name text-center my-n1 pt-2">
            <i class="far fa-play-circle text-white fa-4x ml-1 my-2"></i>
          </div>
          <div className="col-md-2 wacksonfy-band-name text-center pt-4">
            <i class="fas fa-step-forward text-white fa-2x" href="#carouselExampleControls" role="button" data-slide="next"></i>
          </div>
          <div className="col-md-2 wacksonfy-band-name text-center pt-4">
            <i class="fas fa-minus-circle text-white"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;