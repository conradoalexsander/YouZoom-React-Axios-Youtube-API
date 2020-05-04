import React from "react";

class VideoItem extends React.Component {
  //state = { title: this.props.title };
  OnClickLink = e => {
    e.preventDefault();
    let videoId = this.props.videoId;
    let title = this.props.title;
    let publishedAt = this.props.publishedAt;
    let description = this.props.description;
    this.props.onClick(videoId, title, publishedAt, description);
  };

  render() {
    return (
      <div className="ui container dividing header">
        <div className="videoCard">
          <div className="cardImage">
            <img
              className="ui image"
              src={this.props.thumbnail}
              alt={this.props.title}
            />
          </div>

          <div className="cardDescription">
            <div className="ui comments">
              <div className="comment">
                <div className="content">
                  <a
                    className="author"
                    href={`https://www.youtube.com/watch?v=${this.props.videoId}`}
                    onClick={this.OnClickLink}
                  >
                    {this.props.title}
                  </a>
                  <div className="description">
                    <div className=" metadata">
                      <span className="date">{this.props.publishedAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default VideoItem;
