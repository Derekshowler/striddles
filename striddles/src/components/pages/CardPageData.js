import React from 'react';

import Info from '../elements/Info';
import Grid from '../elements/Grid';
import Spinner from '../elements/Spinner';
import Header from '../elements/Header';

import {useInfoFetch} from '../hooks/useInfoFetch';


const CardPageData = ({ cardPageDataID }) => 

<div>Page link is same from card clicked! : {cardPageDataID}</div>
    
  
export default CardPageData;