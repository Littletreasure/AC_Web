import React, { Component } from "react";
import "../styles/Songs.css";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class Songs extends Component {
  state = {
    songs: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getInfo("songs").then((songs) => {
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
                  <Link className="link" to={`/songs/${song.id}`}>
                    <p>{song.name["name-EUen"]}</p>
                    <img
                      className="image"
                      alt={song.name["name-EUen"]}
                      src={song.image_uri}
                    />
                  </Link>
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
