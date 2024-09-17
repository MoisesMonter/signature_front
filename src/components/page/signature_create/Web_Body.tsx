import styled from "styled-components/native";
import { Colors, Pages_Colors, Header_Colors, Flags_Colors } from "../../colors";




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
    margin: 5vh 5vh 10vh 5vh;
    background-color: ${Colors.transparent};
`;


export const Web_Life_Time = styled.View`
  flex:1;
  flex-wrap: nowrap;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: auto;
  min-width: 80%;
  height:auto;
  min-height: 7vh;

  /* background-color: red; */
  
`;

export const Web_Life_Time_Box = styled.View<{$Position:number}>`
  z-index: 2;
  margin-right: -0.5vh;
  width: 2.5vh;
  height: 2.5vh;
  border-radius: 1.75vh;
  background-color: ${(props:any)=>{
    if(props.$Position === 0) return Colors.background;
    else return Pages_Colors.Gerenciamento_Gray;
  }};
`
export const Web_Life_Time_Line = styled.View<{$Position:number}>`
  z-index: 1;
  margin-right: -0.5vh;
  width:auto;
  min-width: 40%;
  height: 1.3vh;
  background-color: ${(props:any)=>{
    if(props.$Position === 0) return Colors.background;
    else return Pages_Colors.Gerenciamento_Gray;
  }};
`

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
  max-width: 10vh;
  min-width: 86%; 
  max-height: 40vh;
  min-height: 73.5vh;
  border-radius: 0.5vh;

`;

export const Web_List_Data_Inputs = styled.View`
flex:1;
flex-direction: column;
width: auto;
max-width: 100%;
min-width: 50vh;
height: 70%;
/* background-color: blue; */

`
export const Web_List_Input_View = styled.View`
flex:1;
justify-content: flex-start;
padding-left: 5vh;
width: 100vh;
height: 1vh;

`
export const Web_List_Input_View_Internal = styled.View<{$direction:string}>`
flex:1;
align-items: center;
flex-direction: ${(props:any)=>{
  if(props.$direction === 'row') return 'row'
  else return 'column'
}};


`


export const Web_List_Input_Title = styled.Text`
font-size: ${(1080 * 0.003)}vh;
font-weight: 400;
color: ${Colors.title}
`
export const Web_List_Input_Anotation = styled.Text`
font-size: ${(1080 * 0.002)}vh;
word-break: break-all;
font-weight: 400;
color: ${Colors.title}
`
export const Web_List_Input_TextInput = styled.TextInput<{$Widths:string}>`
border-radius: 0.7vh;
background-color: ${Colors.New_White};
width: ${(props:any)=>{ return props.$Widths+'vh'}};
height: 5vh;
font-size: ${(1080 * 0.0025)}vh;
padding-left: 1vh;
font-weight: 400;
color:${Colors.gray};
outline-color: ${Colors.primary};
`


export const Web_Sub_Bar_Info = styled.View`
flex:1;
flex-wrap: wrap;
justify-content: flex-start;
flex-direction: row;
height:auto;
width: 200vh;
max-height: 100%;
min-height: 68.4vh;
gap:1vh;

`;

export const Web_Sub_Bar_Col_Items = styled.View`
  flex:1;
  flex-wrap: wrap;
  justify-content:start;
  align-items: start;
  flex-direction: column;
  width: auto;
  /* min-width: 100%; */
  height: auto;
  min-height: 25vh;
  max-height: 40vh;
  /* background-color: black; */
`
export const Web_Sub_Bar_Data_image = styled.Image`
  flex:1;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  min-width: 10vh;
  min-height: 10vh;
  max-width: 10vh;
 border-radius: 5vh;
  justify-content: center;
  align-items: center;
`

export const Web_Flag_Sub_Title = styled.View`
    flex:1;
    width:auto;
    min-width: 5vh;
    max-width: 55vh;
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


export const Web_List_Input_ToggleContainer = styled.TouchableOpacity<{$isActive: boolean}>`
  width: 6vh;
  height: 3vh;
  border-radius: 15px;
  background-color: ${(props:any) => (props.$isActive ? Colors.background : '#ccc')};
  justify-content: ${(props:any) => (props.$isActive ? 'flex-end' : 'flex-start')};
  padding: 3px;
  align-items: center;
  flex-direction: row;
`;

export const Web_List_Input_ToggleCircle = styled.View`
  width: 1.5vh;
  height: 1.5vh;
  border-radius: 0.75vh;
  background-color: white;
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
