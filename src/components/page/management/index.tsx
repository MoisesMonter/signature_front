import React, { useState } from "react";
import { Header } from "../../organisms/header";
import { Platform, Animated} from "react-native";
import Img_test from '../../../../assets/header/capivara.jpg';
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
                         Web_Pagination_Text } from "./Web_Body";
import { Mob_Body,
   Mob_Container,
    Mob_Sub_Container,
     Mob_View_Title,
      Mob_Title,
       Mob_Lupa_View,
        Mob_Lupa_TextInput,
                 Mob_Signature_Flag,
                  Mob_Signature_Flag_Title } from "./Mob_Body";
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
  
export function Management(){
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [isOpen, setIsOpen] = useState(true);
  const [heightAnim] = useState(new Animated.Value(0));
  const [activeFilter, setActiveFilter] = useState(null);


  const [selectedDate, setSelectedDate] = useState('');

  const toggleDrawer = () => {
    if (isOpen) {
      Animated.timing(heightAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setIsOpen(false));
    } else {
      setIsOpen(true);
      Animated.timing(heightAnim, {
        toValue: 100, 
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSearch = () => {
    const filtered = data.filter((item) =>
      item.titulo.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1); 
  };

  const handleChangePage = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleFilter = (filterKey, flagFilter) => {

    if (activeFilter === filterKey) {
      setFilteredData(data);
      setActiveFilter(null);
    } else {
      const filtered = data.filter((item) =>
        Array.isArray(flagFilter)
          ? flagFilter.includes(item.flag)
          : item.flag === flagFilter
      );
      setFilteredData(filtered);
      setActiveFilter(filterKey);
    }
    setCurrentPage(1); 
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }
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
                <Web_Group_Info_Detail_View>
                <Web_SubGroup_Info_Detail_View $styles={"space-around"}>
                    <Web_Button_Info_Detail_View
                      $Type_B={""} 
                      onPress={() => handleFilter("abertas", 2)}
                      style={{
                        backgroundColor: activeFilter === "abertas" ? Colors.background : Pages_Colors.Gerenciamento_Gray,
                      }}
                    >
                      Abertas
                    </Web_Button_Info_Detail_View>
                    <Web_Button_Info_Detail_View
                      $Type_B={""} 
                      onPress={() => handleFilter("finalizados", [0, 1])}
                      style={{
                        backgroundColor: activeFilter === "finalizados" ? Colors.background : Pages_Colors.Gerenciamento_Gray,
                      }}
                    >
                      Finalizados
                    </Web_Button_Info_Detail_View>
                    <Web_Button_Info_Detail_View
                      $Type_B={"End"} $ActiveFilter={activeFilter}
                      onPress={() => handleFilter("descartados", 3)}
                      style={{
                        backgroundColor: activeFilter === "descartados" ? Flags_Colors.red : Colors.New_White,
                        
                        
                        
                      }}
                    >
                      Descartados
                    </Web_Button_Info_Detail_View>
                  </Web_SubGroup_Info_Detail_View>
                  <Web_SubGroup_Info_Detail_View $styles={"flex-end"}>
                    <Web_Button_Info_Detail_View $Type_B={"Create"} style={{backgroundColor:Colors.black}}>
                      Criar Nova Lista
                    </Web_Button_Info_Detail_View>
                  </Web_SubGroup_Info_Detail_View>
                </Web_Group_Info_Detail_View>

                <Web_Line />
                <Web_Lupa_View>
                  <Web_Lupa_TextInput
                    placeholder="Digite um Titulo"
                    value={searchText}
                    onChangeText={setSearchText}
                  />
                  <Lupa_Icon name="search" size={"2vh"} color="#000" onPress={handleSearch} />
                </Web_Lupa_View>

                <Web_Sub_Bar_Info>
                  <Web_Sub_Bar_Data_Titles_View>
                    <Web_Sub_Bar_Data_Titles_Children>
                      <Web_Sub_Bar_Data_Titles_Text>Editar</Web_Sub_Bar_Data_Titles_Text>
                    </Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Children>
                      <Web_Sub_Bar_Data_Titles_Text>Titulo</Web_Sub_Bar_Data_Titles_Text>
                    </Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Children>
                      <Web_Sub_Bar_Data_Titles_Text>Nº de assinaturas</Web_Sub_Bar_Data_Titles_Text>
                    </Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Children>
                      <Web_Sub_Bar_Data_Titles_Text>Ultima atualização</Web_Sub_Bar_Data_Titles_Text>
                    </Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Children>
                      <Web_Sub_Bar_Data_Titles_Text>Privado</Web_Sub_Bar_Data_Titles_Text>
                    </Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Children>
                      <Web_Sub_Bar_Data_Titles_Text>Link de acesso</Web_Sub_Bar_Data_Titles_Text>
                    </Web_Sub_Bar_Data_Titles_Children>
                  </Web_Sub_Bar_Data_Titles_View>
                  <Web_List_Items>
                    {currentItems.map((item, index) => (
                      <Web_Data_List_Info_Data key={index}>
                        <Web_Sub_Bar_Data_Data_View $state={item.flag}>
                          <Web_Sub_Bar_Data_Titles_Children>
                            <Web_Sub_Bar_Data_Titles_Text_2>
                              <Lupa_Icon name="gear" size={"4vh"} color="#000" />
                            </Web_Sub_Bar_Data_Titles_Text_2>
                          </Web_Sub_Bar_Data_Titles_Children>
                          <Web_Sub_Bar_Data_Titles_Children>
                            <Web_Sub_Bar_Data_Titles_Text_2>{truncateText(item.titulo, 30)}</Web_Sub_Bar_Data_Titles_Text_2>
                          </Web_Sub_Bar_Data_Titles_Children>
                          <Web_Sub_Bar_Data_Titles_Children>
                            <Web_Sub_Bar_Data_Titles_Text_2>{item.criadoPor}</Web_Sub_Bar_Data_Titles_Text_2>
                          </Web_Sub_Bar_Data_Titles_Children>
                          <Web_Sub_Bar_Data_Titles_Children>
                            <Web_Sub_Bar_Data_Titles_Text_2>{item.data}</Web_Sub_Bar_Data_Titles_Text_2>
                          </Web_Sub_Bar_Data_Titles_Children>
                        </Web_Sub_Bar_Data_Data_View>
                      </Web_Data_List_Info_Data>
                    ))}
                  </Web_List_Items>
                </Web_Sub_Bar_Info>
              </Web_Bar_Info>
              <Web_Pagination>
                <Web_Pagination_Items onPress={() => handleChangePage("prev")}>
                  <Web_Pagination_Text>←</Web_Pagination_Text>
                </Web_Pagination_Items>
                <Web_Pagination_Items onPress={() => handleChangePage("next")}>
                  <Web_Pagination_Text>→</Web_Pagination_Text>
                </Web_Pagination_Items>
              </Web_Pagination>
            </Web_Sub_Container>
          </Web_Container>
        </Web_Body>
) : (
  <Mob_Body>
  <Header></Header> 
  <Mob_Container>
    <Mob_Sub_Container>
      <Mob_View_Title>
        <Mob_Title>Gerencie tuas Listas</Mob_Title>
      </Mob_View_Title>

      {isOpen && (
                <>
                  <Mob_SubGroup_Info_Detail_View $styles={"space-around"}>
                    <Mob_Button_Info_Detail_View $Type_B={""} 
                                          onPress={() => handleFilter("abertas", 2)}
                                          style={{
                                            backgroundColor: activeFilter === "abertas" ? Colors.background : Colors.New_White,
                                            
                                            
                                            
                                          }}>
                      <Mob_Text_Button_Info_Detail $Type_B={""}>Abertas</Mob_Text_Button_Info_Detail>
                    </Mob_Button_Info_Detail_View>
                    <Mob_Button_Info_Detail_View $Type_B={""} 
                                          onPress={() => handleFilter("finalizados", [0,1])}
                                          style={{
                                            backgroundColor: activeFilter === "finalizados" ? Colors.background : Colors.New_White,
                                            
                                            
                                            
                                          }}>
                      <Mob_Text_Button_Info_Detail $Type_B={""}>Finalizados</Mob_Text_Button_Info_Detail>
                    </Mob_Button_Info_Detail_View>
                    <Mob_Button_Info_Detail_View 
                                          $Type_B={"End"} 
                                          onPress={() => handleFilter("descartados", 3)}
                                          style={{
                                            backgroundColor: activeFilter === "descartados" ? Colors.background : Colors.New_White,
                                            
                                            
                                            
                                          }}>
                      <Mob_Text_Button_Info_Detail $Type_B={"End"}>Encerradas</Mob_Text_Button_Info_Detail>
                    </Mob_Button_Info_Detail_View>
                  </Mob_SubGroup_Info_Detail_View>
    
                </>
              )}

              <Mob_Line />


              <Mob_SubGroup_Info_Detail_View $styles={"space-around"}>
                    <Mob_Button_Info_Detail_View $Type_B={"Create"}>
                      <Mob_Text_Button_Info_Detail $Type_B={"Create"}>Criar Nova Lista</Mob_Text_Button_Info_Detail>
                    </Mob_Button_Info_Detail_View>
                    <Mob_Ghost></Mob_Ghost>
                <Mob_Button_Info_Detail_View $Type_B={'Filters'} onPress={toggleDrawer}>
                <Mob_Text_Button_Info_Detail $Type_B={"Filters"}>{isOpen ? "Minimizar" : "Filtros"}</Mob_Text_Button_Info_Detail>
                </Mob_Button_Info_Detail_View>

                  </Mob_SubGroup_Info_Detail_View>
              <Mob_Lupa_View>
                <Mob_Lupa_TextInput
                  placeholder="Digite um Titulo"
                  value={searchText}
                  onChangeText={setSearchText}
                />
                <Lupa_Icon name="search" size={20} color="#000" onPress={handleSearch} />
              </Mob_Lupa_View>

              <Mob_Sub_Bar_Data_Titles_View>
                <Mob_Sub_Bar_Data_Titles_Children>
                  <Mob_Sub_Bar_Data_Titles_Text>Editar</Mob_Sub_Bar_Data_Titles_Text>
                </Mob_Sub_Bar_Data_Titles_Children>
                <Mob_Sub_Bar_Data_Titles_Children>
                  <Mob_Sub_Bar_Data_Titles_Text>Titulo</Mob_Sub_Bar_Data_Titles_Text>
                </Mob_Sub_Bar_Data_Titles_Children>
                <Mob_Sub_Bar_Data_Titles_Children>
                  <Mob_Sub_Bar_Data_Titles_Text>Nº ✒️</Mob_Sub_Bar_Data_Titles_Text>
                </Mob_Sub_Bar_Data_Titles_Children>
                <Mob_Sub_Bar_Data_Titles_Children>
                  <Mob_Sub_Bar_Data_Titles_Text>🔑 | 🔍</Mob_Sub_Bar_Data_Titles_Text>
                </Mob_Sub_Bar_Data_Titles_Children>
                <Mob_Sub_Bar_Data_Titles_Children>
                  <Mob_Sub_Bar_Data_Titles_Text>Link</Mob_Sub_Bar_Data_Titles_Text>
                </Mob_Sub_Bar_Data_Titles_Children>
              </Mob_Sub_Bar_Data_Titles_View>
              {filteredData.map((item, index) => (
                <Mob_Data_List_Info_Data key={index}>
                  <Mob_Sub_Bar_Data_Data_View $state={item.flag}>
                    <Mob_Sub_Bar_Data_Titles_Children>
                      <Mob_Sub_Bar_Data_Titles_Text_2>
                        <Lupa_Icon name={"gear"} />
                      </Mob_Sub_Bar_Data_Titles_Text_2>
                    </Mob_Sub_Bar_Data_Titles_Children>
                    <Mob_Sub_Bar_Data_Titles_Children>
                      <Mob_Sub_Bar_Data_Titles_Text_2>{truncateText(item.titulo, 30)}</Mob_Sub_Bar_Data_Titles_Text_2>
                    </Mob_Sub_Bar_Data_Titles_Children>
                    <Mob_Sub_Bar_Data_Titles_Children>
                      <Mob_Sub_Bar_Data_Titles_Text_2>{item.criadoPor}</Mob_Sub_Bar_Data_Titles_Text_2>
                    </Mob_Sub_Bar_Data_Titles_Children>
                    <Mob_Sub_Bar_Data_Titles_Children>
                      <Mob_Sub_Bar_Data_Titles_Text_2>{item.data}</Mob_Sub_Bar_Data_Titles_Text_2>
                    </Mob_Sub_Bar_Data_Titles_Children>
                  </Mob_Sub_Bar_Data_Data_View>
                </Mob_Data_List_Info_Data>
              ))}
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
padding:0px 1px 0px 1px;
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
border-radius: 10px;
font-family: Arial;
font-weight: 900;
font-size: 10px;
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