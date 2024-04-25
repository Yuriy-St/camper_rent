import styled from '@emotion/styled';
import { palette } from '../../styles/theme';

const BASE_URL = import.meta.env.BASE_URL;

export const Icon = ({
  id,
  width = '20',
  height = '20',
  strokeColor,
  fillColor,
}) => {
  return (
    <SvgIcon
      width={width}
      height={height}
      aria-label={`${id}-icon`}
      fillColor={fillColor}
      strokeColor={strokeColor}
    >
      <use href={`${BASE_URL}sprite.svg#${id}`}></use>
    </SvgIcon>
  );
};

/* --------------------------------- Styles --------------------------------- */

const SvgIcon = styled.svg(({ fillColor, strokeColor }) => ({
  label: 'Icon',
  fill: fillColor || palette.main,
  stroke: strokeColor,
}));
