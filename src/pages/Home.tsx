import { useEffect, useState, Suspense } from 'react';
import styled from 'styled-components'
import { getShows } from '../api/services/tvmazeAPI';
import Grid from '../components/Grids/TVShowsGrid';
import Loader from '../components/Loader/Loader';

const Header = styled.div`
  background-color: #02182B;
  color: #ffffff;
  padding: 2rem 5rem;
  display: flex;

  p {
    margin: 0;
  }

  @media screen and (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

`
const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  margin-bottom: 0;
`

const Home = () => {
  const [TVshows, setTVshows] = useState([]);

  const loadTVShows = () => {
    getShows().then((res: { data: any; }) => {
      setTVshows(res.data as any)
    })
  };

  useEffect(() => {
    loadTVShows()
  }, [])

  return (
    <>
      <Header>
        <Title>
          REACT CHALLENGE - MOONGY
        </Title>
      </Header>
      <Suspense fallback={<Loader />}>
        <Grid TVShows={TVshows}></Grid>
      </Suspense>
    </>
  );
}

export default Home;
