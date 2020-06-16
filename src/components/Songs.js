import React, { Component } from "react";
import "../styles/Songs.css";
import * as api from "../utils/api";

class Songs extends Component {
  state = {
    songs: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getSongs().then((songs) => {
      this.setState({ songs, isLoading: false });
    });
  }
  render() {
    const { songs, isLoading } = this.state;
    return (
      <div className="songsBody">
        <h1>Songs</h1>
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          <div className="songs">
            {songs.map((song) => {
              return (
                <div className="song" key={song.id}>
                  <p>{song.name["name-EUen"]}</p>
                  <img
                    className="image"
                    alt={song.name["name-EUen"]}
                    src={song.image_uri}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default Songs;
