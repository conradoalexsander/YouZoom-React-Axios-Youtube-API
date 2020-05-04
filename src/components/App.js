import React from "react";
import "./App.css";
import youtube from "../api/youtube.js";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtubeConfiguration from "../api/youtubeConfiguration.json";

class App extends React.Component {
  state = { videos: [] };

  onSearchSubmit = async term => {
    const response = await youtube.get(
      `/search?key=${youtubeConfiguration.youtubeApiKey}&type=video&part=snippet`,
      {
        params: { q: term }
      }
    );
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui container">
          <div className="myContent">
            <VideoList
              className="sidebar"
              videos={this.state.videos}
              onClick={this.OnClickItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
