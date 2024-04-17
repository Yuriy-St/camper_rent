import styled from '@emotion/styled';
import { palette } from '../../styles/theme';

const BASE_URL = import.meta.env.BASE_URL;

export const Icon = ({ id, width = '20', height = '20', fillColor }) => {
  return (
    <SvgIcon
      width={width}
      height={height}
      aria-label={`${id}-icon`}
      fillColor={fillColor}
    >
      <use href={`${BASE_URL}sprite.svg#${id}`}></use>
    </SvgIcon>
  );
};

/* --------------------------------- Styles --------------------------------- */

const SvgIcon = styled.svg(({ fillColor }) => ({
  fill: fillColor || palette.main,
}));
