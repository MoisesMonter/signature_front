import React, { useState,useEffect } from "react";
import { Platform, Animated, View, Alert} from "react-native";
import Img_test from '../../../assets/header/capivara.jpg';
import Signature_img_1 from '../../../assets/test_sinature_Delete/Signature1.png';
import User_Page from '../../../assets/images/user_page.jpg';
import Lupa_Icon from 'react-native-vector-icons/FontAwesome';
import styled from "styled-components/native";
import { Web_Body,
   Web_Container,
    Web_Sub_Container,
     Web_View_Title,
      Web_Title,
       Web_Lupa_View,
        Web_Lupa_TextInput,
         Web_Bar_Info,
          Web_Flag_Sub_Title,
           Web_Sub_Title,
            Web_Sub_Bar_Info,
                      Web_Signature_Flag,
                       Web_Signature_Flag_Title,
                        Web_Pagination, Web_Pagination_Items,
                         Web_Pagination_Text, 
                         Web_Bar_Info_Advanced,
                         Web_Children_Column,
                         Web_Children_Input_View,
                         Web_Children_Input_Label,
                         Web_Children_Input,
                         Web_Children_Button,
                         Web_Children_Button_Exit_View,
                         Web_Children_Data_Image_Signature,
                         Web_Children_Button_Delete_View} from "./../../components/organisms/user/Web_Body";
                         import {
                          Mob_Body,
                          Mob_Container,
                          Mob_Sub_Container,
                          Mob_View_Title,
                          Mob_Title,
                          Mob_Flag_Sub_Title,
                          Mob_Sub_Title,
                          Mob_Children_Column,
                          Mob_Container_Photo,
                          Mob_Children_Input_View,
                          Mob_Children_Input_Label,
                          Mob_Children_Input,
                          Mob_Children_Button_Exit_View,
                          Mob_Children_Button_Delete_View,
                          Mob_Children_Button,
                          Mob_Children_Data_Image_Signature,
                          Mob_Children_Input_View_Save,
                          Mob_Children_Input_View_Info,
                        } from  "./../../components/organisms/user/Mob_Body";
import { Mob_Sub_Bar_Data_Titles_View, Mob_Sub_Bar_Data_Titles_Children, Mob_Sub_Bar_Data_Titles_Text, Mob_Data_List_Info_Data, Mob_Sub_Bar_Data_Data_View, Mob_Sub_Bar_Data_Titles_Text_2 } from  "./../../components/organisms/user/Mob_Body";
import { Web_Sub_Bar_Data_Titles_View, Web_Sub_Bar_Data_Titles_Children, Web_Sub_Bar_Data_Titles_Text, Web_List_Items, Web_Data_List_Info_Data, Web_Sub_Bar_Data_Data_View, Web_Sub_Bar_Data_Titles_Text_2 } from  "./../../components/organisms/user/Web_Body";
import { Colors, Flags_Colors, Home_Colors, Pages_Colors } from "../../components/colors";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { getToken } from "../../storage/storeToken";
import SignatureCapture from "../../components/molecules/signature";
import { ShowAlert } from "../../components/button/alert";





export default function User() {
  const route = useRoute();
  const { onSignOut } = route.params;
  const [shouldRefresh, setShouldRefresh] = useState(true);
  
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    image_url: "",
    signature: "", 
  });
  

  const [isNewModalAlertVisible, setIsNewModalAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStatusCode, setAlertStatusCode] = useState<number | undefined>(undefined);

  const ActualizeAlertVisible = () => {
    setIsNewModalAlertVisible(false)
    router.push(`http://localhost:8081/pageUser?id=${id}`);

  };

  const fetchUserData = async () => {
    try {
      const token = await getToken("auth_jrf");
      if (!token) {
        ShowAlert("Erro", "Token não encontrado.");
        return;
      }

      const response = await axios.get(
        Platform.OS === 'web' 
        ? 'http://localhost:8000/api/users/users/me/' 
        : 'http://10.0.2.2:8000/api/users/users/me/', {
        headers: {
          "Authorization": `token ${token}`,
        },
      });

      if (response.data) {
        setUserData({
          name: response.data.first_name || "Nome não disponível",
          email: response.data.email || "Email não disponível",
          image_url: response.data.photo_url || "",
          signature: response.data.my_signature || "",
        });
      }
    } catch (error) {
      ShowAlert("Erro", "Não foi possível buscar os dados do usuário.");
      console.error("Erro ao buscar dados do usuário:", error);
    }
  };


  useEffect(() => {
    if (shouldRefresh) {
      fetchUserData();
      setShouldRefresh(false); 
    }
  }, [shouldRefresh]); 
  

  const handleSignOut = () => {
    if (onSignOut) {
      onSignOut();
    } else {
      // ShowAlert("Erro", "Função de sign out não encontrada");
    }
  };
  const showSignatureAlert = () => {
    if (userData.signature) {
      // ShowAlert("Assinatura", "A assinatura foi carregada com sucesso.");
    } else {
      // ShowAlert("Erro", "Nenhuma assinatura encontrada.");
    }
  };
  
  
  showSignatureAlert();
  return (
    <>
      {Platform.OS === 'web' || Platform.OS === 'windows' ? (
        <View style={{ backgroundColor: 'white', height: "100%" }}>
          <Web_Container_IMG source={User_Page} />
          <Web_Sub_Container>
            <Web_View_Title style={{ marginLeft: '20vh' }}>
              <Web_Title>Configurações do Usuário</Web_Title>
            </Web_View_Title>

            <Web_Bar_Info
              style={{
                marginLeft: '20vh',
                shadowColor: "#000000",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 7,
                elevation: 3,
              }}
            >
              <Web_Flag_Sub_Title>
                <Web_Sub_Title>Meus Dados</Web_Sub_Title>
              </Web_Flag_Sub_Title>
              <Web_Children_Column>
                <Web_Container_Photo source={{ uri: userData.image_url || Img_test }} />

                <Web_Children_Input_View>
                  <Web_Children_Input_Label>Nome: </Web_Children_Input_Label>
                  <Web_Children_Input value={userData.name} editable={false} />
                </Web_Children_Input_View>

                <Web_Children_Input_View>
                  <Web_Children_Input_Label>Email: </Web_Children_Input_Label>
                  <Web_Children_Input value={userData.email} editable={false} />
                </Web_Children_Input_View>

                <Web_Children_Button_Exit_View>
                  <Web_Children_Button $type={'exit'} onPress={handleSignOut}>
                    <Web_Children_Input_Label>Sair</Web_Children_Input_Label>
                  </Web_Children_Button>
                </Web_Children_Button_Exit_View>

                <Web_Children_Input_View>
                  <Web_Children_Input_Label>Sua Assinatura: </Web_Children_Input_Label>
                  {userData.signature ? (
                    <Web_Children_Data_Image_Signature 
                      source={{ uri: userData.signature}} 
                    />
                  ) : (
                    <Web_Children_Input_Label>Sem assinatura disponível</Web_Children_Input_Label>
                  )}
                  <SignatureCapture  onSaveSuccess={() => setShouldRefresh(true)}/>
                </Web_Children_Input_View>

              </Web_Children_Column>
            </Web_Bar_Info>

            <Web_Bar_Info_Advanced
              style={{
                marginLeft: '20vh',
                justifyContent: 'center',
                shadowColor: "#000000",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 7,
                elevation: 3,
              }}
            >
              <Web_Flag_Sub_Title>
                <Web_Sub_Title>Configurações Avançadas</Web_Sub_Title>
              </Web_Flag_Sub_Title>
              <Web_Children_Column>
                <Web_Children_Button_Delete_View style={{ backgroundColor: Colors.gray_30, padding: '2vh' }}>
                  <Web_Children_Input_Label>Deseja Deletar sua conta? </Web_Children_Input_Label>
                  <Web_Children_Button $type={'exit'}>
                    <Web_Children_Input_Label>Encerrar</Web_Children_Input_Label>
                  </Web_Children_Button>
                </Web_Children_Button_Delete_View>
              </Web_Children_Column>
            </Web_Bar_Info_Advanced>
          </Web_Sub_Container>
        </View>
      ) : (
        <Mob_Container>
          <Mob_Sub_Container>
            <Mob_Title>Configurações do Usuário</Mob_Title>
            <Mob_Flag_Sub_Title>
              <Mob_Sub_Title>Meus Dados</Mob_Sub_Title>
            </Mob_Flag_Sub_Title>
            <Mob_Children_Column>
              <Mob_Children_Input_View_Info>
                <Mob_Container_Photo source={userData.image_url ? { uri: userData.image_url } : Img_test} />
                <Mob_Children_Input_View>
                  <Mob_Children_Input_Label>Nome</Mob_Children_Input_Label>
                  <Mob_Children_Input value={userData.name} editable={false} />
                </Mob_Children_Input_View>
                <Mob_Children_Input_View>
                  <Mob_Children_Input_Label>Gmail</Mob_Children_Input_Label>
                  <Mob_Children_Input value={userData.email} editable={false} />
                </Mob_Children_Input_View>
                <Mob_Children_Button $type={"exit"} onPress={handleSignOut}>
                  <Mob_Children_Input_Label>Sair</Mob_Children_Input_Label>
                </Mob_Children_Button>
              </Mob_Children_Input_View_Info>

              <Mob_Children_Input_View_Save>
                <Mob_Children_Input_Label>Sua Assinatura</Mob_Children_Input_Label>
                {userData.signature ? (
                  <Mob_Children_Data_Image_Signature 
                  
                    source={{ uri: userData.signature }} 
                  />
                ) : (
                  <Mob_Children_Input_Label>Sem assinatura disponível</Mob_Children_Input_Label>
                )}
                             <SignatureCapture  onSaveSuccess={() => setShouldRefresh(true)}/>
              </Mob_Children_Input_View_Save>

              <Mob_Children_Button_Delete_View style={{ backgroundColor: Colors.gray_30 }}>
                <Mob_Children_Input_Label>
                  Deseja Deletar sua conta?
                </Mob_Children_Input_Label>
                <Mob_Children_Button $type={"exit"}>
                  <Mob_Children_Input_Label>Encerrar</Mob_Children_Input_Label>
                </Mob_Children_Button>
              </Mob_Children_Button_Delete_View>
            </Mob_Children_Column>
          </Mob_Sub_Container>
        </Mob_Container>
      )}
    </>
  );
}



export const Web_Group_Info_Detail_View = styled.View`
  flex:1;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: auto;
  width: auto;
  max-width: 100%;
  min-width: 30vh;
  height: auto;
  max-height: 7vh;
  min-height: 7vh;
  margin-top: 1vh;

`

export const Web_SubGroup_Info_Detail_View = styled.View<{$styles:any}>`
flex:1;
justify-content: ${(props:any)=>{
  return props.$styles
}};
flex-direction: row;
align-items: center;
width: auto;
min-width: 5vh;
max-width: 75vh;
padding:0vh 1vh 0vh 1vh;
`

export const Web_Button_Info_Detail_View = styled.TouchableOpacity<{$Type_B:string; $ActiveFilter:string}>`
font-family: Arial;
font-size: 2vh;
width: auto;
justify-content: center;
align-items: center;
min-width: 23.5vh;
max-width: 10vh;
height: 6vh;
font-weight: 700;
color:${(props:any)=>{
  if(props.$ActiveFilter === 'descartados') return Colors.New_White;
  else if(props.$Type_B == 'End') return Colors.red;
  else if(props.$Type_B == 'Create') return Colors.white;
  else return Colors.black;
}};


border-radius: 0.5vh;
`

export const Web_Container_Photo = styled.Image`

align-self: center;
width: auto;
height: auto;
min-height: 14vh;
max-height: 14vh;
min-width: 14vh;
max-width: 14vh;
border-radius: 7vh;

`
export const Web_Container_IMG = styled.Image`

position: absolute;
margin-left: 70vh;
width: auto;
height: auto;
min-height: 100vh;
max-height: 60vh;
min-width: 150vh;
max-width: 100vh;

`
const Web_Line = styled.View`
  width: 100%;
  height: 0.1vh;
  background-color: ${Colors.gray_70}; 
  /* margin: 20px ;  */
`;






