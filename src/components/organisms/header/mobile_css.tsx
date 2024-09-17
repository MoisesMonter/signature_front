import React from 'react';
import styled from 'styled-components/native';
import { Colors, Header_Colors, Pages_Colors } from '../../colors';


//View
export const Head = styled.View`
    flex:1;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
    max-width: 100%;
    max-height: 60;
    border-radius: 0px 4px 4px 0px;
    background-color: ${Header_Colors.background} ;
    box-shadow: 10px 5px 5px black;
    `


export const Container = styled.View`
    flex:1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin:20px;
    /* padding: 20px 0px 20px 0px; */
    /* width: 100%;
    height: 100%; */

`

export const Modal = styled.Modal`
    flex: 1;
    flex-direction: row;
    width: 50;
    height: 50;
    justify-content: center;
    align-items:center;
    background-color: aliceblue;


`
export const Modal_Container = styled.View`
    flex:1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-height: 60;
    margin-top: 10;
    background-color:${Pages_Colors.sub_container};
    opacity: 0.9;
    border-radius: 10px;
`

// export const Close_Modal = styled.TouchableWithoutFeedback
export const Sub_Container = styled.View`
    flex:1;
    flex-direction: column;
    height: 50px;
    justify-content:center;
    gap:10
`  

//text
export const Title = styled.Text`
    font-size: 32px;
    font-family:bold;
    min-width: stretch;
    color: ${Colors.title};
    background-color: red;  

    
`

export const Sub_Title = styled.Text`
    font-size: 18px;
    font-family:bold;
    min-width: stretch;
    color: ${Colors.title};
    background-color: red;  
`


//button

export const Button = styled.TouchableOpacity`
    background-color: none;
    /* background: ${Colors.background};  */
    width: 70em;
     height: 60em; 
    align-items: 'center';
`

//Image

export const Images = styled.Image`
    border-radius: 25px;
  background-color: aliceblue;
  width: 50;
    height:50;
`
export const Icon_Images = styled.Image`

  width:30;
height: 30 ;
`

