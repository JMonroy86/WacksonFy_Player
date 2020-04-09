import React from 'react';

class Wacksonfy_top extends React.Component {
    render() {
        return (
            <>
                <div className="wacksonfy-top-buttons p-4">
                    <div className="row">
                        <div className="col-md-2 float-left text-left w-25">
                            <i className="fas fa-chevron-down text-white-50" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ></i>
                            <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item text-white-50" href="#">Action</a>
                                <a className="dropdown-item text-white-50" href="#">Another action</a>
                                <a className="dropdown-item text-white-50" href="#">Something else here</a>
                            </div>
                        </div>
                        <div className="col-md-8 text-center w-100">
                            <h6 className="text-white-50">REPRODUCIENDO DESDE PLAYLIST</h6>
                            <h5 className="text-white-50">Daily Mix 4</h5>
                        </div>
                        <div className="col-md-2 float-right text-right w-25">
                            <i className="fas fa-ellipsis-v text-white-50" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" ></i>
                        </div>
                        <div class="collapse" id="collapseExample">
                            <div class="card card-body bg-dark text-white-50">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }


}
export default Wacksonfy_top;
