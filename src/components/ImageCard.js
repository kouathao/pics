import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    const { imageRef } = this;
    const { spans } = this.state;
    return (
      <div stype={{ gridRowEnd: `span ${spans}` }}>
        <img ref={imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
