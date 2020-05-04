import React from "react";

class VideoPlayer extends React.Component {
  render() {
    return (
      <div>
        <iframe
          title={this.props.Title}
          className="videoPlayer"
          width="640"
          height="360"
          style={{ frameBorder: "0" }}
          src={`https://www.youtube.com/embed/${this.props.videoId}`}
        ></iframe>
        <h3 className="ui dividing header">{this.props.title}</h3>
        <p className="comment">{this.props.publishedAt}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
export default VideoPlayer;
