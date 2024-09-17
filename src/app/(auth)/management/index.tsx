import React, { useState, useEffect, useCallback } from "react";
import { Platform, Animated, Alert, ActivityIndicator, TouchableOpacity, Touchable } from "react-native";
import Lupa_Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Users from "react-native-vector-icons/FontAwesome6";
import AntDesign from '@expo/vector-icons/AntDesign';
import styled from "styled-components/native";
import { router, useFocusEffect, useRouter } from "expo-router";
import {
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
  Web_Pagination,
  Web_Pagination_Items,
  Web_Pagination_Text,
  Web_Sub_Bar_Data_Titles_View,
  Web_Sub_Bar_Data_Titles_Children,
  Web_Sub_Bar_Data_Titles_Text,
  Web_List_Items,
  Web_Data_List_Info_Data,
  Web_Sub_Bar_Data_Data_View,
  Web_Sub_Bar_Data_Titles_Text_2,
} from "../../../components/organisms/management/Web_Body";
import {
  Mob_Container,
  Mob_Sub_Container,
  Mob_View_Title,
  Mob_Title,
  Mob_Lupa_View,
  Mob_Lupa_TextInput,
  Mob_Sub_Bar_Data_Titles_View,
  Mob_Sub_Bar_Data_Titles_Children,
  Mob_Sub_Bar_Data_Titles_Text,
  Mob_Data_List_Info_Data,
  Mob_Sub_Bar_Data_Data_View,
  Mob_Sub_Bar_Data_Titles_Text_2,
  Mob_Pagination_Items,
  Mob_Pagination,
  Mob_TouchableOpacity_button,
} from "../../../components/organisms/management/Mob_Body";
import { Colors, Pages_Colors, Flags_Colors } from "../../../components/colors";
import { PasswordField } from "../../../components/button/PasswordField";
import { getToken } from "../../../storage/storeToken";
import axios from "axios";
import { Mob_Sub_Title } from "./details";

export default function Management() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [heightAnim] = useState(new Animated.Value(0));
  const [activeFilter, setActiveFilter] = useState(null); 
  const [originalData, setOriginalData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]); 
  const [loading, setLoading] = useState(true);



  useFocusEffect(
    useCallback(() => {
      fetchSignatureLists();
    }, [])
  );

  const router = useRouter();
  
  const fetchSignatureLists = async () => {
    setLoading(true); 

    try {

      const token = await getToken("auth_jrf");

      if (!token) {
        Alert.alert("Erro", "Token não encontrado.");
        setLoading(false);
        return;
      }
      const url =
        Platform.OS === "web"
          ? "http://127.0.0.1:8000/api/signatures/signature_lists/"
          : "http://10.0.2.2:8000/api/signatures/signature_lists/";

      const response = await axios.get(url, {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      if (response.status === 200 && Array.isArray(response.data)) {
        
        const sortedSignatures = response.data.sort((a, b) => b.id - a.id);
        setOriginalData(sortedSignatures); 
        setFilteredData(sortedSignatures); 
      } else {
        Alert.alert("Erro", "Erro ao buscar os dados. Status: " + response.status);
      }
    } catch (error) {
      console.error("Erro ao buscar os dados da lista de assinaturas:", error);
      Alert.alert("Erro", "Não foi possível buscar os dados da lista de assinaturas.");
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    

    fetchSignatureLists();
  }, []);

  const handleFilter = (filterKey) => {
    if (activeFilter === filterKey) {
      setFilteredData(originalData);
      setActiveFilter(null);
    } else {
      let filtered = [];
      switch (filterKey) {
        case "abertas":
          filtered = originalData.filter(
            (item) => item.is_active && !item.is_completed
          );
          break;
        case "finalizados":
          filtered = originalData.filter(
            (item) => !item.is_active && item.is_completed
          );
          break;
        case "descartados":
          filtered = originalData.filter(
            (item) => !item.is_active && !item.is_completed
          );
          break;
        default:
          filtered = originalData;
      }
      setFilteredData(filtered);
      setActiveFilter(filterKey);
    }
    setCurrentPage(1);
  };

  const handleCreateButtonPress = () => {
    router.push("/management/create");
  };

  const handleNavigateToDetails = (itemId) => {
    if (itemId) {
      router.push(`/management/details?id=${itemId}`);
    }
  };

  const handleNavigateToPageuser = (itemId) => {
    if (itemId) {
      router.push(`/pageUser?id=${itemId}`);
    }
  };

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

  const itemsPerPage = Platform.OS === 'web' ? 5 : 9;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  useEffect(() => {
    handleSearch(); 
  }, [searchText]);
  const handleSearch = () => {
    const filtered = originalData.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    filteredData.length > 0
      ? filteredData.slice(indexOfFirstItem, indexOfLastItem)
      : [];

  function truncateText(text, maxLength) {
    if (typeof text !== "string" || text === undefined) {
      return "";
    }
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + (maxLength > 10 ? "..." : "");
    }
    return text;
  }

  if (loading) {
    return (
      <Web_Container>
        <ActivityIndicator size="large" color={Colors.background} />
      </Web_Container>
    );
  }
  return(
      <>
  {Platform.OS === 'web' || Platform.OS === 'windows' ? (
          <Web_Container>
            <Web_Sub_Container>
              <Web_View_Title>
                <Web_Title>Controle de suas Listas</Web_Title>
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
                      onPress={() => handleFilter("abertas", { is_active: true, is_completed: false })}
                      style={{
                        backgroundColor: activeFilter === "abertas" ? Colors.background : Pages_Colors.Gerenciamento_Gray,
                      }}
                    >
                      Abertas
                    </Web_Button_Info_Detail_View>
                    <Web_Button_Info_Detail_View
                      $Type_B={""} 
                      onPress={() => handleFilter("finalizados", { is_active: false, is_completed: true })}
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
                    <Web_Button_Info_Detail_View $Type_B={"Create"} style={{backgroundColor:Colors.black}} onPress={handleCreateButtonPress}  >
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
                  {/* {currentItems && currentItems.length > 0 && currentItems.map((item:any, index:any) => (
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
                            <Web_Sub_Bar_Data_Titles_Text_2>{item.n_ass}</Web_Sub_Bar_Data_Titles_Text_2>
                          </Web_Sub_Bar_Data_Titles_Children>
                          <Web_Sub_Bar_Data_Titles_Children>
                            <Web_Sub_Bar_Data_Titles_Text_2>{item.data_atualizado}</Web_Sub_Bar_Data_Titles_Text_2>
                          </Web_Sub_Bar_Data_Titles_Children>
                          <Web_Sub_Bar_Data_Titles_Children>
                            <PasswordField senha={item.senha} />
                          </Web_Sub_Bar_Data_Titles_Children>
                          <Web_Sub_Bar_Data_Titles_Children>
                            <Web_Sub_Bar_Data_Titles_Text_2>
                              <Lupa_Icon name="gear" size={"4vh"} color="#000" />
                            </Web_Sub_Bar_Data_Titles_Text_2>
                          </Web_Sub_Bar_Data_Titles_Children>
                        </Web_Sub_Bar_Data_Data_View>
                      </Web_Data_List_Info_Data>
                    ))} */}
                     {currentItems.length > 0 ? (
            currentItems.map((item:any, index:any) => (
              <Web_Data_List_Info_Data key={index}>
                <Web_Sub_Bar_Data_Data_View $is_active={item.is_active} $is_completed={item.is_completed}>

                  <Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Text_2>

                    <TouchableOpacity onPress={() => handleNavigateToDetails(item.id)}>
                      <Lupa_Icon name="gear" size={"4vh"} color="#000" />
                    </TouchableOpacity>
   
                    </Web_Sub_Bar_Data_Titles_Text_2>
                  </Web_Sub_Bar_Data_Titles_Children>

                  <Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Text_2>
                     {truncateText(item.title, 30)}
                    </Web_Sub_Bar_Data_Titles_Text_2>
                  </Web_Sub_Bar_Data_Titles_Children>

                  <Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Text_2>
                    {truncateText(item.n_signature.toString(), 30)} 
                    </Web_Sub_Bar_Data_Titles_Text_2>
                  </Web_Sub_Bar_Data_Titles_Children>

                  <Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Text_2>
                      {truncateText(item.update_date, 10)}
                    </Web_Sub_Bar_Data_Titles_Text_2>
                  </Web_Sub_Bar_Data_Titles_Children>

                  <Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Text_2>
                    <PasswordField senha={item.password} />
                    </Web_Sub_Bar_Data_Titles_Text_2>
                  </Web_Sub_Bar_Data_Titles_Children>

                  <Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Text_2>
                    <TouchableOpacity onPress={() => handleNavigateToPageuser(item.id)}>
                      <MaterialIcons name="link" size={'3vh'} color="black" />
                    </TouchableOpacity>

                    </Web_Sub_Bar_Data_Titles_Text_2>
                  </Web_Sub_Bar_Data_Titles_Children>
                  {/* Outros elementos do item */}
                </Web_Sub_Bar_Data_Data_View>
              </Web_Data_List_Info_Data>
            ))
          ) : (
            <Web_Sub_Title>Nenhum item encontrado.</Web_Sub_Title>
          )}
                  </Web_List_Items>
                </Web_Sub_Bar_Info>
              </Web_Bar_Info>
              <Web_Pagination>
                <Web_Pagination_Items onPress={() => handleChangePage("prev")}>
          <AntDesign name="banckward" size={'1.5vh'} color="black" />
                </Web_Pagination_Items>
                <Web_Pagination_Items onPress={() => handleChangePage("next")}>
                <AntDesign name="forward" size={'1.5vh'} color="black" style={{alignItems:'center'}} />      
                </Web_Pagination_Items>
              </Web_Pagination>
            </Web_Sub_Container>
          </Web_Container>
) : (

  <Mob_Container>
  <Mob_Sub_Container>
    <Mob_View_Title>
      <Mob_Title>Gerencie tuas Listas</Mob_Title>
    </Mob_View_Title>

    {isOpen && (
      <>
        <Mob_SubGroup_Info_Detail_View $styles={"space-around"}>
          <Mob_Button_Info_Detail_View $Type_B={""} onPress={() => handleFilter("abertas")}>
            <Mob_Text_Button_Info_Detail $Type_B={""}>Abertas</Mob_Text_Button_Info_Detail>
          </Mob_Button_Info_Detail_View>
          <Mob_Button_Info_Detail_View $Type_B={""} onPress={() => handleFilter("finalizados")}>
            <Mob_Text_Button_Info_Detail $Type_B={""}>Finalizados</Mob_Text_Button_Info_Detail>
          </Mob_Button_Info_Detail_View>
          <Mob_Button_Info_Detail_View $Type_B={"End"} onPress={() => handleFilter("descartados")}>
            <Mob_Text_Button_Info_Detail $Type_B={"End"}>Encerradas</Mob_Text_Button_Info_Detail>
          </Mob_Button_Info_Detail_View>
        </Mob_SubGroup_Info_Detail_View>
      </>
    )}

    <Mob_Line />

    <Mob_SubGroup_Info_Detail_View $styles={"space-around"}>
      <Mob_Button_Info_Detail_View $Type_B={"Create"} onPress={handleCreateButtonPress}>
        <Mob_Text_Button_Info_Detail $Type_B={"Create"}>Criar Nova Lista</Mob_Text_Button_Info_Detail>
      </Mob_Button_Info_Detail_View>
      <Mob_Ghost />
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
        <Users name='users-line' size={16} />
      </Mob_Sub_Bar_Data_Titles_Children>
      <Mob_Sub_Bar_Data_Titles_Children>
        <MaterialIcons name="key" size={20} color="black" />
      </Mob_Sub_Bar_Data_Titles_Children>
      <Mob_Sub_Bar_Data_Titles_Children>
        <Mob_Sub_Bar_Data_Titles_Text>Link</Mob_Sub_Bar_Data_Titles_Text>
      </Mob_Sub_Bar_Data_Titles_Children>
    </Mob_Sub_Bar_Data_Titles_View>

    {currentItems.length > 0 ? ( 
      currentItems.map((item, index) => (
        <Mob_Data_List_Info_Data key={index}>
          <Mob_Sub_Bar_Data_Data_View $is_active={item.is_active}$is_completed={item.is_completed}>
            <Mob_Sub_Bar_Data_Titles_Children>
              <Mob_Sub_Bar_Data_Titles_Text_2>
                <TouchableOpacity onPress={() => handleNavigateToDetails(item.id)}>
                  <Lupa_Icon name="gear" size={25} />
                </TouchableOpacity>
              </Mob_Sub_Bar_Data_Titles_Text_2>
            </Mob_Sub_Bar_Data_Titles_Children>
            <Mob_Sub_Bar_Data_Titles_Children>
              <Mob_Sub_Bar_Data_Titles_Text_2>{truncateText(item.title, 30)}</Mob_Sub_Bar_Data_Titles_Text_2>
            </Mob_Sub_Bar_Data_Titles_Children>
            <Mob_Sub_Bar_Data_Titles_Children>
              <Mob_Sub_Bar_Data_Titles_Text_2>{item.n_signature}</Mob_Sub_Bar_Data_Titles_Text_2>
            </Mob_Sub_Bar_Data_Titles_Children>
              <Mob_TouchableOpacity_button>
            <PasswordField senha={item.password} />
            </Mob_TouchableOpacity_button>
              {/* <MaterialIcons name="remove-red-eye" size={24} color="black" /> */}

            <Mob_TouchableOpacity_button  onPress={() => handleNavigateToPageuser(item.id)} style={{}}>
              <MaterialIcons name="link" size={25} color="black" />
            </Mob_TouchableOpacity_button>
          </Mob_Sub_Bar_Data_Data_View>
        </Mob_Data_List_Info_Data>
        
        
      )

      
     
      )
      
    ) : (
      <Mob_Sub_Title>Nenhum item encontrado.</Mob_Sub_Title>
    )}
  <Mob_Pagination>
  <Mob_Pagination_Items onPress={() => handleChangePage("prev")}>
    <AntDesign name="banckward" size={20} color="black" />
  </Mob_Pagination_Items>
  <Mob_Pagination_Items onPress={() => handleChangePage("next")}>
    <AntDesign name="forward" size={20} color="black" />
  </Mob_Pagination_Items>
</Mob_Pagination>
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