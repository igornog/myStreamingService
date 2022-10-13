import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getEpisodes, getMainShowInfo } from '../api/services/tvmazeAPI';
import List from '../components/Lists/EpisodesList';
import { setShowID } from '../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import Button from '../components/Buttons/Button';
import Loader from '../components/Loader/Loader';

const Header = styled.div`
  background-color: #02182B;
  color: #ffffff;
  padding: 5rem;
  display: flex;
  img {
    height: 50vh;
    background-repeat: no-repeat;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  @media screen and (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

`
const Article = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: initial;
  padding: 0 2rem;

  p:last-child {
    margin: 0;
    line-height: 1.75;

    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 7;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  @media screen and (max-width: 769px) {
    padding: 0;
  }

  a {
    align-self: end;
    text-decoration: none;

    @media screen and (max-width: 769px) {
      margin: 4rem 0 2rem;
      align-self: center;
    }
  }
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 1rem;

  span:first-of-type {
    margin: 0.25rem 0 2rem;
    font-size: .875rem;
    font-weight: lighter;
  }
`
const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  margin-bottom: 0;
`

const Episodes = () => {
  const [showInfo, setShowInfo] = useState<GeneralInfoTypes>();
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()

  const showSelected: string = useSelector(
    (state: RootState) => state.showSelected.showId
  );

  const loadMainInfo = () => {
    getMainShowInfo(showSelected as string).then((res) => {
      setShowInfo(res.data)
    })
  };

  const loadEpisodes = () => {
    getEpisodes(showSelected as string).then((res) => {
      setEpisodes(res.data)
    })
  };

  const getGenres = () => {
    return (
      <span>(
        {showInfo?.genres.map((genre: any, index: number) => {
          if (index < showInfo?.genres.length - 1) {
            return (
              <span key={index}>{genre} / </span>
            )
          } else {
            return (
              <span key={index}>{genre}</span>
            )
          }
        })
        })</span>
    )
  }

  useEffect(() => {
    loadMainInfo()
    loadEpisodes()
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {!isLoading ?
        <>
          <Header>
            <img src={showInfo?.image.original} alt={showInfo?.name} />
            <Article>
              <Link to='/' onClick={() => dispatch(setShowID(''))}>
                <Button>Back to TV Shows</Button>
              </Link>
              <TitleWrapper>
                <Title>
                  {showInfo?.name}
                </Title>
                {getGenres()}
                <span>Released in {showInfo?.premiered.split('-')[0]}</span>
                <span>Rating: {showInfo?.rating.average}</span>
              </TitleWrapper>
              <p>{showInfo?.summary.replace(/<[^>]*>?/gm, '')}</p>
            </Article>
          </Header>
          <List episodes={episodes} seasonId={showSelected}></List>
        </>
        : <Loader />}
    </>
  );
}

export default Episodes;
