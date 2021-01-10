import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/atoms/Button.scss";

class LinkButton extends React.Component {
	constructor(props) {
		super(props);
	}

	downloadCV = () => {
		fetch(
			"https://drive.google.com/uc?export=download&id=1VMdmmczJSSUYvz3LQKjLR-j_nHQu1Y1M"
		).then((response) => {
			response.blob().then((blob) => {
				let url = window.URL.createObjectURL(blob);
				let a = document.createElement("a");
				a.href = url;
				a.download = "cv.pdf";
				a.target = "_blank";
				a.click();
			});
			//window.location.href = response.url;
		});
	};

	render() {
		return this.props.className === "download-button" ? (
			<div className={this.props.className}>
				<button
					className={this.props.className}
					onClick={this.downloadCV}
				>
					{this.props.text}
				</button>
			</div>
		) : (
			<Link to={this.props.path} className={this.props.className}>
				<button className="link-button">{this.props.text}</button>
			</Link>
		);
	}
}

export default LinkButton;
