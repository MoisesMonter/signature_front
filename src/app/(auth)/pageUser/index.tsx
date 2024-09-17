
import React, { useState, useEffect } from "react";
import { Platform, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useRouter, useLocalSearchParams, router } from "expo-router";  
import Img_test from '../../../../assets/header/capivara.jpg';
import Not_Img from '../../../../assets/perfil/not_image.png'
import Signature_img_1 from '../../../../assets/test_sinature_Delete/Signature1.png';
import Page_Signature_img from '../../../../assets/images/page_signature.png';
import { getToken } from "../../../storage/storeToken";
import { Colors,Pages_Colors } from "./../../../components/colors";
import { Web_Body,
   Web_Container,
    Web_Sub_Container,
     Web_View_Title,
      Web_Title,
      Web_Bar_Info,
      Web_Flag_Sub_Title,
      Web_Sub_Title,
      Web_Sub_Bar_Data_image,
      Web_Sub_Container_Children,
      Web_Children_Column,
      Web_Childen_Data_List_View,
      Web_Children_Flag_Sub_Title,
      Web_Children_Sub_Title,
      Web_Children_Data_Info_View,
      Web_Children_Data_Info_Text,
      Web_Children_Data_Info_Input,
      Web_Children_Data_Info_TextInputPass,
      Web_List_Input_ToggleContainer,
      Web_List_Input_ToggleCircle,
      Web_Children_Footer,
      Web_Children_Footer_Button,
      Web_Children_Footer_Button_Text,
      Web_Children_Footer_Children,
      Web_Children_Page_Button,
      Web_Children_Page_Button_Text,
      Web_Children_Page,
      Web_List_Data_People_Signature,
      Web_List_Data_People_Signature_Scroll,
      Web_List_Data_People_Data_View,
      Web_List_Data_People_Data_Image,
      Web_List_Data_People_Data_Name,
      Web_List_Data_People_Signature_Scroll_2,
      Web_List_Data_People_Data_View_2,
      Web_List_Data_People_Data_Image_2,
      Web_Children_Data_Info_View_Children,
      Web_List_Data_People_Data_Image_Signature,

      } from "./../../../components/organisms/pageUser/Web_Body";
import { E403, E404, E500 } from "../../../components/error/info";
import LoadingComponent from "../../../components/error/await";
import { ShowAlert, showAlert } from "../../../components/button/alert";
import { Ionicons } from "@expo/vector-icons";
import CustomAlertModal from "../../../components/button/CustomAlertModal";
import Data from "../finalized/data";





export default function PageUser() {
  const { id } = useLocalSearchParams();
  const effectiveId = id || '-1';
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [inputPassword, setInputPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const [formData, setFormData] = useState({
    id: '-1',
    owner: {
      first_name: '',
      email: '',
      photo_url: '',
    },
    title: '',
    description: '',
    start_date: '',
    end_date: '',
    password: '',
  });


  const [signature, setSignature] = useState(null);

  const [isNewModalAlertVisible, setIsNewModalAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStatusCode, setAlertStatusCode] = useState<number | undefined>(undefined);

  const ActualizeAlertVisible = () => {
    setIsNewModalAlertVisible(false)
    if (Platform.OS === 'web'){
      router.push(`http://localhost:8081/pageUser?id=${id}`);
    }
    router.push(`/pageUser?id=${id}`);
   

  };

  const fetchData = async (password = '') => {
    try {
      const response = await fetch(
        Platform.OS === "web"
          ? `http://127.0.0.1:8000/api/signatures/signature_lists/${effectiveId}/public-view/${password ? `?password=${password}` : ''}`
          : `http://10.0.2.2:8000/api/signatures/signature_lists/${effectiveId}/public-view/${password ? `?password=${password}` : ''}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        setFormData(data); 
        setError('');
        setIsPasswordCorrect(true); 
      } else if (response.status === 403) {
        setError('403');
        setIsPasswordCorrect(false);
      } else if (response.status === 404) {
        setError('404');
      }
    } catch (error) {
      if (error.response && error.response.status) {
        if (error.response.status === 403) {
          setError('403');
        } else if (error.response.status === 404) {
          setError('404');
        }
      } else {
        setError('500');
      }
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    const fetchData = async (password = '') => {
      try {
        const response = await fetch(
          Platform.OS === "web"
            ? `http://127.0.0.1:8000/api/signatures/signature_lists/${effectiveId}/public-view/${password ? `?password=${password}` : ''}`
            : `http://10.0.2.2:8000/api/signatures/signature_lists/${effectiveId}/public-view/${password ? `?password=${password}` : ''}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        if (response.status === 200) {
          const data = await response.json();
          setFormData(data); 
          setError('');
          setIsPasswordCorrect(true); 
        } else if (response.status === 403) {
          setError('403');
          setIsPasswordCorrect(false);
        } else if (response.status === 404) {
          setError('404');
        }
      } catch (error) {
        if (error.response && error.response.status) {
          if (error.response.status === 403) {
            setError('403');
          } else if (error.response.status === 404) {
            setError('404');
          }
        } else {
          setError('500');
        }
      } finally {
        setLoading(false);
      }
    };

    const fetchUserSignature = async () => {
      try {
        const token = await getToken("auth_jrf");
        if (!token) {
          // ShowAlert("Erro", "Token não encontrado.");
          router.replace("(public)");
          return;
        }

        const response = await fetch(
          Platform.OS === "web"
            ? `http://127.0.0.1:8000/api/users/users/me/`
            : `http://10.0.2.2:8000/api/users/users/me/`,
          {
            method: "GET",
            headers: {
              "Authorization": `Token ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          const userData = await response.json();
          setSignature(userData.my_signature);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do usuário:", error);
      }
    };
  
    fetchData();
    fetchUserSignature();
  }, [effectiveId]);

  const handlePasswordSubmit = async () => {
    setLoading(true);
    setError('');
    await fetchData(inputPassword);
    setLoading(false);
  };
  
  if (loading) {
    return <LoadingComponent />;
  }
  
  if (error === '403' && !isPasswordCorrect) {
    return (
      <PasswordContainer>
        <PasswordInput
          placeholder="Digite a senha para acessar"
          secureTextEntry={!isPasswordVisible}
          value={inputPassword}
          onChangeText={setInputPassword}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
          <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={Platform.OS === 'web' ? '3.5vh' : 24} color="gray" />
        </TouchableOpacity>
        <SubmitButton onPress={handlePasswordSubmit}>
          <SubmitButtonText>Confirmar</SubmitButtonText>
        </SubmitButton>
      </PasswordContainer>
    );
  } else if (error === '404') {
    return <E404 />;
  } else if (error === '500') {
    return <E500 />;
  }

 
  
  const handleConfirm = async () => {
    try {
      const token = await getToken("auth_jrf");
      if (!token) {
        // ShowAlert("Erro", "Token não encontrado.");
        router.replace("(public)");
        return;
      }

      const postData = {
        signature_list: effectiveId,
        data: signature,
        flag: 0,
      };

      const response = await fetch(
        Platform.OS === "web"
          ? `http://127.0.0.1:8000/api/signatures/signatures/`
          : `http://10.0.2.2:8000/api/signatures/signatures/`,
        {
          method: "POST",
          headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (response.status === 201) {
        // ShowAlert("Sucesso", "Sua assinatura foi enviada com sucesso.");
        // router.push(`http://localhost:8081/pageUser?id=${id}`);
        setAlertTitle('Sucesso');
        setAlertMessage('Sua assinatura foi enviada com sucesso.');
        setAlertStatusCode(200);
        setIsNewModalAlertVisible(true); 

      } else {
        // ShowAlert("Erro", "Não foi possível enviar sua assinatura.");
        console.error("Erro ao deletar a assinatura:", error);
        // ShowAlert("Erro", "Não foi possível deletar a assinatura.");
        setAlertTitle('Erro');
        setAlertMessage("Este formulário encontra-se, fechado.")
        setAlertStatusCode(400);
        setIsNewModalAlertVisible(true); 
      }
    } catch (error) {
      console.error("Erro ao enviar a assinatura:", error);
      // ShowAlert("Erro", "Ocorreu um erro ao enviar sua assinatura.");
      // console.error("Ocorreu um erro ao enviar sua assinatura.", error);
      // ShowAlert("Erro", "Não foi possível deletar a assinatura.");
      setAlertTitle('Erro');
      setAlertMessage("Ocorreu um erro ao enviar sua assinatura.")
      setAlertStatusCode(400);
      setIsNewModalAlertVisible(true); 
    }
  };
  return (
    <>
      {Platform.OS === 'web' || Platform.OS === 'windows' ? (
          <Web_Container>
          <Web_Sub_Container>
            <Web_View_Title>
              <Web_Title>Lista de Assinatura {  formData.id } </Web_Title>
            </Web_View_Title>

            <Web_Bar_Info
              style={{
                shadowColor: "#000000",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 7,
                elevation: 3,
              }}
            >

              <Web_Sub_Container_Children>

                <Web_Children_Column $Widths="112" style={{backgroundColor:'white'}}>
                  <Web_Flag_Sub_Title>
                  <Web_Sub_Title>Informações da Publicação</Web_Sub_Title>
                  </Web_Flag_Sub_Title>
 

                  <Web_Sub_Container_Column_Children_People_Data style={{marginTop:'1.5vh'}} >
                    <Web_Sub_Container_Column_Children_People_Data_2>
                      <Web_Children_Sub_Title> Criado Por</Web_Children_Sub_Title>
                      <Web_List_Data_People_Data_Image  style={{marginTop:'1.5vh'}}   source={formData && formData.owner && formData.owner.photo_url ? { uri: formData.owner.photo_url } : Not_Img} />
                    </Web_Sub_Container_Column_Children_People_Data_2>

                  <Web_Sub_Container_Column_Children_People_Data_Form style={{alignSelf:'center'}}>
               
                  
                  <Web_Children_Data_Info_Input $sizeW="40" value={formData.owner ? formData.owner.first_name : ''}
                  editable={false}
/> 

                  <Web_Children_Data_Info_Input $sizeW="40"value={formData.owner ? formData.owner.email : ''}
                  editable={false}/>

                  </Web_Sub_Container_Column_Children_People_Data_Form>



                  </Web_Sub_Container_Column_Children_People_Data>


                  <Web_Sub_Container_Column_Children_People_Data style={{marginLeft:'-1 vh',marginTop:'3.5vh'}} >
                  
                  <Web_Sub_Container_Column_Children_People_Data_3 style={{marginLeft:'1vh'}} >
                    <Web_Children_Sub_Title> Titulo</Web_Children_Sub_Title>

                    <Web_Children_Data_Info_Input $sizeW="20"  value={formData.title}
                    editable={false}/>
                  </Web_Sub_Container_Column_Children_People_Data_3 >

                  <Web_Sub_Container_Column_Children_People_Data_3  style={{marginLeft:'1vh'}}>
                    <Web_Children_Sub_Title> Data Abertura</Web_Children_Sub_Title>

                    <Web_Children_Data_Info_Input $sizeW="18"     value={formData.start_date ? formData.start_date.split('T')[0] : ''} 
                    editable={false}/>
                  </Web_Sub_Container_Column_Children_People_Data_3>
                  
                  <Web_Sub_Container_Column_Children_People_Data_3 style={{marginLeft:'1vh'}}>
                    <Web_Children_Sub_Title> Data do Fim</Web_Children_Sub_Title>

                    <Web_Children_Data_Info_Input $sizeW="18"   value={formData.end_date ? formData.end_date.split('T')[0] : 'N/A'} 
                    editable={false}/>

  



                  </Web_Sub_Container_Column_Children_People_Data_3>

                </Web_Sub_Container_Column_Children_People_Data>

                <Web_Sub_Container_Column_Children_People_Data_3 style={{marginTop:'-3.5vh',marginLeft:'2vh'}}>
                  <Web_Children_Sub_Title> Descrição</Web_Children_Sub_Title>

                  <Web_Children_Data_Info_Input $sizeW="62"  value={formData.description}  style={{height:'20vh'}}
                  editable={false} multiline={true}  />
                </Web_Sub_Container_Column_Children_People_Data_3 >
               


                <Web_Sub_Container_People_Signature style={{gap:"2vh"}}>

                  <Web_Children_Sub_Title> Sua Assinatura</Web_Children_Sub_Title>
                  <Mob_Signature_Image source={signature ? { uri: signature } : Not_Img} />
                  <Mob_Button onPress={handleConfirm}>
                    <Mob_Button_Text>Confirme</Mob_Button_Text>
                  </Mob_Button>

                </Web_Sub_Container_People_Signature>


                </Web_Children_Column>

                {/* Lista dos usuários */}
                <Web_Children_Column $Widths="35" $direction="row" >
                  <Web_List_Data_People_Data_Image_2 source={Page_Signature_img}/>

                </Web_Children_Column>
              </Web_Sub_Container_Children>
            </Web_Bar_Info>            
          </Web_Sub_Container>
          <CustomAlertModal
                    visible={isNewModalAlertVisible}
                    title={alertTitle}
                    message={alertMessage}
                    statusCode={alertStatusCode}
                    onDismiss={() => ActualizeAlertVisible()} 
                  />
        </Web_Container>
      ) : (
        <Mob_Container>
          <Mob_ScrollView>
            <Mob_Title>Informações do Usuário</Mob_Title>
            <Mob_Info_Container>
            <Mob_Section>
              <Mob_Signature_Container>
                <Mob_Label style={{fontWeight:800, color: Colors.title}}>Criado Por</Mob_Label>
                <Mob_Image source={{ uri: formData.owner.photo_url}} />
                <Mob_Label style={{fontWeight:700, color: Colors.title}}>{formData.owner.first_name}</Mob_Label>
                <Mob_Label style={{fontWeight:500, color: Colors.title}}>{formData.owner.email}</Mob_Label>
              </Mob_Signature_Container>


                <Mob_Label style={{fontWeight:500, color: Colors.title}}>Titulo</Mob_Label>
                <Mob_Input editable={false} value={formData.title} />
                <Mob_Label style={{fontWeight:500, color: Colors.title}}>Descrição</Mob_Label>
                <Mob_Input editable={false} value={formData.description} />

                <Mob_Signature_Container style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <Mob_Signature_Container>
                  <Mob_Label style={{fontWeight:500, color: Colors.title}}>Data do Inicio</Mob_Label>
                  <Mob_Input editable={false} value={formData.start_date ? formData.start_date.split('T')[0] : 'N/A'}/>
                  </Mob_Signature_Container>
                  <Mob_Signature_Container>
                  <Mob_Label style={{fontWeight:500, color: Colors.title}}>Data do Fim</Mob_Label>
                  <Mob_Input editable={false} value={formData.end_date ? formData.end_date.split('T')[0] : 'N/A'}/>
                  </Mob_Signature_Container>
                </Mob_Signature_Container>
                <Mob_Signature_Container>
                  <Mob_Label>Sua Assinatura</Mob_Label>
                  <Mob_Signature_Image style={{borderRadius:10,margin:5}} source={signature ? { uri: signature } : Not_Img} />
                  <Mob_Button  onPress={handleConfirm}>
                    <Mob_Button_Text>Confirme</Mob_Button_Text>
                  </Mob_Button>
                </Mob_Signature_Container>
              </Mob_Section>

            </Mob_Info_Container>
          </Mob_ScrollView>
          <CustomAlertModal
                    visible={isNewModalAlertVisible}
                    title={alertTitle}
                    message={alertMessage}
                    statusCode={alertStatusCode}
                    onDismiss={() => ActualizeAlertVisible()} 
                  />
      
        </Mob_Container>
      )}
    </>
  );
}


const PasswordContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${Platform.OS === 'web' ? '5vh' : '20px'};
`;

const PasswordInput = styled.TextInput`
  width: ${Platform.OS === 'web' ? '50vh' : '80%'};
  padding: ${Platform.OS === 'web' ? '2vh' : '10px'};
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: ${Platform.OS === 'web' ? '4vh' : '20px'};
  font-size: ${Platform.OS === 'web' ? '2.5vh' : '16px'};
  outline-color: ${Colors.primary};
`;

const SubmitButton = styled.TouchableOpacity`
  padding: ${Platform.OS === 'web' ? '2.5vh 5vh' : '10px 20px'};
  background-color: ${Colors.conatiner_green};
  border-radius: 5px;
`;

const SubmitButtonText = styled.Text`
  color: white;
  font-size: ${Platform.OS === 'web' ? '2.5vh' : '16px'};
`;


export const Web_Sub_Container_Column_Children_People_Data = styled.View`
  flex:1;
  flex-direction: row;
  justify-content:flex-start;
  align-items: start;
  align-self: flex-start;
  margin-left: -20vh;
  height: auto;
  width: auto;
  min-width: 50vh;
  max-width: 90vh;
  padding-left: 2vh;
  min-height: 10vh;
  max-height: 15vh;
  gap:2vh;
  /* margin-left: 15vh; */
  /* background-color: red; */
`
export const Web_Sub_Container_Column_Children_People_Data_2 = styled.View`
  flex:1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap:1vh;
`

export const Web_Sub_Container_Column_Children_People_Data_3 = styled.View`
  flex:1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  margin-left: 1vh;
  gap:0.5vh;


`
export const Web_Sub_Container_Column_Children_People_Data_Form = styled.View`
  flex:1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  margin-left: -20vh;
  height: 15vh;
  width: 100vh;
  gap:1vh;
  margin-top: 2.5vh;
`

export const Web_Sub_Container_People_Signature = styled.View`
flex: 1;
justify-content: space-evenly;
flex-direction: row;
flex-wrap: wrap;
align-items: center;

`


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

const Web_Line = styled.View`
  width: 100%;
  height: 0.1vh;
  background-color: ${Colors.gray_70}; 
  /* margin: 20px ;  */
`;

//MOB
export const Mob_Flag_Sub_Title = styled.View`
flex:1;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: auto;
height: auto;
min-height:25px;
max-height: 40px;

background-color: ${Pages_Colors.flag_Color};
border-radius: 5px 5px 5px 0px;
/* padding: 5px 0px 3px 4px; */
margin-bottom: 10px;
`;
export const Mob_Body = styled.View`
  flex: 1;
  background-color: ${Colors.New_White};
`;

export const Mob_Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Mob_ScrollView = styled(ScrollView)`
  flex: 1;
`;

export const Mob_Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const Mob_Info_Container = styled.View`
  /* padding: 15px; */
  background-color: ${Colors.white};
  border-radius: 10px;
`;

export const Mob_Section = styled.View`
  margin-bottom: 15px;
`;

export const Mob_Section_Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const Mob_Data_Item = styled.View`
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  gap:3px;
`;

export const Mob_Data_Item_Input = styled.View`
  flex-direction: column;
  align-items: start;
  margin-bottom: 15px;
  margin-left: 20px;
  gap:3px;
`;

export const Mob_Label = styled.Text`
  font-size: 16px;
  color: ${Colors.black};
`;

export const Mob_Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-left: 10px;

`;

export const Mob_Input = styled.TextInput<{ $sizeW: string }>`
  width: ${(props) => props.$sizeW};
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${Colors.gray};
  margin-bottom: 15px;
`;

export const Mob_Signature_Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

export const Mob_Signature_Image = styled.Image`
  width: ${(props:any)=>{
    if( Platform.OS !== 'web') return '250px';
    else return '30vh';
  }};
  height: ${(props:any)=>{
    if( Platform.OS !== 'web') return '90px';
    else return '15vh';
  }};
  resize-mode: contain;
  margin-bottom: 1vh;
  /* background-color: ${Colors.gray_30}; */
`;

export const Mob_Button = styled.TouchableOpacity`
  background-color: ${Colors.background};
  padding:  ${(props:any)=>{
    if( Platform.OS !== 'web') return '10px 20px';
    else return '1vh 2vh';
  }};
  
  border-radius: ${(props:any)=>{
    if( Platform.OS !== 'web') return '5px';
    else return '0.5vh';
  }};
`;

export const Mob_Button_Text = styled.Text`
  color: ${Colors.white};
  font-weight: bold;
  font-size: ${(props:any)=>{
    if( Platform.OS !== 'web') return '25px';
    else return '2.5vh';
  }};
`;