import React from 'react';

//const ContentPage = ({contentId}) => <div>Clicked Content:{contentId} </div>

//export default ContentPage;


// Components
import ContentNav from '../navigation/ContentNav';
import ContentInfo from '../elements/ContentInfo';
import ContentInfoBar from '../elements/ContentInfoBar';
import People from '../elements/People';
import Grid from '../elements/Grid';
import Spinner from '../elements/Spinner';

import { useContentFetch } from '../hooks/useContentFetch';

const ContentPage = ({ fetchContentId }) => {
  const [state, loading, error] = useContentFetch(fetchContentId);
  console.log(state)
  console.log(fetchContentId)


  return (
  <>
    <ContentNav dataId={state.title}{...state.name}></ContentNav>
    <ContentInfo state={state} />
    <ContentInfoBar></ContentInfoBar>
  </>
  )
};

export default ContentPage;