import React, { useState } from "react";
import { Platform, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from "styled-components/native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors, Flags_Colors, Pages_Colors } from "../../../components/colors";
import DatePicker from "../../../components/button/date";
import Create_Img from '../../../../assets/images/Create_Art.png';

import {
  Web_Body,
  Web_Container,
  Web_Sub_Container,
  Web_View_Title,
  Web_Title,
  Web_Bar_Info,
  Web_Flag_Sub_Title,
  Web_Sub_Title,
  Web_Sub_Bar_Info,
  Web_Sub_Bar_Col_Items,
  Web_Sub_Bar_Data_image,
  Web_List_Data_Inputs,
  Web_List_Input_View,
  Web_List_Input_Title,
  Web_List_Input_TextInput,
  Web_List_Input_Anotation,
  Web_Life_Time,
  Web_Life_Time_Box,
  Web_Life_Time_Line,
  Web_List_Input_ToggleContainer,
  Web_List_Input_ToggleCircle,
  Web_List_Input_View_Internal
} from "./../../../components/organisms/management_create/Web_Body";

import {
  Mob_Body,
  Mob_Container,
  Mob_Sub_Container,
  Mob_View_Title,
  Mob_Title,
  Mob_Sub_Title,
  Mob_Life_Time,
  Mob_Life_Time_Box,
  Mob_Life_Time_Line,
  Mob_List_Data_Inputs,
  Mob_List_Input_View,
  Mob_List_Input_Title,
  Mob_List_Input_TextInput,
  Mob_Sub_Bar_Data_image,
  Mob_List_Input_ToggleContainer,
  Mob_List_Input_ToggleCircle,
  Mob_List_Input_View_Internal
} from "./../../../components/organisms/management_create/Mob_Body";
import axios from "axios";
import { getToken } from "../../../storage/storeToken"; 
import { router } from "expo-router";
import { ShowAlert } from "../../../components/button/alert";
import { Mob_List_Input_Anotation } from "../../../components/page/signature_create/Mob_Body";
import CustomAlertModal from "../../../components/button/CustomAlertModal";



export default function Management_Create() {
  
  const initialData = {
    title: "",
    description: "",
    end_date: "", 
    password: "",
    repeatpass: "",
    id: "",
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialData);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const [signature, setSignature] = useState(null);

  const [isNewModalAlertVisible, setIsNewModalAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertStatusCode, setAlertStatusCode] = useState<number | undefined>(undefined);

  const ActualizeAlertVisibleNone = () => {
    setIsNewModalAlertVisible(false)

  };
  const ActualizeAlertVisible = () => {
    setIsNewModalAlertVisible(false)
    if (Platform.OS == 'web'){
      router.push(`http://localhost:8081/management/details?id=${formData.id}`);
    }else{
      router.push(`/management/details?id=${formData.id}`);
    }

  };
  function handleExitButtonPress() {
    setCurrentStep(1);
    setFormData(initialData);
    router.push("/management");
  }
  function handleAcessManagementbyID() {
    setCurrentStep(1);
    setFormData(initialData);
    if (Platform.OS == 'web'){
      router.push(`http://localhost:8081/management/details?id=${formData.id}`);
    }else{
      router.push(`/management/details?id=${formData.id}`);
    }
    
  }

  function handleFinalizeManagement() {
    setCurrentStep(1);
    setFormData(initialData);
    router.push(`/management/details?id=${formData.id}/`);
  }

  const handleNextStep = () => {
    if (currentStep === 1 && !formData.title.trim()) {
      setAlertTitle('Form-Erro');
      setAlertMessage("O título não pode estar vazio.")
      setAlertStatusCode(400);
      setIsNewModalAlertVisible(true); 
    } else if (currentStep === 2 && formData.password !== formData.repeatpass) {
      setAlertTitle('Form-Erro');
      setAlertMessage("As senhas não coincidem. Por favor, tente novamente.")
      setAlertStatusCode(0);
      setIsNewModalAlertVisible(true); 
    } else {
      setError("");
      if (currentStep < 3) setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleToggle = () => {
    setFormData({ ...formData, toAllUsers: !formData.toAllUsers });
  };

const handleCreate = async () => {
  if (formData.password !== formData.repeatpass) {
    setAlertTitle('Form-Erro');
    setAlertMessage("As senhas não coincidem. Por favor, tente novamente.")
    setAlertStatusCode(400);
    setIsNewModalAlertVisible(true); 
    return;
  }

  try {

    const token = await getToken("auth_jrf");

    if (!token) {
      ShowAlert("Erro", "Token de autenticação não encontrado.");
      return;
    }

    const url =
      Platform.OS === "web"
        ? "http://127.0.0.1:8000/api/signatures/signature_lists/"
        : "http://10.0.2.2:8000/api/signatures/signature_lists/";


    const body = {
      title: formData.title,
      description: formData.description,
    };
    
    if (formData.end_date) {
      body.end_date = formData.end_date;
    }
  
    if (formData.password) {
      body.password = formData.password;
    }

    const response = await axios.post(url, body, {
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      const createdId = response.data.id;
      // alert(`Ambiente criado com sucesso! ID: ${createdId}`);
      setFormData({ ...formData, id: createdId }); 
      setAlertTitle('Form-Sucesso!');
      setAlertMessage(`Ambiente criado com sucesso! ID: ${createdId}`)
      setAlertStatusCode(200);
      setIsNewModalAlertVisible(true); 
      handleNextStep(); 

    } else {
      // ShowAlert("Erro", "Não foi possível criar o ambiente.");
      setAlertTitle('Form-Erro!');
      setAlertMessage(`Não foi possível criar o ambiente.`)
      setAlertStatusCode(400);
      setIsNewModalAlertVisible(true); 
    }
  } catch (error) {
    // console.error("Erro ao criar ambiente:", error);
    setAlertTitle('Form-Erro!');
    setAlertMessage(`Erro ao criar ambiente.`)
    setAlertStatusCode(400);
    setIsNewModalAlertVisible(true); 
    // ShowAlert("Erro", "Ocorreu um erro ao tentar criar o ambiente.");
  }
};

  return (
    <>
      {Platform.OS === 'web' || Platform.OS === 'windows' ? (

            <Web_Sub_Container>
              <Web_View_Title>
                <Web_Title>Criando uma nova Lista</Web_Title>
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
                <Web_Flag_Sub_Title>
                  <Web_Sub_Title>Formulário para nova Lista</Web_Sub_Title>
                </Web_Flag_Sub_Title>

                <Web_Life_Time>
                  <Web_Life_Time_Box $Position={currentStep >= 1 ? 0 : 1} />
                  <Web_Life_Time_Line $Position={currentStep >= 2 ? 0 : 1} />
                  <Web_Life_Time_Box $Position={currentStep >= 2 ? 0 : 1} />
                  <Web_Life_Time_Line $Position={currentStep >= 3 ? 0 : 1} />
                  <Web_Life_Time_Box $Position={currentStep >= 3 ? 0 : 1} />
                </Web_Life_Time>

                <Web_Line />

                <Web_Sub_Bar_Info>
                  <Web_Sub_Bar_Col_Items>
                    {currentStep === 1 && (
                      <>
                        <Web_List_Data_Inputs>
                          <Web_List_Input_View>
                            <Web_List_Input_Title>Dê um título ao seu ambiente</Web_List_Input_Title>
                            <Web_List_Input_TextInput
                              $Widths={'70'}
                              $Heights={'5'}
                              value={formData.title}
                              onChangeText={(value) => handleInputChange("title", value)}/>

                             <Web_List_Input_Anotation>(Obrigatório!)</Web_List_Input_Anotation>
                          </Web_List_Input_View>
                          <Web_List_Input_View                            style={{marginTop:'5vh'}}>
                            <Web_List_Input_Title>Descrição  do ambiente</Web_List_Input_Title>

                            <Web_List_Input_TextInput
                              $Widths={'70'}
                              $Heights={'13'}
                              value={formData.description}
                              onChangeText={(value) => handleInputChange("description", value)}
                              multiline={true}/>
                             <Web_List_Input_Anotation>(Deixe Intuitivo para que os seus participantes possam compreender)</Web_List_Input_Anotation>
                          </Web_List_Input_View>

                          <Web_List_Input_View style={{ height: 'auto', minHeight: '5vh', marginTop:'13vh',gap:'3vh'}}>
                            <Web_List_Input_Title>Digite um prazo máximo: </Web_List_Input_Title>
                            <DatePicker   align="row"
                                          date={formData.end_date ? new Date(formData.end_date) : undefined}
                                          onDateChange={(date) => handleInputChange("end_date", date ? date : "")}/>
                          </Web_List_Input_View>


                        </Web_List_Data_Inputs>
                      </>
                    )}

                    {currentStep === 2 && (
                      <>
                        <Web_List_Data_Inputs>
                          <Web_List_Input_View>
                            <Web_List_Input_Title>Palavra Secreta: </Web_List_Input_Title>
                            <Web_List_Input_View_Internal $direction={'row'}>

                            <Web_List_Input_TextInput
                               $Widths={'30'}
                               $Heights={'6'}
                               style={{paddingRight: "6vh"}}
                               value={formData.password}
                               onChangeText={(value) =>
                                 handleInputChange("password", value)
                               }
                               secureTextEntry={!isPasswordVisible} 
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={{ position:'absolute',marginLeft:'25vh'}}>
                              <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={'3.5vh'} color="gray" />
                            </TouchableOpacity>
                            </Web_List_Input_View_Internal>
                            <Web_List_Input_Anotation>(Deixe vazio caso queira aberto a todo Público)</Web_List_Input_Anotation>
                          </Web_List_Input_View>
                        </Web_List_Data_Inputs>

                        <Web_List_Data_Inputs>
                        <Web_List_Input_View>
                        <Web_List_Input_Title>Repita senha: </Web_List_Input_Title>
                          <Web_List_Input_View_Internal $direction={'row'}>

                            <Web_List_Input_TextInput
                                $Widths={'30'}
                                $Heights={'6'}
                                style={{ paddingRight: '6vh' }}
                                value={formData.repeatpass} 
                                onChangeText={(value) => handleInputChange('repeatpass', value)} 
                                secureTextEntry={!isRepeatPasswordVisible} 
                              />
                            <TouchableOpacity onPress={() => setIsRepeatPasswordVisible(!isRepeatPasswordVisible)} style={{ position:'absolute',marginLeft:'25vh'}}>
                              <Ionicons name={isRepeatPasswordVisible ? "eye-off" : "eye"} size={'3.5vh'} color="gray" />
                            </TouchableOpacity>
                          
                          </Web_List_Input_View_Internal>
                          <Web_List_Input_Anotation>(Caso tenha desejado senha, por favor repita ela)</Web_List_Input_Anotation>
                          </Web_List_Input_View>
                        </Web_List_Data_Inputs>
                      </>
                    )}

                    {currentStep === 3 && (
                      <>
                        <Web_List_Data_Inputs>
                          <Web_List_Input_View>
                            <Web_List_Input_Title>Compartilhe o Link com os teus participantes</Web_List_Input_Title>
                            <Web_List_Input_TextInput
                              $Widths={'80'}
                              value={formData.id ? `http://localhost:8081/pageUser?id=${formData.id}` : "Aguardando criação..."}
                            />
                          </Web_List_Input_View>
                        </Web_List_Data_Inputs>
                      </>
                    )}
                  </Web_Sub_Bar_Col_Items>

                  <Web_Sub_Bar_Col_Items>
                    <Web_Sub_Bar_Data_image source={Create_Img} />
                  </Web_Sub_Bar_Col_Items>

                  <Web_Group_Info_Detail_View>
                    {currentStep == 1 && (
                      <>
                        <Web_Button_Info_Detail_View $Type_B={""} onPress={handleExitButtonPress} style={{ backgroundColor: Colors.New_White }}>
                          Sair
                        </Web_Button_Info_Detail_View>
                        <Web_Button_Info_Detail_View $Type_B={""} onPress={handleNextStep} style={{ backgroundColor: Colors.gray_30 }}>
                          Avançar
                        </Web_Button_Info_Detail_View>
                      </>
                    )}
                    {currentStep == 2 && (
                      <>
                        <Web_Button_Info_Detail_View $Type_B={""} onPress={handlePrevStep} style={{ backgroundColor: Colors.gray_30 }}>
                          Voltar
                        </Web_Button_Info_Detail_View>
                        <Web_Button_Info_Detail_View $Type_B={"descartados"} onPress={handleCreate} style={{ backgroundColor: Colors.black }}>
                          Criar
                        </Web_Button_Info_Detail_View>
                      </>
                    )}
                    {currentStep == 3 && (
                      <>
                        <Web_Button_Info_Detail_View $Type_B={"Back"} onPress={handleExitButtonPress} style={{ backgroundColor: Colors.New_White }}>
                          Sair
                        </Web_Button_Info_Detail_View>
                        <Web_Button_Info_Detail_View $Type_B={"descartados"} onPress={handleAcessManagementbyID} style={{ backgroundColor: Colors.black }}>
                          Acessar
                        </Web_Button_Info_Detail_View>
                      </>
                    )}
                  </Web_Group_Info_Detail_View>
                </Web_Sub_Bar_Info>
              </Web_Bar_Info>
            </Web_Sub_Container>

      ) : (
        <Mob_Container>
        <Mob_Sub_Container>
          <Mob_View_Title>
            <Mob_Title>Gerencie tuas Listas</Mob_Title>
            <Mob_Sub_Title>Criando</Mob_Sub_Title>
          </Mob_View_Title>
      
          <Mob_Life_Time>
            <Mob_Life_Time_Box $Position={currentStep >= 1 ? 0 : 1} />
            <Mob_Life_Time_Line $Position={currentStep >= 2 ? 0 : 1} />
            <Mob_Life_Time_Box $Position={currentStep >= 2 ? 0 : 1} />
            <Mob_Life_Time_Line $Position={currentStep === 3 ? 0 : 1} />
            <Mob_Life_Time_Box $Position={currentStep == 3 ? 0 : 1} />
          </Mob_Life_Time>
      
          <Mob_Line />
      
          {/* Botões de Navegação Entre as Etapas */}
          {currentStep === 1 && (
            <Mob_SubGroup_Info_Detail_View $styles={"space-around"}>
              <Mob_Button_Info_Detail_View $Type_B={"Back"} onPress={handleExitButtonPress}>
                <Mob_Text_Button_Info_Detail $Type_B={""}>Sair</Mob_Text_Button_Info_Detail>
              </Mob_Button_Info_Detail_View>
              <Mob_Ghost />
              <Mob_Button_Info_Detail_View $Type_B={""} onPress={handleNextStep}>
                <Mob_Text_Button_Info_Detail $Type_B={""}>Avançar</Mob_Text_Button_Info_Detail>
              </Mob_Button_Info_Detail_View>
            </Mob_SubGroup_Info_Detail_View>
          )}
      
          {currentStep === 2 && (
            <Mob_SubGroup_Info_Detail_View $styles={"space-around"}>
              <Mob_Button_Info_Detail_View $Type_B={""} onPress={handlePrevStep}>
                <Mob_Text_Button_Info_Detail $Type_B={""}>Voltar</Mob_Text_Button_Info_Detail>
              </Mob_Button_Info_Detail_View>
              <Mob_Ghost />
              <Mob_Button_Info_Detail_View $Type_B={"Create"} onPress={handleCreate}>
                <Mob_Text_Button_Info_Detail $Type_B={"Create"}>Criar</Mob_Text_Button_Info_Detail>
              </Mob_Button_Info_Detail_View>
            </Mob_SubGroup_Info_Detail_View>
          )}
      
          {currentStep === 3 && (
            <Mob_SubGroup_Info_Detail_View $styles={"space-around"}>
              <Mob_Button_Info_Detail_View $Type_B={"Back"} onPress={handleExitButtonPress}>
                <Mob_Text_Button_Info_Detail $Type_B={"Back"}>Sair</Mob_Text_Button_Info_Detail>
              </Mob_Button_Info_Detail_View>
              <Mob_Ghost />
              <Mob_Button_Info_Detail_View $Type_B={"Create"} onPress={handleAcessManagementbyID}>
                <Mob_Text_Button_Info_Detail $Type_B={"Create"}>Gerencie</Mob_Text_Button_Info_Detail>
              </Mob_Button_Info_Detail_View>
            </Mob_SubGroup_Info_Detail_View>
          )}
      
          {/* Campos de Entrada de Dados */}
          <Mob_List_Data_Inputs>
            {currentStep === 1 && (
              <>
                <Mob_List_Input_View>
                  <Mob_List_Input_Title>Dê um título ao seu ambiente</Mob_List_Input_Title>
                  <Mob_List_Input_TextInput
                    $Widths={'320'}
                    value={formData.title}
                    onChangeText={(value) => handleInputChange('title', value)}
                  />
                  <Mob_List_Input_Anotation>(Defina um título para seu ambiente)</Mob_List_Input_Anotation>
      
                  <Mob_List_Input_Title>Dê uma Descrição</Mob_List_Input_Title>
                  <Mob_List_Input_TextInput
                    $Widths={'320'}
                    $Heights={'80'}
                    value={formData.description}
                    onChangeText={(value) => handleInputChange("description", value)}
                    multiline={true}
                  />
                  <Mob_List_Input_Anotation>(Deixe Intuitivo para que os seus participantes possam compreender)</Mob_List_Input_Anotation>
      
                  <Mob_List_Input_Title>Digite um prazo máximo:</Mob_List_Input_Title>
                  <DatePicker align={'row'} date={formData.end_date} onDateChange={(date) => handleInputChange('end_date', date)} />
                </Mob_List_Input_View>

              </>
            )}
      
            {currentStep === 2 && (
              <>
                <Mob_List_Input_View>
                  <Mob_List_Input_Title>Digite uma Senha</Mob_List_Input_Title>
                  <Mob_List_Input_View_Internal>
                    <Mob_List_Input_TextInput
                      $Widths={'280'}
                      style={{ paddingRight: '10%', marginRight: '10%' }}
                      value={formData.password}
                      onChangeText={(value) => handleInputChange('password', value)}
                      secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={{ marginLeft: '-18%', paddingTop: '3.5%' }}>
                      <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={24} color="gray" />
                    </TouchableOpacity>
                  </Mob_List_Input_View_Internal>

                  <Mob_List_Input_Title>Repita a Senha</Mob_List_Input_Title>
                  <Mob_List_Input_View_Internal>
                    <Mob_List_Input_TextInput
                      style={{ paddingRight: '10%', marginRight: '10%' }}
                      $Widths={'280'}
                      value={formData.repeatpass}
                      onChangeText={(value) => handleInputChange('repeatpass', value)}
                      secureTextEntry={!isRepeatPasswordVisible}
                    />
                    <TouchableOpacity onPress={() => setIsRepeatPasswordVisible(!isRepeatPasswordVisible)} style={{ marginLeft: '-18%', paddingTop: '3.5%' }}>
                      <Ionicons name={isRepeatPasswordVisible ? "eye-off" : "eye"} size={24} color="gray" />
                    </TouchableOpacity>
                  </Mob_List_Input_View_Internal>
                </Mob_List_Input_View>
      
                <Mob_List_Input_View>
                 
                </Mob_List_Input_View>
                
              </>
            )}
      
            {currentStep === 3 && (
              <>
                <Mob_List_Input_View>
                  <Mob_List_Input_Title>Copie o Link abaixo</Mob_List_Input_Title>
                  <Mob_List_Input_TextInput
                    $Widths={'280'}
                    value={formData.id ? `exp://localhost:8081/pageUser?id=${formData.id}` : "Aguardando criação..."}
                    // editable={false}
                  />
                </Mob_List_Input_View>
                <CustomAlertModal
                    visible={isNewModalAlertVisible}
                    title={alertTitle}
                    message={alertMessage}
                    statusCode={alertStatusCode}
                    onDismiss={() => ActualizeAlertVisible()} 
                  />
              </>
            )}
      
            {/* Imagem de Criação */}
            <Mob_Sub_Bar_Data_image style={{ height: 'auto' }} source={Create_Img} />
          </Mob_List_Data_Inputs>
        </Mob_Sub_Container>
      </Mob_Container>
      )}
      {currentStep !== 3? (                <CustomAlertModal
                    visible={isNewModalAlertVisible}
                    title={alertTitle}
                    message={alertMessage}
                    statusCode={alertStatusCode}
                    onDismiss={() => ActualizeAlertVisibleNone()} 
                  />):(                <CustomAlertModal
                    visible={isNewModalAlertVisible}
                    title={alertTitle}
                    message={alertMessage}
                    statusCode={alertStatusCode}
                    onDismiss={() => ActualizeAlertVisible()} 
                  />)}
    </>
  );
}


export const Web_Group_Info_Detail_View = styled.View`
  flex:1;
  position: absolute;
  margin: 50vh 0vh 0vh 10vh;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  width: auto;
  width: auto;
  max-width: 70%;
  min-width: 30vh;
  height: auto;
  max-height: 7vh;
  min-height: 7vh;
  gap:5vh;


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
  if(props.$Type_B === 'descartados') return Colors.New_White;
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

export const Mob_Group_Info_Detail_View = styled.View`
  flex:1;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: auto;
  width: auto;
  max-width: 100%;
  min-width: 90%;
  height: auto;
  max-height: 70px;
  min-height: 50px;
  /* margin-top: 1px; */
  background-color: red;

`

export const Mob_SubGroup_Info_Detail_View = styled.View<{$styles:any}>`
flex:1;
justify-content: ${(props:any)=>{
  return props.$styles
}};
flex-direction: row;
align-items: center;
width: auto;
min-width: 53%;
/* max-width: 100%; */
height: 40px;
margin-top: 10px;
margin-bottom: 10px;

padding:10px 1px 10px 1px;
/* background-color: black; */

`

export const Mob_Button_Info_Detail_View = styled.TouchableOpacity<{$Type_B:string}>`
flex:1;
width: auto;
justify-content: center;
align-items: center;
min-width: 83px;
max-width: 10px;
height: 33px;
margin-left: -50px;

background-color: ${(props:any)=>{
  if(props.$Type_B == 'End') return Colors.New_White;
  if(props.$Type_B == 'Filters') return Colors.background;
  else if(props.$Type_B == 'Create') return Colors.black;
  else if(props.$Type_B == 'Back') return Colors.New_White;

  else return Pages_Colors.Gerenciamento_Gray;
}};
border-radius:7px;

`
export const Mob_Ghost = styled.View`
flex:1;
width: auto;
justify-content: center;
align-items: center;
min-width: 80px;
max-width: 10px;
height: 30px;
margin-left: -50px;

background-color: ${Colors.transparent};


`
export const Mob_Text_Button_Info_Detail = styled.Text<{$Type_B:string}>`
border-radius: 11px;
font-family: Arial;
font-weight: 700;
font-size: 16px;
/* font-weight: 700; */
color:${(props:any)=>{
  if(props.$Type_B == 'End') return Colors.red;
  if(props.$Type_B == 'Create') return Colors.white;
  else return Colors.black;
}};
`
const Mob_Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${Colors.gray_70}; 
  /* margin: 20px ;  */
`;

const Mob_DrawerButton = styled.TouchableOpacity`
  background-color: ${Flags_Colors.green};
  padding: 3px;
  border-radius: 5px;
  align-items: start;

  /* margin-bottom: 10px; */
`;
const Mob_DrawerButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;