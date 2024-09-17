import React, { useState } from "react";
import { Header } from "../../organisms/header";
import { Platform, Animated, TouchableOpacity} from "react-native";
import Img_test from '../../../../assets/header/capivara.jpg';
import Signature_img_1 from '../../../../assets/test_sinature_Delete/Signature1.png';
import Signature_img_2 from '../../../../assets/test_sinature_Delete/Signature2.png';
import Signature_img_3 from '../../../../assets/test_sinature_Delete/Signature3.png';
import Lupa_Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import { Web_Body,
   Web_Container,
    Web_Sub_Container,
     Web_View_Title,
      Web_Title,
      Web_Bar_Info,
      Web_Flag_Sub_Title,
      Web_Sub_Title,
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

      } from "./Web_Body";

import { Colors, Flags_Colors, Pages_Colors } from "../../colors";
import DatePicker from "../../button/date";

const initialData = {
  titulo: '',
  data: '',
  toAllUsers: false,
  senha: 'senha123',
  link: 'asdsadsadsads',
};

const peopleData = [
  {
    id: 1,
    name: 'Nome Ficticio 1',
    email: 'email_ficticio1@gmail.com',
    image: Img_test,
    signature: Signature_img_1,
    give_out: false,
  },
  {
    id: 2,
    name: 'Nome Ficticio 2',
    email: 'email_ficticio2@gmail.com',
    image: Img_test,
    signature: Signature_img_2,
    give_out: true,
  },
  {
    id: 3,
    name: 'Nome Ficticio 3',
    email: 'email_ficticio3@gmail.com',
    image: Img_test,
    signature: Signature_img_3,
    give_out: false,
  },
  {
    id: 4,
    name: 'Nome Ficticio 4',
    email: 'email_ficticio1@gmail.com',
    image: Img_test,
    signature: Signature_img_1,
    give_out: true,
  },
  {
    id: 5,
    name: 'Nome Ficticio 5',
    email: 'email_ficticio2@gmail.com',
    image: Img_test,
    signature: Signature_img_2,
    give_out: false,
  },
  {
    id: 6,
    name: 'Nome Ficticio 6',
    email: 'email_ficticio3@gmail.com',
    image: Img_test,
    signature: Signature_img_3,
    give_out: true,
  },
  {
    id: 7,
    name: 'Nome Ficticio 7',
    email: 'email_ficticio1@gmail.com',
    image: Img_test,
    signature: Signature_img_1,
    give_out: false,
  },
  {
    id: 8,
    name: 'Nome Ficticio 8',
    email: 'email_ficticio2@gmail.com',
    image: Img_test,
    signature: Signature_img_2,
    give_out: true,
  },
  {
    id: 9,
    name: 'Nome Ficticio 9',
    email: 'email_ficticio3@gmail.com',
    image: Img_test,
    signature: Signature_img_3,
    give_out: false,
  },
  {
    id: 10,
    name: 'Nome Ficticio 10',
    email: 'email_ficticio1@gmail.com',
    image: Img_test,
    signature: Signature_img_1,
    give_out: true,
  },
  {
    id: 11,
    name: 'Nome Ficticio 11',
    email: 'email_ficticio2@gmail.com',
    image: Img_test,
    signature: Signature_img_2,
    give_out: false,
  },
  {
    id: 12,
    name: 'Nome Ficticio 12',
    email: 'email_ficticio3@gmail.com',
    image: Img_test,
    signature: Signature_img_3,
    give_out: true,
  },
  {
    id: 13,
    name: 'Nome Ficticio 13',
    email: 'email_ficticio2@gmail.com',
    image: Img_test,
    signature: Signature_img_2,
    give_out: false,
  },
  {
    id: 14,
    name: 'Nome Ficticio 14',
    email: 'email_ficticio3@gmail.com',
    image: Img_test,
    signature: Signature_img_3,
    give_out: true,
  },
  {
    id: 15,
    name: 'Nome Ficticio 15',
    email: 'email_ficticio1@gmail.com',
    image: Img_test,
    signature: Signature_img_1,
    give_out: false,
  },
  {
    id: 16,
    name: 'Nome Ficticio 16',
    email: 'email_ficticio2@gmail.com',
    image: Img_test,
    signature: Signature_img_2,
    give_out: true,
  },
  {
    id: 17,
    name: 'Nome Ficticio 17',
    email: 'email_ficticio3@gmail.com',
    image: Img_test,
    signature: Signature_img_3,
    give_out: false,
  }
];


export function Management_Data(){
  const [formData, setFormData] = useState(initialData);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [data, setData] = useState(peopleData);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const [isPersonModalVisible, setIsPersonModalVisible] = useState(false);
  const [isListModalVisible, setIsListModalVisible] = useState(false);


  const openPersonModal = (person) => {
    setSelectedPerson(person);
    setIsPersonModalVisible(true);
  };

  
  const closePersonModal = () => {
    setIsPersonModalVisible(false);
  };

  const handleToggleGiveOut = (id) => {
    setData((prevData) =>
      prevData.map((person) =>
        person.id === id ? { ...person, give_out: !person.give_out } : person
      )
    );
  };


  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleToggle = () => {
    setFormData({ ...formData, toAllUsers: !formData.toAllUsers });
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleListModal = () => {
    setIsListModalVisible(!isListModalVisible);
  };

  return(
      <>
  {Platform.OS === 'web' || Platform.OS === 'windows' ? (
    <Web_Body>
          <Header></Header>
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
                  <Web_Sub_Title>Gerencie Seus ambientes</Web_Sub_Title>
                </Web_Flag_Sub_Title>
                <Web_Sub_Container_Children>
                  <Web_Children_Column $Widths="32">
                    <Web_Childen_Data_List_View $heights="40">
                    <Web_Children_Flag_Sub_Title>
                      {/* Informações da Lista */}
                      <Web_Children_Sub_Title> Dados de sua Lista</Web_Children_Sub_Title>

                    
                    </Web_Children_Flag_Sub_Title>

                    <Web_Children_Data_Info_View $direction="" $Wghts="32" $align="" $gap="10"  >

                            <Web_Children_Data_Info_View $direction="row" $Wghts=""  $Wdhts="40" $align="center" $gap="6" >
                            <Web_Children_Data_Info_Text>Titulo      </Web_Children_Data_Info_Text>
                            <Web_Children_Data_Info_Input></Web_Children_Data_Info_Input>
                            </Web_Children_Data_Info_View> 
                            <Web_Children_Data_Info_View $direction="row" $Wghts=""   $Wdhts="40" $align="center" $gap="4" >
                            <Web_Children_Data_Info_Text>Senha  </Web_Children_Data_Info_Text>
                            
                            <Web_Children_Data_Info_TextInputPass
                                $Widths={'30'}
                                style={{paddingRight:'6vh'}}
                                value={formData.senha}
                                onChangeText={(value) => handleInputChange('senha', value)}
                                secureTextEntry={!isPasswordVisible} 
                              />
                              <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={{ position:'absolute',marginLeft:'31vh'}}>
                                <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={'3.5vh'} color="gray" />
                              </TouchableOpacity>
                            
                            </Web_Children_Data_Info_View>

                            <Web_Children_Data_Info_View $direction="row" $Wghts=""  $Wdhts="50" $align="start" $gap="10" style={{marginLeft:'1vh',alignItems:'center'}}>
                            <Web_List_Input_ToggleContainer $isActive={formData.toAllUsers} onPress={handleToggle}>
                                <Web_List_Input_ToggleCircle />
                              </Web_List_Input_ToggleContainer>
                              <Web_Children_Data_Info_Text $fsz="13" style={{marginLeft:'3vh',textAlign:'center'}}>Compartilhar com todos presentes</Web_Children_Data_Info_Text >

                              </Web_Children_Data_Info_View>

                              
                            <Web_Children_Data_Info_View $direction="" $Wghts="130"   $Wdhts="40" $align="" $gap="0" style={{marginTop:'-2vh'}} >
                                <DatePicker align="" date={formData.data} onDateChange={(date) => handleInputChange('data', date)} />
    
                            </Web_Children_Data_Info_View>    

                        </Web_Children_Data_Info_View>
                        <Web_Children_Footer>

                            <Web_Children_Footer_Button>
                              <Web_Children_Footer_Button_Text>
                                Atualizar
                              </Web_Children_Footer_Button_Text>
                            </Web_Children_Footer_Button>
                   
                        </Web_Children_Footer>
                    </Web_Childen_Data_List_View>
                    {/* Gerenciando  estado da Lista */}
                    <Web_Childen_Data_List_View $heights="30">
                    <Web_Children_Data_Info_View $direction="row" $Wghts="10"  $Wdhts="40" $align="center" $gap="6" >
                            <Web_Children_Data_Info_Text>Link:   </Web_Children_Data_Info_Text>
                            <Web_Children_Data_Info_Input></Web_Children_Data_Info_Input>
                            </Web_Children_Data_Info_View> 

                    <Web_Children_Page >



                        <Web_Children_Page_Button style={{backgroundColor:Colors.black}}>
                          <Web_Children_Page_Button_Text $size={'1.6'} style={{color: Colors.white}}>
                              Acessar Pagina
                          </Web_Children_Page_Button_Text>
                        </Web_Children_Page_Button>
                        <Web_Children_Page_Button style={{backgroundColor:Colors.New_White}}>
                          <Web_Children_Page_Button_Text $size={'1.5'} style={{color: Colors.background}}>
                              Concluir
                          </Web_Children_Page_Button_Text>
                        </Web_Children_Page_Button>
                        <Web_Children_Page_Button style={{backgroundColor:Colors.New_White}}>
                          <Web_Children_Page_Button_Text $size={'1.5'} style={{color: Colors.red}}>
                              Descartar
                          </Web_Children_Page_Button_Text>
                        </Web_Children_Page_Button>
                    </Web_Children_Page>
                    </Web_Childen_Data_List_View>

                  </Web_Children_Column>

                  {/* Lista dos usuários */}
                  <Web_Children_Column $Widths="67" $direction="row">
                      {/* Dados dos usuários */}
                      <Web_List_Data_People_Signature>
                        <Web_Flag_Sub_Title>
                          <Web_Sub_Title> Usuários Interessados</Web_Sub_Title>
                          
                        </Web_Flag_Sub_Title>
                          
                        <Web_List_Data_People_Signature_Scroll>
                           {data.map((person, index) => (
            <Web_List_Data_People_Data_View key={person.id} $type={index % 2 === 0 ? 0 : 1}>
              <Web_List_Data_People_Data_Image source={person.image} />
              <Web_List_Data_People_Data_Name>{person.name}</Web_List_Data_People_Data_Name>
              <Web_List_Data_People_Data_Name>{person.email}</Web_List_Data_People_Data_Name>
              <TouchableOpacity onPress={() => handleToggleGiveOut(person.id)}>
                <Web_List_Input_ToggleContainer $isActive={person.give_out}>
                  <Web_List_Input_ToggleCircle />
                </Web_List_Input_ToggleContainer>
              </TouchableOpacity>
            </Web_List_Data_People_Data_View>
          ))}
                        </Web_List_Data_People_Signature_Scroll>
                      </Web_List_Data_People_Signature>
                      {/* Assinaturas dos usuários */}
                      <Web_List_Data_People_Signature>
                        <Web_Flag_Sub_Title>
                          <Web_Sub_Title> Lista das Assinaturas</Web_Sub_Title>
                        </Web_Flag_Sub_Title>


                        <Web_List_Data_People_Signature_Scroll_2>
                          {peopleData.map((person, index) => (
                            <Web_List_Data_People_Data_View_2 key={index} $type={index % 2 == 0? 0 : 1}>
                              <Web_List_Data_People_Data_Image source={person.image} />

                              <Web_List_Data_People_Data_Image_2 source={person.signature} />
                              <Lupa_Icon name={'trash'} size={'2.5vh'} color={'maroon'} bordercolor={'black'}> </Lupa_Icon>
                            </Web_List_Data_People_Data_View_2>
                          ))}

                        </Web_List_Data_People_Signature_Scroll_2>
                      </Web_List_Data_People_Signature>

                  </Web_Children_Column>
                </Web_Sub_Container_Children>
              </Web_Bar_Info>            
            </Web_Sub_Container>
          </Web_Container>
        </Web_Body>
) :  (
<Mob_Body>
<Header />
<Mob_Container>
  <Mob_Sub_Container>
    <Mob_View_Title>
      <Mob_Title>Gerencie tuas Listas</Mob_Title>
    </Mob_View_Title>

    {/* Botão para abrir o modal */}
    <Mob_Flag_Sub_Title>
      <Mob_Sub_Title>Dados de sua Lista</Mob_Sub_Title>
      <TouchableOpacity onPress={toggleListModal}>
        <Ionicons name="information-circle" size={24} color="gray" />
      </TouchableOpacity>
    </Mob_Flag_Sub_Title>



    {/* Modal para os "Dados de sua Lista" */}
    {isListModalVisible && (
      <Mob_Modal_Container transparent visible={isListModalVisible} animationType="fade">
        <Mob_Modal_Backdrop activeOpacity={1} onPress={toggleListModal}>
          <TouchableOpacity activeOpacity={1} onPress={(e) => e.stopPropagation()}>
            <Mob_Modal_Content>
              <Mob_Modal_Title>Dados de sua Lista</Mob_Modal_Title>

              <Mob_Data_List_Info_Data>
                <Mob_Text_Title>Título</Mob_Text_Title>
                <Mob_Input
                  value={formData.titulo}
                  onChangeText={(value) => handleInputChange("titulo", value)}
                />
              </Mob_Data_List_Info_Data>

              <Mob_Data_List_Info_Data>
                <Mob_Text_Title>Senha</Mob_Text_Title>
                <Mob_Input_Password_Container>
                  <Mob_Input_Password
                    value={formData.senha}
                    onChangeText={(value) => handleInputChange("senha", value)}
                    secureTextEntry={!isPasswordVisible}
                  />
                  <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Ionicons
                      name={isPasswordVisible ? "eye-off" : "eye"}
                      size={24}
                      color="gray"
                    />
                  </TouchableOpacity>
                </Mob_Input_Password_Container>
              </Mob_Data_List_Info_Data>

              <Mob_Data_List_Info_Data style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>         

                <Mob_List_Input_ToggleContainer
                  $isActive={formData.toAllUsers}
                  onPress={handleToggle}
                >
                  <Mob_List_Input_ToggleCircle />
                </Mob_List_Input_ToggleContainer>
                <Mob_Text_Anotation > Compartilhar com todos</Mob_Text_Anotation>
              </Mob_Data_List_Info_Data>

              <Mob_Data_List_Info_Data >
                <DatePicker
                  align={'row'} 
                  date={formData.data}
                  onDateChange={(date) => handleInputChange("data", date)}
                />
              </Mob_Data_List_Info_Data>

              <Mob_Button_Container>
                <Mob_Button onPress={toggleListModal}>
                  <Mob_Button_Text>Salvar</Mob_Button_Text>
                </Mob_Button>
              </Mob_Button_Container>
            </Mob_Modal_Content>
          </TouchableOpacity>
        </Mob_Modal_Backdrop>
      </Mob_Modal_Container>
    )}

        {/*  Gerenciando*/}
        <Mob_Childen_Data_List_View $heights={130}>
      <Mob_Children_Data_Info_View $direction="row" $Wghts={50} $Wdhts={300} $align="center" $gap={3}>
        <Mob_Children_Data_Info_Text>Link:</Mob_Children_Data_Info_Text>
        <Mob_Children_Data_Info_Input placeholder="Digite aqui" />
      </Mob_Children_Data_Info_View>
      <Mob_Children_Page>
        <Mob_Children_Page_Button style={{ backgroundColor: Colors.black }}>
          <Mob_Children_Page_Button_Text $size={'15'} style={{ color: Colors.white }}>
            Acessar Pagina
          </Mob_Children_Page_Button_Text>
        </Mob_Children_Page_Button>
        <Mob_Children_Page_Button style={{ backgroundColor: Colors.background }}>
          <Mob_Children_Page_Button_Text $size={16} style={{ color:  Colors.New_White}}>
            Concluir
          </Mob_Children_Page_Button_Text>
        </Mob_Children_Page_Button>
        <Mob_Children_Page_Button style={{ backgroundColor: Colors.New_White }}>
          <Mob_Children_Page_Button_Text $size={16} style={{ color: Colors.red }}>
            Descartar
          </Mob_Children_Page_Button_Text>
        </Mob_Children_Page_Button>
      </Mob_Children_Page>
    </Mob_Childen_Data_List_View>


    {/* Lista de usuários */}
    <Mob_List_Data_People_View>
    <Mob_Flag_Sub_Title>
      <Mob_Sub_Title>Usuarios Interessados</Mob_Sub_Title>
    </Mob_Flag_Sub_Title>
      <Mob_List_Data_People_ScrollView>
      {peopleData.map((person:any, index:any) => (

        <Mob_List_Data_People_Data_View key={index} $type={index % 2 === 0 ? 0 : 1}>
          <Mob_List_Data_People_Data_Image source={person.image} />
          <Mob_List_Data_People_Data_Name>{person.name}</Mob_List_Data_People_Data_Name>
          <Mob_List_Data_People_Button_Clicked onPress={() => openPersonModal(person)} >
            <FontAwesome6 name="signature" size={24} color="black"  />
          </Mob_List_Data_People_Button_Clicked>
          <Lupa_Icon name={'trash'} size={20} color={'maroon'} bordercolor={'black'}> </Lupa_Icon>
        </Mob_List_Data_People_Data_View>
      ))}
      </Mob_List_Data_People_ScrollView>
    </Mob_List_Data_People_View>



    {/* Modal para exibir o email e assinatura */}
    {isPersonModalVisible && selectedPerson && (
      <Mob_Modal_Container transparent visible={isPersonModalVisible} animationType="fade">
        <Mob_Modal_Backdrop activeOpacity={1} onPress={closePersonModal}>
          <TouchableOpacity activeOpacity={1} onPress={(e) => e.stopPropagation()}>
            <Mob_Modal_Content>
              <Mob_Modal_Image source={selectedPerson.image} />
              <Mob_Modal_Title>{selectedPerson.name}</Mob_Modal_Title>
              <Mob_Modal_Email>{selectedPerson.email}</Mob_Modal_Email>
              <Mob_Modal_SignatureImage source={selectedPerson.signature} />

              <Mob_Modal_CloseButton $back={selectedPerson.give_out}onPress={() => handleToggleGiveOut(selectedPerson.id)}>
                <Mob_Modal_CloseButtonText>
              {selectedPerson.give_out ? "Compartilhamento Ativado" : "Compartilhamento Desativado"}
            </Mob_Modal_CloseButtonText>
          </Mob_Modal_CloseButton>
            </Mob_Modal_Content>
          </TouchableOpacity>
        </Mob_Modal_Backdrop>
      </Mob_Modal_Container>
    )}

  </Mob_Sub_Container>
</Mob_Container>
</Mob_Body>
)}
    </>
);
}

export const Mob_Body = styled.View`
flex: 1;
display: flex;
flex-direction: column;
justify-content: stretch;
width: 100%;
height: 100%;
background-color: aliceblue;
`;

export const Mob_Container = styled.View`
flex: 1;
flex-direction: column;
width: 100%;
height: 100%;
`;

export const Mob_View_Title = styled.View`
flex: 1;
justify-content: stretch;
align-items: center;
`;

export const Mob_Title = styled.Text`
font-size: 32px;
font-family: Arial;
min-width: stretch;
color: ${Colors.title};
text-align: center;
`;

export const Mob_Sub_Container = styled.View`
flex: 1;
flex-direction: column;
justify-content: center;
flex-wrap: nowrap;
align-items: center;
height: 100%;
width: 100%;
gap: 20px;
border-radius: 11px;
`;

export const Mob_Flag_Sub_Title = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
width: auto;
height: auto;
min-height:25px;
max-height: 40px;
background-color: ${Pages_Colors.flag_Color};
border-radius: 5px 5px 5px 5px;
padding: 5px 0px 3px 4px;
margin-bottom: 10px;
`;

export const Mob_Sub_Title = styled.Text`
font-size: 20px;
font-family: Arial;
color: ${Colors.white};
`;

export const Mob_Data_List_Info_Data = styled.View`

margin-bottom: 15px;
padding: 0% 5% 0 5%;
`;

export const Mob_Text_Title = styled.Text`
font-size: 16px;
font-weight: bold;
color: ${Colors.black};
margin-bottom: 5px;
`;

export const Mob_Input = styled.TextInput`
padding: 10px;
border: 1px solid ${Colors.gray};
border-radius: 5px;
font-size: 16px;
width: 200px;
`;

export const Mob_Input_Password_Container = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
border: 1px solid ${Colors.gray};
border-radius: 5px;
padding: 10px;
width: 200px;
`;

export const Mob_Input_Password = styled.TextInput`
flex: 1;
font-size: 16px;
width: auto;
min-width: 150px;
padding-right: 10px;
`;

export const Mob_List_Input_ToggleContainer = styled.TouchableOpacity<{$isActive: boolean}>`
width: 40px;
height: 20px;
border-radius: 10px;
background-color: ${(props) => (props.$isActive ? Colors.background : '#ccc')};
justify-content: ${(props) => (props.$isActive ? 'flex-end' : 'flex-start')};
padding: 3px;
align-items: center;
flex-direction: row;
`;

export const Mob_List_Input_ToggleCircle = styled.View`
width: 15px;
height: 15px;
border-radius: 7.5px;
background-color: white;
`;

export const Mob_Text_Anotation = styled.Text`
text-align: center;
font-size: 14px;
color: ${Colors.black};

`;

export const Mob_Button_Container = styled.View`
flex-direction: row;
justify-content: space-around;
margin-top: 20px;
`;

export const Mob_Button = styled.TouchableOpacity`
padding: 10px 20px;
background-color: ${Colors.black};
border-radius: 5px;
margin-top: 20px;
`;

export const Mob_Button_Text = styled.Text`
font-size: 16px;
color: ${Colors.white};
font-weight: bold;
`;

export const Mob_List_Data_People_View = styled.View`
flex:1;
flex-direction: column;
align-items: stretch;
border-radius: 11px;
/* background-color: ${Colors.red}; */
/* padding: 50px 0px 10px 0px; */
border-radius: 11px;
width: 100%;
height: auto;
min-height: 280px;
margin-bottom: 10px;
`;
export const Mob_List_Data_People_ScrollView = styled.ScrollView`
elevation:5px;
`;
export const Mob_List_Data_People_Data_View = styled.View<{$type: number}>`
flex: 1;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
min-height: 30px;
max-height: 50px;
padding: 0 20px 0 20px;
height: 40px;
background-color: ${(props) => (props.$type === 1 ? Colors.conatiner_green : Colors.background)};
`;

export const Mob_List_Data_People_Data_Image = styled.Image`
align-items: center;
width: 30px;
height: 30px;
border-radius: 15px;
background-color: ${Colors.white};
`;

export const Mob_List_Data_People_Data_Name = styled.Text`
text-align: center;
font-size: 16px;
color: ${Colors.black};
font-weight: 500;
`;
export const Mob_List_Data_People_Button_Clicked = styled.TouchableOpacity`
background-color: ${Colors.New_White};
border-radius: 3px;
padding:2px;
elevation:2px;
`;

export const Mob_List_Data_People_Data_Image_2 = styled.Image`
align-items: center;
width: auto;
min-width: 150px;
height: auto;
margin: 4px 8px;
min-height: 70px;
max-height: 80px;
border-radius: 11px;
background-color: ${Colors.white};
`;


export const Mob_Modal_Container = styled.Modal`
`;

export const Mob_Modal_Backdrop = styled(TouchableOpacity)`
flex: 1;
justify-content: center;
align-items: center;
background-color: ${Colors.transparent20};
`;

export const Mob_Modal_Content = styled.View`
width: 345px;

padding: 30px 20px 20px 20px;
background-color: ${Colors.white};
border-radius: 10px;
align-items: center;
elevation:20px;
`;
export const Mob_Modal_Image = styled.Image`
width: 60px;
height: 60px;
border-radius: 30px;
`;
export const Mob_Modal_Title = styled.Text`
font-size: 20px;
color:${Colors.primary};
font-weight: bold;
margin-bottom: 10px;
`;

export const Mob_Modal_Email = styled.Text`
font-size: 16px;
color: ${Colors.gray};
margin-bottom: 20px;
`;

export const Mob_Modal_SignatureImage = styled.Image`
width: 100%;
height: auto;
aspect-ratio: 3 / 1;
border-radius: 10px;
resize-mode: contain;
`;

export const Mob_Modal_CloseButton = styled.TouchableOpacity<{$back:boolean}>`
padding: 10px;
background-color: ${(props:any)=>{
  if(props.$back == true) return Colors.background;
  else return Colors.gray;
}};
border-radius: 5px;
margin-top: 20px;
`;

export const Mob_Modal_CloseButtonText = styled.Text`
color: ${Colors.white};
font-weight: bold;
text-align: center;
`;



export const Mob_Childen_Data_List_View = styled.View`
  height: ${(props) => props.$heights}px;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */

  width: 100%;
  background-color: white;


`;

export const Mob_Children_Data_Info_View = styled.View`
  flex:1;

  flex-direction: ${(props) => props.$direction};
  width: ${(props) => props.$Wdhts}px;
  height: ${(props) => props.$Wghts}px;
  align-items: ${(props) => props.$align};
  gap: ${(props) => props.$gap}px;
    padding:0% 5% 0 5%;
`;

export const Mob_Children_Data_Info_Text = styled.Text`
  font-size: 16px;
  color: ${Colors.black};
`;

export const Mob_Children_Data_Info_Input = styled.TextInput`
  border: 1px solid ${Colors.gray_70};
  padding: 8px;
  border-radius: 4px;
  flex: 1;
  font-size: 16px;
`;

export const Mob_Children_Page = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 20px;

`;
export const Mob_Children_Page_Button = styled.TouchableOpacity`
  padding: 10px 10px;
  border-radius: 5px;
`;
export const Mob_Children_Page_Button_Text = styled.Text<{$size:string}>`
  font-size: ${(props:any)=>{
    if(props.$size !== '') return (props.$size)+'px';
    else return '10px';
  }};
`