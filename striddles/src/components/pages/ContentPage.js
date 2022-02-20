import React from "react";

//const ContentPage = ({contentId}) => <div>Clicked Content:{contentId} </div>

//export default ContentPage;

// Components
import ContentNav from "../navigation/ContentNav";
import ContentInfo from "../elements/ContentInfo";
import ContentInfoBar from "../elements/ContentInfoBar";
import People from "../elements/People";
import Grid from "../elements/Grid";
import Spinner from "../elements/Spinner";

import { useDetailsFetch } from "../hooks/useDetailsFetch";

const ContentPage = ({ fetchDetails }) => {
  const [state, loading, error] = useDetailsFetch(fetchDetails);
  console.log(state);

  if (loading) return <Spinner></Spinner>;

  return (
    <div>
      <ContentInfo state={state} />
      <ContentInfoBar
        time={state.runtime || state.episode_run_time}
        budget={state.budget}
        genre={state.genres}
      />
    </div>
  );
};

export default ContentPage;
