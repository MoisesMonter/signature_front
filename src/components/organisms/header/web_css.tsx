import React from 'react';
import styled from 'styled-components/native';
import { Colors, Header_Colors } from '../../colors';

import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
//View
export const Head = styled.View<{$width:number}>`
    flex:1;
    display: block;
    flex-direction: row;
    justify-content: stretch;
    
    align-items: center;
    width: 1vh;
    max-width: 11vh;
    height: 100%;
    border-radius: 0vh 0.5vh 0.5vh 0vh;
    background-color: ${Header_Colors.background} ;
  position: relative;
    `

export const Container = styled.View`
    flex:1;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1vh 0vh 1vh 0vh;
    width: 100%;
    height: 100%;
    background-color: ${Colors.transparent} ;
    /* background-color: red; */
`
export const Sub_Container = styled.View<{ $width: number }>`
    flex:1;
    flex-direction: column;
    height: 50px;
    justify-content:center;

    gap: 3vh;
`  

//text
export const Title = styled.Text`
    font-size: 32;
    font-family:bold;
    min-width: stretch;
    color: ${Colors.title};


    
`

export const Sub_Title = styled.Text`
    font-size: 18;
    font-family:bold;
    min-width: stretch;
    color: ${Colors.title};
`


//button

export const Button = styled.TouchableOpacity`
    background-color: none;
`

//Image

export const Images = styled.Image<{ $width: number }>`
  border-radius: 50%;
  background-color: aliceblue;
  width: 8vh;
    height: 8vh;
`
export const Icon_Images = styled.Image<{$widths: number; $height: number}>`
  width: 5vh;
    height: 5vh;
  resize-mode: contain;
`;



