import { RotatingLines } from 'react-loader-spinner';
import { color } from '../../styles/theme';
import styled from '@emotion/styled';

export const Loader = () => (
  <LoaderWrapper>
    <RotatingLines
      visible={true}
      height="96"
      width="96"
      strokeColor={color.amber[400]}
      strokeWidth="3"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </LoaderWrapper>
);

/* --------------------------------- Styles --------------------------------- */

const LoaderWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});
