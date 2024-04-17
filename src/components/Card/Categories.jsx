import styled from '@emotion/styled';
import { CategoryItem } from './CategoryItem';

export const Categories = ({ items }) => {
  return (
    <CategoriesList>
      {items.map(({ id, value }) => (
        <CategoryItem key={id} category={id} value={value} />
      ))}
    </CategoriesList>
  );
};

/* --------------------------------- Styles --------------------------------- */

const CategoriesList = styled.ul({
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
});
