import styled from '@emotion/styled'

const media = {
  desktop: '@media(min-width:1000px)'
}

const CardWrap = styled.div`
  font-size: 1em;
  padding: 1em 0;
  display: grid;
  justify-content: center;

  ${media.desktop}{
    grid-template-columns: repeat(4,  calc(100% / 4 - 1em));
  }
`

const CardContent = styled.div`
  padding: 1.4em;
  margin: 1.2em;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.35em;
  color: #000;
  box-shadow: -1px 3px 14px -2px rgba(0,0,0,0.47);
  -webkit-box-shadow: -1px 3px 14px -2px rgba(0,0,0,0.47);
  -moz-box-shadow: -1px 3px 14px -2px rgba(0,0,0,0.47);
`

const Title = styled.div`
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 0.5em;

  ${media.desktop}{
    align-self: baseline;
  }
`

const StyledText = styled.div`
  font-style: italic;
  font-size: 0.9em;
  margin-top: 0.5em;

  ${media.desktop}{
    float: left;
    width: ${props => props.isFloat === true ? '70%' : '100%'};
  }
`

const Content = styled.div`
  font-size: 0.93em;
`

const Label = styled.div`
  display: inline;
  font-weight: bold;
`

const InfoContainer = styled.div`
`

const Info = styled.div`
  ${media.desktop}{
    float: left;
    width: 30%;
    margin-top: 0.5em;
  }
`

export { CardWrap, CardContent, Title, StyledText, Content, Label, InfoContainer, Info }