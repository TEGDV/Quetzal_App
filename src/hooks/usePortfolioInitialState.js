import { useState, useEffect } from "react";

const usePortfolioInitialState = (API) => {
  const [reposInfo, setReposInfo] = useState({});

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setReposInfo(data));
  }, []);
  return reposInfo;
};

export default usePortfolioInitialState;
