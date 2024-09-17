import React from 'react';
import { Modal, Platform } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../colors';

interface AlertWithOptionProps {
  visible: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const AlertWithOption: React.FC<AlertWithOptionProps> = ({
  visible,
  title,
  message,
  confirmText = 'OK',
  cancelText = 'Cancelar',
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <Backdrop onPress={onCancel}>
        <ModalContainer>
          <ModalTitle>{title}</ModalTitle>
          <ModalMessage>{message}</ModalMessage>
          <ButtonContainer>
            <CancelButton onPress={onCancel}>
              <ButtonText>{cancelText}</ButtonText>
            </CancelButton>
            <ConfirmButton onPress={onConfirm}>
              <ButtonText>{confirmText}</ButtonText>
            </ConfirmButton>
          </ButtonContainer>
        </ModalContainer>
      </Backdrop>
    </Modal>
  );
};

export default AlertWithOption;


const Backdrop = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  width: ${Platform.OS === 'web' ? '40vh' : '280px'};
  padding: ${Platform.OS === 'web' ? '4vh' : '16px'};
  background-color: white;
  border-radius: 10px;
  align-items: center;
  elevation: 5;
`;

const ModalTitle = styled.Text`
  font-size: ${Platform.OS === 'web' ? '2.5vh' : '20px'};
  font-weight: bold;
  margin-bottom: ${Platform.OS === 'web' ? '2vh' : '8px'};
`;

const ModalMessage = styled.Text`
  font-size: ${Platform.OS === 'web' ? '2vh' : '16px'};
  margin-bottom: ${Platform.OS === 'web' ? '3vh' : '12px'};
  text-align: center;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const CancelButton = styled.TouchableOpacity`
  flex: 1;
  padding: ${Platform.OS === 'web' ? '1.5vh' : '12px'};
  margin-right: ${Platform.OS === 'web' ? '1vh' : '8px'};
  background-color: #ccc;
  border-radius: 5px;
  align-items: center;
`;

const ConfirmButton = styled.TouchableOpacity`
  flex: 1;
  padding: ${Platform.OS === 'web' ? '1.5vh' : '12px'};
  background-color: ${Colors.conatiner_green};
  border-radius: 5px;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: ${Platform.OS === 'web' ? '2vh' : '16px'};
  color: ${Colors.title};
  font-weight: bold;
`;