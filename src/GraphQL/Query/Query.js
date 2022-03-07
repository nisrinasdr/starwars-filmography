import {
    gql
} from "@apollo/client";
  
export const GET_ALL_FILMS = gql`
  query {
    allFilms{
      films{
        id
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


export const GET_FILM = gql`
  query GetFilm($id: ID!){
    film(id: $id){
      id
      title
      episodeID
      openingCrawl
      director
      producers
      releaseDate
    }
  }
`
