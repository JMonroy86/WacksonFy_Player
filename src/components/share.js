import React from 'react';

class Share extends React.Component {
    render() {
        return (
            <div className="row pt-4 mx-4">
                <div className="col-md-3">
                    <i className="fab fa-connectdevelop fa-1x blue float-left"></i>
                </div>
                <div className="col-md-3">
                <img src="./img/shuffle.png" width="20" className="" alt=""/>
                </div>
                <div className="col-md-3">
                    <img src="./img/repeat.png" width="20" className="float-right" alt=""/>
                    {/* <i className="fas fa-infinity fa-1x blue float-right"></i> */}
                </div>
                <div className="col-md-3">
                    <i className="fas fa-share-alt fa-1x blue float-right"></i>
                </div>
                
            </div>
        );
    }
}

export default Share;