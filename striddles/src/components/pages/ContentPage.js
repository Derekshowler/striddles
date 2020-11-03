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

import { useContentFetch } from "../hooks/useContentFetch";

const ContentPage = ({ fetchContentId }) => {
  const [state, loading, error] = useContentFetch(fetchContentId);
  console.log(state);

  if (loading) return <Spinner></Spinner>;

  return (
    <div>
      <ContentNav dataId={state.name || state.title}></ContentNav>
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
