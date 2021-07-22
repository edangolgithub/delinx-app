import React, { Component } from "react";

export class Video extends Component {
  render() {
    return (
      <div>
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          id="video-id"
          className="video"
        >
          {/* TODO make it accept multiple media types */}
          <source src="/media/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default Video;
