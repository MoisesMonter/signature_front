import React, { useState } from "react";
import { Header } from "../../organisms/header";
import { Platform, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from "styled-components/native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors, Flags_Colors, Pages_Colors } from "../../colors";
import DatePicker from "../../button/date";
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
} from "./Web_Body";

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
} from "./Mob_Body";

const initialData = {
  titulo: '',
  data: '',
  toAllUsers: false,
  senha: '',
  repetirSenha: '',
  link: 'asdsadsadsads',
};

export function Management_Create() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialData);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false); 
  const [error, setError] = useState('');

  const handleNextStep = () => {
    if (currentStep === 1 && !formData.titulo.trim()) {
      alert('O título não pode estar vazio.');
    } else if (currentStep === 2 && formData.senha !== formData.repetirSenha) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
    } else {
      setError(''); 
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

  const handleCreate = () => {
    if (formData.senha === formData.repetirSenha) {
      alert('Ambiente criado com sucesso!');
      handleNextStep()
    } else {
      alert('As senhas não coincidem. Por favor, verifique.');
    }
  };

  return (
    <>
      {Platform.OS === 'web' || Platform.OS === 'windows' ? (
        <Web_Body>
          <Header />
          <Web_Container>
            <Web_Sub_Container>
              <Web_View_Title>
                <Web_Title>Gerencie tuas Listas</Web_Title>
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
                  <Web_Sub_Title>Gerencie Seus ambientes - Criando</Web_Sub_Title>
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
                              $Widths={70}
                              value={formData.titulo}
                              onChangeText={(value) => handleInputChange('titulo', value)}
                            />
                          </Web_List_Input_View>

                          <Web_List_Input_View style={{ height: 'auto', minHeight: '5vh', marginBottom: '9%' }}>
                            <Web_List_Input_Title>Digite um prazo máximo: </Web_List_Input_Title>
                            <DatePicker  date={formData.data} onDateChange={(date) => handleInputChange('data', date)} />
                          </Web_List_Input_View>

                          <Web_List_Input_View>
                            <Web_List_Input_Title>Deixar Aberto a todos envolvidos: </Web_List_Input_Title>
                            <Web_List_Input_ToggleContainer $isActive={formData.toAllUsers} onPress={handleToggle}>
                              <Web_List_Input_ToggleCircle />
                            </Web_List_Input_ToggleContainer>
                            <Web_List_Input_Anotation>(Isso evitará de selecionar de alguns para todos)</Web_List_Input_Anotation>
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
                              $Widths={30}
                              style={{paddingRight:'6vh'}}
                              value={formData.senha}
                              onChangeText={(value) => handleInputChange('senha', value)}
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
                              $Widths={30}
                              style={{paddingRight:'6vh'}}
                              value={formData.repetirSenha}
                              onChangeText={(value) => handleInputChange('repetirSenha', value)}
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
                            <Web_List_Input_Title>Compartilhe o Link com os demais</Web_List_Input_Title>
                            <Web_List_Input_TextInput
                              $Widths={80}
                              value={formData.link}
                              editable={false}
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
                        <Web_Button_Info_Detail_View $Type_B={""} onPress={handlePrevStep} style={{ backgroundColor: Colors.New_White }}>
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
                        <Web_Button_Info_Detail_View $Type_B={"Back"} onPress={handlePrevStep} style={{ backgroundColor: Colors.New_White }}>
                          Sair
                        </Web_Button_Info_Detail_View>
                        <Web_Button_Info_Detail_View $Type_B={"descartados"} onPress={handleNextStep} style={{ backgroundColor: Colors.black }}>
                          Acessar
                        </Web_Button_Info_Detail_View>
                      </>
                    )}
                  </Web_Group_Info_Detail_View>
                </Web_Sub_Bar_Info>
              </Web_Bar_Info>
            </Web_Sub_Container>
          </Web_Container>
        </Web_Body>
      ) : (
        <Mob_Body>
          <Header />
          <Mob_Container>
            <Mob_Sub_Container>
              <Mob_View_Title>
                <Mob_Title>Gerencie tuas Listas</Mob_Title>
                <Mob_Sub_Title>Criando</Mob_Sub_Title>
              </Mob_View_Title>

              <Mob_Life_Time>
                <Mob_Life_Time_Box $Position={currentStep >= 1 ? 0 : 1} /><Mob_Life_Time_Line $Position={currentStep >= 2 ? 0 : 1} />
                <Mob_Life_Time_Box $Position={currentStep >= 2 ? 0 : 1} /><Mob_Life_Time_Line $Position={currentStep === 3 ? 0 : 1} />
                <Mob_Life_Time_Box $Position={currentStep == 3 ? 0 : 1} />
              </Mob_Life_Time>

              <Mob_Line />

              {currentStep === 1 && (
                <Mob_SubGroup_Info_Detail_View $styles={"space-around"}>
                  <Mob_Button_Info_Detail_View $Type_B={"Back"}>
                    <Mob_Text_Button_Info_Detail $Type_B={""} onPress={handlePrevStep}>Sair</Mob_Text_Button_Info_Detail>
                  </Mob_Button_Info_Detail_View>
                  <Mob_Ghost />
                  <Mob_Button_Info_Detail_View $Type_B={""}>
                    <Mob_Text_Button_Info_Detail $Type_B={""} onPress={handleNextStep}>Avançar</Mob_Text_Button_Info_Detail>
                  </Mob_Button_Info_Detail_View>
                </Mob_SubGroup_Info_Detail_View>
              )}

              {currentStep === 2 && (
                <Mob_SubGroup_Info_Detail_View $styles={"space-around"}>
                  <Mob_Button_Info_Detail_View $Type_B={""}>
                    <Mob_Text_Button_Info_Detail $Type_B={""} onPress={handlePrevStep}>Voltar</Mob_Text_Button_Info_Detail>
                  </Mob_Button_Info_Detail_View>
                  <Mob_Ghost />
                  <Mob_Button_Info_Detail_View $Type_B={"Create"}>
                    <Mob_Text_Button_Info_Detail $Type_B={"Create"} onPress={handleCreate}>Criar</Mob_Text_Button_Info_Detail>
                  </Mob_Button_Info_Detail_View>
                </Mob_SubGroup_Info_Detail_View>
              )}

              {currentStep === 3 && (
                <Mob_SubGroup_Info_Detail_View $styles={"space-around"}>
                  <Mob_Button_Info_Detail_View $Type_B={"Back"}>
                    <Mob_Text_Button_Info_Detail $Type_B={"Back"} onPress={handlePrevStep}>Sair</Mob_Text_Button_Info_Detail>
                  </Mob_Button_Info_Detail_View>
                  <Mob_Ghost />
                  <Mob_Button_Info_Detail_View $Type_B={"Create"}>
                    <Mob_Text_Button_Info_Detail $Type_B={"Create"} onPress={handleNextStep}>Gerencie</Mob_Text_Button_Info_Detail>
                  </Mob_Button_Info_Detail_View>
                </Mob_SubGroup_Info_Detail_View>
              )}

              <Mob_List_Data_Inputs>
                {currentStep === 1 && (
                  <>
                    <Mob_List_Input_View>
                      <Mob_List_Input_Title>Dê um título ao seu ambiente</Mob_List_Input_Title>
                      <Mob_List_Input_TextInput
                        $Widths={'320'}
                        value={formData.titulo}
                        onChangeText={(value) => handleInputChange('titulo', value)}
                      />
                    </Mob_List_Input_View>

                    <Mob_List_Input_View style={{ marginTop: -180, height: '50%' }}>
                      <Mob_List_Input_Title>Digite um prazo máximo: </Mob_List_Input_Title>
                      <DatePicker align={'row'} date={formData.data} onDateChange={(date) => handleInputChange('data', date)} />
                    </Mob_List_Input_View>

                    <Mob_List_Input_View style={{ marginTop: -180 }}>
                      <Mob_List_Input_Title>Privilégio para todos envolvidos: </Mob_List_Input_Title>
                      <Mob_List_Input_ToggleContainer $isActive={formData.toAllUsers} onPress={handleToggle}>
                        <Mob_List_Input_ToggleCircle />
                      </Mob_List_Input_ToggleContainer>
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
                        style={{paddingRight:'10%',marginRight:'10%'}}
                        value={formData.senha}
                        onChangeText={(value) => handleInputChange('senha', value)}
                        secureTextEntry={!isPasswordVisible} 
                      ></Mob_List_Input_TextInput>
                      <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={{ marginLeft:'-18%', paddingTop:'3.5%'}} >
                        <Ionicons  name={isPasswordVisible ? "eye-off" : "eye"} size={24} color="gray"  />
                      </TouchableOpacity>
                      </Mob_List_Input_View_Internal>
                    </Mob_List_Input_View>

                    <Mob_List_Input_View>
                      <Mob_List_Input_Title style={{ marginTop: -210 }}>Repita a Senha</Mob_List_Input_Title>
                      <Mob_List_Input_View_Internal>
                      <Mob_List_Input_TextInput
                        style={{paddingRight:'10%',marginRight:'10%'}}
                        $Widths={'280'}
                        value={formData.repetirSenha}
                        onChangeText={(value) => handleInputChange('repetirSenha', value)}
                        secureTextEntry={!isRepeatPasswordVisible}
                      />
                      <TouchableOpacity onPress={() => setIsRepeatPasswordVisible(!isRepeatPasswordVisible)}style={{ marginLeft:'-18%', paddingTop:'3.5%'}} >
                        <Ionicons name={isRepeatPasswordVisible ? "eye-off" : "eye"} size={24} color="gray" />
                      </TouchableOpacity>
                      </Mob_List_Input_View_Internal>
                    </Mob_List_Input_View>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <Mob_List_Input_View>
                      <Mob_List_Input_Title>Copie o Link abaixo</Mob_List_Input_Title>
                      <Mob_List_Input_TextInput
                        $Widths={'280'}
                        value={formData.link}
                        editable={false}
                      />
                    </Mob_List_Input_View>
                  </>
                )}
                <Mob_Sub_Bar_Data_image style={{ height: 'auto' }} source={Create_Img} />
              </Mob_List_Data_Inputs>
            </Mob_Sub_Container>
          </Mob_Container>
        </Mob_Body>
      )}
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