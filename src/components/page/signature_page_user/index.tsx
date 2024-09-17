import React, { useState } from "react";
import { Header } from "../../organisms/header";
import { Platform, Animated, TouchableOpacity,ScrollView} from "react-native";
import Img_test from '../../../../assets/header/capivara.jpg';
import Signature_img_1 from '../../../../assets/test_sinature_Delete/Signature1.png';
import Page_Signature_img from '../../../../assets/images/page_signature.png';
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
      Web_Children_Data_Info_View_Children,
      Web_List_Data_People_Data_Image_Signature,

      } from "./Web_Body";

import { Colors, Flags_Colors, Pages_Colors } from "../../colors";
import DatePicker from "../../button/date";
import { Web_Sub_Bar_Data_image } from "../signature_create/Web_Body";
import { Mob_Flag_Sub_Title } from "../manegement_data";

const initialData = {
  id: '1335',
  titulo: 'Um Titulo massa',
  data_Criação: '20/10/2023',
  data_Atualização: '18/10/2024',
  data_Final:'20/10/2024',
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
  }
];


export function Signature_Page_User(){
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
                <Web_Title>Lista de Assinatura Nº1 </Web_Title>
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
   

                    <Web_Sub_Container_Column_Children_People_Data>
                      <Web_Sub_Container_Column_Children_People_Data_2>
                        <Web_Children_Sub_Title> Criado Por</Web_Children_Sub_Title>
                        <Web_List_Data_People_Data_Image source={Img_test}/>
                      </Web_Sub_Container_Column_Children_People_Data_2>

                    <Web_Sub_Container_Column_Children_People_Data_Form>
                 
                    
                    <Web_Children_Data_Info_Input $sizeW="50" /> 

                    <Web_Children_Data_Info_Input $sizeW="50" />

                    </Web_Sub_Container_Column_Children_People_Data_Form>



                    </Web_Sub_Container_Column_Children_People_Data>


                    <Web_Sub_Container_Column_Children_People_Data_3 style={{marginTop:'3vh'}}>
                    <Web_Children_Sub_Title> Titulo</Web_Children_Sub_Title>

                    <Web_Children_Data_Info_Input $sizeW="67" />
                  </Web_Sub_Container_Column_Children_People_Data_3>

                    
                  <Web_Sub_Container_Column_Children_People_Data_3 style={{marginTop:'-16vh'}}>
                    <Web_Children_Sub_Title> Data de Abertura</Web_Children_Sub_Title>

                    <Web_Children_Data_Info_Input $sizeW="30" />
                  </Web_Sub_Container_Column_Children_People_Data_3>
                  <Web_Sub_Container_Column_Children_People_Data_3 style={{marginTop:'-17vh'}}>
                    <Web_Children_Sub_Title> Data de Encerramento</Web_Children_Sub_Title>

                    <Web_Children_Data_Info_Input $sizeW="30" />

                    <Web_Sub_Container_People_Signature>

                    <Web_Children_Sub_Title> Sua Assinatura</Web_Children_Sub_Title>
                    <Web_List_Data_People_Data_Image_Signature  source={Signature_img_1}/>
                    
                    <Web_Children_Page_Button style={{backgroundColor:Colors.background}}>
                      <Web_Children_Footer_Button_Text $>Confime</Web_Children_Footer_Button_Text>
                    </Web_Children_Page_Button>
                   
                    </Web_Sub_Container_People_Signature>



                  </Web_Sub_Container_Column_Children_People_Data_3>

                  </Web_Children_Column>

                  {/* Lista dos usuários */}
                  <Web_Children_Column $Widths="35" $direction="row" >
                    <Web_List_Data_People_Data_Image_2 source={Page_Signature_img}/>

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
            <Mob_ScrollView>



              <Mob_Title>Lista de Assinatura Nº1</Mob_Title>

              <Mob_Info_Container>
                <Mob_Section>
                <Mob_Flag_Sub_Title>
                  <Mob_Section_Title>Informações da Publicação</Mob_Section_Title>
                  </Mob_Flag_Sub_Title>
                  <Mob_Data_Item>
                    <Mob_Label>Criado Por</Mob_Label>
                    <Mob_Image source={Img_test} />
                    <Mob_Label>Nome ficticio dessa Capivara</Mob_Label>
                    <Mob_Label>email_ficticio@gmail.com</Mob_Label>
                  </Mob_Data_Item>
                  <Mob_Data_Item_Input>
                  <Mob_Label>Titulo</Mob_Label>
                  <Mob_Input $sizeW="90%" placeholder="Insira o Título" />
                  <Mob_Label>Data de Abertura</Mob_Label>
                  <Mob_Input $sizeW="90%" placeholder="Data de Abertura" />
                  <Mob_Label>Data de Encerramento</Mob_Label>
                  <Mob_Input $sizeW="90%" placeholder="Data de Encerramento" />
                  </Mob_Data_Item_Input>
                  <Mob_Signature_Container>
                    <Mob_Label>Sua Assinatura</Mob_Label>
                    <Mob_Signature_Image source={Signature_img_1} />
                    <Mob_Button>
                      <Mob_Button_Text>Confirme</Mob_Button_Text>
                    </Mob_Button>
                  </Mob_Signature_Container>
                </Mob_Section>
              </Mob_Info_Container>
            </Mob_ScrollView>
          </Mob_Container>
        </Mob_Body>
        
)}
</>
)}



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
align-items: center;

`



///Mob

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
  width: 50px;
  height: 50px;
  border-radius: 25px;
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
  align-items: center;
  margin-top: -20px;
`;

export const Mob_Signature_Image = styled.Image`
  width: 150px;
  height: 50px;
  resize-mode: contain;
  margin-bottom: 10px;
  background-color: ${Colors.gray_30};
`;

export const Mob_Button = styled.TouchableOpacity`
  background-color: ${Colors.background};
  padding: 10px 20px;
  border-radius: 5px;
`;

export const Mob_Button_Text = styled.Text`
  color: ${Colors.white};
  font-weight: bold;
`;