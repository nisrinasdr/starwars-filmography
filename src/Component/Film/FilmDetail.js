import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_FILM } from '../../GraphQL/Query/Query';
import Card from '../Card/Card';

function FilmDetail() {
  const {filmID} = useParams();
  const { loading, error, data } = useQuery(GET_FILM(filmID));
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!loading) {
      let {title, episodeID, openingCrawl, director, producers, releaseDate} = data.film
      return (
        <Card key={title} data={{title, episodeID, openingCrawl, director, producers, releaseDate}} isDetail={true}/>
      )
  }
}

export default FilmDetail;
