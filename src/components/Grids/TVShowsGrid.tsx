import styled from 'styled-components'
import Card from '../Cards/TVShowCard';

const Grid = styled.div`
  background-color: #FFFFFC;
`
const GridList = styled.ul`
  display: grid;
  padding: 2rem 5rem 5rem;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));

  @media screen and (max-width: 769px) {
    padding: 1rem;
  }
`
interface PropsTypes {
  TVShows: any,
}

const EpisodesList: React.FC<PropsTypes> = (props: PropsTypes) => {

  return (
    <Grid>
      <GridList>
        {props.TVShows.map((TVShow: GeneralInfoTypes) => {
          return (
            <Card
              key={TVShow.id}
              TVShowDetails={TVShow}
            ></Card>
          )
        })}
      </GridList>
    </Grid>
  );
}

export default EpisodesList;