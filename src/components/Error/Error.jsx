import styled from '@emotion/styled';
import { palette } from '../../styles/theme';
import { spacing } from '../../styles/units';

export const Error = ({ message }) => {
  return (
    <ErrorBox>
      <Message>{message}</Message>
    </ErrorBox>
  );
};

/* --------------------------------- Styles --------------------------------- */

const ErrorBox = styled.div({
  label: 'ErrorBox',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '100%',
  minHeight: 200,
  color: palette.error.onSurface,
  backgroundColor: palette.error.surface,
  border: `solid 1px ${palette.error.stroke}`,
  padding: `${spacing.small}px`,
});

const Message = styled.p({});
