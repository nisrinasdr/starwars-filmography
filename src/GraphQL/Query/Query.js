import {
    gql
} from "@apollo/client";
  
export const GET_ALL_FILMS = gql`
  query {
    allFilms{
      films{
        title
        episodeID
        openingCrawl
        director
        producers
        releaseDate
      }
    }
  }
`;


export const GET_FILM = id => gql`
  query {
    film(filmID: ${id}){
      title
      episodeID
      openingCrawl
      director
      producers
      releaseDate
    }
  }
`;

export const GET_ALL_PLANET = gql`
  query {
    allPlanets{
      planets{
          name
        diameter
        rotationPeriod
        orbitalPeriod
        gravity
        climates
        terrains
        } 
      }
  }
`;

