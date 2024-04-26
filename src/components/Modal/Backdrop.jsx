import styled from '@emotion/styled';
import { zIndex } from '../../styles/units';
import { palette } from '../../styles/theme';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export const Backdrop = ({ isOpen, onCloseModal, children }) => {
  isOpen
    ? document.body.classList.add('lock')
    : document.body.classList.remove('lock');

  return createPortal(
    isOpen && <BackdropBox>{children}</BackdropBox>,
    modalRoot
  );
};

/* --------------------------------- Styles --------------------------------- */

const BackdropBox = styled.div({
  label: 'Backdrop',
  position: 'fixed',
  zIndex: zIndex.backdrop,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: 'hidden',
  backgroundColor: palette.backdropBg,
  backdropFilter: 'blur(4px)',
});
