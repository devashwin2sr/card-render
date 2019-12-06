import React, { Component } from "react";

class ImageRenderer extends Component {
  state = {
    chapters: [
      {
        number: 1,
        url: [
          "https://pbs.twimg.com/media/EJxudoxVAAAKpss?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EJxueZeVAAAWctV?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EJxuewtVUAApFCx?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EJxufHCUUAACmIr?format=jpg&name=large",
          "https://pbs.twimg.com/media/EJxuflkUEAA7t3w?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EJxuf3XVUAA335P?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EJxugPWU0AUbRSH?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EJxugtvUUAEHBkl?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EJxuhQ_VAAAeLa0?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EJxuhpEUUAEg0Uc?format=jpg&name=4096x4096"
        ]
      },
      {
        number: 2,
        url: [
          "https://pbs.twimg.com/media/EJ65ME2UwAEE8oa?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EJ65ONWUUAM5aDD?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EJ65PyyU0AASSne?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EJ65Q9iUYAABS2R?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EJ65R8FU4AAyUPb?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EJ65S3HU8AA7o0b?format=jpg&name=large",
          "https://pbs.twimg.com/media/EJ65TeOUUAAeffs?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EJ65UwQU4AEAc21?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EJ65V7fUUAA8_Z2?format=jpg&name=4096x4096"
        ]
      },
      {
        number: 3,
        url: [
          "https://pbs.twimg.com/media/EKP0IdQU0AEqSaj?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EKP0I79UEAA8KR7?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EKP0JWMU0AApSDf?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EKP0JxyVUAAnjMz?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EKP0KPPU0AAJ8BP?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EKP0KwSUYAAFPCJ?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EKP0LG5UEAAheOV?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EKP0LecUYAAqcFP?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EKP0L9-VAAUjE5k?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EKP0MXUU0AE13GJ?format=jpg&name=4096x4096"
        ]
      },
      {
        number: 4,
        url: [
          "https://pbs.twimg.com/media/EK0qrCHUUAEaStG?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EK0qru-VUAE9qDm?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EK0qsJ6U4AAwLZY?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EK0qsoGVUAAXnSQ?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EK0qtJiU8AAoCqr?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EK0quFAUcAYDsjV?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EK0qukHUYAAQMDP?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EK0qvNOU0AE_zDj?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/EK0qvuDU8AUXifP?format=jpg&name=4096x4096"
        ]
      }
    ]
  };
  styles = {
    textAlign: "center"
  };
  styleButton = {
    display: "inline-block"
  };
  styleImageCard = {
    maxWidth: "250px",
    maxHeight: "250px"
  };
  render() {
    return (
      <React.Fragment>
        <ul style={this.styles}>
          {this.state.chapters.map(chapter => (
            <li style={this.styleButton} key={chapter.number}>
              {chapter.url.map(urlinstance => (
                <a key={urlinstance} target="_blank" href={urlinstance}>
                  <img
                    style={this.styleImageCard}
                    className="mx-2"
                    src={urlinstance}
                  />
                </a>
              ))}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default ImageRenderer;
