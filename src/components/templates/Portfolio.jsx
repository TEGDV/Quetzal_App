import React from "react";
import usePortfolioInitialState from "../../hooks/usePortfolioInitialState.js";
import ProjectCarousel from "../organisms/ProjectCarousel.jsx";
import ProjectItem from "../molecules/ProjectItem.jsx";
import "../../assets/styles/templates/Portfolio.scss";

const API = "https://api.github.com/users/tegdv/repos";

const Portfolio = () => {
  const reposInfo = usePortfolioInitialState(API);
  console.log(Object.entries(reposInfo));

  return reposInfo.length === 0 ? (
    <h1 className="loading">Loading ...</h1>
  ) : (
    <section className="portfolio_section">
      <ProjectCarousel>
        {reposInfo.map((repo) => (
          <ProjectItem
            key={repo.name}
            name={repo.name}
            resume={repo.description}
            url={repo.html_url}
          />
        ))}
      </ProjectCarousel>
    </section>
  );
};

export default Portfolio;
