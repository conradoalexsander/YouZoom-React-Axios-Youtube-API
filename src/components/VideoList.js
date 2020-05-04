import React from "react";
import VideoItem from "./VideoItem";
import VideoPlayer from "./VideoPlayer";

class VideoList extends React.Component {
  state = {
    currentVideoId: "https://www.youtube.com/embed/ldLNzhfRoDw",
    currentVideoTitle: "",
    currentVideoDescription: "",
    currentVideoPublication: ""
  };

  render() {
    return (
      <div className="myContent">
        <VideoPlayer
          title={this.state.currentVideoTitle}
          videoId={this.state.currentVideoId}
          description={this.state.currentVideoDescription}
          publishedAt={this.state.currentVideoPublication}
          className="VideoPlayer"
        />

        <div className="ui list middle aligned">
          {this.props.videos.map(video => {
            return (
              <VideoItem
                thumbnail={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
                videoId={video.id.videoId}
                publishedAt={this.formatDate(video.snippet.publishedAt)}
                description={video.snippet.description}
                onClick={this.OnClickItem}
                key={video.id.videoId}
              />
            );
          })}
        </div>
      </div>
    );
  }
  OnClickItem = (videoId, title, time, description) => {
    this.setState({
      currentVideoId: videoId,
      currentVideoTitle: title,
      currentVideoPublication: time,
      currentVideoDescription: description
    });
    console.log(this.state);
  };

  formatDate = ytDate => {
    ytDate = ytDate.split("T");
    let day = ytDate[0]
      .split("-")
      .reverse()
      .join("-");
    let time = ytDate[1].split(".");
    time = time[0];
    let formatedDate = `${day} ${time}`;

    return formatedDate;
  };
}

export default VideoList;
