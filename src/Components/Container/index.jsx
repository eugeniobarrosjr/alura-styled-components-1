import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extract from '../Extract';

import styled from "styled-components";

const Container = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0 15vw;
`;

const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Content>
        <Conta />
        <Extract />
      </Content>
    </Container>
  );
};
