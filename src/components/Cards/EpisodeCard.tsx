import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { setEpisodeID } from '../../store/reducers';

interface PropsTypes {
  key: number;
  episodeDetails: GeneralInfoTypes;
}

const CardWrapper = styled.div`
  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    margin: 1rem;
    width: 75%;

    div {
      width: 100%;
      align-items: center;
      font-size: .75rem;
      padding: 1rem 3rem;

      border-radius: 16px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      color: black;
      text-decoration: none;
    }
  }
`

const Card = styled.div`
  flex-direction: column;
  p {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;

    &:last-of-type {
      margin: 1rem;
      font-size: 0.75rem;
      font-weight: normal;
      text-align: left;

      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
  }
`
const EpisodeCard: React.FC<PropsTypes> = (props: PropsTypes) => {
  const { episodeDetails } = props;
  const dispatch = useDispatch()

  return (
    <>
      <CardWrapper>
        <Link to={episodeDetails.name} onClick={() => dispatch(setEpisodeID(episodeDetails.id))}>
          <Card>
            <p><span>EP.{episodeDetails.number} - </span>{episodeDetails.name}</p>
            <p>{episodeDetails.summary.split((/<|>/))[2]}</p>
          </Card>
        </Link>
      </CardWrapper>
    </>
  );
}

export default EpisodeCard;