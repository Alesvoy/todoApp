import styled from 'styled-components';

import image from './assets/bg-mobile-light.jpg';

const Main = styled.main`
  min-height: 100vh;
  width: 37.5rem;
  background: url(${image});
  background-position: start;
  background-size: auto;
  background-repeat: no-repeat;
  padding: 0 2.4rem;
`;

export default Main;
