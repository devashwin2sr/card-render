import React, { Component } from "react";
import ImageRenderer from "./imageRenderer";

class Renderer extends Component {
  state = {
    greeting: "Hey Mando!",
    chapters: [
      { Number: 1, Name: "Pilot", isToggleOn: true },
      { Number: 2, Name: "The Child", isToggleOn: true },
      { Number: 3, Name: "The Sin", isToggleOn: true },
      { Number: 4, Name: "Sanctuary", isToggleOn: true },
      { Number: 5, Name: "The Gunslinger", isToggleOn: true }
    ]
  };
  styles = {
    textAlign: "center"
  };
  styleButton = {
    display: "inline-block"
  };

  chapterClicked = index => {
    const updatedChapters = this.state.chapters;
    updatedChapters[index].isToggleOn = false;
    console.log(updatedChapters);
    this.setState({
      isToggleOn: false
    });
  };

  // decideRender() {
  //   if (this.state.chapters.isToggleOn) return <ImageRenderer />;
  // }

  getButtonClassName = Number => {
    if (Number === 5) return "btn btn-secondary btn-sm mx-2 disabled ";
    return "btn btn-info btn-sm mx-2";
  };

  render() {
    return (
      <React.Fragment>
        <h1 style={this.styles}>{this.state.greeting}</h1>
        <ul style={this.styles}>
          {this.state.chapters.map((chapter, i) => (
            <li style={this.styleButton} key={chapter.Number}>
              <button
                className={this.getButtonClassName(chapter.Number)}
                onClick={this.chapterClicked.bind(this)}
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
