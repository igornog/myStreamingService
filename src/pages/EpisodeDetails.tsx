import React from 'react';
import { SetStateAction, Suspense, useEffect, useState } from 'react';
import styled from 'styled-components'
import { getEpisodeMainInfo } from '../api/services/tvmazeAPI';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Loader from '../components/Loader/Loader';
const Article = React.lazy(() => import('../components/Article/Article'));

const Wrapper = styled.div`
  background-color: #02182B;
  color: #ffffff;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: auto;
    max-height: 30vh;
    width: auto;
    background-repeat: no-repeat;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
    @media screen and (max-width: 769px) {
      height: auto;
      width: 75%;
    }
  }

  a {
    display: flex;
    justify-content: center;
    text-decoration: none;

    div {
      width: auto;
      margin: 2rem 0;
      justify-self: center;
      @media screen and (max-width: 769px) {
        margin: 0;
      }
    }

    @media screen and (max-width: 769px) {
      margin: 2rem;
      align-self: center;
    }
  }
  @media screen and (max-width: 769px) {
    padding: 0;
  }

  @media screen and (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

`

const Episodes = () => {
  const [showInfo, setShowInfo] = useState<GeneralInfoTypes>();

  const episodeSelectedId: string = useSelector(
    (state: RootState) => state.showSelected.episodeId
  );

  const loadMainInfo = () => {
    getEpisodeMainInfo(episodeSelectedId as string).then((res: { data: SetStateAction<GeneralInfoTypes | undefined>; }) => {
      setShowInfo(res.data)
    })
  };

  useEffect(() => {
    loadMainInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Suspense fallback={<Loader />}>
      <Wrapper>
        <img src={showInfo?.image?.original} alt={showInfo?.name} />
        <Article
          name={showInfo?.name}
          summary={showInfo?.summary}
        />
      </Wrapper>
    </Suspense>
  );
}

export default Episodes;
