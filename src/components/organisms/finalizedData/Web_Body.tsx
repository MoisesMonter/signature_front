import styled from 'styled-components/native';

export const Web_Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
`;

export const Web_Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

export const Web_ImageGrid = styled.FlatList`
  flex: 1;
  margin:0;
  padding:0;
`;

export const Web_ImageContainer = styled.View`
  flex: 1;
  margin: 0vh;
  width: auto;
  min-width: 10vh;
  max-width: 50vh;
  background-color: 'red';
  height: auto;
  min-height: 5vh;
  max-height: 19vh;
  border-radius: 1vh;
  overflow: hidden;
  margin: 0vh;
  padding: 0vh;
  /* background-color: #ddd; */
`;

export const Web_Image = styled.ImageBackground`
  
  width: 100%; 
  height: auto; 
  max-width: 70%; 
  min-width: 10%; 

  min-height: 25vh; 
    max-height: 100vh;

  object-fit: cover; 
  align-self: center;
`;


export const Web_DownloadButton = styled.TouchableOpacity`
  padding: 1vh;
  background-color: #0B6ACF;
  border-radius: 0.5vh;
  align-items: center;
  margin-top: 0.5vh;
`;

export const Web_DownloadText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
