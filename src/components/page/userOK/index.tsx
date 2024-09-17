import React, { useState } from "react";
import { Header } from "../../organisms/header";
import { Platform, Animated} from "react-native";
import Img_test from '../../../../assets/header/capivara.jpg';
import Signature_img_1 from '../../../../assets/test_sinature_Delete/Signature1.png';
import User_Page from '../../../../assets/images/user_page.jpg';
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
                         Web_Children_Button_Delete_View} from "./Web_Body";
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
                        } from "./Mob_Body";
import { Mob_Sub_Bar_Data_Titles_View, Mob_Sub_Bar_Data_Titles_Children, Mob_Sub_Bar_Data_Titles_Text, Mob_Data_List_Info_Data, Mob_Sub_Bar_Data_Data_View, Mob_Sub_Bar_Data_Titles_Text_2 } from "./Mob_Body";
import { Web_Sub_Bar_Data_Titles_View, Web_Sub_Bar_Data_Titles_Children, Web_Sub_Bar_Data_Titles_Text, Web_List_Items, Web_Data_List_Info_Data, Web_Sub_Bar_Data_Data_View, Web_Sub_Bar_Data_Titles_Text_2 } from "./Web_Body";
import { Colors, Flags_Colors, Pages_Colors } from "../../colors";

const data = [
    {
      id: "01",
      titulo: "Um título bem massante Nengê",
      criadoPor: "Essapessoa é o cara",
      data: "02/05/2077",
      flag: 1
    },
    {
      id: "02",
      titulo: "Outro título interessante",
      criadoPor: "Alguém Importante",
      data: "12/11/2023",
      flag: 2
    },
    {
      id: "03",
      titulo: "Mais um título relevante",
      criadoPor: "Fulano de Tal",
      data: "15/08/2020",
      flag: 3
    },
    {
      id: "04",
      titulo: "Título criativo aqui",
      criadoPor: "Ciclano da Silva",
      data: "25/12/2022",
      flag: 1
    },
    {
      id: "05",
      titulo: "Título interessante",
      criadoPor: "Beltrano Alves",
      data: "01/01/2021",
      flag: 2
    },
    {
      id: "06",
      titulo: "Título de exemplo",
      criadoPor: "Pessoa Qualquer",
      data: "14/02/2019",
      flag: 0
    },
    {
      id: "07",
      titulo: "Título genérico",
      criadoPor: "Autor Desconhecido",
      data: "07/07/2017",
      flag: 2
    },
    {
      id: "08",
      titulo: "Título comum",
      criadoPor: "Criador X",
      data: "22/09/2024",
      flag: 1
    },
    {
      id: "09",
      titulo: "Título inovador",
      criadoPor: "Inovador Y",
      data: "11/11/2018",
      flag: 1
    },
    {
      id: "10",
      titulo: "Título informativo",
      criadoPor: "Informante Z",
      data: "04/04/2023",
      flag: 0
    },
    {
      id: "11",
      titulo: "Título motivacional",
      criadoPor: "Motivador A",
      data: "19/09/2016",
      flag: 2
    },
    {
      id: "12",
      titulo: "Título final",
      criadoPor: "Finalizador B",
      data: "31/12/2025",
      flag: 2
    },
    {
      id: "13",
      titulo: "Título original",
      criadoPor: "Inventor C",
      data: "01/01/2022",
      flag: 1
    },
    {
      id: "14",
      titulo: "Título expressivo",
      criadoPor: "Expressivo D",
      data: "05/06/2019",
      flag: 0
    },
    {
      id: "15",
      titulo: "Título alternativo",
      criadoPor: "Alternativo E",
      data: "12/07/2018",
      flag: 3
    },
    {
      id: "16",
      titulo: "Título memorável",
      criadoPor: "Memorável F",
      data: "21/11/2021",
      flag: 2
    },
    {
      id: "17",
      titulo: "Título significativo",
      criadoPor: "Significativo G",
      data: "13/03/2020",
      flag: 1
    },
    {
      id: "18",
      titulo: "Título inspirador",
      criadoPor: "Inspirador H",
      data: "30/04/2017",
      flag: 1
    },
    {
      id: "19",
      titulo: "Título de destaque",
      criadoPor: "Destaque I",
      data: "08/09/2023",
      flag: 0
    },
    {
      id: "20",
      titulo: "Título envolvente",
      criadoPor: "Envolvente J",
      data: "17/12/2024",
      flag: 2
    },
    {
      id: "21",
      titulo: "Título impactante",
      criadoPor: "Impactante K",
      data: "25/08/2016",
      flag: 3
    },
    {
      id: "22",
      titulo: "Título criativo 2",
      criadoPor: "Criador L",
      data: "09/10/2021",
      flag: 1
    },
    {
      id: "23",
      titulo: "Título transformador",
      criadoPor: "Transformador M",
      data: "03/02/2022",
      flag: 2
    },
    {
      id: "24",
      titulo: "Título eficaz",
      criadoPor: "Eficaz N",
      data: "29/07/2019",
      flag: 0
    },
    {
      id: "25",
      titulo: "Título inspirador 2",
      criadoPor: "Inspirador O",
      data: "15/04/2023",
      flag: 3
    },
    {
      id: "26",
      titulo: "Título expressivo 2",
      criadoPor: "Expressivo P",
      data: "11/06/2018",
      flag: 1
    },
    {
      id: "27",
      titulo: "Título desafiador",
      criadoPor: "Desafiador Q",
      data: "06/08/2025",
      flag: 2
    },
    {
      id: "28",
      titulo: "Título encantador",
      criadoPor: "Encantador R",
      data: "22/09/2024",
      flag: 1
    },
    {
      id: "29",
      titulo: "Título icônico",
      criadoPor: "Icônico S",
      data: "05/11/2022",
      flag: 0
    },
    {
      id: "30",
      titulo: "Título memorável 2",
      criadoPor: "Memorável T",
      data: "18/01/2026",
      flag: 1
    }
  ];
  
export function User(){
  const [userData, setUserData] = useState({
    name: "Nome Fictício",
    email: "email_ficticio@gmail.com",
  });

  const handleInputChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };


  return(
      <>
  {Platform.OS === 'web' || Platform.OS === 'windows' ? (
    <Web_Body>
          <Header></Header>
          <Web_Container>
            <Web_Container_IMG   source={User_Page}/>
            <Web_Sub_Container>
              <Web_View_Title style={{                  marginLeft:'20vh',}}>
                <Web_Title>Configurações do Usuário</Web_Title>


              </Web_View_Title>

              <Web_Bar_Info
                style={{
                  marginLeft:'20vh',
                  shadowColor: "#000000",
                  shadowOffset: { width: 2, height: 2 },
                  shadowOpacity: 0.8,
                  shadowRadius: 7,
                  elevation: 3,
                }}
              >
                <Web_Flag_Sub_Title >
                  <Web_Sub_Title>Meus Dados</Web_Sub_Title>
                </Web_Flag_Sub_Title>
                <Web_Children_Column>
                      <Web_Container_Photo source={Img_test}/>

                      <Web_Children_Input_View>
                        <Web_Children_Input_Label>Nome: </Web_Children_Input_Label>
                        <Web_Children_Input/>
                      </Web_Children_Input_View>
                      <Web_Children_Input_View>
                        <Web_Children_Input_Label>Email:  </Web_Children_Input_Label>
                        <Web_Children_Input/>
                      </Web_Children_Input_View>
                      <Web_Children_Button_Exit_View>
                      <Web_Children_Button $type={'exit'}>

                      <Web_Children_Input_Label >Sair</Web_Children_Input_Label>
                      </Web_Children_Button>
                      </Web_Children_Button_Exit_View>
                      <Web_Children_Input_View>
                      <Web_Children_Input_Label>Sua Assinatura:  </Web_Children_Input_Label>
                      <Web_Children_Data_Image_Signature source={Signature_img_1}/>
                      <Web_Children_Button $type={'save'}>

<Web_Children_Input_Label >Salvar</Web_Children_Input_Label>
</Web_Children_Button>
                      </Web_Children_Input_View>

                  </Web_Children_Column>  

              </Web_Bar_Info>
              <Web_Bar_Info_Advanced
                style={{
                  marginLeft:'20vh',
                  justifyContent:'center',

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
                <Web_Children_Column >
          
                <Web_Children_Button_Delete_View style={{backgroundColor:Colors.gray_30,padding:'2vh'}}>
                <Web_Children_Input_Label>Deseja Deletar sua conta?  </Web_Children_Input_Label>
                      <Web_Children_Button $type={'exit'}>

                      <Web_Children_Input_Label >Encerrar</Web_Children_Input_Label>
                      </Web_Children_Button>
                      </Web_Children_Button_Delete_View>
                </Web_Children_Column>
              </Web_Bar_Info_Advanced>
            </Web_Sub_Container>
          </Web_Container>
        </Web_Body>
) : (
  <Mob_Body>
  <Header />
  <Mob_Container>
    <Mob_Sub_Container>

        <Mob_Title>Configurações do Usuário</Mob_Title>


      <Mob_Flag_Sub_Title>
        <Mob_Sub_Title>Meus Dados</Mob_Sub_Title>
      </Mob_Flag_Sub_Title>

      <Mob_Children_Column>
      

        <Mob_Children_Input_View_Info> 
          
           <Mob_Container_Photo source={Img_test} />
           
           <Mob_Children_Input_View>
              <Mob_Children_Input_Label>Nome</Mob_Children_Input_Label>
              <Mob_Children_Input
                value={userData.name}
                onChangeText={(value) => handleInputChange("name", value)}
            />
          </Mob_Children_Input_View>

          <Mob_Children_Input_View>
            <Mob_Children_Input_Label>Gmail</Mob_Children_Input_Label>
            <Mob_Children_Input
              value={userData.email}
              onChangeText={(value) => handleInputChange("email", value)}
            />
          </Mob_Children_Input_View>
        

          <Mob_Children_Button $type={"exit"}>
            <Mob_Children_Input_Label>Sair</Mob_Children_Input_Label>
          </Mob_Children_Button>

        </Mob_Children_Input_View_Info>



        <Mob_Children_Input_View_Save>
          <Mob_Children_Input_Label>Sua Assinatura</Mob_Children_Input_Label>
          <Mob_Children_Data_Image_Signature source={Signature_img_1} />
          <Mob_Children_Button $type={"save"}>
            <Mob_Children_Input_Label>Salvar</Mob_Children_Input_Label>
          </Mob_Children_Button>
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
</Mob_Body>
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

//MOB

