import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_FILM } from '../../GraphQL/Query/Query';
import Card from '../Card/Card';

function FilmDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_FILM, {
    variables: {
      id
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!loading) {
      let { id, title, episodeID, openingCrawl, director, producers, releaseDate } = data.film
      return (
        <Card key={id} data={{ id, title, episodeID, openingCrawl, director, producers, releaseDate }} isDetail={true}/>
      )
  }
}

export default FilmDetail;
