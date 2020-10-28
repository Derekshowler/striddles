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
console.log(useContentFetch)


const ContentPage = ({ fetchContentId }) => {
  console.log(fetchContentId)
  const [state, loading, error] = useContentFetch(fetchContentId);
  console.log(state)
  console.log(fetchContentId)
  
  if (loading) return <Spinner></Spinner>


  return (
  <div>
    <ContentNav dataId={state.title}></ContentNav>
    <ContentInfo state={state} />
  </div>
  )
};

export default ContentPage;