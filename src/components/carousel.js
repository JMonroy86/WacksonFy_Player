import React, { useState } from 'react';
import Img_album from './imgAbulms';
import Songs_data from './songsData';
import Player from './player';


const Carousel = () => {
    let imgclassName = "";
    let i = 0;
    const [state, setState] = useState(
        {
            i: 0,
            player: null,
            playing: false,
            songs: [
                {
                    id: 0,
                    title: "A Sky Full Of Stars",
                    name: "Cold Play",
                    img: "askyfullofstars.jpg",
                    url: "askyfullofstars.mp3"
                },
                {
                    id: 1,
                    title: "Sugar",
                    name: "Maroon 5",
                    img: "maroon5.jpg",
                    url: "sugar.mp3"
                },
                {
                    id: 2,
                    title: "Atlas Falls",
                    name: "Shinedown",
                    img: "shinedown.jpg",
                    url: "atlas-falls.mp3"
                },
                {
                    id: 3,
                    title: "Perfect Syphony",
                    name: "Ed Sheeran ft Andrea Bocelli",
                    img: "edsheeran.jpg",
                    url: "perfect-symphony.mp3"
                },
                {
                    id: 4,
                    title: "Mr. Brownstone",
                    name: "Guns N' Roses",
                    img: "guns_n_roses.jpg",
                    url: "mr-brownstone.mp3"
                },
                {
                    id: 5,
                    title: "Black",
                    name: "Perl Jam",
                    img: "perl_jam.jpg",
                    url: "black.mp3"
                }
            ],
        })

    const handleClick = (e) => {
        let { i } = state;
        console.log(i)
        if (e === true) {
            i--;
        }
        else {
            i++;
        }

        setState({
            ...state,
            i
        })

    }

    const musicPlaying = () => {
        let { playing } = state;
        state.player.play();

        if (state.player !== null) {
            state.player.autoplay = true;
            playing = true
        }
        setState({
            ...state,
            playing
        })
    }
    const musicPause = () => {
        let { playing } = state;
        state.player.pause();
        playing = false

        setState({
            ...state,
            playing
        })
    }
    const repeatMusic = () => {

    }




    console.log(state.playing)
    return (
        <>
            <div className={"wacksonfy-img-album mx-auto my-5 shadow-lg " + imgclassName}>
                <img src={"./img/" + state.songs[state.i].img} className="d-block w-100 rounded" alt="..." />
            </div>
            <Songs_data title={state.songs[state.i].title} author={state.songs[state.i].name} />
            <div className="wacksonfy-player mx-5">
                <div className="row">
                    <div className="col-md-2 wacksonfy-band-name text-center pt-4">
                        <i className="far fa-heart text-white"></i>
                    </div>
                    <div className="col-md-2 wacksonfy-band-name text-center pt-4">
                        <a onClick={(e) => handleClick(true)} className="text-decoration-none">
                            <i className="fas fa-step-backward text-white fa-2x"></i>
                        </a>
                    </div>
                    <div className="col-md-4 wacksonfy-band-name text-center my-n1 pt-2" id="play">
                        {
                            state.playing === false ?
                                (
                                    <a onClick={() => musicPlaying()}>
                                        <audio ref={(t) => state.player = t} src={"./mp3/" + state.songs[state.i].url} />

                                        <i className="far fa-play-circle text-white fa-4x ml-1 my-2"></i>
                                    </a>

                                )
                                :
                                (
                                    <a onClick={() => musicPause()}  >
                                        <audio ref={(t) => state.player = t} src={"./mp3/" + state.songs[state.i].url} />
                                        <i className="far fa-pause-circle text-white fa-4x ml-1 my-2"></i>
                                    </a>

                                )
                        }
                    </div>
                    <div className="col-md-2 wacksonfy-band-name text-center pt-4 ">
                        <a onClick={(e) => handleClick(false)} className="text-decoration-none"><i className="fas fa-step-forward text-white fa-2x"></i></a>
                    </div>
                    <div className="col-md-2 wacksonfy-band-name text-center pt-4">
                        <i className="fas fa-minus-circle text-white"></i>
                    </div>
                </div>
            </div>
        </>


    )



}
export default Carousel;

