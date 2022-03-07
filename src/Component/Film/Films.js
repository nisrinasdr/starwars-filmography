import {
    useQuery
} from "@apollo/client";
import { Link } from 'react-router-dom';
import { GET_ALL_FILMS } from "../../GraphQL/Query/Query";
import Card from "../Card/Card";
import { CardWrap } from "../Card/CardStyles";


function Films() {
    const { loading, error, data } = useQuery(GET_ALL_FILMS);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    // if (!loading) {
      return(
      <CardWrap isGrid>
        { data.allFilms.films
          .map(({ id, title, episodeID, openingCrawl, director, producers, releaseDate }) => {
          return(
          <Link to={`/${id}`} data-testid={`link-${episodeID}`} style={{textDecoration:"none"}}>
              <Card key={id} data={{title, openingCrawl, releaseDate}} isDetail={false}/>
          </Link>
          )})
        }
      </CardWrap>
    )
    // }
}

export default Films;
