
import React from 'react';
import styled from 'styled-components';
import arrowIcon from '../assets/icon-arrow.svg';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #dcdcdc;
    z-index: 1;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
`;

const Icon = styled.img`
  background-color: #854dff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 10px;

  &:hover {
    background-color: black;
  }
`;

function ArrowButton({ onClick }) {
  return (
    <ButtonContainer>
      <Button onClick={onClick}>
        <Icon src={arrowIcon} alt="arrow" />
      </Button>
    </ButtonContainer>
  );
}

export default ArrowButton;
