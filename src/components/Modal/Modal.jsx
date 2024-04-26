import styled from '@emotion/styled';
import { palette } from '../../styles/theme';
import { Backdrop } from './Backdrop';
import { useEffect } from 'react';

export const Modal = ({ isOpen = false }) => {
  return (
    <Backdrop isOpen={isOpen}>
      <ModalWindow>
        <ModalContainer>
          <ModalHeader>This is modal header</ModalHeader>
          <ModalContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            deserunt numquam officiis atque dolorem, nobis pariatur possimus
            necessitatibus reiciendis quis minus suscipit odit sint quae itaque
            cum fugit et sunt iure aliquid incidunt. Voluptas amet id ab
            obcaecati, maxime officia commodi perferendis sunt magnam, error
            eligendi dolorum dicta necessitatibus sint esse, odio at dolor
            numquam fuga! Voluptas consectetur expedita ipsum nesciunt esse
            nulla incidunt deleniti corrupti dolor? Praesentium molestias cumque
            repellat porro, exercitationem eum minima perferendis non optio.
            Molestiae, in. Ipsam qui, temporibus quo nesciunt distinctio
            suscipit adipisci voluptatum sapiente architecto iste tempora id,
            aspernatur expedita corrupti odit atque minima voluptate. Quos vel
            expedita velit cumque iste fugiat delectus quis neque unde earum.
            Necessitatibus at exercitationem quam ea eius commodi dignissimos
            sit. Illo voluptatum inventore facere soluta accusantium aperiam
            excepturi, adipisci qui deleniti quos voluptates exercitationem
            consequatur dignissimos minus architecto repellendus ipsa. Dolor
            repellat ullam doloribus obcaecati sint quibusdam, maxime quod quia
            commodi quidem quas consequatur qui ipsam ducimus voluptatibus
            incidunt in totam corporis quisquam voluptate doloremque facilis
            voluptas optio. Maxime beatae cupiditate voluptatem nisi accusantium
            ipsam commodi tempore totam harum minus at eligendi, voluptatum,
            asperiores optio quidem mollitia culpa quos eum laborum sed
            voluptatibus recusandae officia voluptates voluptas? Amet id,
            temporibus eum cum hic cupiditate magni ab laudantium, minus rem
            neque vel qui voluptas odit, exercitationem similique dignissimos
            ipsum culpa accusantium distinctio tempora necessitatibus odio
            veritatis. Asperiores, iure fuga quod voluptatem id atque
            repellendus culpa harum quo doloremque corporis voluptates aperiam
            incidunt magnam molestias officiis hic eos, esse quidem perferendis,
            consectetur doloribus officia deserunt possimus. Delectus ut,
            commodi accusantium tempora consectetur voluptatum corporis labore
            quaerat porro ullam sed accusamus! Consectetur, amet. A facere
            perferendis vero minima in cumque delectus dolorum architecto
            eveniet facilis reiciendis, quam ut quos, quae molestias laboriosam
            omnis commodi tempora assumenda at, odit quisquam doloremque. Quis
            esse praesentium, aliquam soluta earum voluptates sequi excepturi
            molestiae nulla quibusdam dicta! Ex officia sequi molestiae in
            molestias vero a quo voluptatem dolorum numquam cum, pariatur
            adipisci sit vitae nobis nostrum ea qui dignissimos! Ipsum
            excepturi, blanditiis consectetur quibusdam temporibus eum.
            Asperiores ab minus esse ullam voluptatem ipsa similique, impedit
            commodi temporibus culpa dicta repudiandae praesentium nostrum harum
            doloribus totam quaerat, animi consequuntur eius repellendus
            architecto magni expedita molestiae. Reprehenderit soluta tempore
            non perspiciatis suscipit? At molestias soluta vero! Cupiditate
            nobis nam ipsum eum in molestias laboriosam repudiandae totam sed
            sunt asperiores dolore quam sint consequatur, culpa quis doloremque
            error ex, blanditiis molestiae est! Maxime quisquam labore ullam, in
            temporibus dolorum culpa hic sequi quam sapiente eos aperiam tenetur
            eaque. Tempore atque aut, iusto fugiat fugit, dolore reprehenderit
            reiciendis ad maiores corrupti ratione necessitatibus recusandae
            labore assumenda, non delectus vitae? Neque dolores saepe sequi
            fugit perspiciatis commodi vero tempore maiores impedit quo, quaerat
            at cumque consequatur, ullam nemo nostrum. Sed ipsum voluptatem
            dolorum! Sint eaque magni molestiae esse iure quibusdam dolorem.
            Fugit dolores nemo sit, aut magni modi in quis quod voluptatibus
            consequuntur repellat esse minus nostrum vero voluptate cupiditate
            quisquam explicabo officia autem voluptatum iste ab cumque nihil.
            Neque.
          </ModalContent>
        </ModalContainer>
      </ModalWindow>
    </Backdrop>
  );
};

/* --------------------------------- Styles --------------------------------- */

const ModalWindow = styled.div({
  label: 'Modal',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 982,
  height: 720,
  backgroundColor: palette.background,
  borderRadius: 20,
  overflow: 'hidden',
  zIndex: 9997,
});

const ModalContainer = styled.div({
  label: 'ModalContainer',
  height: '100%',
  overflowY: 'scroll',
  padding: 40,
  '&::-webkit-scrollbar': {
    width: 8,
  },
});

const ModalHeader = styled.div({
  label: 'ModalHeader',
});

const ModalContent = styled.div({
  label: 'ModalContent',
});
