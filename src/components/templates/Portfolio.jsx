import React, { useState } from "react";

const API = "https://api.github.com/users/tegdv/repos";

class Portfolio extends React.Component {
  state = {
    count: 1,
  };

  clickNext = (reposInfo) => {
    if (this.state.count < reposInfo.length) {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
      this.setState({
        count: 1,
      });
    }
  };

  clickPrevious = (reposInfo) => {
    if (this.state.count > 1) {
      this.setState({
        count: this.state.count - 1,
      });
    } else {
      this.setState({
        count: reposInfo.length,
      });
    }
  };

  render() {
    const [reposInfo, setReposInfo] = useState({});

    useEffect(() => {
      fetch(API)
        .then((response) => response.json())
        .then((data) => setReposInfo(data));
    }, []);

    return reposInfo.length === 0 ? (
      <h1 className="loading">Loading ...</h1>
    ) : (
      <section className="portfolio_section">
        <p>carousel</p>
        <p>get in touch</p>
        <p>
          {count}/{reposInfo.length}
        </p>
        <button>{`<-`}</button>
        <button>{`->`}</button>
      </section>
    );
  }
}

export default Portfolio;
