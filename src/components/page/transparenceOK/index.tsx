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

const data = [
  {
    id: "01",
    titulo: "Um título bem....",
    criadoPor: "Essapessoa é o cara",
    data_inicio: "25/12/2022",
    data_fim: "25/05/2027",
    data_atualizado: "03/08/2024",
    n_assinaturas: "11",
  },
  {
    id: "02",
    titulo: "Um e Nengê",
    criadoPor: "Essapessoa é o cara",
    data_inicio: "25/12/2022",
    data_fim: "25/05/2027",
    data_atualizado: "03/08/2024",
    n_assinaturas: "13",
  },
  {
    id: "03",
    titulo: "Projeto Alpha",
    criadoPor: "João da Silva",
    data_inicio: "01/01/2023",
    data_fim: "01/06/2027",
    data_atualizado: "04/08/2024",
    n_assinaturas: "25",
  },
  {
    id: "04",
    titulo: "Evento XPTO",
    criadoPor: "Maria Oliveira",
    data_inicio: "15/02/2023",
    data_fim: "15/07/2027",
    data_atualizado: "05/08/2024",
    n_assinaturas: "9",
  },
  {
    id: "05",
    titulo: "Relatório Financeiro 2023",
    criadoPor: "Carlos Pereira",
    data_inicio: "10/03/2023",
    data_fim: "10/08/2027",
    data_atualizado: "06/08/2024",
    n_assinaturas: "17",
  },
  {
    id: "06",
    titulo: "Campanha Solidária",
    criadoPor: "Ana Souza",
    data_inicio: "20/04/2023",
    data_fim: "20/09/2027",
    data_atualizado: "07/08/2024",
    n_assinaturas: "22",
  },
  {
    id: "07",
    titulo: "Plano Estratégico 2024",
    criadoPor: "Lucas Santos",
    data_inicio: "05/05/2023",
    data_fim: "05/10/2027",
    data_atualizado: "08/08/2024",
    n_assinaturas: "31",
  },
  {
    id: "08",
    titulo: "Conferência Anual",
    criadoPor: "Beatriz Lima",
    data_inicio: "25/06/2023",
    data_fim: "25/11/2027",
    data_atualizado: "09/08/2024",
    n_assinaturas: "14",
  },
  {
    id: "09",
    titulo: "Análise de Mercado",
    criadoPor: "Eduardo Ferreira",
    data_inicio: "10/07/2023",
    data_fim: "10/12/2027",
    data_atualizado: "10/08/2024",
    n_assinaturas: "28",
  },
  {
    id: "10",
    titulo: "Pesquisa de Satisfação",
    criadoPor: "Julia Costa",
    data_inicio: "30/08/2023",
    data_fim: "30/01/2028",
    data_atualizado: "11/08/2024",
    n_assinaturas: "18",
  },
  {
    id: "11",
    titulo: "Plano de Expansão",
    criadoPor: "Roberto Alves",
    data_inicio: "15/09/2023",
    data_fim: "15/02/2028",
    data_atualizado: "12/08/2024",
    n_assinaturas: "33",
  },
  {
    id: "12",
    titulo: "Projeto Green",
    criadoPor: "Laura Menezes",
    data_inicio: "01/10/2023",
    data_fim: "01/03/2028",
    data_atualizado: "13/08/2024",
    n_assinaturas: "20",
  },
  {
    id: "13",
    titulo: "Desenvolvimento de Software",
    criadoPor: "Pedro Rocha",
    data_inicio: "20/11/2023",
    data_fim: "20/04/2028",
    data_atualizado: "14/08/2024",
    n_assinaturas: "26",
  },
  {
    id: "14",
    titulo: "Campanha de Marketing",
    criadoPor: "Sofia Ribeiro",
    data_inicio: "05/12/2023",
    data_fim: "05/05/2028",
    data_atualizado: "15/08/2024",
    n_assinaturas: "12",
  },
  {
    id: "15",
    titulo: "Projeto Beta",
    criadoPor: "Rafael Martins",
    data_inicio: "15/01/2024",
    data_fim: "15/06/2028",
    data_atualizado: "16/08/2024",
    n_assinaturas: "29",
  },
  {
    id: "16",
    titulo: "Evento Corporativo",
    criadoPor: "Camila Souza",
    data_inicio: "01/02/2024",
    data_fim: "01/07/2028",
    data_atualizado: "17/08/2024",
    n_assinaturas: "24",
  },
];

export function Transparence(){
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
            <Web_Title>Compartilhadas Comigo</Web_Title>
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
              <Web_Sub_Title>Compartilhadas Comigo</Web_Sub_Title>
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
                <Web_Sub_Bar_Data_Titles_Text>Gerenciado Por</Web_Sub_Bar_Data_Titles_Text>
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
                <Web_Sub_Bar_Data_Titles_Text>Link de acesso</Web_Sub_Bar_Data_Titles_Text>
              </Web_Sub_Bar_Data_Titles_Children>

            </Web_Sub_Bar_Data_Titles_View>
            <Web_List_Items>
              {currentItems.map((item, index) => (
                <Web_Data_List_Info_Data key={index}>
                  <Web_Sub_Bar_Data_Data_View $index={index}>
                  <Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Text_2>{truncateText(item.titulo, 15)}</Web_Sub_Bar_Data_Titles_Text_2>
                  </Web_Sub_Bar_Data_Titles_Children>
                  <Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Text_2> {truncateText(item.criadoPor, 15)}</Web_Sub_Bar_Data_Titles_Text_2>
                  </Web_Sub_Bar_Data_Titles_Children>
                  <Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Text_2>{item.data_inicio}</Web_Sub_Bar_Data_Titles_Text_2>
                  </Web_Sub_Bar_Data_Titles_Children>
                  <Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Text_2>{item.data_fim}</Web_Sub_Bar_Data_Titles_Text_2>
                  </Web_Sub_Bar_Data_Titles_Children>
                  <Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Text_2>{item.n_assinaturas}</Web_Sub_Bar_Data_Titles_Text_2>
                  </Web_Sub_Bar_Data_Titles_Children>
                  <Web_Sub_Bar_Data_Titles_Children>
                    <Web_Sub_Bar_Data_Titles_Text_2>Link de acesso</Web_Sub_Bar_Data_Titles_Text_2>
                  </Web_Sub_Bar_Data_Titles_Children>

                </Web_Sub_Bar_Data_Data_View>

                  {/* {item.flag === 1 ? (
                    <Web_Signature_Flag $flag={item.flag}>
                      <Web_Signature_Flag_Title>Acesse o Documento</Web_Signature_Flag_Title>
                    </Web_Signature_Flag>
                  ) : (
                    <Web_Signature_Flag $flag={item.flag} as="div">
                      <Web_Signature_Flag_Title>
                        {item.flag === 0 && "Aguardando Atualização"}
                        {item.flag === 2 && "Assinatura Recusada"}
                        {item.flag === 3 && "Encerrado :("}
                      </Web_Signature_Flag_Title>
                    </Web_Signature_Flag>
                  )} */}
                </Web_Data_List_Info_Data>
              ))}
            </Web_List_Items>
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
        <Mob_Title>Compartilhado Comigo</Mob_Title>
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
                <Mob_Sub_Bar_Data_Titles_Text>Nº assinaturas</Mob_Sub_Bar_Data_Titles_Text>
              </Mob_Sub_Bar_Data_Titles_Children>
              <Mob_Sub_Bar_Data_Titles_Children>
                <Mob_Sub_Bar_Data_Titles_Text>Link</Mob_Sub_Bar_Data_Titles_Text>
              </Mob_Sub_Bar_Data_Titles_Children>

            </Mob_Sub_Bar_Data_Titles_View>
      {filteredData.map((item:any, index:any) => (
        <Mob_Data_List_Info_Data key={index}>
          <Mob_Sub_Bar_Data_Data_View $index={index}>
            <Mob_Sub_Bar_Data_Titles_Children>
              <Mob_Sub_Bar_Data_Titles_Text_2> {truncateText(item.titulo, 13)}</Mob_Sub_Bar_Data_Titles_Text_2>
            </Mob_Sub_Bar_Data_Titles_Children>
            <Mob_Sub_Bar_Data_Titles_Children>
              <Mob_Sub_Bar_Data_Titles_Text_2> {truncateText(item.criadoPor, 15)}</Mob_Sub_Bar_Data_Titles_Text_2>
            </Mob_Sub_Bar_Data_Titles_Children>

            <Mob_Sub_Bar_Data_Titles_Children>
              <Mob_Sub_Bar_Data_Titles_Text_2>{item.n_assinaturas}</Mob_Sub_Bar_Data_Titles_Text_2>
            </Mob_Sub_Bar_Data_Titles_Children>
            <Mob_Sub_Bar_Data_Titles_Children>
              <Mob_Sub_Bar_Data_Titles_Text_2>{item.id}</Mob_Sub_Bar_Data_Titles_Text_2>
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



