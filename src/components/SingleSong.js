import React, { Component } from "react";
import "../styles/SingleSong.css";
import * as api from "../utils/api";

class SingleSong extends Component {
  state = {
    song: [],
    name: null,
    music: null,
    isLoading: true,
  };

  componentDidMount() {
    api.getInfoById("songs", this.props.song_id).then((song) => {
      this.setState({
        song,
        name: song.name["name-EUen"],
        music: song["music_uri"],
        isLoading: false,
      });
    });
  }
  render() {
    const { song, name, music, isLoading } = this.state;
    return (
      <div className="singleSongBody">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="singleSong">
            <p className="songName">{name}</p>
            <img className="songImage" alt={name} src={song.image_uri} />
            <p>Selling price: {song["sell-price"]} bells</p>
            <p>
              <audio controls ref="media" src={`${music}`}></audio>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default SingleSong;
