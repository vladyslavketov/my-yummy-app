import { createPortal } from 'react-dom';
import { Spiner } from './Loading.styled';

const modalRoot = document.querySelector('#modal-root');

const Loading = () => {
  return createPortal (
    <Spiner>
      <div className="lds-ripple"><div></div><div></div></div>
    </Spiner>,
    modalRoot
  );
};

export default Loading;