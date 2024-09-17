import React, { useState, useEffect } from 'react';
import { Modal, TouchableOpacity, Platform } from 'react-native';
import styled from 'styled-components/native';

interface CustomAlertModalProps {
  visible: boolean;
  title: string;
  message: string;
  statusCode?: number; 
  onDismiss: () => void;
}

export default function CustomAlertModal({ visible, title, message, statusCode, onDismiss }: CustomAlertModalProps) {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onDismiss}
    >
      <Backdrop activeOpacity={1} onPress={onDismiss}>
        <ModalContainer activeOpacity={1} statusCode={statusCode}>
          <Title>{title}</Title>
          <Message>{message}</Message>
          <CloseButton onPress={onDismiss}>
            <ButtonText>Fechar</ButtonText>
          </CloseButton>
        </ModalContainer>
      </Backdrop>
    </Modal>
  );
}



const Backdrop = styled(TouchableOpacity)`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled(TouchableOpacity)<{ statusCode?: number }>`
  width: ${Platform.OS === 'web' ? '30vh' : '300px'};
  padding: ${Platform.OS === 'web' ? '2vh' : '20px'};
  background-color: ${(props: any) => (props.statusCode === 200 ? '#d4edda' : '#f8d7da')}; 
  border-left-width:  ${Platform.OS === 'web' ? '0.7vh' : '5px'};
  border-left-color: ${(props: any) => (props.statusCode === 200 ? '#28a745' : '#dc3545')};
  border-radius:  ${Platform.OS === 'web' ? '1vh' : '10px'};
  align-items: center;

`;

const Title = styled.Text`
  font-size: ${Platform.OS === 'web' ? '2.5vh' : '18px'};
  font-weight: bold;
  margin-bottom: ${Platform.OS === 'web' ? '1vh' : '10px'};
`;

const Message = styled.Text`
  font-size: ${Platform.OS === 'web' ? '2vh' : '16px'};
  margin-bottom: ${Platform.OS === 'web' ? '2vh' : '20px'};
  text-align: center;
`;

const CloseButton = styled(TouchableOpacity)`
  background-color: #007bff;
  padding: ${Platform.OS === 'web' ? '1vh' : '10px'};
  border-radius:  ${Platform.OS === 'web' ? '0.7vh' : '5px'};
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: ${Platform.OS === 'web' ? '2vh' : '14px'};
`;