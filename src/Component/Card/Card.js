import React from 'react';
import { CardContent, Content, Info, InfoContainer, Label, StyledText, Title } from './CardStyles';

function Card(props) {
  return(
    <CardContent>
      {
        props.isDetail? 
        (<Title>{`${props.data.title}`}</Title>):
        (<Title>{`${props.data.title} (${props.data.releaseDate.split("-")[0]})`}</Title>)
      }

      <InfoContainer>
        <Info>
          { props.isDetail && (
              <Content>
                <Label>Director: </Label>
                {props.data.director}
              </Content> ) }
          { props.isDetail && (
              <Content>
                <Label>Producers: </Label>
                {props.data.producers.join(", ")}
              </Content> ) }
          { props.isDetail && (
              <Content>
                <Label>Release Date: </Label>
                {props.data.releaseDate}
              </Content> ) }
        </Info>
        <StyledText isFloat={props.isDetail}>— {props.data.openingCrawl?props.data.openingCrawl:null}</StyledText>
      </InfoContainer>
    </CardContent>
  )
}

export default Card;
