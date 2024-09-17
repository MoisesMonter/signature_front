import React, { useState,useEffect, useCallback } from "react";
import { Platform, TouchableOpacity } from "react-native";
import Img_test from '../../../../assets/header/capivara.jpg';
import Lupa_Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ActivityIndicator } from "react-native";
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
                         Web_Pagination_Text } from "../../../components/organisms/transparence/Web_Body";
import { Mob_Body,
   Mob_Container,
    Mob_Sub_Container,
     Mob_View_Title,
      Mob_Title,
       Mob_Lupa_View,
        Mob_Lupa_TextInput,
                 Mob_Signature_Flag,
                  Mob_Signature_Flag_Title } from "../../../components/organisms/transparence/Mob_Body";
import { Mob_Sub_Bar_Data_Titles_View, Mob_Sub_Bar_Data_Titles_Children, Mob_Sub_Bar_Data_Titles_Text, Mob_Data_List_Info_Data, Mob_Sub_Bar_Data_Data_View, Mob_Sub_Bar_Data_Titles_Text_2 } from "./../../../components/organisms/transparence/Mob_Body";
import { Web_Sub_Bar_Data_Titles_View, Web_Sub_Bar_Data_Titles_Children, Web_Sub_Bar_Data_Titles_Text, Web_List_Items, Web_Data_List_Info_Data, Web_Sub_Bar_Data_Data_View, Web_Sub_Bar_Data_Titles_Text_2 } from "./../../../components/organisms/transparence/Web_Body";
import { ShowAlert } from "../../../components/button/alert";
import { getToken } from "../../../storage/storeToken";
import axios from "axios";
import { router, useFocusEffect, useRouter } from "expo-router";

export default function finalized() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = Platform.OS === 'web' ? 16 : 5; 

  const handleNavigateToData = (itemId:any) => {
    if (itemId) {
      router.push(`/finalized/data?id=${itemId}`);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        await fetchSignatureLists();
      };
  
      fetchData(); 

    }, [])
  );



 

  const fetchSignatureLists = async () => {
    setLoading(true);
    try {
 
      const token = await getToken("auth_jrf");
      if (!token) {
        // ShowAlert("Erro", "Token não encontrado.");
        setLoading(false);
        return;
      }


      const url = Platform.OS === "web"
        ? "http://127.0.0.1:8000/api/signatures/signature_lists/"
        : "http://10.0.2.2:8000/api/signatures/signature_lists/";

      const response = await axios.get(url, {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      if (response.status === 200 && Array.isArray(response.data)) {

        const filtered = response.data.filter(item => !item.is_active && item.is_completed);
        const sorted = filtered.sort((a, b) => b.id - a.id);
        setFilteredData(sorted);
        setAllData(sorted); 
      } else {
        ShowAlert("Erro", "Erro ao buscar os dados. Status: " + response.status);
      }
    } catch (error) {
      ShowAlert("Erro", "Não foi possível buscar os dados da lista de assinaturas.");
    } finally {
      setLoading(false);
    }
  };
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  useEffect(() => {
    handleSearch(); 
  }, [searchText]);
  const handleSearch = () => {
    if (searchText.trim() === "") {
      setFilteredData(allData); 
    } else {
      const filtered = allData.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filtered);
    }
    setCurrentPage(1);
  };


  const handleChangePage = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  function truncateText(text, maxLength) {
    if (!text) return "";
      if(maxLength == 10) return  text.length > maxLength ? `${text.substring(0, maxLength)}` : text;
      else return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  }

  if (loading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  return (
    <>
      {Platform.OS === 'web' || Platform.OS === 'windows' ? (
        <Web_Sub_Container>
          <Web_View_Title>
            <Web_Title>Listas Concluidas</Web_Title>
          </Web_View_Title>
          <Web_Bar_Info style={{
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 3,
  }} >
            <Web_Flag_Sub_Title>
              <Web_Sub_Title>Dados dos Formularios</Web_Sub_Title>
            </Web_Flag_Sub_Title>
            <Web_Lupa_View>
              <Web_Lupa_TextInput
                placeholder="Digite um Titulo"
                value={searchText}
                onChangeText={setSearchText}
              />
              <Lupa_Icon name="search" size={'2vh'} color="#000" onPress={handleSearch} />
            </Web_Lupa_View>

            <Web_Sub_Bar_Info>
              <Web_Sub_Bar_Data_Titles_View>
                <Web_Sub_Bar_Data_Titles_Children>
                  <Web_Sub_Bar_Data_Titles_Text>Titulo</Web_Sub_Bar_Data_Titles_Text>
                </Web_Sub_Bar_Data_Titles_Children>
                <Web_Sub_Bar_Data_Titles_Children>
                  <Web_Sub_Bar_Data_Titles_Text>Iniciado</Web_Sub_Bar_Data_Titles_Text>
                </Web_Sub_Bar_Data_Titles_Children>
                <Web_Sub_Bar_Data_Titles_Children>
                  <Web_Sub_Bar_Data_Titles_Text>Finalizado</Web_Sub_Bar_Data_Titles_Text>
                </Web_Sub_Bar_Data_Titles_Children>
                <Web_Sub_Bar_Data_Titles_Children>
                  <Web_Sub_Bar_Data_Titles_Text>Nº Assinaturas</Web_Sub_Bar_Data_Titles_Text>
                </Web_Sub_Bar_Data_Titles_Children>
                <Web_Sub_Bar_Data_Titles_Children>
                  <Web_Sub_Bar_Data_Titles_Text>Acesso aos Dados</Web_Sub_Bar_Data_Titles_Text>
                </Web_Sub_Bar_Data_Titles_Children>
              </Web_Sub_Bar_Data_Titles_View>

              <Web_List_Items>
                {currentItems.map((item, index) => (
                  <Web_Data_List_Info_Data key={index}>
                    <Web_Sub_Bar_Data_Data_View $index={index}>
                      <Web_Sub_Bar_Data_Titles_Children>
                        <Web_Sub_Bar_Data_Titles_Text_2>
                          {truncateText(item.title, 15)}
                        </Web_Sub_Bar_Data_Titles_Text_2>
                      </Web_Sub_Bar_Data_Titles_Children>
                      <Web_Sub_Bar_Data_Titles_Children>
                        <Web_Sub_Bar_Data_Titles_Text_2>
                          { truncateText(item.start_date, 10) }
                        </Web_Sub_Bar_Data_Titles_Text_2>
                      </Web_Sub_Bar_Data_Titles_Children>
                      <Web_Sub_Bar_Data_Titles_Children>
                        <Web_Sub_Bar_Data_Titles_Text_2>
                          { truncateText(item.update_date, 10) }
                        </Web_Sub_Bar_Data_Titles_Text_2>
                      </Web_Sub_Bar_Data_Titles_Children>
                      <Web_Sub_Bar_Data_Titles_Children>
                        <Web_Sub_Bar_Data_Titles_Text_2>
                        {item.n_signature}
                        </Web_Sub_Bar_Data_Titles_Text_2>
                      </Web_Sub_Bar_Data_Titles_Children>
                      <Web_Sub_Bar_Data_Titles_Children>
                        <TouchableOpacity onPress={() => handleNavigateToData(item.id)}>
                        <AntDesign name={'link'} size={'2.8vh'} ></AntDesign>
                        </TouchableOpacity>

                      </Web_Sub_Bar_Data_Titles_Children>
                    </Web_Sub_Bar_Data_Data_View>
                  </Web_Data_List_Info_Data>
                ))}
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
      ) : (
        <Mob_Container>
          <Mob_Sub_Container>
            <Mob_View_Title>
              <Mob_Title>Listas Concluidas</Mob_Title>
            </Mob_View_Title>
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
                <Mob_Sub_Bar_Data_Titles_Text>Titulo</Mob_Sub_Bar_Data_Titles_Text>
              </Mob_Sub_Bar_Data_Titles_Children>
              <Mob_Sub_Bar_Data_Titles_Children>
                <Mob_Sub_Bar_Data_Titles_Text>Gerenciado Por</Mob_Sub_Bar_Data_Titles_Text>
              </Mob_Sub_Bar_Data_Titles_Children>
              <Mob_Sub_Bar_Data_Titles_Children>
                <Mob_Sub_Bar_Data_Titles_Text>Nº Assinaturas</Mob_Sub_Bar_Data_Titles_Text>
              </Mob_Sub_Bar_Data_Titles_Children>
              <Mob_Sub_Bar_Data_Titles_Children>
                <Mob_Sub_Bar_Data_Titles_Text>Link</Mob_Sub_Bar_Data_Titles_Text>
              </Mob_Sub_Bar_Data_Titles_Children>
            </Mob_Sub_Bar_Data_Titles_View>

            {currentItems.map((item, index) => (
              <Mob_Data_List_Info_Data key={index}>
                <Mob_Sub_Bar_Data_Data_View>
                  <Mob_Sub_Bar_Data_Titles_Children>
                    <Mob_Sub_Bar_Data_Titles_Text_2>
                      {truncateText(item.title, 13)}
                    </Mob_Sub_Bar_Data_Titles_Text_2>
                  </Mob_Sub_Bar_Data_Titles_Children>
                  <Mob_Sub_Bar_Data_Titles_Children>
                    <Mob_Sub_Bar_Data_Titles_Text_2>
                      {item.criadoPor || "Desconhecido"}
                    </Mob_Sub_Bar_Data_Titles_Text_2>
                  </Mob_Sub_Bar_Data_Titles_Children>
                  <Mob_Sub_Bar_Data_Titles_Children>
                    <Mob_Sub_Bar_Data_Titles_Text_2>
                      {item.n_signature}
                    </Mob_Sub_Bar_Data_Titles_Text_2>
                  </Mob_Sub_Bar_Data_Titles_Children>
                  <Mob_Sub_Bar_Data_Titles_Children>
                  <TouchableOpacity onPress={() => handleNavigateToData(item.id)}>
                        <AntDesign name={'link'} size={20} ></AntDesign>
                  </TouchableOpacity>
                  </Mob_Sub_Bar_Data_Titles_Children>
                </Mob_Sub_Bar_Data_Data_View>
              </Mob_Data_List_Info_Data>
            ))}
          </Mob_Sub_Container>
        </Mob_Container>
      )}
    </>
  );
}