import React from 'react';

class Songs_data extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h5 id="carouselExampleControls" className="carousel slide text-white font-weight-bold pl-5 wacksonfy-song-name" data-ride="carousel">{this.props.title}</h5>
                </div>
                <div className="col-md-12">
                    <h5 className="text-white pl-5 wacksonfy-band-name text-white-50">{this.props.author}</h5>
                </div>
            </div>
        );
    }
}
export default Songs_data;
