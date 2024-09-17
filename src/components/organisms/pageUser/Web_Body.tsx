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
    background-color: ${Colors.New_White};
`;

export const Web_Container = styled.ScrollView`
  flex: 1;
  flex-wrap: wrap;
  width: auto;
  max-width: 100%;
  min-width: 30vh;
  height: 100%;
`;
export const Web_Sub_Container_People_Signature = styled.View`
flex: 1;
justify-content: space-evenly;
flex-direction: row;
align-items: center;

`

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
    max-width: 300vh;
    height: auto; 
    max-height: 5vh; 
    margin: 5vh 5vh 10vh 5vh;
    background-color: ${Colors.transparent};
`;

export const Web_Title = styled.Text`
    word-break: normal;
    width: 100%;
    font-size:  ${(1080 * 0.005)}vh;
    font-family: Arial;
    text-align: center;
    color: ${Colors.white};
    background-color: ${Header_Colors.background};
    margin-top:1vh;
    padding: 0vh 3vh 0vh 3vh;
    border-radius: 0.5vh;    
`;

export const Web_Bar_Info = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  height: 100%;
  width: auto;
  max-width: 10vh; /* Permitir que se expanda até o limite total da largura */
  min-width: 96%; 
  max-height: 50vh;
  min-height: 80vh;
  padding-bottom: 5vh;
  margin: 0vh 0vh 1vh 2vh;
  border-radius: 0.5vh;
  background-color: ${Colors.background};
  /* margin-bottom: 5vh; */
`;

export const Web_Flag_Sub_Title = styled.View`
    flex:1;
    flex-wrap: nowrap;
    width:auto;
    min-width: 50vh;
    max-width: 45vh;
    height: auto;
    min-height: 5vh;
    max-height: 3vh;
    
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

export const Web_Sub_Container_Children = styled.View`
flex:1;
justify-content: stretch;
flex-direction: row;
flex-wrap: wrap;
width: auto;
min-width: 100%;
max-width: 100vh;
height: auto;
min-height: 75vh ;
max-height: 50%;
/* background-color: red; */
gap:1vh;
`

export const Web_Children_Column = styled.View<{$Widths:string; $direction:string}>`
flex:1;

flex-wrap: wrap;
flex-direction: ${(props:any)=>{
  if(props.$direction == 'row') return 'row'
  else return 'column';
  }} ;;
justify-content: flex-end;
align-items: start;
width: auto;
min-width:100vh;
height:auto;
min-height: 106.5%;
max-height:10vh;
min-width:${(props:any)=>{
  return (props.$Widths)+'vh'
}};
max-width: 100vh;
/* background: blue; */

padding:0vh 0vh 0vh 0vh;

border-radius: 0.7vh 0vh 0vh 0.7vh;


`

export const Web_Childen_Data_List_View = styled.View<{$heights:string}>`
flex:1;
flex-direction:column;


background-color: ${Colors.white};
border-radius: 0.7vh;
justify-content: stretch;
width:auto;
max-width: 50vh;
min-width: 50vh;
height: auto;
max-height: 30%;
min-height: ${(props:any)=>{
  if (props.$heights != '') return (props.$heights)+'vh';
  else return '20vh'
}};
gap:8;
`

export const Web_Children_Flag_Sub_Title = styled.View`
    flex:1;
    width:auto;
    min-height: 20vh;
    max-width: 35vh;
    height: auto;
    min-height: 6vh;
    max-height: 6vh;
    /* background-color: ${Pages_Colors.flag_Color}; */
    justify-content: center;
    align-items: start;
    border-radius: 0.5vh 0.5vh 0.5vh 0vh;
`;

export const Web_Children_Sub_Title = styled.Text`
    font-size:  ${(1080 * 0.0025)}vh;
    font-family: Arial;
    font-weight: 700;
    color: ${Colors.title};
    margin-bottom: -1vh;
`;

export const Web_Children_Data_Info_View = styled.View<{$direction:string ; $wrap:string ;$hgts:string; $align:string ; $content:string ;$gap:string ; $Wdhts:string} >`
  flex:1;
  flex-wrap: ${(props:any)=>{
    if(props.$align == '') return 'nowrap'
    else return props.$align
  }};
  height: auto;
  width: auto;
  min-height: 10vh;  
  min-width: 85vh;
  max-width:100%;
  background-color: red;
  align-items: ${(props:any)=>{
    if(props.$align == '') return 'none'
    else return props.$align
  }};
  justify-content:${(props:any)=>{
    if(props.$content == '') return 'none'
    else return props.$content
  }}; ;

`
export const Web_Children_Data_Info_View_Children = styled.View<{$direction:string ; $wrap:string ;$hgts:string; $align:string ; $content:string ;$gap:string ; $Wdhts:string} >`
  flex:1;
  flex-wrap: ${(props:any)=>{
    if(props.$align == '') return 'nowrap'
    else return props.$align
  }};
  height: auto;
  width: auto;
  min-height: 10vh;  
  min-width:${(props:any)=>{
    if(props.$Wdhts == '') return '10vh'
    else return props.$Wdhts+'vh'
  }};
  max-width:100%;
  background-color: red;
  align-items: ${(props:any)=>{
    if(props.$align == '') return 'start'
    else return props.$align
  }};
  justify-content:${(props:any)=>{
    if(props.$content == '') return 'start'
    else return props.$content
  }}; ;

  flex-direction: ${(props:any)=>{
    if(props.$direction == 'row') return 'row'
    else return 'column'
  }};
  max-height:${(props:any)=>{
    if(props.$hgts !== '') return (props.$hgts)+'vh'
    else return '1vh'
  }};
  max-width:${(props:any)=>{
    if(props.$Wdhts !== '') return (props.$Wdhts)+'vh'
    else return '1vh'
  }};
  gap:${(props:any)=>{
    if(props.$gap !== '') return (props.$gap *0.1)+'vh'
    else return '0vh'
  }};

`
export const Web_Children_Footer = styled.View`
    flex:1;
    width:auto;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    max-width: 100%;
    height: auto;
    min-height: 5vh;
    max-height: 4.5vh;
    background-color: ${Pages_Colors.flag_Color};

    border-radius: 0vh 0vh 0.5vh 0.5vh;
`;
export const Web_Children_Footer_Children = styled.View`
flex:1;
justify-content: center;
align-items: center;
width: 3vh;
height: 3vh;

`
export const Web_Children_Footer_Button = styled.TouchableOpacity`
flex:1;
align-self: center;
justify-content: center;
width: 9vh;
height: auto;
min-height: 2vh;
max-height: 3.8vh;
border-radius: 0.5vh;
background-color: aliceblue;
`

export const Web_Children_Footer_Button_Text = styled.Text`
font-size: 2.5vh;
color: ${Colors.black};
text-align: center;
font-weight: 600;
` 

export const Web_Children_Page = styled.View`
    flex:1;
    width:auto;
    flex-direction: row;
    margin-top: 10vh;
    justify-content: space-around;
    align-items: center;
    min-height: 100%;
    max-width: 100%;
    height: auto;
    min-height: 5vh;
    max-height: 4.5vh;
    /* background-color: ${Pages_Colors.flag_Color}; */

    border-radius: 0vh 0vh 0.5vh 0.5vh;
`;

export const Web_Children_Page_Button = styled.TouchableOpacity`
flex:1;
/* align-self: center; */
justify-content: center;
align-items: center;
width: auto;
min-width: 3vh;
max-width: 12vh;
padding-left: 0.5vh;
padding-right: 0.5vh;
height: auto;
min-height: 4vh;
max-height: 3.8vh;
border-radius: 0.5vh;

`
export const Web_Children_Page_Button_Text = styled.Text<{$size:string}>`
font-size: ${(props:any)=>{
  if (props.$size != '') return (props.$size)+'vh'
  return '5vh'
}};
text-align: center;
font-weight: 600;
` 

export const Web_Children_Data_Info_Input = styled.TextInput<{$sizeW:string}>`
    width: ${(props:any)=>{
      if (props.$sizeW != '') return (props.$sizeW)+'vh'
      else return '40vh';
    }};
    outline-color: ${Colors.primary};
    height: auto;
    min-height: 5vh;
    font-size: 2vh;
    background-color: ${Colors.New_White};
    border-radius: 0.5vh;
    padding-left: 1vh;
   margin-top: 2vh;
  
`
export const Web_Children_Data_Info_Text = styled.Text<{$fsz:string}>`

      font-size:  2vh;
      font-family: Arial;
      font-weight: 700;
      color: ${Colors.black};
      text-align: center;
      width: 30vh;
`

export const Web_Children_Data_Info_TextInputPass = styled.TextInput<{$Widths:string}>`
border-radius: 0.7vh;
background-color: ${Colors.New_White};
width: ${(props:any)=>{ return props.$Widths+'vh'}};
height: 5vh;
font-size: 2vh;
padding-left: 1vh;
font-weight: 400;
color:${Colors.gray};
outline-color: ${Colors.primary};
`
export const Web_List_Input_ToggleContainer = styled.TouchableOpacity<{$isActive: boolean}>`
  width: 6vh;
  height: 3vh;
  border-radius: 1vh;
  background-color: ${(props:any) => (props.$isActive ? Colors.background : '#ccc')};
  justify-content: ${(props:any) => (props.$isActive ? 'flex-end' : 'flex-start')};
  padding: 0.3vh;
  align-items: center;
  flex-direction: row;
`;
export const Web_List_Input_ToggleCircle = styled.View`
  width: 1.5vh;
  height: 1.5vh;
  border-radius: 0.75vh;
  background-color: white;
`;


export const Web_List_Data_People_Signature = styled.View`
  flex:1;
  flex-direction: column;
  background-color: ${Colors.white};
  width: 35vh;
  height: 71vh;
  border-radius: 0.7vh;
  margin-right: 3vh;
`

export const Web_List_Data_People_Signature_Scroll = styled.ScrollView`
flex:1;
flex-direction: column;
gap:1vh;
padding-top: 1vh;
height:30vh;
width: 100%;
/* background-color: red; */

`
export const Web_List_Data_People_Signature_Scroll_2 = styled.ScrollView`
flex:1;
flex-direction: column;
gap:1vh;
margin-top: 0.5vh;
height:30vh;
width: 100%;
/* background-color: red; */

`
export const Web_List_Data_People_Data_View = styled.View<{$type:number}>`
flex:1;
flex-direction: row;
justify-content:space-between;
align-items: center;
width: 100%;
min-height: 5vh;
max-height: 3vh;
padding:0vh 2vh 0vh 2vh;
/* margin:1vh 0vh 1vh 0vh; */
height: 3vh;
background-color: ${(props:any)=>{
  if(props.$type == 1) return Colors.conatiner_green;
  else return Colors.background
}};

`
export const Web_List_Data_People_Data_View_2 = styled.View<{$type:number}>`
flex:1;
flex-direction: row;
justify-content:space-between;
align-items: center;
width: 100%;
min-height: 8vh;
max-height: 3vh;
padding:0vh 2vh 0vh 2vh;  
/* margin:1vh 0vh 1vh 0vh; */
height: 3vh;
background-color: ${(props:any)=>{
  if(props.$type == 1) return Colors.conatiner_green;
  else return Colors.background
}};
`


export const Web_List_Data_People_Data_Image = styled.Image`
align-items: center;
width: 10vh;
height: 10vh;
border-radius: 5vh;
background-color: ${Colors.white};
`
export const Web_List_Data_People_Data_Image_2 = styled.Image`

align-self: center;
width: auto;
min-width:70vh;
max-width: 100vh;
height: auto;

min-height: 90vh;
max-height: 8vh;
/* border-radius: 0.7vh; */

resize-mode: contain;
`
export const Web_List_Data_People_Data_Image_Signature = styled.Image`
align-items: center;
width: 35vh;
height: 15vh;
border-radius: 0.9vh;
margin:3vh;
background-color: ${Colors.gray_30};

resize-mode: contain;
`

export const Web_List_Data_People_Data_Name = styled.Text`
text-align: center;
font-size: 2vh;
color: ${Colors.black};
font-weight: 500;
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