import styled from 'styled-components/native';

export const Mob_Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #f9f9f9;
`;

export const Mob_Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

export const Mob_ImageGrid = styled.FlatList`
  flex: 1;
`;

export const Mob_ImageContainer = styled.View`
  flex: 1;
  margin: 5px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ddd;
`;

export const Mob_Image = styled.Image`
  width: 100%;
  height: 120px;
  resize-mode: cover;
`;

export const Mob_DownloadButton = styled.TouchableOpacity`
  padding: 8px;
  background-color: #007bff;
  border-radius: 5px;
  align-items: center;
  margin-top: 5px;
`;

export const Mob_DownloadText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
