import React from 'react';
import { MainFlagCard,ImageDiv } from './FlagCard.element';
export default function FlagCard({data}) {
   
    const world = 'https://news.virginia.edu/sites/default/files/article_image/coronavirus_tracker_header2.jp'
  return (

      <>
     
      <MainFlagCard>
      {data ? <img src={data.country.countryInfo.flag}/> :<img src ={world} alt="img"/> }
      </MainFlagCard>
      </>
  );
}
