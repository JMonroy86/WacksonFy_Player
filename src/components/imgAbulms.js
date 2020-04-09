import React from 'react';

class Img_album extends React.Component {
    render() {
        return (
            <div className="wacksonfy-img-album mx-auto my-5 shadow-lg">
                <img src={"./img/" + this.props.img} alt="" />
            </div>
        );
    }
}

export default Img_album;
