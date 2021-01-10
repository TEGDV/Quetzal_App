import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/atoms/Button.scss";

class LinkButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return this.props.className === "download-button" ? (
			<a
				href={this.props.path}
				target="_blank"
				className={this.props.className}
				download
			>
				<button className="link-button">{this.props.text}</button>
			</a>
		) : (
			<Link to={this.props.path} className={this.props.className}>
				<button className="link-button">{this.props.text}</button>
			</Link>
		);
	}
}

export default LinkButton;
