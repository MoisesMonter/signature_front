import React, { useEffect, useState } from 'react';
import { Platform, Dimensions, View, Text, Image } from 'react-native';
import { Container as Web_Container, Body as Web_Body, Title as Web_Title, 
         Sub_Container as Web_Sub_Container, Sub_Title as Web_Sub_Title,
         Bar_Info as Web_Bar_Info, Row_Balon_View as Web_Row_Balon_View, 
         Balon_View as Web_Balon_View, View_Title as Web_View_Title, 
         Balon_View_Home as Web_Balon_View_Home,
         Flag_Sub_Title as Web_Flag_Sub_Title, Ballon_List_info as Web_Ballon_List_info, 
         Ballon_Button_info as Web_Ballon_Button_info, 
         Ballon_List_info_Data as Web_Ballon_List_info_Data, 
         Data_Ballon_Title as Web_Data_Ballon_Title, 
         Data_Ballon_Text as Web_Data_Ballon_Text, 
         Data_View as Web_Data_View, Back_To_Image as Web_Back_To_Image, 
         Icon_Image_Home as Web_Icon_Image_Home, Icon_Image_Perfil, 
         Web_Ballon_List_info_Home} from "../../components/organisms/home/web_css";

import { Container as Mob_Container, Body as Mob_Body, Title as Mob_Title,    
         Sub_Container as Mob_Sub_Container, Sub_Title as Mob_Sub_Title, 
         Ballon_List_info, Ballon_Row_List_Info, Ballon_Button_info, 
         Back_To_Image, Data_col_info, Data_List_Col_Info, 
         Ballon_Data_Title, Ballon_Data_Text, Back_To_Perfil, 
         Mob_Balon_View_Home,
         Mob_Ballon_List_info_Home,
         Mob_Ballon_Ballon,
         Mob_Text_ballon,
         Back_To_Perfil_User,
         Mob_Lupa_View,
         Mob_Lupa_TextInput} from "../../components/organisms/home/mobile_css";

import { Colors, Home_Colors, Pages_Colors } from "../../components/colors";
import Atai_B from '../../../assets/header/AtaAi_White.png';
import Gen_L_B from '../../../assets/header/gerencie_listas_White.png';
import Docs_End from '../../../assets/header/Document_End.png';
import Img_test from '../../../assets/header/capivara.jpg';
import { getToken } from '../../storage/storeToken';
import axios from 'axios';
import { router } from 'expo-router';
import { Mob_Flag_Sub_Title } from './pageUser';
import Lupa_Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

export default function Home() {
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [originalData, setOriginalData] = useState([]); 
    const [originalDataOpen, setOriginalDataOpen] = useState([]); 
    const [searchText, setSearchText] = useState("");
    const fetchSignatures = async () => {
      try {
        const token = await getToken("auth_jrf");
        if (!token) {
          console.error("Erro", "Token não encontrado.");
          return;
        }
  
        const url = Platform.OS === 'web'
          ? 'http://localhost:8000/api/signatures/signatures/my_participations/'
          : 'http://10.0.2.2:8000/api/signatures/signatures/my_participations/';
  
        const response = await axios.get(url, {
          headers: { Authorization: `token ${token}` },
        });
  
        if (response.data) {
          const sortedSignatures = response.data.sort((a, b) => b.id - a.id);
          const sorted3 = sortedSignatures.slice(0, 3);
          setData(sorted3);
        } else {
          console.error("Erro: Estrutura inesperada", response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar assinaturas:', error);
      }
    };
  
    const fetchSignatureLists = async () => {
      setLoading(true);
  
      try {
        const token = await getToken("auth_jrf");
  
        if (!token) {
          setLoading(false);
          return;
        }
  
        const url = Platform.OS === "web"
          ? "http://127.0.0.1:8000/api/signatures/signature_lists/"
          : "http://10.0.2.2:8000/api/signatures/signature_lists/";
  
        const response = await axios.get(url, {
          headers: { Authorization: `token ${token}` },
        });
  
        if (response.status === 200 && Array.isArray(response.data)) {
          const sortedSignatures = response.data
            .sort((a, b) => b.id - a.id)
            .filter((item) => item.is_active === false && item.is_completed === true);

            const sortedSignaturesNotUpdated = response.data
            .sort((a, b) => b.id - a.id)
            .filter((item) => item.is_active === true && item.is_completed === false);
              
            
          const sorted3 = sortedSignatures.slice(0, 3);
          const sorted4 = sortedSignaturesNotUpdated.slice(0, 3);

          setOriginalData(sorted3);
          setOriginalDataOpen(sorted4);
        } else {
          console.error("Erro ao buscar os dados. Status:", response.status);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados da lista de assinaturas:", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchSignatures();
      fetchSignatureLists();
    }, []);
  

    const handleSearch = () => {
      if (searchText) {
        
        const match = searchText.match(/(?:\?|&)id=(\d+)(?!.*\d)/);
    
        if (match) {
          const id = match[1]; 
          router.push(`/pageUser?id=${id}`);
        }
      }
    };

    const handleNavigateToFinalizeDetails = (itemId) => {
        if (itemId) {
        router.push(`/finalized/data?id=${itemId}`);
        }
      };
      const handleNavigateToManagementDetails = (itemId) => {
        if (itemId) {
        router.push(`/management/details?id=${itemId}`);
        }
      };

    return (
        <>
            {Platform.OS === 'web' ? (
                <Web_Container>
                                 <Web_Sub_Container>
                <Web_View_Title>
                            <Web_Title>Home</Web_Title>
                </Web_View_Title>
               
                < Web_Bar_Info   style={{
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 3, 
  }} >
                <Web_Row_Balon_View >
                    < Web_Balon_View_Home style={{borderRadius:'0.4vh',height:'46.5vh',marginBottom:'1vh'}} >
                    <Web_Flag_Sub_Title style={{width:'75vh'}}><Web_Sub_Title style={{fontSize:'3vh',width:"70vh"}}>Bem Vindo(a) a nossa plataforma </Web_Sub_Title></Web_Flag_Sub_Title>
                    <Web_Ballon_List_info_Home >

                      <Web_Sub_Title style={{ color: Colors.title, fontWeight: '400' }}>
                          ‎ ‎ ‎ ‎ ‎ ‎ Entregamos a você facilidade na coleta de assinaturas para <b>reuniões</b>, <b>processos colaborativos</b> e <b>atas formais</b>, centralizando tudo em um único local para um gerenciamento prático e eficiente.
                      </Web_Sub_Title>


                      <Web_Sub_Title style={{ color: Colors.title, fontWeight: '300' }}>
                          ‎ ‎ ‎ ‎ ‎ ‎ <strong style={{backgroundColor: Colors.background, borderRadius:'0.5vh'}}>Objetivo para o Cliente:</strong> Oferecemos a você cliente foco limitado em <b>visualizar</b>, <b>assinar</b> e <b>acompanhar</b> os progressos da assinatura no embiente gerenciado pelo seu administrador de confiança de forma pratica.
                      </Web_Sub_Title>

                      <Web_Sub_Title style={{ color: Colors.title, fontWeight: '300' }} >
                          ‎ ‎ ‎ ‎ ‎ ‎ <strong style={{backgroundColor: Colors.background, borderRadius:'0.5vh'}}>Objetivo para o Administrador:</strong> Oferecemos uma ferramenta centralizada para <b>criar</b>, <b>gerenciar</b>, <b>monitorar</b> e ao finalizar, <b>extrair dados</b> referente a sua listas de assinaturas. Como administrador, você tem controle total sobre o ambiente de coleta, otimizando o uso das assinaturas em um só download para seus documentos externos.
                      </Web_Sub_Title>
                    </Web_Ballon_List_info_Home>
                   
                    </ Web_Balon_View_Home>

                    
                    < Web_Balon_View>
                       
                    <Web_Flag_Sub_Title> <Web_Sub_Title>Ultimas Gerencias Finalizadas</Web_Sub_Title></Web_Flag_Sub_Title>
                    {originalData.map((_, index) => (
                        <Web_Ballon_List_info key={index}>
                            <Web_Ballon_Button_info ><Web_Back_To_Image style={{backgroundColor:Pages_Colors.icon_back_green}} onPress={() => handleNavigateToFinalizeDetails(_.id)}><Web_Icon_Image_Home source={Docs_End}/></Web_Back_To_Image></Web_Ballon_Button_info>
                            <Web_Ballon_List_info_Data>
                                < Web_Data_View><Web_Data_Ballon_Title>Titulo:  </Web_Data_Ballon_Title> <Web_Data_Ballon_Text style={{paddingTop:'0.5vh'}}>{_.title}</Web_Data_Ballon_Text></ Web_Data_View>
                                < Web_Data_View><Web_Data_Ballon_Title style={{ paddingTop: '0.5vh' }}>Nº de assinaturas: </Web_Data_Ballon_Title> <Web_Data_Ballon_Text style={{ paddingTop: '0.5vh' }}>{_.n_signature}</Web_Data_Ballon_Text></ Web_Data_View>
                                < Web_Data_View><Web_Data_Ballon_Title>tualizado em: </Web_Data_Ballon_Title> <Web_Data_Ballon_Text style={{paddingTop:'0.5vh'}}>{_.update_date ? _.update_date.replace('T', ' Às ').slice(0, 19).replace(/-/g, '/') : 'Data Indisponível'}</Web_Data_Ballon_Text></ Web_Data_View>

                            </Web_Ballon_List_info_Data>
                            </Web_Ballon_List_info>
                        ))}
                    </ Web_Balon_View>
                </ Web_Row_Balon_View>
                < Web_Row_Balon_View>
                    < Web_Balon_View>
                    <Web_Flag_Sub_Title> <Web_Sub_Title>Ultimas Participações</Web_Sub_Title></Web_Flag_Sub_Title>
                    {data.map((my_signature, index) => {
                        const formattedCreatedAt = my_signature.created_at
                            ? my_signature.created_at.replace('T', ' às ').slice(0, 19).replace(/-/g, '/')
                            : 'Data Indisponível';

                        return (
                            <Web_Ballon_List_info key={index}>
                            <Web_Ballon_Button_info>
                                <Icon_Image_Perfil source={{ uri: my_signature.owner.photo_url || 'default_image_url' }} />
                            </Web_Ballon_Button_info>
                            <Web_Ballon_List_info_Data>
                                <Web_Data_View style={{ alignItems: "center" }}>
                                <Web_Data_Ballon_Title>Título: </Web_Data_Ballon_Title>
                                <Web_Data_Ballon_Text style={{ paddingTop: '0.5vh' }}>{my_signature.title}</Web_Data_Ballon_Text>
                                </Web_Data_View>
                                <Web_Data_View style={{ alignItems: "center" }}>
                                <Web_Data_Ballon_Title style={{ textAlign: 'center' }}>Atualizado em: </Web_Data_Ballon_Title>
                                <Web_Data_Ballon_Text style={{ paddingTop: '0.5vh' }}>{formattedCreatedAt}</Web_Data_Ballon_Text>
                                </Web_Data_View>
                            </Web_Ballon_List_info_Data>
                            </Web_Ballon_List_info>
                        );
                        })}
                    </ Web_Balon_View >
                    < Web_Balon_View >
                    <Web_Flag_Sub_Title> <Web_Sub_Title>Ultimas Gerencias em aberto </Web_Sub_Title></Web_Flag_Sub_Title>
                    {originalDataOpen.map((_, index) => {
                        const formattedCreatedAt = _.start_date
                                               ? _.start_date.replace('T', ' às ').slice(0, 19).replace(/-/g, '/')
                                               : 'Data Indisponível';
                   
                        return(
                        <Web_Ballon_List_info key={index}>
                             <Web_Ballon_Button_info ><Web_Back_To_Image style={{backgroundColor:Pages_Colors.icon_back_gray}}  onPress={() => handleNavigateToManagementDetails(_.id)}><Web_Icon_Image_Home source={Gen_L_B}/></Web_Back_To_Image></Web_Ballon_Button_info>
                            <Web_Ballon_List_info_Data>
                            < Web_Data_View><Web_Data_Ballon_Title style={{ paddingTop: '0.5vh' }}>Titulo: </Web_Data_Ballon_Title> <Web_Data_Ballon_Text style={{ paddingTop: '0.5vh' }}>{_.title}</Web_Data_Ballon_Text></ Web_Data_View>
                                < Web_Data_View><Web_Data_Ballon_Title style={{ paddingTop: '0.5vh' }}>Nº de assinaturas: </Web_Data_Ballon_Title> <Web_Data_Ballon_Text style={{ paddingTop: '0.5vh' }}>{_.n_signature}</Web_Data_Ballon_Text></ Web_Data_View>
                                < Web_Data_View><Web_Data_Ballon_Title style={{ paddingTop: '0.5vh' }}>Aberto na Data: </Web_Data_Ballon_Title> <Web_Data_Ballon_Text style={{ paddingTop: '0.5vh' }}>{formattedCreatedAt}</Web_Data_Ballon_Text></ Web_Data_View>

                     </Web_Ballon_List_info_Data>
                      </Web_Ballon_List_info>
                        )})}
                    </ Web_Balon_View>
                </ Web_Row_Balon_View>    
                
            </Web_Bar_Info>

                </Web_Sub_Container>
                </Web_Container>
            ) : (
                <Mob_Container>
                <Mob_Title>
                        Home
                    </Mob_Title>

                    <Mob_Lupa_View>
        <Mob_Lupa_TextInput
          placeholder="traga Url ou Id do ambiente desejado"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Lupa_Icon name="search" size={20} color="#000" onPress={handleSearch} />
      </Mob_Lupa_View>
                <Mob_Sub_Container>


                < Mob_Balon_View_Home >
                    <Mob_Flag_Sub_Title >
                      <Mob_Sub_Title >Bem Vindo(a) a nossa plataforma </Mob_Sub_Title></Mob_Flag_Sub_Title>
                    <Mob_Ballon_List_info_Home  >
                    <Mob_Ballon_Ballon >
                    <Mob_Text_ballon style={{color:Colors.title}}> ‎ ‎ ‎ ‎
                         Entregamos a você facilidade na <Mob_Text_ballon style={{color:Colors.title,backgroundColor:Colors.background, borderRadius:'7px'}}>coleta de assinaturas</Mob_Text_ballon> para reuniões, <Mob_Text_ballon style={{color:Colors.title,backgroundColor:Colors.background, borderRadius:'7px'}}>processos colaborativos</Mob_Text_ballon> e <Mob_Text_ballon style={{color:Colors.title,backgroundColor:Colors.background, borderRadius:'7px'}}>atas formais</Mob_Text_ballon>, centralizando tudo em um único local para um gerenciamento prático e eficiente.
                    </Mob_Text_ballon>

                    </Mob_Ballon_Ballon>
                    

                    <Mob_Text_ballon style={{color:Colors.title}}>  ‎ ‎ ‎ ‎
                    <Mob_Text_ballon style={{color:Colors.title,backgroundColor:Colors.background, borderRadius:'7px'}}>Objetivo para o Cliente</Mob_Text_ballon>: Oferecemos a você cliente foco limitado em visualizar, assinar e acompanhar os progressos da assinatura no embiente gerenciado pelo seu administrador de confiança de forma pratica.
                    </Mob_Text_ballon>

                    <Mob_Text_ballon style={{color:Colors.title}}>  ‎ ‎ ‎ ‎ 
                  <Mob_Text_ballon style={{color:Colors.title,backgroundColor:Colors.background, borderRadius:'7px'}}>Objetivo para o Administrador</Mob_Text_ballon>: Oferecemos uma ferramenta centralizada para criar, gerenciar, monitorar e ao finalizar, extrair dados referente a sua listas de assinaturas. Como administrador, você tem controle total sobre o ambiente de coleta, otimizando o uso em seus documentos.
                </Mob_Text_ballon>
                    </Mob_Ballon_List_info_Home>
                   
                    </ Mob_Balon_View_Home>



                    <Mob_Sub_Title>
                        Ultimas Participações
                        </Mob_Sub_Title>
                     {data.map((my_signature, index) => {
                        const formattedCreatedAt = my_signature.created_at
                        ? my_signature.created_at.slice(0, 10).replace('-', '/').replace('-', '/')
                        : 'Data Indisponível';
                        return (
                        <Ballon_List_info key={index}>
                        <Ballon_Row_List_Info>
                            <Ballon_Button_info style={{backgroundColor: Home_Colors.sub_container}}>
                                <Back_To_Perfil_User source={{ uri: my_signature.owner.photo_url || 'default_image_url' }}/>
                               
                            </Ballon_Button_info>
                            <Data_col_info>
                                    <Data_List_Col_Info style={{ alignItems: "center" }}>
                                        <Ballon_Data_Title> Titulo: </Ballon_Data_Title>
                                        <Ballon_Data_Text >{my_signature.title}</Ballon_Data_Text>
                                    </Data_List_Col_Info>
                                    <Data_List_Col_Info style={{ alignItems: "center" }}>
                                        
                                        <Ballon_Data_Title > Atualizado em: </Ballon_Data_Title>
                                        <Ballon_Data_Text >{formattedCreatedAt}</Ballon_Data_Text>
                                    </Data_List_Col_Info>
                                </Data_col_info>
    
                        </Ballon_Row_List_Info>
                        </Ballon_List_info>
                            ) 
                            })}
                    </Mob_Sub_Container>
    
                    <Mob_Sub_Container>
                    <Mob_Sub_Title>
                      Ultimas Gerencias Finalizadas
                        </Mob_Sub_Title>
                     {originalData.map((_, index) => (
                        <Ballon_List_info>
                        <Ballon_Row_List_Info>
                            <Ballon_Button_info style={{backgroundColor:Pages_Colors.icon_back_green}} onPress={() => handleNavigateToFinalizeDetails(_.id)}>
      
                                <Back_To_Perfil source={Docs_End}   />
                            </Ballon_Button_info>
                            <Data_col_info>
                                    <Data_List_Col_Info style={{ alignItems: "center" }}>
                                        <Ballon_Data_Title> Titulo: </Ballon_Data_Title>
                                        <Ballon_Data_Text>{_.title && _.title.length > 19 ? `${_.title.slice(0, 19)}...` : _.title}</Ballon_Data_Text>
                                    </Data_List_Col_Info>
                                    <Data_List_Col_Info style={{alignItems:'center'}}>
                                        <Ballon_Data_Title>Nº de assinaturas: </Ballon_Data_Title> 
                                        <Ballon_Data_Text>{_.n_signature}</Ballon_Data_Text>
                                        </Data_List_Col_Info>
                                    <Data_List_Col_Info style={{ alignItems: "center" }}>
                                        <Ballon_Data_Title>Atualizado em: </Ballon_Data_Title>
                                        <Ballon_Data_Text>{_.update_date.slice(0,10).replace('-','/').replace('-','/')}</Ballon_Data_Text>
                                    </Data_List_Col_Info>
                                </Data_col_info>
    
                        </Ballon_Row_List_Info>
                        </Ballon_List_info>
                            ))}
                    </Mob_Sub_Container>
    

                    <Mob_Sub_Container>
                        <Mob_Sub_Title>
                        Ultimas Gerencias Aberto
                        </Mob_Sub_Title>
                        {originalDataOpen.map((_, index) => {
                          const formattedCreatedAt = _.start_date
                          ? _.start_date.replace('T', ' às ').slice(0, 10).replace('-','/').replace('-','/')
                          : 'Data Indisponível';

                        return(
                        <Ballon_List_info>
                        <Ballon_Row_List_Info>
                            <Ballon_Button_info style={{backgroundColor:Pages_Colors.icon_back_gray}}  onPress={() => handleNavigateToManagementDetails(_.id)} >
                                <Back_To_Image source={Gen_L_B}></Back_To_Image>
                            
                            </Ballon_Button_info>
                            <Data_col_info>
                                    <Data_List_Col_Info style={{alignItems:'center'}}>
                                        <Ballon_Data_Title>Titulo: </Ballon_Data_Title>
                                        <Ballon_Data_Text>{_.title}</Ballon_Data_Text>
                                    </Data_List_Col_Info>
                                    <Data_List_Col_Info style={{alignItems:'center'}}>
                                        <Ballon_Data_Title>Nº de assinaturas: </Ballon_Data_Title> 
                                        <Ballon_Data_Text>{_.n_signature}</Ballon_Data_Text>
                                        </Data_List_Col_Info>
                                    <Data_List_Col_Info style={{alignItems:'center'}}>
                                        <Ballon_Data_Title>Aberto na Data: </Ballon_Data_Title>
                                        <Ballon_Data_Text>{formattedCreatedAt}</Ballon_Data_Text>
                                    </Data_List_Col_Info>
                                </Data_col_info>
    
                        </Ballon_Row_List_Info>
                        </Ballon_List_info>
                           )})}
                    </Mob_Sub_Container>
                </Mob_Container>    
            )}
        </>
    );
}

