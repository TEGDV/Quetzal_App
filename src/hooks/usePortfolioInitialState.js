import React from "react";

const usePortfolioInitialState = (API) => {
  const [reposInfo, setReposInfo] = React.useState([]);

  React.useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setReposInfo(data));
  }, []);
  return reposInfo;
};

export default usePortfolioInitialState;
