  import React, { useState,useEffect, useCallback } from "react";
  import { Platform, Animated, TouchableOpacity, Text, Alert, View} from "react-native";
  import Img_test from '../../../../../assets/header/capivara.jpg';
  import Signature_img_1 from '../../../../../assets/test_sinature_Delete/Signature1.png';
  import Signature_img_2 from '../../../../../assets/test_sinature_Delete/Signature2.png';
  import Signature_img_3 from '../../../../../assets/test_sinature_Delete/Signature3.png';
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

        } from "./../../../../components/organisms/management_details/Web_Body";

  import { Colors, Flags_Colors, Pages_Colors } from "../../../../components/colors";
  import DatePicker from "../../../../components/button/date";
  import { router, useFocusEffect, useRouter } from "expo-router";
  import { useLocalSearchParams } from "expo-router";
  import axios from "axios";
  import { getToken } from "../../../../storage/storeToken";
  import { ShowAlert} from "../../../../components/button/alert";
  import { E403, E404, E500 } from "../../../../components/error/info";
  import AlertWithOption from "../../../../components/button/alertwithoption"; 
  import CustomAlertModal from "../../../../components/button/CustomAlertModal"; 



  const initialData = {
    title: '',
    description: '',
    password: '',
    end_date: '', 
    is_active: false,
    is_completed:false,
  };

  export default function Details(){
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [isPersonModalVisible, setIsPersonModalVisible] = useState(false);
    const [isListModalVisible, setIsListModalVisible] = useState(false);


    const { id } = useLocalSearchParams();
    const [error, setError] = useState('');
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState(initialData);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [signatures, setSignatures] = useState([]);

    const [isAlertVisible, setIsAlertVisible] = useState(false); 
    const [alertAction, setAlertAction] = useState(''); 

    const [shouldConclude, setShouldConclude] = useState(false); 


    useEffect(() => {
      setShouldConclude(formData.is_active === true && formData.is_completed === false);
    }, [formData]);
    const buttonBackgroundColor = shouldConclude ? Colors.primary : Flags_Colors.yellow;
    const buttonTextColor = shouldConclude ? Colors.white : Colors.title;
    const buttonText = shouldConclude ? 'Concluir' : 'Resgatar';


    const [isNewModalAlertVisible, setIsNewModalAlertVisible] = useState(false);
    const [alertTitle, setAlertTitle] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertStatusCode, setAlertStatusCode] = useState<number | undefined>(undefined);

    const fetchSignatureListAndSignatures = async () => {
      try {
        const token = await getToken("auth_jrf");
        if (!token) {
          ShowAlert("Erro", "Token não encontrado.");
          return;
        }
  
        const url =
          Platform.OS === "web"
            ? `http://127.0.0.1:8000/api/signatures/signature_lists/${id}/`
            : `http://10.0.2.2:8000/api/signatures/signature_lists/${id}/`;
  
        const response = await axios.get(url, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
  
        if (response.status === 200) {
          const data = response.data;
          setDetails(data);
          setSignatures(data.signatures || []); 
          setFormData({
            title: data.title || '',
            description: data.description || '',
            end_date: data.end_date || '',
            password: data.password || '',
            is_active: data.is_active,
            is_completed: data.is_completed,
          });
  


        } else if (response.status === 403) {
          setError('403');
        } else if (response.status === 404) {
          setError('404');
        }
      } catch (error) {
        if (error.response && error.response.status) {
          if (error.response.status === 403) {
            setError('403');
          } else if (error.response.status === 404) {
            setError('404');
          }
        } else {
          setError('500');
        }
      } finally {
        setLoading(false);
      }
    };

    const handleShowAlert = () => {
      setIsNewModalAlertVisible(true);
    };
  
    const handleDismissAlert = () => {
      setIsNewModalAlertVisible(false); 
    };


    const ActualizeAlertVisible = async () => {
      setIsNewModalAlertVisible(false);
      

      await fetchSignatureListAndSignatures();

      if (Platform.OS === 'web') {
        router.push(`http://localhost:8081/management/details?id=${id}`);
      } 
    };
    const handleContextMenu = (event:any) => {
      event.preventDefault(); 
    };

  useFocusEffect(
      useCallback(() => {
        const fetchData = async () => {
          await fetchSignatureListAndSignatures();
        };
    
        fetchData(); 
    
        setShouldConclude(formData.is_active === true && formData.is_completed === false);
      }, [id])
    );
    if (error === '403') {
      return <E403 />;
    } else if (error === '404') {
      return <E404 />;
    } else if (error === '500') {
      return <E500 />;
    }

    const handleInputChange = (field, value) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [field]: value,
      }));
    };

    const handleUpdate = async () => {
      try {
        const token = await getToken("auth_jrf");
        if (!token) {
          // ShowAlert("Erro", "Token não encontrado.");
          return;
        }

        const url =
          Platform.OS === "web"
            ? `http://127.0.0.1:8000/api/signatures/signature_lists/${id}/`
            : `http://10.0.2.2:8000/api/signatures/signature_lists/${id}/`;

        const response = await axios.patch(
          url,
          {
            title: formData.title,
            description: formData.description,
            end_date: formData.end_date || null,
            password: formData.password,
          },
          {
            headers: { 
              Authorization: `token ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
         
          setError('');
          setAlertTitle('Sucesso');
          setAlertMessage('Lista Atualizada com sucesso!');
          setAlertStatusCode(200);
          setIsNewModalAlertVisible(true); 



        } else {
          ShowAlert("Erro", `Erro ao atualizar os dados. Status: ${response.status}`);
        }
      } catch (error) {
        // console.error("Erro ao atualizar os dados:", error);
        ShowAlert("Erro", "Não foi possível atualizar os dados.");
      }
    };

    const handleDeleteSignature = async (signatureId) => {
      try {
        const token = await getToken("auth_jrf");
        if (!token) {
          ShowAlert("Erro", "Token não encontrado.");
          return;
        }
    
        const url =
          Platform.OS === "web"
            ? `http://127.0.0.1:8000/api/signatures/signature_lists/${id}/signature/${signatureId}/`
            : `http://10.0.2.2:8000/api/signatures/signature_lists/${id}/signature/${signatureId}/`;
    
        const response = await axios.delete(url, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
    
        if (response.status === 204) {
          setError('');
          setAlertTitle('Sucesso');
          setAlertMessage("Assinatura removida com sucesso!");
          setAlertStatusCode(200);
          setIsNewModalAlertVisible(true);
    

          await fetchSignatureListAndSignatures();
        } else {
          ShowAlert("Erro", `Erro ao deletar a assinatura. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Erro ao deletar a assinatura:", error);
        setAlertTitle('Erro');
        setAlertMessage("Não foi possível deletar a assinatura.");
        setAlertStatusCode(400);
        setIsNewModalAlertVisible(true);
      }
    };
    const handleNavigateToPageUser = () => {
      if (id) {
        router.push(`/pageUser?id=${id}`);
      }}

      const toggleListModal = () => {

        setIsListModalVisible(!isListModalVisible);
        if (isListModalVisible == true){
          handleUpdate()
        }
        
      };
      const toggleListModalNoneSave = () => {

        setIsListModalVisible(!isListModalVisible);
      };
      const openPersonModal = (person:any) => {
        setSelectedPerson(person);
        setIsPersonModalVisible(true);
      };


      const handleRescue = async () => {
        setAlertAction('resgate');
        setIsAlertVisible(true);
      };
      
      const handleConclude = async () => {
        setAlertAction('concluir');
        setIsAlertVisible(true);
      };
      
      const handleDiscard = () => {
        setAlertAction('descartar');
        setIsAlertVisible(true);
      };

      const handleToggle = () => {
        setFormData({ ...formData, toAllUsers: !formData.toAllUsers });
      };
  const handleConfirmAction = async () => {
    const token = await getToken("auth_jrf");
    if (!token) {
      // ShowAlert("Erro", "Token não encontrado.");
      return;
    }

    const url = Platform.OS === "web"
      ? `http://127.0.0.1:8000/api/signatures/signature_lists/${id}/update-state/`
      : `http://10.0.2.2:8000/api/signatures/signature_lists/${id}/update-state/`;

    try {
      const response = await axios.patch(
        url,
        {
          is_active: alertAction === 'resgate',
          is_completed: alertAction === 'concluir',
        },
        {
          headers: {
            Authorization: `token ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setDetails((prevDetails) => ({
          ...prevDetails,
          is_active: alertAction === 'resgate' ? true : false,
          is_completed: alertAction === 'concluir' ? true : false,
        }));

        setError('');
        setAlertTitle('Sucesso');
        setAlertMessage(`Lista ${alertAction === 'concluir' ? 'concluída' : alertAction === 'resgate' ? 'resgatada' : 'descartada'} com sucesso!`)
        setAlertStatusCode(200);
        setIsNewModalAlertVisible(true); 

        // router.push(`http://localhost:8081/management/details?id=${id}`);
      } else {
        ShowAlert("Erro", `Erro ao atualizar o estado da lista. Status: ${response.status}`);
      }
    } catch (error) {
      ShowAlert("Erro", "Não foi possível atualizar o estado da lista.");
    } finally {
      setIsAlertVisible(false);
    }
  };
    return(

        <>
    {Platform.OS === 'web' || Platform.OS === 'windows' ? (



              <Web_Sub_Container>
                <Web_View_Title>
                  <Web_Title>Gerenciamento da Lista Nº {id}</Web_Title>
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
                    <Web_Sub_Title>Dados de Sua Lista</Web_Sub_Title>
                  </Web_Flag_Sub_Title>
                  <Web_Sub_Container_Children>
                    <Web_Children_Column $Widths="32">
                      <Web_Childen_Data_List_View $heights="53">
                      <Web_Children_Flag_Sub_Title>
                        {/* Informações da Lista */}
                        <Web_Children_Sub_Title> Formulário da Lista</Web_Children_Sub_Title>

                      
                      </Web_Children_Flag_Sub_Title>

                      <Web_Children_Data_Info_View $direction="" $Wghts="32vh" $align="" $gap="" style={{marginTop:'-2vh',gap:'7.7vh'}}  >

                              <Web_Children_Data_Info_View $direction="" $Wghts="3"  $Wdhts="40" $align="start"  >
                              <Web_Children_Data_Info_Text>Titulo</Web_Children_Data_Info_Text>
                              <Web_Children_Data_Info_Input
                              $sizeinputheight="5"
                              value={formData.title}
                              onChangeText={(value) => handleInputChange('title', value)}
                              ></Web_Children_Data_Info_Input>
                              </Web_Children_Data_Info_View> 

                              <Web_Children_Data_Info_View $direction="" $Wghts="3"   $Wdhts="40" $align="start" >
                                <Web_Children_Data_Info_Text>Senha</Web_Children_Data_Info_Text>
                                <Web_Children_Data_Info_Input
                                  value={formData.password}
                                  onChangeText={(value) => handleInputChange('password', value)}
                                  $sizeinputheight="5"
                                  secureTextEntry={!isPasswordVisible} 
                                />
                                <TouchableOpacity
                                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                                  style={{ position: 'absolute', marginLeft: '33vh', marginTop: '3.5vh' }}
                                >
                                  <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={'3.5vh'} color="gray" />
                                </TouchableOpacity>
                              </Web_Children_Data_Info_View>

                              <Web_Children_Data_Info_View $direction="column" $Wghts=""  $Wdhts="40" $align="start"  >
                              <Web_Children_Data_Info_Text>Descrição</Web_Children_Data_Info_Text>
                              <Web_Children_Data_Info_Input $sizeinputheight="12"
                              multiline={true}
                              value={formData.description}
                              onChangeText={(value) => handleInputChange('description', value)} ></Web_Children_Data_Info_Input>
                              </Web_Children_Data_Info_View> 

                                
                              <Web_Children_Data_Info_View $direction="" $Wghts="10"  $Wdhts="30" $align="start" style={{paddingTop:'7vh'}}  >
                              <DatePicker 
                                align="row" 
                                height='10' 
                                date={formData && formData.end_date ? new Date(formData.end_date) : null} 
                                onDateChange={(date) => handleInputChange('end_date', date ? date.toISOString() : null)} 
                              />
      
                              </Web_Children_Data_Info_View>    
                          </Web_Children_Data_Info_View>
                          
                          <Web_Children_Footer style={{marginTop:'19.9vh'}}>

                              <Web_Children_Footer_Button onPress={handleUpdate}>
                                <Web_Children_Footer_Button_Text>
                                  Atualizar
                                </Web_Children_Footer_Button_Text>
                              </Web_Children_Footer_Button>
                    
                          </Web_Children_Footer>
                      </Web_Childen_Data_List_View>
                      {/* Gerenciando  estado da Lista */}
                      <Web_Childen_Data_List_View $heights="17
                      ">
                      <Web_Children_Data_Info_View $direction="row" $Wghts="10"  $Wdhts="45" $align="center" style={{paddingTop:'5vh'}} >
                              <Web_Children_Data_Info_Text>Link:   </Web_Children_Data_Info_Text>
                              <Web_Children_Data_Info_Input value={`http://localhost:8081/pageUser?id=${id}`} style={{height:'5vh'}}></Web_Children_Data_Info_Input>
                              </Web_Children_Data_Info_View> 

                      <Web_Children_Page >



                          <Web_Children_Page_Button style={{backgroundColor:Colors.black,marginTop:'-11vh'}} >
                            <Web_Children_Page_Button_Text $size={'1.6'} style={{color: Colors.white}} onPress={handleNavigateToPageUser}>
                                Acessar Pagina
                            </Web_Children_Page_Button_Text>
                          </Web_Children_Page_Button>
                          <Web_Children_Page_Button
                                style={{ backgroundColor: buttonBackgroundColor, marginTop: '-11vh' }}
                                onPress={shouldConclude ? handleConclude : handleRescue}
                              >
                                <Web_Children_Page_Button_Text $size={'1.5'} style={{ color: buttonTextColor }}>
                                  {buttonText}
                                </Web_Children_Page_Button_Text>
                              </Web_Children_Page_Button>

                              <Web_Children_Page_Button
                                style={{ backgroundColor: Colors.New_White, marginTop: '-11vh' }}
                                onPress={handleDiscard}
                              >
                                <Web_Children_Page_Button_Text $size={'1.5'} style={{ color: Colors.red }}>
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
                            <Web_Sub_Title> Dados dos Usuários</Web_Sub_Title>
                            
                          </Web_Flag_Sub_Title>
                            
                          <Web_List_Data_People_Signature_Scroll>
                            {signatures.filter(signature => signature.flag !== 3).map((signature, index) =>(
              <Web_List_Data_People_Data_View key={index.id} $type={index % 2 === 0 ? 0 : 1}>
                <Web_List_Data_People_Data_Image  source={{ uri: signature.user.photo_url || Img_test }}  />
                <Web_List_Data_People_Data_Name>  {signature.user.first_name || "Usuário sem nome"}</Web_List_Data_People_Data_Name>
                <Web_List_Data_People_Data_Name>  {signature.user.email || "Usuário sem nome"}</Web_List_Data_People_Data_Name>
                {/* <TouchableOpacity onPress={() => handleToggleGiveOut(person.id)}>
                  <Web_List_Input_ToggleContainer $isActive={person.give_out}>
                    <Web_List_Input_ToggleCircle />
                  </Web_List_Input_ToggleContainer>
                </TouchableOpacity> */}
              </Web_List_Data_People_Data_View>
            ))} 
                          </Web_List_Data_People_Signature_Scroll>
                        </Web_List_Data_People_Signature>
                        {/* Assinaturas dos usuários */}
                        <Web_List_Data_People_Signature>
                          <Web_Flag_Sub_Title>
                            <Web_Sub_Title> Assinaturas dos Usuários</Web_Sub_Title>
                          </Web_Flag_Sub_Title>


                          <Web_List_Data_People_Signature_Scroll_2>
                        
                          {signatures.filter(signature => signature.flag !== 3).map((signature, index) => (
                        <Web_List_Data_People_Data_View_2 key={signature.id} $type={index % 2 === 0 ? 0 : 1}>
                          <Web_List_Data_People_Data_Image
                          source={{ uri: signature.user.photo_url || Img_test }} 
                        />
                          <Web_List_Data_People_Data_Name style={{padding:'1vh'}}>
                            {signature.user.first_name || "Usuário sem nome"}
                          </Web_List_Data_People_Data_Name>
                          <Web_List_Data_People_Data_Image_2  onContextMenu={handleContextMenu}
                          source={{ uri: signature.data || Img_test }} 
                        />

                          <TouchableOpacity onPress={() => handleDeleteSignature(signature.id)}>
                            <Lupa_Icon name={'trash'} size={'2.5vh'} color={'maroon'} bordercolor={'black'} />
                          </TouchableOpacity>
                        </Web_List_Data_People_Data_View_2>
                      ))}
                          </Web_List_Data_People_Signature_Scroll_2>
                        </Web_List_Data_People_Signature>

                    </Web_Children_Column>
                  </Web_Sub_Container_Children>
                </Web_Bar_Info>        
                <CustomAlertModal
                    visible={isNewModalAlertVisible}
                    title={alertTitle}
                    message={alertMessage}
                    statusCode={alertStatusCode}
                    onDismiss={() => ActualizeAlertVisible()} 
                  />
                <AlertWithOption
              visible={isAlertVisible}
              title={`Confirmar ${alertAction}`}
              message={alertAction == 'resgate'?`Tem certeza que deseja fazer ${alertAction} a lista?`:`Tem certeza que deseja ${alertAction} a lista?`}
              confirmText="OK"
              cancelText="Cancelar"
              onConfirm={handleConfirmAction}
              
              onCancel={() => setIsAlertVisible(false)}
            />
              </Web_Sub_Container>


  ) :  (


    <Mob_Container>
    <Mob_Sub_Container>
      <Mob_View_Title>
        <Mob_Title>Gerenciamento da Lista Nº {id}</Mob_Title>
      </Mob_View_Title>
      <Mob_Flag_Sub_Title>
          <Mob_Sub_Title>Dados de sua Lista</Mob_Sub_Title>
          <TouchableOpacity onPress={toggleListModal}>
            <Ionicons name="information-circle" size={24} color="gray" />
          </TouchableOpacity>
        </Mob_Flag_Sub_Title>
        <AlertWithOption
              visible={isAlertVisible}
              title={`Confirmar ${alertAction}`}
              message={alertAction == 'resgate'?`Tem certeza que deseja fazer ${alertAction} a lista?`:`Tem certeza que deseja ${alertAction} a lista?`}
              confirmText="OK"
              cancelText="Cancelar"
              onConfirm={handleConfirmAction}
              onCancel={() => setIsAlertVisible(false)}
            />
              <CustomAlertModal
                    visible={isNewModalAlertVisible}
                    title={alertTitle}
                    message={alertMessage}
                    statusCode={alertStatusCode}
                    onDismiss={() => ActualizeAlertVisible()} 
                  />

      {isListModalVisible && (
          <Mob_Modal_Container transparent visible={isListModalVisible} animationType="fade">
            <Mob_Modal_Backdrop activeOpacity={1} onPress={toggleListModalNoneSave}>
              <TouchableOpacity activeOpacity={1} onPress={(e) => e.stopPropagation()}>
                <Mob_Modal_Content>
                  <Mob_Modal_Title>Dados de sua Lista</Mob_Modal_Title>

                  {/* Campos de dados da lista */}
                  <Mob_Data_List_Info_Data>
                    <Mob_Text_Title>Título</Mob_Text_Title>
                    <Mob_Input
                              value={formData.title}
                              onChangeText={(value) => handleInputChange('title', value)}
                    />
                  </Mob_Data_List_Info_Data>

                  <Mob_Data_List_Info_Data>
                    <Mob_Text_Title>Senha</Mob_Text_Title>
                    <Mob_Input_Password_Container>
                      <Mob_Input_Password
                        value={formData.password}
                        onChangeText={(value) => handleInputChange('password', value)}
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
                 
                  <Mob_Data_List_Info_Data>
                  <Mob_Text_Title>Descrição</Mob_Text_Title>
                    <Mob_Input 
                              style={{height:130,justifyContent:'flex-start'}}
                              multiline={true}
                              value={formData.description}
                              onChangeText={(value) => handleInputChange('description', value)} />


                  </Mob_Data_List_Info_Data>
                  

                  <Mob_Data_List_Info_Data>
                  <DatePicker 
                                align="row" 
                                height='270' 
                                date={formData && formData.end_date ? new Date(formData.end_date) : null} 
                                onDateChange={(date) => handleInputChange('end_date', date ? date.toISOString() : null)} 
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

<Mob_Button_Container_Row >
      <Mob_Children_Data_Info_Input value={`http://localhost:8081/pageUser?id=${id}`}></Mob_Children_Data_Info_Input>
      </Mob_Button_Container_Row>
      <Mob_Button_Container_Row >
      {/* <Mob_Button onPress={handleUpdate}>
        <Mob_Button_Text>Salvar</Mob_Button_Text>
      </Mob_Button> */}


      <Mob_Button onPress={handleNavigateToPageUser}  style={{backgroundColor:Colors.black}}>
        <Mob_Button_Text>Acessar Página</Mob_Button_Text>
      </Mob_Button>

      <Mob_Button style={{backgroundColor: shouldConclude? Flags_Colors.green:Flags_Colors.yellow}}
                                      onPress={shouldConclude ? handleConclude : handleRescue}
                                     >
        <Mob_Button_Text>{buttonText}</Mob_Button_Text>
      </Mob_Button>
      <Mob_Button  onPress={handleDiscard} style={{backgroundColor: Flags_Colors.red}}>
        <Mob_Button_Text>Descartar</Mob_Button_Text>
      </Mob_Button>
    </Mob_Button_Container_Row>

      {/* Renderização da lista de assinaturas para mobile */}
      <Mob_List_Data_People_View>
        <Mob_List_Data_People_ScrollView>
          {signatures.filter(signature => signature.flag !== 3).map((signature, index) => (
            <Mob_List_Data_People_Data_View key={signature.id} $type={index % 2 === 0 ? 0 : 1}>
              <Mob_List_Data_People_Data_Image source={{ uri: signature.user.photo_url || Img_test }} />
              <Mob_List_Data_People_Data_Name>{signature.user.first_name || "Usuário sem nome"}</Mob_List_Data_People_Data_Name>
    <Mob_List_Data_People_Button_Clicked onPress={() => openPersonModal(signature)} >
            <FontAwesome6 name="signature" size={24} color="black"  />
          </Mob_List_Data_People_Button_Clicked>
              <Mob_List_Data_People_Button_Clicked onPress={() => handleDeleteSignature(signature.id)}>
                <FontAwesome6 name="trash" size={20} color="maroon" />
              </Mob_List_Data_People_Button_Clicked>
            </Mob_List_Data_People_Data_View>
          ))}
        </Mob_List_Data_People_ScrollView>
      </Mob_List_Data_People_View>

      {/* Modal para exibir detalhes do usuário */}
      {isPersonModalVisible && selectedPerson && (
        <Mob_Modal_Container transparent visible={isPersonModalVisible} animationType="fade">
          <Mob_Modal_Backdrop activeOpacity={1} onPress={() => setIsPersonModalVisible(false)}>
            <TouchableOpacity activeOpacity={1} onPress={(e) => e.stopPropagation()}>
              <Mob_Modal_Content>
                <Mob_Modal_Image source={{ uri: selectedPerson.user.photo_url }} />
                <Mob_Modal_Title>{selectedPerson.user.first_name}</Mob_Modal_Title>
                <Mob_Modal_Email>{selectedPerson.user.email}</Mob_Modal_Email>
                <Mob_Modal_SignatureImage source={{ uri: selectedPerson.data}} />
                <Mob_Modal_CloseButton onPress={() => setIsPersonModalVisible(false)}>
                  <Mob_Modal_CloseButtonText>Fechar</Mob_Modal_CloseButtonText>
                </Mob_Modal_CloseButton>
              </Mob_Modal_Content>
            </TouchableOpacity>
          </Mob_Modal_Backdrop>
        </Mob_Modal_Container>
      )}

      
    </Mob_Sub_Container>
  </Mob_Container>

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
  font-size: 20px;
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
  flex:1;
  align-items: center;
  align-self: center;
  padding: 10px 0px 10px 0px;
  border-radius: 5px;
  background-color: black;
  `;



 export const Mob_Button_Container_Row = styled.View`
 flex:1;
 flex-direction: row;
 justify-content: space-evenly;
 /* align-items: center; */
 width: 100%;
 height:auto;
 min-height: 10px;
 max-height: 50px;
 gap:30;
 padding-left: 15px;
 padding-right: 15px;
 /* background-color: red; */
 
 `
  export const Mob_Button_Text = styled.Text`
  font-size: 13px;
  text-align: center;
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
  background-color: ${(props:any)=>{return Colors.gray_30}};
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
    padding-top: -10px;
    padding-bottom: -10px;
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