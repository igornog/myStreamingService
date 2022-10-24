import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  setShowID, setShowName,
} from "../../store/reducers";

interface PropsTypes {
  TVShowDetails: GeneralInfoTypes
}

const Card = styled.div`
  font-size: .75rem;
  margin: 1rem;
  border-radius: 16px;
  cursor: pointer;
  text-align: center;

  img {
    width: -webkit-fill-available;
    max-width: fit-content;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 16px;
    transition: all .5s ease;

    &:hover {
      transform: translateY(-10px);
      transition: all .3s ease;
    }
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0;

    &:last-of-type {
      font-size: 0.75rem;
      font-weight: normal;
      padding: .5rem 2rem 0;
      text-align: left;

      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 4;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
  }
`
const EpisodeCard: React.FC<PropsTypes> = (props: PropsTypes) => {
  const { TVShowDetails } = props;
  const dispatch = useDispatch();

  const storeShowInfo = () => {
    dispatch(setShowID(props.TVShowDetails.id))
    dispatch(setShowName(props.TVShowDetails.name))
    // storing episode ID in case of page reload
    localStorage.setItem('showID', props.TVShowDetails.id)
    localStorage.setItem('showName', props.TVShowDetails.name)
  }

  return (
    <>
      <Card onClick={() => storeShowInfo()}>
        <Link to={props.TVShowDetails.name}>
          <img src={TVShowDetails.image.medium} alt={props.TVShowDetails.name}></img>
        </Link>
      </Card>
    </>
  );
}

export default EpisodeCard;