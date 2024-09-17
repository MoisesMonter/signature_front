import styled from "styled-components/native";
import { Colors, Pages_Colors, Header_Colors, Flags_Colors } from "../../colors";



export const Icon_Image_Perfil = styled.Image`
    width: auto;
    max-width: 6vh;
    min-width: 7vh;
    height: auto;
    min-height: 7vh;
    max-height: 10vh;
    border-radius: 5vh; 
`;

export const Web_Body = styled.View`
     flex:1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: auto;
    height: auto;
`;

export const Web_Container = styled.View`
  flex: 1;
  flex-wrap: wrap;
  width: auto;
  max-width: 100%;
  min-width: 30vh;
  height: 100%;
`;

export const Web_Sub_Container = styled.View`
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    width: auto;
    height: auto;
    min-width: 100%;
`;

export const Web_View_Title = styled.View`
    flex:1;    
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
    min-width: 1vh;
    height: auto; 
    max-height: 5vh; 
    margin: 5vh 5vh 5vh 5vh;
    background-color: ${Colors.transparent};
`;

export const Web_Title = styled.Text`
    word-break: normal;
    width: 60vh;
    font-size:  ${(1080 * 0.005)}vh;
    font-family: Arial;
    text-align: center;
    color: ${Colors.white};
    background-color: ${Header_Colors.background};
    margin-top:1vh;
    padding: 0px 30px 0px 30px;
    border-radius: 0.5vh;    
`;

export const Web_Lupa_View = styled.View`
  flex-direction: row;
  align-items: center;
  width: 30vh;
  margin: 1vh 0vh 0vh 3vh;
  border-width: 0.5vh;
  border: 0.1vh solid ${Colors.gray_70};
  border-radius: 0.5vh;
  background-color: ${Colors.white_70};
`;

export const Web_Lupa_TextInput = styled.TextInput`
    flex: 1;
    font-size:  ${(1080 * 0.002)}vh;
    border-radius: 0vh;
    padding:0.5vh;
`;

export const Web_Bar_Info = styled.ScrollView`
  display: flex;
  flex-direction: column;
  
  height: auto;
  width: auto;
  max-width: 10vh; /* Permitir que se expanda até o limite total da largura */
  min-width: 96%; 
  max-height: 40vh;
  min-height: 89.5vh;
  padding-bottom: 5vh;
  margin: 0vh 0vh 1vh 2vh;
  border-radius: 0.5vh;
  /* background-color: blue; */
  /* margin-bottom: 5vh; */
`;
export const Web_Sub_Bar_Info = styled.View`
flex:1;
flex-wrap: wrap;
justify-content: flex-end;
flex-direction: column;
align-items: stretch;
height:auto;
/* padding: 0vh 0vh 30vh 0vh; */
max-height: 180vh;
  min-height: 40vh;
/* background-color: red; */

`;
export const Web_Flag_Sub_Title = styled.View`
    flex:1;
    width:auto;
    min-height: 30vh;
    max-width: 45vh;
    height: auto;
    min-height: 5vh;
    max-height: 5vh;
    padding-left: 1vh;
    background-color: ${Pages_Colors.flag_Color};
    justify-content: center;
    align-items: start;
    border-radius: 0.5vh 0.5vh 0.5vh 0vh;
`;

export const Web_Sub_Title = styled.Text`
    font-size:  ${(1080 * 0.003)}vh;
    font-family: Arial;
    color: ${Colors.white};
`;

export const Web_Line_Items = styled.View`
    flex:1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: auto;
    height: auto;
    min-width: 100%;
    max-width: 70vh;
    min-height: 25vh;
    max-height: 90vh;
    gap: 1vh;
    padding: 1vh 3vh 1vh 3vh;
    
    /* margin: 2vh 2vh 10vh 2vh; */
`;

export const Web_Signature = styled.View`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    flex-wrap: nowrap;
    width: auto;
    min-width: 37vh;
    max-width: 30vh;
    height: auto;
    min-height: 17vh;
    max-width: 45vh;
    background-color: ${Colors.white};
    border-radius: 1vh;
    border: solid darkgray;

`;

export const Web_Signature_Div_Info = styled.View`
    flex: 1;
    width: 100%;
    border-radius: 1.2vh 1vh 0vh 0vh;
`;

export const Web_Signature_Div_Image = styled.View`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    min-width: 10vh;
    max-width: 2vh;
    min-height: 100%;
    height: 13vh;
    border-radius: 1vh 0vh 0vh 0vh;
    background-color: ${Pages_Colors.icon_pastel_image_20};
`;

export const Web_Signature_Div_Data = styled.View`
flex:1;
flex-wrap: nowrap;
flex-direction: column;
width: auto;
min-width: 100%;
height: auto;
min-height: 10%;
max-height: 3vh;
margin: 1.5vh 0.5vh 0.5vh 0.5vh;
`;
export const Web_Signatures_Div_Lists = styled.View`
flex:1;
flex-wrap:nowrap ;
flex-direction: row;
width: auto;
min-width: 100%;
height: auto;
min-height: 100%;

margin:0vh;
`;
export const Web_Signature_Div_Data_List = styled.View`
flex:1;
flex-wrap: nowrap;
flex-direction: row;
width: auto;
min-width: 100%;
height: auto;
min-height: 90%;

margin:0vh;
`;

export const Web_Signature_Div_Data_Title = styled.Text`
text-align: center;
font-size:  ${(1080 * 0.0015)}vh;
font-weight: bold;
font-family: Arial;
`;

export const Web_Signature_Div_Data_Text = styled.Text`
text-align: center;
font-size:  ${(1080 * 0.0013)}vh;
font-family: Arial;
`;

export const Web_Signature_Flag = styled.TouchableOpacity<{ $flag: number; }> `
flex:1;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: auto;
min-height: 2vh;
max-height: 3vh;
  background-color: ${(props:any) => {
    if (props.$flag === 0) return Flags_Colors.yellow;
    if (props.$flag === 1) return Flags_Colors.green;
    if (props.$flag === 2) return Flags_Colors.red;
    if (props.$flag === 3) return Flags_Colors.gray;
    return 'transparent';
  }};
border-radius: 0vh 0vh 0.7vh 0.7vh;
`;

export const Web_Signature_Flag_Title = styled.Text`
font-size:${(1080 * 0.002)}vh;
color: ${Colors.white};
text-align: center;
`;

export const Web_Pagination = styled.View`
  opacity: 0.8;
  
  position: fixed;
  flex:1;
  flex-wrap:wrap;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  align-content: center;
  /* background-color: ${Colors.gray_70}; */
  background-color: #B2B2B268;
  margin-top: 93vh;
  padding: 2vh;
  margin-bottom: 1vh;
  border-radius: 0.7vh;
  width: auto;
  min-width: 10%;
  height: 1%;

  gap:5vh;
`;

export const Web_Pagination_Items = styled.TouchableOpacity`
  flex:1;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  align-items: center;
  padding-bottom: 0.5vh;
  border-radius: 0.3vh;
  width: 2vh;
  min-width: 3vh;
  max-width: 4vh;
  height: 2vh;
  min-height: 3vh;
  max-height: 4vh;
  background-color: ${Pages_Colors.flag_Color};
`;
export const Web_Pagination_Text = styled.Text`
text-align: center;
font-size: 4vh;
`;
