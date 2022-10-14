import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getEpisodeMainInfo } from '../api/services/tvmazeAPI';
import { setShowID } from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import Button from '../components/Buttons/Button';
import Loader from '../components/Loader/Loader';
import LazyLoad from 'react-lazyload';

const Wrapper = styled.div`
  background-color: #02182B;
  color: #ffffff;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 40vh;
    width: max-content;
    background-repeat: no-repeat;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
    @media screen and (max-width: 769px) {
      height: 20vh;
    }
  }

  @media screen and (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

`
const Article = styled.article`
  padding: 3rem 6rem;
  a {
    display: flex;
    justify-content: center;
    text-decoration: none;

    div {
      width: 25%;
      justify-self: center;
      @media screen and (max-width: 769px) {
        width: 50%;
      }
    }

    @media screen and (max-width: 769px) {
      margin: 4rem 0 2rem;
      align-self: center;
    }
  }
  @media screen and (max-width: 769px) {
    padding: 0;
  }
`
const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
`
const Episodes = () => {
  const [showInfo, setShowInfo] = useState<GeneralInfoTypes>();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()

  const episodeSelectedId: string = useSelector(
    (state: RootState) => state.showSelected.episodeId
  );

  const showSelectedName: string = useSelector(
    (state: RootState) => state.showSelected.showName
  );

  const showSelectedId: string = useSelector(
    (state: RootState) => state.showSelected.showId
  );

  const loadMainInfo = () => {
    getEpisodeMainInfo(episodeSelectedId as string).then((res) => {
      setShowInfo(res.data)
      setIsLoading(false)
    })
  };

  useEffect(() => {
    loadMainInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {!isLoading ?
        <Wrapper>
          <LazyLoad height={200} offset={100} once>
            <img src={showInfo?.image.original} alt={showInfo?.name} />
          </LazyLoad>
          <Article>
            <Link to={`/${showSelectedName ? showSelectedName : localStorage.getItem('showName')}`} onClick={() => dispatch(setShowID(showSelectedId))}>
              <Button>Back to all episodes</Button>
            </Link>
            <Title>{showInfo?.name}</Title>
            <p>{showInfo?.summary.split((/<|>/))[2]}</p>
          </Article>
        </Wrapper>
        : <Loader />}
    </>
  );
}

export default Episodes;
