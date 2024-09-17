import Swal from 'sweetalert2';
import { Colors } from '../colors';
import { Alert, Platform } from "react-native";

export function showAlert() {
    Swal.fire({
      title: '<strong style="color:red">Erro de Senha</strong>',
      text: 'As senhas não coincidem. Por favor, tente novamente.',
      icon: 'error',
      confirmButtonText: '<span style="color:dimgray">OK</span>',
      confirmButtonColor: Colors.background,
      background:'red'
    });
  }




export const ShowAlert = (title:string, message:string) => {
  if (Platform.OS === 'web') {

    window.alert(`${title}\n\n${message}`);
  } else {

    Alert.alert(title, message);
  }
};

