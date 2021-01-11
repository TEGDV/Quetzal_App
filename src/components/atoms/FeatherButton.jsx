import React from "react";
import feather from "../../assets/static/feather.png";
class FeatherButton extends React.Component {
  constructor(props) {
    super(this.props);
  }

  render() {
    return this.props.name == "left" ? (
      <img src={feather} className="left" />
    ) : (
      <img src={feather} className="right" />
    );
  }
}

export default FeatherButton;
