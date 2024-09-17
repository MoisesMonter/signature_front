import styled from "styled-components/native";
import { Colors, Pages_Colors, Header_Colors, Flags_Colors } from "../../colors";




export const Web_Body = styled.View`
     flex:1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-end;
    width: auto;
    height: auto;
`;

export const Web_Container = styled.View`
  flex: 1;
  flex-wrap: nowrap;
  width: auto;
  max-width: 100%;
  min-width: 30vh;
  height: 100%;
`;

export const Web_Sub_Container = styled.View`
    flex-direction: column;


    flex-wrap: nowrap;
    align-items: start;
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
    margin: 5vh 5vh 10vh 5vh;
    background-color: ${Colors.transparent};
`;

export const Web_Title = styled.Text`
    word-break: normal;
    width: 80vh;
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
  margin: 1vh 0px 0px 1vh;
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

export const Web_Bar_Info = styled.View`
  display: flex;
  flex-direction: column;

  height: auto;
  width: auto;
  max-width: 70vh; /* Permitir que se expanda até o limite total da largura */
  min-width: 42%; 
  max-height: 40vh;
  min-height: 53.5vh;
  padding-bottom: 5vh;
  margin: 0vh 0vh 1vh 2vh;
  border-radius: 0.5vh;
  /* background-color: blue; */
  /* margin-bottom: 5vh; */
`;

export const Web_Bar_Info_Advanced = styled.View`
  display: flex;
  flex-direction: column;
  
  height: auto;
  width: auto;
  min-width: 42%; 
  max-width: 70vh;
  max-height: 40vh;
  min-height: 20%;
  padding-bottom: 5vh;
  margin: 0vh 0vh 1vh 2vh;
  border-radius: 0.5vh;
  /* background-color: blue; */
  /* margin-bottom: 5vh; */
`;
export const Web_Sub_Bar_Info = styled.View`
flex:1;
flex-wrap: wrap;
justify-content: flex-start;
flex-direction: column;
align-items: stretch;
height:auto;
/* padding: 0vh 0vh 30vh 0vh; */
max-height: 100%;
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
  
  /* position: fixed; */
  flex:1;
  flex-wrap:wrap;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  align-content: center;
  /* background-color: ${Colors.gray_70}; */
  background-color: #B2B2B268;
  margin-top: -5.5vh;
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
export const Web_Sub_Bar_Data_Titles_View = styled.View`
 flex:1;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 width: auto;
 min-width: 100%;
 max-width: 30vh;
 height: auto;
 min-height: 3vh;
 max-height: 4vh;
 background-color: ${Colors.New_White};
 margin: 1vh 0vh 1vh 0vh;
 border-radius: 0.7vh 0.7vh 0vh 0vh;
`;
export const Web_Sub_Bar_Data_Titles_Children = styled.View`
 flex:1;
 display: flex;
 flex-wrap: nowrap;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 width: auto;
 min-width: 10vh;
 max-width: 100%;
 margin:0.1vh;
 height: auto;
 min-height: 3vh;
 max-height: 4vh;

`;

export const Web_Sub_Bar_Data_Titles_Text = styled.Text`
font-size: 2vh;
font-weight: 700;
`;

export const Web_Sub_Bar_Data_Titles_Text_2 = styled.Text`
font-size: 2vh;
font-weight: 400;
`;
export const Web_List_Items = styled.View`
    flex:1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: auto;
    height: auto;
    min-width: 100%;
    max-width: 50vh;
    min-height: 3vh;
    max-height: 3vh;

`;
export const Web_Data_List_Info = styled.View`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    width: auto;
    min-width: 100%;
    max-width: 30vh;
    height: auto;
    min-height: 17vh;
    max-width: 45vh;
    background-color: ${Colors.white};
    /* border-radius: 1vh; */
    /* border: solid darkgray; */

`;
export const Web_Data_List_Info_Data = styled.View`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    width: auto;
    min-width: 100%;
    max-width: 30vh;
    height: auto;
    min-height: 8vh;
    max-height: 8vh;
    margin-bottom: 0.3vh;
    /* margin-bottom: 0.1vh; */
`;

export const Web_Sub_Bar_Data_Data_View = styled.View<{ $state: number; }> `
 flex:1;
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 width: auto;
 min-width: 100%;
 max-width: 3vh;
 height: auto;
 min-height: 8vh;
 max-height: 8vh;
 background-color: ${(props: any) => {
    if (props.$state == 0) { return Flags_Colors.gray; }
    if (props.$state == 1) { return Flags_Colors.green; }
    if (props.$state == 2) { return Pages_Colors.Gerenciamento_Gray }
    else return Flags_Colors.red
  } };

`;



export const Web_Children_Column = styled.View`
flex: 1;

align-items:center;
margin-top: 1.5vh;
margin-left: 10vh;
margin-right: 10vh;
width: auto;
height: auto;
min-height: 10vh;
max-height: 52vh;
min-width: 10vh;
max-width: 100%;
/* background-color: red; */


`

export const Web_Children_Input_View = styled.View`
  flex: 1;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  margin: 0;
`

export const Web_Children_Input_Label = styled.Text`
font-size: 2.1vh;
font-weight: 700;

`
export const Web_Children_Input = styled.TextInput`
font-size: 1.8vh;
width: 50vh;
height: 5vh;
border-radius: 0.7vh;
padding-left: 0.5vh;
background-color: ${Colors.gray_30};
`
export const Web_Children_Button_Exit_View = styled.View`
flex: 1;
justify-content: flex-start;
align-items: end;
width: 50vh;
height: auto;

padding-top: -2vh;
`
export const Web_Children_Button_Delete_View = styled.View`
flex: 1;
flex-direction: row;
justify-content: space-between;
align-items: center;

width: 52vh;
height: auto;
gap:1vh;
padding-top: -2vh;
border-radius: 1vh;
`
export  const Web_Children_Button = styled.TouchableOpacity<{$type:string}>`
flex: 1;
justify-content: center;
align-items: center;
padding: 1vh;
width: auto;
min-width: 10vh;
max-width: 10vh;
height: auto;
min-height: 5vh;
max-height: 5vh;
border-radius: 0.7vh;
background-color: ${(props:any)=>{
  if (props.$type == 'exit') { return Flags_Colors.red }
  if (props.$type == 'save') { return Flags_Colors.green }
  else return Colors.black
}};

`

export const Web_Children_Data_Image_Signature = styled.Image`
align-items: center;
width: 17.5vh;
height: 10vh;
border-radius: 0.9vh;
margin:3vh;
background-color: ${Colors.gray_30};

resize-mode: contain;
`
