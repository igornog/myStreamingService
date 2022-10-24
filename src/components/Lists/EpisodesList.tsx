import { SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components'
import Card from '../Cards/EpisodeCard';
import { getSeasons } from '../../api/services/tvmazeAPI';
import Loader from '../Loader/Loader';

interface PropsTypes {
  episodes: any[];
  seasonId: string;
}

const ListWrapper = styled.div`
  background-color: #FFFFFC;
  text-align: center;

  select {
    margin: 2rem 0 0;
    font-size: 1.25rem;
    padding: 0 1rem;
    cursor: pointer;
    border-radius: 10px;
  }
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 4rem;

  @media screen and (max-width: 769px) {
    padding: 1rem;
  }

  div {
    display: flex;
    justify-content: center;
  }
`

const EpisodesList: React.FC<PropsTypes> = (props: PropsTypes) => {
  const [seasonSelected, setSeasonSelected] = useState(1);
  const [seasons, setSeasons] = useState([]);

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value);
    setSeasonSelected(value);
  };

  const loadSeasons = () => {
    getSeasons(props.seasonId).then((res: { data: SetStateAction<never[]>; }) => {
      setSeasons(res.data)
    })
  };

  useEffect(() => {
    loadSeasons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ListWrapper>
      <select onChange={selectChange}>
        {seasons?.map((season: any) => {
          return (
            <option key={season.number} value={season.number}>Season {season.number}</option>
          )
        }
        )}
      </select>
      <List>
        {props?.episodes?.filter((episode: GeneralInfoTypes) => episode.season === seasonSelected).map((episode: GeneralInfoTypes) => {
          return (
            <Card
              key={episode.id}
              episodeDetails={episode}
            ></Card>
          )
        })}
      </List>
    </ListWrapper>
  );
}

export default EpisodesList;