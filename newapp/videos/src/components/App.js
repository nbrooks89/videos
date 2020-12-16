import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./App.css";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("cute puppies");
  }

  onTermSubmit = async (term) => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search?",
      {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 5,
          key: "AIzaSyCnAtamkokqtwdcRDpMp5ufT7KVBSH__ZA",
          q: term,
        },
      }
    );
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="app-container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="inner-container">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
