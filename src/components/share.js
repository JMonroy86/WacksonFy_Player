import React from 'react';

class Share extends React.Component {
    render() {
        return (
            <div className="row pt-4 mx-4">
                <div className="col-md-6">
                    <i class="fab fa-connectdevelop fa-1x blue float-left"></i>
                </div>
                <div className="col-md-6">
                    <i class="fas fa-share-alt fa-1x blue float-right"></i>
                </div>
            </div>
        );
    }
}

export default Share;