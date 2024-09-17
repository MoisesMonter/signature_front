import React from 'react';
import styled from 'styled-components/native';


interface HeaderProps {
    Url_Img: string;
    title: string;
    subtitle: string;
  }

export function Web_Container_Last_Gestion(props: Home_Props){
    return(
        <Container>
            <Children>
                <Data_View>
                    {/* <Image source={{uri: props.Url_Img}}/> */}
                </Data_View>
            </Children>
        </Container>
    )
}

export function Web_Container_Last_Participation(props: Home_Props){
    return(
        <></>
    )
}
export function Web_Container_ATA_Generate(props: Home_Props){
    return(
        <></>
    )
}
export function Web_Container_Finalized_ATA(props: Home_Props){
    return(
        <></>
    )
}


//Views
const Container = styled.View`
    flex:1;
    flex-direction: column;
    justify-content: Center;
`
const Children = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
`
const Data_View = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
`

//Text

const Bold_Text = styled.Text`
    font-size:14;
    font-weight: bold;
    text-align: center;
    `
const Text = styled.Text`
    font-size:14;
    text-align: center;
`

//Image

const Image_web = styled.Image`
    border-radius: 50%;
    width: 45;
    height: 45;
    align-items: center;
`