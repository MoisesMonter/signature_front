


import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Platform, Button, Text, ScrollView, Dimensions, Image } from 'react-native';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import { getToken } from '../../../../storage/storeToken';
import styled from 'styled-components/native';
import { Colors, Header_Colors } from '../../../../components/colors';
import { Web_Image, Web_DownloadButton } from '../../../../components/organisms/finalizedData/Web_Body';
import { Mob_Image,Mob_DownloadButton } from '../../../../components/organisms/finalizedData/Mob_Body';
import Img_Test from '../../../../../assets/header/capivara.jpg';
import ViewShot from 'react-native-view-shot';

export default function Data() {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState(null);
  const viewShotRef = useRef();
  const [loading, setLoading] = useState(true);
  const [signatures, setSignatures] = useState([]);
  const [signatureslenght, setSignatureLenght] = useState('1')
  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width * 9 / 16)/4;
  const imageWidth = dimensions.width/4;

  const win = Dimensions.get('window');

  const fetchSignatureLists = async () => {
    setLoading(true); 
  
    try {
      const token = await getToken("auth_jrf");
  
      if (!token) {
        console.error("Erro: Token não encontrado.");
        setLoading(false); 
        router.push(`/home`); 
        return;
      }
  
      const url = Platform.OS === "web"
        ? `http://127.0.0.1:8000/api/signatures/signature_lists/${id}/`
        : `http://10.0.2.2:8000/api/signatures/signature_lists/${id}/`;
  
      const response = await axios.get(url, {
        headers: { Authorization: `token ${token}` },
      });
  
      if (response.status === 200) {
        const item = response.data;
        setSignatures(item.signatures || []);
        setSignatureLenght(item.signatures.lenght)
        if (!item || Object.keys(item).length === 0) {
          console.error("Erro: Resposta vazia");
          setLoading(false); 
          router.push(`/home`); 
          return;
        }
  

        if (item.is_active === false && item.is_completed === true) {
          setLoading(false); 
          return; 
        } else {

          setLoading(false);
          router.push(`/home`);
          return;
        }
      } else {
        console.error("Erro ao buscar os dados. Status:", response.status);
        setLoading(false); 
        router.push(`/home`);
        return;
      }
    } catch (error) {
      console.error("Erro ao buscar os dados da lista de assinaturas:", error);
      setLoading(false);
      router.push(`/home`); 
    }
  };

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        await fetchSignatureLists();
        await fetchSignatures(); 
      };
  
      fetchData(); 

    }, [])
  );
  // useEffect(() => {
  //   fetchSignatureLists();
  //   fetchSignatures(); 
  // }, [id]); 

  const fetchSignatures = async () => {
    try {
      const token = await getToken('auth_jrf');
      if (!token) {
        console.error('Erro', 'Token não encontrado.');
        return;
      }

      const url =
        Platform.OS === 'web'
          ? `http://localhost:8000/api/signatures/signature_lists/${id}/combine-signatures/`
          : `http://10.0.2.2:8000/api/signatures/signature_lists/${id}/combine-signatures/`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `token ${token}`,
        },
        responseType: 'blob', //esqueci dessa bagaça!
      });

      if (response.status === 200 && response.data) {
        const blobUrl = URL.createObjectURL(response.data);
        setData(blobUrl);
      } else {
        console.error('Erro: Estrutura inesperada', response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar assinaturas:', error);
    }
  };

  const handleDownload = () => {
    if (Platform.OS === 'web' && data) {
      const link = document.createElement('a');
      link.href = data;
      link.download = 'combined_signatures.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.warn('Download não é suportado nesta plataforma ou imagem não encontrada.');
    }
  };

  return (
    <>
      {Platform.OS === 'web' ? (
        <Web_Sub_Container>
          <Web_View_Title>
            <Web_Title>Lista do {id} Finalizados</Web_Title>
          </Web_View_Title>
          <Web_Bar_Info  style={{
                shadowColor: "#000000",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 7,
                elevation: 3,
                paddingTop:'3vh'
              }}>
            <Web_Row_Itens>

             {signatures.filter(signature => signature.flag !== 3).map((signature, index) =>(  
             
             <Image
             resizeMode={'cover'}
             style={{
               width: 'auto',
               height: 'auto',
               minWidth:'48vh',
               minHeight:'10vh',
               resizeMode: "contain",

               alignSelf: "center",
               borderRadius: '1vh',
             }}

             source={{uri: signature.data}}
           />
             
             ))} 

             </Web_Row_Itens>

            <Web_DownloadButton onPress={handleDownload} style={{backgroundColor:Colors.background,width:'30vh', alignSelf:'center',marginTop:'3vh'}}>
              <Web_Text >Capturar e Baixar Imagem</Web_Text>
            </Web_DownloadButton>
          </Web_Bar_Info>
        </Web_Sub_Container>
      ) : (
        <Mob_Sub_Container>
        <Mob_View_Title>
          <Mob_Title>Lista do {id} Finalizados</Mob_Title>
        </Mob_View_Title>
        <Mob_Bar_Info>
          <Mob_Row_Itens>
            {signatures.filter(signature => signature.flag !== 3).map((signature, index) => (
              <Image
                key={index}
                resizeMode={'cover'}
                style={{
                  width: 'auto',
                  height: 'auto',
                  minWidth: 150,
                  minHeight: 50,
                  resizeMode: "contain",
                  alignSelf: "center",
                  borderRadius: 5,
                }}
                source={{ uri: signature.data }}
              />
            ))}
          </Mob_Row_Itens>
          <Mob_Download_Button onPress={handleDownload}>
            <Mob_Text>Capturar e Baixar Imagem</Mob_Text>
          </Mob_Download_Button>
        </Mob_Bar_Info>
      </Mob_Sub_Container>
      )}
    </>
  );
}

//styled Mob

export const Mob_Sub_Container = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: ${Colors.background};
`;

export const Mob_View_Title = styled.View`
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const Mob_Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${Colors.white};
`;

export const Mob_Bar_Info = styled.ScrollView`
  width: 100%;
  padding: 10px;
`;

export const Mob_Row_Itens = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Mob_Text = styled.Text`
  font-size: 16px;
  color: ${Colors.primary};
`;

export const Mob_Download_Button = styled.TouchableOpacity`
  background-color: ${Colors.background};
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
  align-self: center;
  background-color: ${Colors.New_White};
  border: 0.7px black;
  elevation:2;
`;

export const Web_Text = styled.Text`
  font-size: 2vh;
  font-weight: 600;
  elevation:5;

`
export const Web_Sub_Container = styled.View`
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  width: auto;
  height: auto;
  min-width: 100%;
`;

export const Web_View_Title = styled.View`
  flex: 1;
  flex-wrap: nowrap;
  justify-content: center;
  width: auto;
  min-width: 1vh;
  height: auto;
  max-height: 5vh;
  margin: 5vh 5vh 5vh 5vh;
  background-color: ${Colors.transparent};
`;

export const Web_Title = styled.Text`
  word-break: normal;
  width: auto;
    min-width: 60vh;
    max-width: 80vh;
  flex-wrap: nowrap;
  font-size: ${(1080 * 0.005)}vh;
  font-family: Arial;
  text-align: center;
  color: ${Colors.white};
  margin-left: 10vh;
  margin-right: 10vh;


  background-color: ${Header_Colors.background};
  border-radius: 0.5vh;
`;

export const Web_Bar_Info = styled.ScrollView`
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  max-width: 10vh;
  min-width: 76%;
  max-height: 40vh;
  min-height: 79.5vh;
  padding-bottom: 5vh;
  margin: 0vh 0vh 1vh 2vh;
  border-radius: 0.5vh;
`;

export const Web_Row_Itens = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  padding-left: 5vh;
  padding-right: 1vh;

  gap: 5vh;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  min-width: 100%;
  /* background-color: red; */

`