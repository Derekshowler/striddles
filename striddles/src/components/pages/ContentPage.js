import React from "react";

//const ContentPage = ({contentId}) => <div>Clicked Content:{contentId} </div>

//export default ContentPage;

// Components
import ContentNav from "../navigation/ContentNav";
import ContentInfo from "../elements/ContentInfo";
import ContentInfoBar from "../elements/ContentInfoBar";
import Grid from "../elements/Grid";
import Spinner from "../elements/Spinner";

import { useDetailsFetch } from "../hooks/useDetailsFetch";

const ContentPage = ({ fetchDetails }) => {
  const [state, loading, error] = useDetailsFetch(fetchDetails);
  console.log(state);

  if (loading) return <Spinner></Spinner>;

  return (
    <>
      <ContentInfo state={state}></ContentInfo>
      
    </>
  );
};

export default ContentPage;
