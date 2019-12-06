import React, { Component } from "react";
import ImageRenderer from "./imageRenderer";

class Renderer extends Component {
  state = {
    greeting: "Hey Mando!",
    chapters: [
      { Number: 1, Name: "Pilot" },
      { Number: 2, Name: "The Child" },
      { Number: 3, Name: "The Sin" },
      { Number: 4, Name: "Sanctuary" }
    ]
  };
  styles = {
    textAlign: "center"
  };
  styleButton = {
    display: "inline-block"
  };

  chapterClicked = chapter => {
    console.log(chapter.chapter.Number);
  };

  render() {
    return (
      <React.Fragment>
        <h1 style={this.styles}>{this.state.greeting}</h1>
        <ul style={this.styles}>
          {this.state.chapters.map(chapter => (
            <li style={this.styleButton} key={chapter.Number}>
              <button
                className="btn btn-info mx-2"
                onClick={() => this.chapterClicked({ chapter })}
              >
                {chapter.Name}
              </button>
            </li>
          ))}
        </ul>
        <ImageRenderer />
      </React.Fragment>
    );
  }
}

export default Renderer;
