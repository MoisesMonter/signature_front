import React from 'react';
import styled from 'styled-components/native';
import { Colors, Header_Colors, Home_Colors, Pages_Colors } from '../../../components/colors';
import { Dimensions, Platform } from 'react-native';


const { width, height } = Dimensions.get('window');
export const Body = styled.View`
    flex:1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: auto;
    height: auto;
    /* max-width: 100%; */
    /* min-width: 70vh; */
    /* height: 100vh; */

    `

export const Container = styled.ScrollView`
  flex: 1;
  flex-wrap: wrap;
    /* width: auto; */
    /* height: auto; */
    width: auto;
    max-width: 100%;
    min-width: 40vh;
    height: 100%;
    /* gap:25vh; */
  
`;

export const Sub_Container = styled.View`

    flex-direction: column;
    justify-content: stretch;
    flex-wrap: wrap;
    align-items: center;
    width: auto;
    height: auto;
    min-width: 95%;
    max-width: 50vh;
    min-height: 100%;
    max-height: 50%;
    /* max-width: 100vh; */
    /* padd */
    /* margin: 0vh 2vh 0vh 2vh; */
    /* background-color: ${Home_Colors.sub_container}; */
`

export const Bar_Info = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;    
    align-items: center;
    flex-wrap: wrap;
    height: auto;
    width: auto;
    max-width: 78vh;
    min-width: 80%;
    max-height: 100%;
    min-height: 53vh;
    margin: 8vh 0vh -05vh 2vh;
    padding: 0vh;
    background-color: ${Pages_Colors.sub_container};
    border-radius: 0.5vh;
    gap:5vh
    
`
export const Balon_View_Home = styled.View`
flex:1;
flex-wrap: wrap;
justify-content: center;
background-color: ${Pages_Colors.sub_sub_container};
width: auto;
height: auto;

min-width: 60vh;
max-width: 30vh;
margin: 1vh 1vh 2vh 2vh;
height: 50vh;
gap:1vh;
`
export const Row_Balon_View = styled.View`
    display: flex;
    flex-direction: row; 
    flex-wrap: wrap; 
    justify-content: center;
    align-self: center;
    /* margin: 1vh 2vh 0vh 2vh; */
    width: auto;
    height: auto;
    min-width:  70vh;
    max-width: 35vh;
    min-height: 100vh;
    max-height: 40vh;
    border-radius: 0.5vh;
    /* gap: 5vh; */
    margin: 0vh;

    /* Ajuste a direção com base na largura da tela */

`;


//Ballon

export const Balon_View = styled.View`
flex:1;
flex-wrap: wrap;
justify-content: flex-start;
background-color: ${Pages_Colors.sub_sub_container};
width: auto;
height: auto;
min-height: 40vh;
max-height: 50vh;

min-width: 60vh;
max-width: 30vh;
margin: 1vh 1vh 2vh 2vh;
border-radius: 0.5vh;
gap:1vh;
`
//Text

//Title
export const View_Title = styled.View`
    flex:1;    
    flex-wrap: wrap;
        justify-content: stretch;
    width: auto;
    max-width: 10vh;
    min-width: 1vh;

    height: auto; 
    max-height: 5vh; 

    /* align-items: center; */
     /* margin: 2vh 5vh 5vh 5vh; */
    background-color: ${Colors.transparent};

`

export const Title = styled.Text`

font-size:  ${(1080* 0.005)}vh;
    font-family:bolder;
    text-align: center;
    font-family: Arial;
    color: ${Colors.white};

    background-color: ${Header_Colors.background};
    margin-top:1vh;
    padding: 0vh 3vh 0vh 3vh;
    border-radius: 10px;
    border-radius: 0.5vh;    
`

//subtitle
export const Flag_Sub_Title = styled.View`
    flex:1;
    /* flex-wrap: wrap; */
    width:auto;
    min-height: 30vh;
    max-width:55vh;
    height: auto;
    min-height: 5vh;
    max-height: 5vh;
    padding-left: 1vh;
    background-color: ${Pages_Colors.flag_Color};
    justify-content: center;
    align-items: start;
    /* margin: 0vh; */
    border-radius: 0.5vh 0.5vh 0.5vh 0vh;
`

export const Sub_Title = styled.Text`
    font-size:  ${(1080* 0.002)}vh;
    
    font-family:bold;
    font-family: Arial;
    /* min-width: stretch; */
    color: ${Colors.white};

`

export const Web_Ballon_List_info_Home = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content:space-between;
    flex-wrap: wrap;

    margin: 1vh 2vh 1vh  1vh;
    width: auto;
    min-width: 30vh;
    max-width: 78vh;

    height: 10vh;
    gap:1vh;

    `

export const Ballon_List_info = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content:space-between;
    flex-wrap: nowrap;
    border-radius: 0.5vh 10vh 10vh 0.5vh;
    border:solid #C0C0C09D 0.005vh;
    margin: 1vh 1vh 1vh  1vh;
    width: auto;
    min-width: 30vh;
    max-width: 78vh;

    height: auto;
    min-height: 10vh;
    max-height: 5vh;
    gap:1vh;

    `

export const Ballon_Button_info = styled.TouchableOpacity`
justify-content: center;
    align-items: center;
    width: auto;
    min-width: 10vh;
    height: auto;
    max-height: 11vh;
    /* background-color: ${Colors.black}; */
`
export const Icon_Image_Home = styled.Image`
width: auto;
    max-width: 6vh;
    min-width: 7vh;
    height: auto;
    min-height: 7vh;
    max-height: 10vh;
    /* margin: 0.3vh; */
    border-radius: 0.3vh;

`
export const Icon_Image_Perfil = styled.Image`
width: auto;
    max-width: 6vh;
    min-width: 7vh;
    height: auto;
    min-height: 7vh;
    max-height: 10vh;
    /* margin: 0.3vh; */
    border-radius: 5vh;

`

export const Back_To_Image = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: auto;
    max-width: 11vh;
    min-width: 10vh;
    height: auto;
    min-height: 10vh;
    max-height: 11vh;
    /* margin: 0.3vh; */
    border-radius: 0.3vh;

`

export const Ballon_List_info_Data = styled.View`
    flex:1;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    width: auto;
    width: 10vh;
    height: 10vh;
    /* min-width: 10vh; */
    
    /* gap:1vh; */

`

export const Data_View = styled.View`
    flex:1;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: auto;
    min-width: 10vh;
    /* max-width: 15vh; */
`
export const Data_Ballon_Title = styled.Text`
    text-align: center;
    font-size:  ${(1080* 0.002)}vh;
    font-family: Arial;
    font-weight: 900;
    /* text-align: center; */
`


const StaticText = styled.Text`
  allowFontScaling: false;
`;
export const Data_Ballon_Text =  styled(StaticText)`
    text-align: center;
    font-size:  ${(1080 * 0.002)}vh;/* 5% de padding baseado na largura da tela */
    font-family: Arial;
    /* text-align: center; */
`

