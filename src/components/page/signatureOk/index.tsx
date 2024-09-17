import React, { useState } from "react";
import { Header } from "../../organisms/header";
import { Platform } from "react-native";
import Img_test from '../../../../assets/header/capivara.jpg';
import Lupa_Icon from 'react-native-vector-icons/FontAwesome';
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
             Web_Line_Items,
              Web_Signature,
               Web_Signature_Div_Info,
                Web_Signature_Div_Data_List,
                 Web_Signature_Div_Image,
                  Icon_Image_Perfil,
                   Web_Signature_Div_Data,
                    Web_Signature_Div_Data_Title,
                     Web_Signature_Div_Data_Text,
                      Web_Signature_Flag,
                       Web_Signature_Flag_Title,
                        Web_Pagination, Web_Pagination_Items,
                         Web_Pagination_Text } from "./Web_Body";
import { Mob_Body, Mob_Container, Mob_Sub_Container, Mob_View_Title, Mob_Title, Mob_Lupa_View, Mob_Lupa_TextInput, Mob_Signature_Div_Info, Mob_Signature_Div_All_Data, Mob_Signature_Div_Image, Mob_Icon_Image_Perfil, Mob_Signature_Div_Data, Mob_Signature_Div_Data_List, Mob_Signature_Div_Data_Title, Mob_Signature_Div_Data_Text, Mob_Signature_Flag, Mob_Signature_Flag_Title } from "./Mob_Body";

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
  
export function Signatures(){
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState(data);
  
    const itemsPerPage = 16; // Mantido para web
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  
    const handleSearch = () => {
      const filtered = data.filter(item =>
        item.titulo.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filtered);
      setCurrentPage(1); // Reset para a primeira página após o filtro
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
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
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
            <Web_Title>Minhas Assinaturas</Web_Title>
          </Web_View_Title>

          <Web_Bar_Info
            style={{
              shadowColor: '#000000',
              shadowOffset: { width: 2, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 7,
              elevation: 3,
            }}
          >
                        <Web_Flag_Sub_Title>
              <Web_Sub_Title>Todas as Participações</Web_Sub_Title>
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
              {currentItems.map((item:any, index:any) => (
                <Web_Signature key={index}>
                  <Web_Signature_Div_Info>
                    <Web_Signature_Div_Data_List>
                      <Web_Signature_Div_Image>
                        <Icon_Image_Perfil source={Img_test} />
                      </Web_Signature_Div_Image>
                      <Web_Signature_Div_Data>
                        <Web_Signature_Div_Data_List>
                          <Web_Signature_Div_Data_Title>Id: </Web_Signature_Div_Data_Title>
                          <Web_Signature_Div_Data_Text>{item.id}</Web_Signature_Div_Data_Text>
                        </Web_Signature_Div_Data_List>
                        <Web_Signature_Div_Data_List>
                          <Web_Signature_Div_Data_Title>Titulo: </Web_Signature_Div_Data_Title>
                          <Web_Signature_Div_Data_Text>{truncateText(item.titulo, 15)}</Web_Signature_Div_Data_Text>
                        </Web_Signature_Div_Data_List>
                        <Web_Signature_Div_Data_List>
                          <Web_Signature_Div_Data_Title>Criado por: </Web_Signature_Div_Data_Title>
                          <Web_Signature_Div_Data_Text>{truncateText(item.criadoPor, 15)}</Web_Signature_Div_Data_Text>
                        </Web_Signature_Div_Data_List>
                        <Web_Signature_Div_Data_List>
                          <Web_Signature_Div_Data_Title>Data: </Web_Signature_Div_Data_Title>
                          <Web_Signature_Div_Data_Text>{item.data}</Web_Signature_Div_Data_Text>
                        </Web_Signature_Div_Data_List>
                      </Web_Signature_Div_Data>
                    </Web_Signature_Div_Data_List>
                  </Web_Signature_Div_Info>

                  {item.flag === 1 ? (
                    <Web_Signature_Flag $flag={item.flag}>
                      <Web_Signature_Flag_Title>Acesse o Documento</Web_Signature_Flag_Title>
                    </Web_Signature_Flag>
                  ) : (
                    <Web_Signature_Flag $flag={item.flag} >
                      <Web_Signature_Flag_Title>
                        {item.flag === 0 && "Aguardando Atualização"}
                        {item.flag === 2 && "Assinatura Recusada"}
                        {item.flag === 3 && "Encerrado :("}
                      </Web_Signature_Flag_Title>
                    </Web_Signature_Flag>
                  )}
                </Web_Signature>
              ))}
            </Web_Line_Items>
            </Web_Sub_Bar_Info>


          </Web_Bar_Info>
          <Web_Pagination>
              <Web_Pagination_Items onPress={() => handleChangePage('prev')}><Web_Pagination_Text >←</Web_Pagination_Text></Web_Pagination_Items>
              <Web_Pagination_Items onPress={() => handleChangePage('next')}><Web_Pagination_Text >→</Web_Pagination_Text></Web_Pagination_Items>
              
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
      
      {filteredData.map((item:any, index:any) => (
        <Mob_Signature_Div_Info key={index}>
          <Mob_Signature_Div_All_Data>
            <Mob_Signature_Div_Image>
              <Mob_Icon_Image_Perfil source={Img_test} />
            </Mob_Signature_Div_Image>
            <Mob_Signature_Div_Data>
              <Mob_Signature_Div_Data_List>
                <Mob_Signature_Div_Data_Title>Id: </Mob_Signature_Div_Data_Title>
                <Mob_Signature_Div_Data_Text>{item.id}</Mob_Signature_Div_Data_Text>
              </Mob_Signature_Div_Data_List>
              <Mob_Signature_Div_Data_List>
                  <Mob_Signature_Div_Data_Title>Titulo: </Mob_Signature_Div_Data_Title>
                  <Mob_Signature_Div_Data_Text>{truncateText(item.titulo, 15)}</Mob_Signature_Div_Data_Text>
                  </Mob_Signature_Div_Data_List>
                  <Mob_Signature_Div_Data_List>
                  <Mob_Signature_Div_Data_Title>Criado por: </Mob_Signature_Div_Data_Title>
                  <Mob_Signature_Div_Data_Text>{truncateText(item.criadoPor, 15)}</Mob_Signature_Div_Data_Text>
                  </Mob_Signature_Div_Data_List>
              <Mob_Signature_Div_Data_List>
                <Mob_Signature_Div_Data_Title>Data: </Mob_Signature_Div_Data_Title>
                <Mob_Signature_Div_Data_Text>{item.data}</Mob_Signature_Div_Data_Text>
              </Mob_Signature_Div_Data_List>
            </Mob_Signature_Div_Data>
          </Mob_Signature_Div_All_Data>
          {item.flag === 1 ? (
                  <Mob_Signature_Flag $flag={item.flag}>
                    <Mob_Signature_Flag_Title>Acesse aqui</Mob_Signature_Flag_Title>
                  </Mob_Signature_Flag>
                ) : (
                  <Mob_Signature_Flag $flag={item.flag} disabled={true}>
                    <Mob_Signature_Flag_Title>
                      {item.flag === 0 && "Aguardando Atualização"}
                      {item.flag === 2 && "Assinatura Recusada"}
                      {item.flag === 3 && "Encerrado :("}
                    </Mob_Signature_Flag_Title>
                  </Mob_Signature_Flag>
                )}
        </Mob_Signature_Div_Info>
      ))}
    </Mob_Sub_Container>
  </Mob_Container>
</Mob_Body>
)}

      </>
  );
}
