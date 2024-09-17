import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { Colors } from "../colors";
import Error403Image from '../../../assets/400/e403.png';
import Error500Image from '../../../assets/400/e500.png';
import Error404Image from '../../../assets/400/e404.jpg';


export function E403() {
  return (
    <ErrorView>
      <ErrorText>
        <ErrorTitle style={{ fontWeight: 'bold' }}>Ops!... Acesso Negado! </ErrorTitle>
        Esse ambiente não faz parte da sua organização.
      </ErrorText>
      <ErrorImage source={Error403Image} resizeMode="contain" />
    </ErrorView>
  );
}

export function E404() {
  return (
    <ErrorView>
      <ErrorText>
        <ErrorTitle style={{ fontWeight: 'bold' }}>Ops!... Não Encontrado! </ErrorTitle>
        O ambiente que você está tentando acessar não existe ou foi removido.
      </ErrorText>
      <ErrorImage source={Error404Image} resizeMode="contain" />
    </ErrorView>
  );
}

export function E500() {
  return (
    <ErrorView>
      <ErrorText>
        <ErrorTitle style={{ fontWeight: 'bold' }}>Ops!... Sem Comunicação! </ErrorTitle>
        O ambiente que você está tentando acessar não está se comunicando.
      </ErrorText>
      <ErrorImage source={Error500Image} resizeMode="contain" />
    </ErrorView>
  );
}


const ErrorView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10% 0;
`;

const ErrorTitle = styled.Text`
  font-weight: 800;
  font-size: ${() => (Platform.OS === 'web' || Platform.OS === 'macos') ? '5vh' : '19px'};
  color: ${Colors.title};
`;

const ErrorText = styled.Text`
  text-align: center;
  font-size: ${() => (Platform.OS === 'web' || Platform.OS === 'macos') ? '5vh' : '19px'};
  color: ${Colors.title};
`;

const ErrorImage = styled.Image`
  width: 50%;
  aspect-ratio: 1;
  border-radius: ${() => (Platform.OS === 'web' || Platform.OS === 'macos') ? '1vh' : '7px'};
`;