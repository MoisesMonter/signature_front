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
        <Tabs.Screen name="index" options={{ title: "Management" }} />
        <Tabs.Screen name="create" options={{ title: "Create" }} />
        <Tabs.Screen name="details" options={{ title: "Detalhes" }} />
      </Tabs>
    </View>
  );
}
