import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setShowID } from '../../store/reducers';
import Button from '../Buttons/Button';

interface Props {
  name?: string;
  summary?: string;
}

const Wrapper = styled.article`
  padding: 3rem 6rem;
  text-align: center;
  display: flex;
  flex-direction: column;

  a {
    width: max-content;
    align-self: center;
  }

  @media screen and (max-width: 769px) {
    padding: 0;
  }
`
const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
`

const Article: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch()

  const showSelectedName: string = useSelector(
    (state: RootState) => state.showSelected.showName
  );

  const showSelectedId: string = useSelector(
    (state: RootState) => state.showSelected.showId
  );

  return (
    <Wrapper>
      <Title>{props.name}</Title>
      <p>{props.summary?.split((/<|>/))[2]}</p>
      <Link to={`/${showSelectedName ? showSelectedName : localStorage.getItem('showName')}`} onClick={() => dispatch(setShowID(showSelectedId))}>
        <Button>Back to all episodes</Button>
      </Link>
    </Wrapper>
  );
}

export default Article;