import React, { useEffect ,useState} from "react";
import { Platform } from "react-native";
import {    Container as Web_Container,
            Body as Web_Body,
            Title as Web_Title, 
            Sub_Container as Web_Sub_Container, 
            Sub_Title as Web_Sub_Title,
            Bar_Info as Web_Bar_Info, 
            Row_Balon_View as Web_Row_Balon_View, 
            Balon_View as Web_Balon_View , 
            View_Title as Web_View_Title, 
            Flag_Sub_Title as  Web_Flag_Sub_Title, 
            Ballon_List_info as Web_Ballon_List_info, 
            Ballon_Button_info as Web_Ballon_Button_info, 
            Ballon_List_info_Data as Web_Ballon_List_info_Data, 
            Data_Ballon_Title as Web_Data_Ballon_Title, 
            Data_Ballon_Text as Web_Data_Ballon_Text, 
            Data_View as Web_Data_View, 
            Back_To_Image as Web_Back_To_Image , 
            Icon_Image_Home as Web_Icon_Image_Home, 
            Icon_Image_Perfil} from "./web_css";

import {    Container as Mob_Container,
            Body as Mob_Body,
            Title as Mob_Title,    
            Sub_Container as Mob_Sub_Container, 
            Sub_Title as Mob_Sub_Title, 
            Ballon_List_info,
            Ballon_Row_List_Info,
            Ballon_Button_info,
            Back_To_Image,
            Data_col_info,
            Data_List_Col_Info,
            Ballon_Data_Title,
            Ballon_Data_Text,
            Back_To_Perfil} from "./mobile_css";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

import Atai_B from '../../../../assets/header/AtaAi_White.png';
import Gen_L_B from '../../../../assets/header/gerencie_listas_White.png';
import Docs_End from '../../../../assets/header/Document_End.png';
import Img_test from '../../../../assets/header/capivara.jpg'
import { Header } from "../../organisms/header";
import { Home_Colors, Pages_Colors } from "../../colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function Home(){
    const info =0



    return(
        <>
        {Platform.OS === 'web' || Platform.OS == 'macos'? 
        (<Web_Body>
            <Header></Header>
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
                <Web_Row_Balon_View  >
                    < Web_Balon_View>

                    <Web_Flag_Sub_Title> <Web_Sub_Title>Ultimas Participações </Web_Sub_Title></Web_Flag_Sub_Title>
                    {[...Array(3)].map((_, index) => (
                        <Web_Ballon_List_info key={index}>
                            <Web_Ballon_Button_info><Icon_Image_Perfil source={Img_test}/></Web_Ballon_Button_info>
                            <Web_Ballon_List_info_Data>
                                < Web_Data_View><Web_Data_Ballon_Title>Criado Por: </Web_Data_Ballon_Title> <Web_Data_Ballon_Text>Amado Batista</Web_Data_Ballon_Text></ Web_Data_View>
                                < Web_Data_View><Web_Data_Ballon_Title>Assinado na Data: </Web_Data_Ballon_Title> <Web_Data_Ballon_Text>15/09/2024</Web_Data_Ballon_Text></ Web_Data_View>

                            </Web_Ballon_List_info_Data>
                            </Web_Ballon_List_info>
                        ))}
                   
                    </ Web_Balon_View>
                    < Web_Balon_View>
                       
                    <Web_Flag_Sub_Title> <Web_Sub_Title>Ultimas Participações</Web_Sub_Title></Web_Flag_Sub_Title>
                    {[...new Array<number>(3)].map((_, index) => (
                        <Web_Ballon_List_info key={index}>
                            <Web_Ballon_Button_info><Web_Back_To_Image style={{backgroundColor:Pages_Colors.icon_back_green}}><Web_Icon_Image_Home source={Docs_End}/></Web_Back_To_Image></Web_Ballon_Button_info>
                            <Web_Ballon_List_info_Data>
                                < Web_Data_View><Web_Data_Ballon_Title>Titulo:  </Web_Data_Ballon_Title> <Web_Data_Ballon_Text>Amado Batista</Web_Data_Ballon_Text></ Web_Data_View>
                                < Web_Data_View><Web_Data_Ballon_Title>Assinado na Data: </Web_Data_Ballon_Title> <Web_Data_Ballon_Text>15/09/2024</Web_Data_Ballon_Text></ Web_Data_View>

                            </Web_Ballon_List_info_Data>
                            </Web_Ballon_List_info>
                        ))}
                    </ Web_Balon_View>
                </ Web_Row_Balon_View>
                < Web_Row_Balon_View>
                    < Web_Balon_View>
                    <Web_Flag_Sub_Title> <Web_Sub_Title>Ultimas Participações Compartilhadas</Web_Sub_Title></Web_Flag_Sub_Title>
                    {[...new Array<number>(3)].map((_, index) => (
                        <Web_Ballon_List_info key={index}>
                              <Web_Ballon_Button_info><Icon_Image_Perfil source={Img_test}/></Web_Ballon_Button_info>
                            <Web_Ballon_List_info_Data>
                                < Web_Data_View><Web_Data_Ballon_Title>Titulo: </Web_Data_Ballon_Title> <Web_Data_Ballon_Text>Amado Batista</Web_Data_Ballon_Text></ Web_Data_View>
                                < Web_Data_View><Web_Data_Ballon_Title>Finalizado Na Data: </Web_Data_Ballon_Title> <Web_Data_Ballon_Text>15/09/2024</Web_Data_Ballon_Text></ Web_Data_View>

                            </Web_Ballon_List_info_Data>
                            </Web_Ballon_List_info>
                        ))}
                    </ Web_Balon_View>
                    < Web_Balon_View>
                    <Web_Flag_Sub_Title> <Web_Sub_Title>Ultimas Gerencias de Lista </Web_Sub_Title></Web_Flag_Sub_Title>
                    {[...new Array<number>(3)].map((_, index) => (
                        <Web_Ballon_List_info key={index}>
                             <Web_Ballon_Button_info><Web_Back_To_Image style={{backgroundColor:Pages_Colors.icon_back_gray}}  ><Web_Icon_Image_Home source={Gen_L_B}/></Web_Back_To_Image></Web_Ballon_Button_info>
                            <Web_Ballon_List_info_Data>
                            < Web_Data_View><Web_Data_Ballon_Title>Titulo: </Web_Data_Ballon_Title> <Web_Data_Ballon_Text>10</Web_Data_Ballon_Text></ Web_Data_View>
                                < Web_Data_View><Web_Data_Ballon_Title>Nº de assinaturas: </Web_Data_Ballon_Title> <Web_Data_Ballon_Text>10</Web_Data_Ballon_Text></ Web_Data_View>
                                < Web_Data_View><Web_Data_Ballon_Title>Aberto na Data: </Web_Data_Ballon_Title> <Web_Data_Ballon_Text>15/09/2024</Web_Data_Ballon_Text></ Web_Data_View>

                            </Web_Ballon_List_info_Data>
                            </Web_Ballon_List_info>
                        ))}
                    </ Web_Balon_View>
                </ Web_Row_Balon_View>    
                
            </Web_Bar_Info>

                </Web_Sub_Container>
            </Web_Container>        
        </Web_Body>
        ):
            <Mob_Body>
            <Header></Header>
            <Mob_Title>
                    Home
                </Mob_Title>
            <Mob_Container>

            <Mob_Sub_Container>
                <Mob_Sub_Title>
                    Ultimas Participações
                    </Mob_Sub_Title>
                 {[...new Array<number>(3)].map((_, index) => (
                    <Ballon_List_info>
                    <Ballon_Row_List_Info>
                        <Ballon_Button_info style={{backgroundColor: Home_Colors.sub_container}}>
                            <Back_To_Perfil source={Img_test} />
                           
                        </Ballon_Button_info>
                        <Data_col_info>
                                <Data_List_Col_Info>
                                    <Ballon_Data_Title>Criado por: </Ballon_Data_Title>
                                    <Ballon_Data_Text>Amado Batista</Ballon_Data_Text>
                                </Data_List_Col_Info>
                                <Data_List_Col_Info>
                                    <Ballon_Data_Title>Assinado na Data: </Ballon_Data_Title>
                                    <Ballon_Data_Text>15/09/1997</Ballon_Data_Text>
                                </Data_List_Col_Info>
                            </Data_col_info>

                    </Ballon_Row_List_Info>
                    </Ballon_List_info>
                        ))}
                </Mob_Sub_Container>

                <Mob_Sub_Container>
                <Mob_Sub_Title>
                    Ultimas Part. Compartilhada
                    </Mob_Sub_Title>
                 {[...new Array<number>(3)].map((_, index) => (
                    <Ballon_List_info>
                    <Ballon_Row_List_Info>
                        <Ballon_Button_info style={{backgroundColor: Home_Colors.sub_container}}>
  
                            <Back_To_Perfil source={Img_test} />
                        </Ballon_Button_info>
                        <Data_col_info>
                                <Data_List_Col_Info>
                                    <Ballon_Data_Title>Criado por: </Ballon_Data_Title>
                                    <Ballon_Data_Text>Amado Batista</Ballon_Data_Text>
                                </Data_List_Col_Info>
                                <Data_List_Col_Info>
                                    <Ballon_Data_Title>Assinado na Data: </Ballon_Data_Title>
                                    <Ballon_Data_Text>15/09/1997</Ballon_Data_Text>
                                </Data_List_Col_Info>
                            </Data_col_info>

                    </Ballon_Row_List_Info>
                    </Ballon_List_info>
                        ))}
                </Mob_Sub_Container>

                <Mob_Sub_Container>
                    <Mob_Sub_Title>
                    Ultimas Gerencias Em Aberto
                    </Mob_Sub_Title>
                    {[...new Array<number>(3)].map((_, index) => (
                    <Ballon_List_info>
                    <Ballon_Row_List_Info>
                        <Ballon_Button_info style={{backgroundColor:Pages_Colors.flag_Color}} >
                            <Back_To_Image source={Docs_End}></Back_To_Image>
                        </Ballon_Button_info>
                        <Data_col_info>
                                <Data_List_Col_Info>
                                    <Ballon_Data_Title>Criado por: </Ballon_Data_Title>
                                    <Ballon_Data_Text>Amado Batista</Ballon_Data_Text>
                                </Data_List_Col_Info>
                                <Data_List_Col_Info>
                                    <Ballon_Data_Title>Assinado na Data: </Ballon_Data_Title>
                                    <Ballon_Data_Text>15/09/1997</Ballon_Data_Text>
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
                    {[...new Array<number>(3)].map((_, index) => (
                    <Ballon_List_info>
                    <Ballon_Row_List_Info>
                        <Ballon_Button_info style={{backgroundColor:Pages_Colors.icon_back_gray}} >
                            <Back_To_Image source={Gen_L_B}></Back_To_Image>
                        
                        </Ballon_Button_info>
                        <Data_col_info>
                                <Data_List_Col_Info>
                                    <Ballon_Data_Title>Criado por: </Ballon_Data_Title>
                                    <Ballon_Data_Text>Amado Batista</Ballon_Data_Text>
                                </Data_List_Col_Info>
                                <Data_List_Col_Info>
                                    <Ballon_Data_Title>Assinado na Data: </Ballon_Data_Title>
                                    <Ballon_Data_Text>15/09/1997</Ballon_Data_Text>
                                </Data_List_Col_Info>
                            </Data_col_info>

                    </Ballon_Row_List_Info>
                    </Ballon_List_info>
                        ))}
                </Mob_Sub_Container>
            </Mob_Container>        
        </Mob_Body>
        }
    </>
    )
}