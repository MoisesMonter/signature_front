import { Tabs } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,

          tabBarStyle: { display: 'none' }, 

        }}
      >
        <Tabs.Screen name="index" options={{ title: "Dados Finalizados" }} />
        <Tabs.Screen name="data" options={{ title: "Sobre estes mesmos" }} />
      </Tabs>
    </View>
  );
}
