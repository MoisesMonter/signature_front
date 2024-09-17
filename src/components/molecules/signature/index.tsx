import React, { useRef, useState } from 'react';
import { View, PanResponder, StyleSheet, Button, Modal, Image, Platform, Linking } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import ViewShot from 'react-native-view-shot';
import axios from 'axios';
import { ShowAlert } from '../../button/alert';
import { getToken } from '../../../storage/storeToken';
import styled from 'styled-components/native';
import { Colors, Pages_Colors } from '../../colors';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import CustomAlertModal from '../../button/CustomAlertModal';

export default function SignatureCapture({ onSaveSuccess }) {
  const navigation = useNavigation(); 
  const [paths, setPaths] = useState<string[]>([]);
  const [currentPath, setCurrentPath] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [capturedImageUri, setCapturedImageUri] = useState<string | null>(null); 
  const viewShotRef = useRef<ViewShot>(null);
  const drawingMatrix = useRef<{ x: number; y: number }[][]>([]);

  const [isNewModalAlertVisible, setIsNewModalAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStatusCode, setAlertStatusCode] = useState<number | undefined>(undefined);

  const ActualizeAlertVisible = () => {
    setIsNewModalAlertVisible(false)

  };

  
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (event) => {
        const { locationX, locationY } = event.nativeEvent;
        const newPath = `M${locationX},${locationY}`;
        setCurrentPath(newPath);
        drawingMatrix.current.push([{ x: locationX, y: locationY }]);
      },
      onPanResponderMove: (event) => {
        const { locationX, locationY } = event.nativeEvent;
        setCurrentPath((prevPath) => `${prevPath} L${locationX},${locationY}`);
        const lastIndex = drawingMatrix.current.length - 1;
        drawingMatrix.current[lastIndex].push({ x: locationX, y: locationY });
      },
      onPanResponderRelease: () => {
        if (currentPath) {
          setPaths((prevPaths) => [...prevPaths, currentPath]);
          setCurrentPath('');
        }
      },
    })
  ).current;

  const clearSignature = () => {
    setPaths([]);
    setCurrentPath('');
    drawingMatrix.current = [];
    setCapturedImageUri(null);
  };

  const handleSave = async () => {
    try {
      const uri = await viewShotRef.current?.capture({ format: 'png', quality: 0.9 });
      if (uri) {
        console.log('URI capturada:', uri);
        setCapturedImageUri(uri);
  
        let base64Image;
  

        if (Platform.OS !== 'web') {
          // No mobile, busca a URI e converte para blob
          const response = await fetch(uri);
          const blob = await response.blob();
          const reader = new FileReader();
  
          reader.onloadend = async () => {
            base64Image = reader.result as string;
  
            await enviarParaAPI(base64Image);
          };
  
          reader.readAsDataURL(blob);
        } else {
          
          base64Image = uri;
          await enviarParaAPI(base64Image);
        }
      }
    } catch (error) {

      ShowAlert("Erro", "Não foi possível capturar sua assinatura.");
      console.error("Erro ao capturar assinatura:", error);
    }
  };
  
  
  const enviarParaAPI = async (base64Image) => {
    try {
      const token = await getToken("auth_jrf");
      if (!token) {
        ShowAlert("Erro", "Token não encontrado.");
        return;
      }
  
      const response = await axios.patch(
        Platform.OS === 'web'
          ? 'http://127.0.0.1:8000/api/users/users/me/'
          : 'http://10.0.2.2:8000/api/users/users/me/',
        { 'my_signature': base64Image },  
        {
          headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log('Resposta da API:', response.data);
  
      if (response.status === 200) {
        setAlertTitle('Sucesso');
        setAlertMessage('Sua assinatura atualizada sucesso.');
        setAlertStatusCode(200);
        setIsNewModalAlertVisible(true); 
        // ShowAlert("Sucesso", "Sua assinatura foi enviada com sucesso.");
        setModalVisible(false);
        // if (Platform.OS === 'web') {
        //   window.location.href = '/user';
        // } 
        if (onSaveSuccess) {
          onSaveSuccess();
        }
        

      } else {
        // ShowAlert("Erro", "Não foi possível salvar sua assinatura.");
        setAlertTitle('Erro');
        setAlertMessage('Não foi possível salvar sua assinatura.');
        setAlertStatusCode(400);
        setIsNewModalAlertVisible(true); 
      }
    } catch (error) {
      // ShowAlert("Erro", "Não foi possível salvar sua assinatura.");
      // console.error("Erro ao salvar assinatura:", error);
      setAlertTitle('Erro');
      setAlertMessage('Não foi possível salvar sua assinatura.');
      setAlertStatusCode(400);
      setIsNewModalAlertVisible(true); 
    }
  };


  return (
    <View style={{ flex: 1 }}>
      <Button_input title="Assinars" onPress={() => setModalVisible(true)} ><Button_Text>Assinar</Button_Text></Button_input>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        style={{backgroundColor:Pages_Colors.icon_back_green}}
      >
        <View style={styles.modalContainer}>
          <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 0.9 }} style={styles.canvas}>
            <View {...panResponder.panHandlers} style={{ flex: 1 }}>
              <Svg height="100%" width="100%">
                {drawingMatrix.current.map((line, index) => {
                  const pathData = line.map((point, idx) => (idx === 0 ? `M${point.x},${point.y}` : `L${point.x},${point.y}`)).join(' ');
                  return <Path key={index} d={pathData} stroke="black" strokeWidth={2} fill="none" />;
                })}
                <Path d={currentPath} stroke="black" strokeWidth={2} fill="none" />
              </Svg>
            </View>
          </ViewShot>
          <View style={styles.controls}>
            <Button_input title="Limpar" onPress={clearSignature} ><Button_Text>Limpar</Button_Text></Button_input>
            <Button_input title="Salvar Assinatura" onPress={handleSave} ><Button_Text>Salvar</Button_Text></Button_input>
            <Button_input title="Fechar" onPress={() => setModalVisible(false)} ><Button_Text>Fechar</Button_Text></Button_input>
          </View>
          {/* {capturedImageUri && (
            <Image
              source={{ uri: capturedImageUri }}
              style={{ width: 100, height: 100, marginTop: 20 }}
            />
          )} */}
        </View>

        <Line/>
      </Modal>
      <CustomAlertModal
                    visible={isNewModalAlertVisible}
                    title={alertTitle}
                    message={alertMessage}
                    statusCode={alertStatusCode}
                    onDismiss={() => ActualizeAlertVisible()} 
                  />
    </View>
  );
}


const Button_input = styled.TouchableOpacity`

  background-color:${Colors.background};
  justify-content: center;
  align-items: center;
  border-radius:${(props:any)=>{
    if(Platform.OS === 'web') return '0.7vh';
    else return '10px';
  }};
  width:'auto';
  min-width:${(props:any)=>{
    if(Platform.OS === 'web') return '10vh';
    else return '80px';
  }};
  max-width:${(props:any)=>{
    if(Platform.OS === 'web') return '20vh';
    else return '80px';
  }};
  height:'auto';
  min-height:${(props:any)=>{
    if(Platform.OS === 'web') return '5vh';
    else return '45px';
  }};
  
  
`
const Button_Text = styled.Text`

  font-size:${(props:any)=>{
    if(Platform.OS === 'web') return '2vh';
    else return '16px';
  }};
  font-weight: 700;
  
  
`

const Line = styled.View`
width: 80%;
height: ${(props:any)=>{
  if(Platform.OS === 'web') return '0.1%'
  else return '0.1%'
}};
position: absolute;
justify-content: center;
margin-top: ${(props:any)=>{
  if(Platform.OS === 'web') return '24.5%'
  else return '101%'
}};
margin-left: 10%;
background-color: black;
`

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  canvas: {
    height: 150, 
    width: '90%',
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  lineContainer: {
    position: 'absolute',
    bottom: 80, 
    left: '5%',
    right: '5%',
    height: 2,
  },
  signatureLine: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    gap: 5,
  },
});

