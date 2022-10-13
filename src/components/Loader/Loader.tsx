import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  left: 50vw;
  top: 50vh;
`

export default function CircularIndeterminate() {
  return (
    <Wrapper>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </Wrapper>
  );
}