import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { characters, defaultHero } from "../utils/constants";
import { SWContext } from "../utils/context";
import ErrorPage from "../components/ErrorPage"; 

const withErrorPage = (Component: React.FC<any>, route: string) => (props: any) =>  {
  const navigate = useNavigate();
  let { heroId = defaultHero } = useParams();
  const { changeHero } = useContext(SWContext);

  useEffect(() => {
    navigate(`/${route}/${heroId}`);
    changeHero(heroId);
  }, [heroId]);

  if (!characters[heroId]) {
    return <ErrorPage />;
  }

  return <Component heroId={heroId} {...props} />;
};

export default withErrorPage;