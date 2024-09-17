import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Platform } from "react-native";
import Lupa_Icon from 'react-native-vector-icons/FontAwesome';
import { 
  Web_Body, Web_Container, Web_Sub_Container, Web_View_Title, Web_Title, Web_Lupa_View, Web_Lupa_TextInput, 
  Web_Bar_Info, Web_Flag_Sub_Title, Web_Sub_Title, Web_Sub_Bar_Info, Web_Line_Items, Web_Signature, 
  Web_Signature_Div_Info, Web_Signature_Div_Data_List, Web_Signature_Div_Image, Icon_Image_Perfil, 
  Web_Signature_Div_Data, Web_Signature_Div_Data_Title, Web_Signature_Div_Data_Text, Web_Signature_Flag, 
  Web_Signature_Flag_Title, Web_Pagination, Web_Pagination_Items, Web_Pagination_Text 
} from "../../components/organisms/signature/Web_Body";
import  {Mob_Body,Mob_Container,Mob_Icon_Image_Perfil,Mob_Lupa_TextInput,Mob_Lupa_View,Mob_Signature_Div_All_Data,Mob_Signature_Div_Data,Mob_Signature_Div_Data_List,Mob_Signature_Div_Data_Text,Mob_Signature_Div_Data_Title,Mob_Signature_Div_Image,Mob_Signature_Div_Info,Mob_Signature_Flag,Mob_Signature_Flag_Title,Mob_Sub_Container,Mob_Title,Mob_View_Title} from "../../components/organisms/signature/Mob_Body"
import { getToken } from "../../storage/storeToken";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFocusEffect } from "expo-router";

export default function Signatures() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]); 

  const itemsPerPage = 16;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const fetchSignatures = async () => {
    try {
      const token = await getToken("auth_jrf");
      if (!token) {
        console.error("Erro", "Token não encontrado.");
        return;
      }

      const url =
        Platform.OS === 'web'
          ? 'http://localhost:8000/api/signatures/signatures/my_participations/'
          : 'http://10.0.2.2:8000/api/signatures/signatures/my_participations/';

      const response = await axios.get(url, {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      if (response.data) {
        const sortedSignatures = response.data.sort((a, b) => b.id - a.id);
        setData(sortedSignatures);
        setFilteredData(sortedSignatures);
      } else {
        console.error("Erro: Estrutura inesperada", response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar assinaturas:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchSignatures();
    }, [])
  );

  useEffect(() => {
    handleSearch(); 
  }, [searchText]);

  const handleSearch = () => {
    if (searchText.trim() === "") {
      setFilteredData(data); 
    } else {
      const filtered = data.filter(item =>
        item.title && item.title.toLowerCase().includes(searchText.toLowerCase())
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

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <>
      {Platform.OS === 'web' || Platform.OS === 'windows' ? (
        <Web_Sub_Container>
          <Web_View_Title>
            <Web_Title>Minhas Participações</Web_Title>
          </Web_View_Title>
          <Web_Bar_Info style={{
            shadowColor: '#000000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 7,
            elevation: 3, 
          }}>
            <Web_Flag_Sub_Title>
              <Web_Sub_Title>Dados dos ambientes participados</Web_Sub_Title>
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
              <Web_Line_Items>
                {currentItems.map((signature:any, Index) => {
                  
                  return (
                    <Web_Signature key={`${signature.id}-${Index}`}>
                      <Web_Signature_Div_Info>
                        <Web_Signature_Div_Data_List>
                          <Web_Signature_Div_Image>
                            <Icon_Image_Perfil source={{ uri: signature.owner.photo_url || 'default_image_url' }} />
                          </Web_Signature_Div_Image>
                          <Web_Signature_Div_Data>
                          <Web_Signature_Div_Data_List >
                              <Web_Signature_Div_Data_Title style={{ userSelect: 'none'}}>Id: </Web_Signature_Div_Data_Title>
                              <Web_Signature_Div_Data_Text style={{ userSelect: 'none'}}>{signature.id || 'Nome Indisponível'}</Web_Signature_Div_Data_Text>
                            </Web_Signature_Div_Data_List>
                            <Web_Signature_Div_Data_List >
                              <Web_Signature_Div_Data_Title style={{ userSelect: 'none'}}>Criado por: </Web_Signature_Div_Data_Title>
                              <Web_Signature_Div_Data_Text style={{ userSelect: 'none'}}>{signature.owner.first_name || 'Nome Indisponível'}</Web_Signature_Div_Data_Text>
                            </Web_Signature_Div_Data_List>
                            <Web_Signature_Div_Data_List>
                              <Web_Signature_Div_Data_Title style={{ userSelect: 'none'}}>Email: </Web_Signature_Div_Data_Title>
                              <Web_Signature_Div_Data_Text style={{ userSelect: 'none'}}>{truncateText(signature.owner.email || 'Email Indisponível', 50)}</Web_Signature_Div_Data_Text>
                            </Web_Signature_Div_Data_List>
                            <Web_Signature_Div_Data_List>
                              <Web_Signature_Div_Data_Title style={{ userSelect: 'none'}}>Título: </Web_Signature_Div_Data_Title>
                              <Web_Signature_Div_Data_Text style={{ userSelect: 'none'}} >{truncateText(signature.title || 'N/A', 15)}</Web_Signature_Div_Data_Text>
                            </Web_Signature_Div_Data_List>
                            <Web_Signature_Div_Data_List>
                              <Web_Signature_Div_Data_Title style={{ userSelect: 'none'}}>Criado em: </Web_Signature_Div_Data_Title>
                              <Web_Signature_Div_Data_Text style={{ userSelect: 'none'}}> {signature.created_at ? signature.created_at.replace('T', ' Às ').slice(0, 19).replace(/-/g, '/') : 'Data Indisponível'}</Web_Signature_Div_Data_Text>
                            </Web_Signature_Div_Data_List>
                            <Web_Signature_Div_Data_List>
                              <Web_Signature_Div_Data_Title style={{ userSelect: 'none'}}>Atualizado em:   </Web_Signature_Div_Data_Title>
                              <Web_Signature_Div_Data_Text style={{ userSelect: 'none'}}>{signature.update_date ? signature.update_date.replace('T', ' Às ').slice(0, 19).replace(/-/g, '/') : 'Data Indisponível'}</Web_Signature_Div_Data_Text>
                            </Web_Signature_Div_Data_List>
                          </Web_Signature_Div_Data>
                        </Web_Signature_Div_Data_List>
                      </Web_Signature_Div_Info>
                      <Web_Signature_Flag $flag={signature.flag} disabled={true}>
                        <Web_Signature_Flag_Title>
                          {signature.flag === 1 ? 'Ambiente Concluído!' : signature.flag === 0 ? 'Aguardando Atualização...' : signature.flag === 2 ? 'Encerrado :(' : 'Assinatura Recusada!'}
                        </Web_Signature_Flag_Title>
                      </Web_Signature_Flag>
                    </Web_Signature>
                  );
                })}
              </Web_Line_Items>
            </Web_Sub_Bar_Info>
          </Web_Bar_Info>
          <Web_Pagination>
            <Web_Pagination_Items onPress={() => handleChangePage('prev')}><Web_Pagination_Text>
            <AntDesign name="banckward" size={'1.5vh'} color="black" />
              </Web_Pagination_Text></Web_Pagination_Items>
            <Web_Pagination_Items onPress={() => handleChangePage('next')}><Web_Pagination_Text>
            <AntDesign name="forward" size={'1.5vh'} color="black"/>
              </Web_Pagination_Text></Web_Pagination_Items>
          </Web_Pagination>
        </Web_Sub_Container>
      ) : (
        <Mob_Container>
    <Mob_Sub_Container>
      <Mob_View_Title>
        <Mob_Title>Minhas Assinaturas</Mob_Title>
      </Mob_View_Title>
      <Mob_Lupa_View>
        <Mob_Lupa_TextInput
          placeholder="Digite um Titulo"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Lupa_Icon name="search" size={20} color="#000" onPress={handleSearch} />
      </Mob_Lupa_View>
      
      {currentItems.map((item:any, index:any) => (
        <Mob_Signature_Div_Info key={index}>
          <Mob_Signature_Div_All_Data>
            <Mob_Signature_Div_Image>
              <Mob_Icon_Image_Perfil source={{ uri: item.owner.photo_url || 'default_image_url' }} />
            </Mob_Signature_Div_Image>
            <Mob_Signature_Div_Data>
              <Mob_Signature_Div_Data_List>
                <Mob_Signature_Div_Data_Title>Id: </Mob_Signature_Div_Data_Title>
                <Mob_Signature_Div_Data_Text>{item.id}</Mob_Signature_Div_Data_Text>
              </Mob_Signature_Div_Data_List>
              <Mob_Signature_Div_Data_List>
                  <Mob_Signature_Div_Data_Title>Titulo: </Mob_Signature_Div_Data_Title>
                  <Mob_Signature_Div_Data_Text>{truncateText(item.title, 15)}</Mob_Signature_Div_Data_Text>
                  </Mob_Signature_Div_Data_List>
                  <Mob_Signature_Div_Data_List>
                  <Mob_Signature_Div_Data_Title>Criado por: </Mob_Signature_Div_Data_Title>
                  <Mob_Signature_Div_Data_Text>{truncateText(item.owner.first_name, 15)}</Mob_Signature_Div_Data_Text>
                  </Mob_Signature_Div_Data_List>
                  <Mob_Signature_Div_Data_List>
                  <Mob_Signature_Div_Data_Title>Email: </Mob_Signature_Div_Data_Title>
                  <Mob_Signature_Div_Data_Text>{truncateText(item.owner.email, 15)}</Mob_Signature_Div_Data_Text>
                  </Mob_Signature_Div_Data_List>
              <Mob_Signature_Div_Data_List>
                <Mob_Signature_Div_Data_Title>Criado em: </Mob_Signature_Div_Data_Title>
                <Mob_Signature_Div_Data_Text style={{fontSize:13, justifyContent:'center',marginTop:1.8}}>{item.created_at ? item.created_at.replace('T', ' Às ').slice(0, 19).replace(/-/g, '/') : 'Data Indisponível'}</Mob_Signature_Div_Data_Text>
              </Mob_Signature_Div_Data_List>
              <Mob_Signature_Div_Data_List>
                <Mob_Signature_Div_Data_Title>Atualizado em:  </Mob_Signature_Div_Data_Title>
                <Mob_Signature_Div_Data_Text style={{fontSize:13, justifyContent:'center',marginTop:1.8}}>{item.update_date ? item.update_date.replace('T', ' Às ').slice(0, 19).replace(/-/g, '/') : 'Data Indisponível'}</Mob_Signature_Div_Data_Text>
              </Mob_Signature_Div_Data_List>
            </Mob_Signature_Div_Data>
          </Mob_Signature_Div_All_Data>
          {item.flag === 1 ? (
                  <Mob_Signature_Flag $flag={item.flag}>
                    <Mob_Signature_Flag_Title>Ambiente Concluido!</Mob_Signature_Flag_Title>
                  </Mob_Signature_Flag>
                ) : (
                  <Mob_Signature_Flag $flag={item.flag} disabled={true}>
                    <Mob_Signature_Flag_Title>
                      {item.flag === 0 && "Aguardando Atualização"}
                      {item.flag === 2 && "Encerrado :("}
                      {item.flag === 3 && "Assinatura Recusada"}
                    </Mob_Signature_Flag_Title>
                  </Mob_Signature_Flag>
                )}
        </Mob_Signature_Div_Info>
      ))}
    </Mob_Sub_Container>
  </Mob_Container>
      )}
    </>
  );
}