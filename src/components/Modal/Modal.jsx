import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalElement } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  render() {
    return createPortal(
      <ModalOverlay className="overlay" onClick={this.handleBackdropClick}>
        <ModalElement className="modal">
          <h1>HAHAHAHHAHAAHHAHAHAH</h1>
          <img src="" alt="" />
        </ModalElement>
      </ModalOverlay>,
      modalRoot
    );
  }
}
