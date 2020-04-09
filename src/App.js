import React, { useState } from 'react';
import Wacksonfy_top from './components/topButtons.js';
import Img_album from './components/imgAbulms';
import Songs_data from './components/songsData';
import Player from './components/player';
import Share from './components/share';
import './App.css';



const App = props => {
  const [state, setState] = useState({
    songs: [
      {
        id: 1, category: "game",
        name: "Mario Castle",
        url: "files/mario/songs/castle.mp3"
      },
      {
        id: 2,
        category: "game",
        name: "Mario Star",
        url: "files/mario/songs/hurry-starman.mp3"
      },
      {
        id: 3,
        category: "game",
        name: "Mario Overworld",
        url: "files/mario/songs/overworld.mp3"
      },
      {
        id: 4,
        title: "Mr. Brownstone",
        name: "Guns N' Roses",
        img: "guns_n_roses.jpg",
      },
      {
        id: 5,
        title: "Last Kiss",
        name: "Perl Jam",
        img: "perl_jam.jpg",
      }
    ],
  })
  return (
    <div className="container ">
      <div className="row">
        <div className="wacksonfy">
          {
            state.songs.length > 0 &&
            state.songs.map((item, i) => {
              return (
                <div className=" mx-auto my-3" key={i}>
                  <Wacksonfy_top />
                  <Img_album img={item.img} />
                  <Songs_data title={item.title} author={item.name} />
                  <Player />
                  <Share />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App;