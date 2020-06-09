import React from 'react';

class Img_album extends React.Component {
    render() {
        console.log(this.props.imgclass)

        return (

            <div className="carousel-inner">
                <div className={"carousel-item wacksonfy-img-album mx-auto my-5 shadow-lg" + " " + this.props.imgclass}>
                    <img src={"./img/" + this.props.img} alt="" />
                </div>
            </div>

        );
    }
}

export default Img_album;
