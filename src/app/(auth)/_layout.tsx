import { useState, useEffect } from "react";
import { Tabs, router } from "expo-router";
import { View, Text, Image, Platform } from "react-native";
import { SignedOut, useAuth, useUser } from "@clerk/clerk-expo";
import { Button } from "./../../components/button";
import { tokenCache } from "./../../storage/tokenCache";
import styled from "styled-components/native";
import { Header } from "../../components/organisms/header";
import { removeToken, getToken, saveToken } from '../../storage/storeToken';

function MyTabs({ onSignOut }: { onSignOut: () => void }) {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' }, 
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Home" }}
      />
      <Tabs.Screen
        name="home"
        options={{ title: "Home" }}
      />
      <Tabs.Screen
        name="management"
        options={{ title: "Gerenciamento" }}
      />
      <Tabs.Screen
        name="finalized"
        options={{ title: "Dados Finalizados" }}
      />
      <Tabs.Screen
        name="user"
        options={{ title: "Usuario" }}
        initialParams={{ onSignOut }} 
      />
      <Tabs.Screen
        name="signature"
        options={{ title: "Assinaturas" }}
      />
      <Tabs.Screen
        name="pageUser/[id]" 
        options={{ title: "Página do Usuário" }}
      />
    </Tabs>
  );
}

export default function Layout() {
  const { user } = useUser();
  const { signOut, getToken } = useAuth();
  const [token, setToken] = useState<string | null>(null);
  const [providerId, setProviderId] = useState<string | null>(null);
  const [endSection, setEndSection] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);
  const userImageUrl = user?.imageUrl || "";

  const handleSignOut = () => {
    removeToken("auth_jrf");
    signOut();
  };

  const handleButtonClick = (value: number) => {
    if (value === 5) {
      removeToken("auth_jrf");
      signOut();
    } else {
      router.push(["/home", "/signature", "/finalized", "/management", "/user"][value]);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    if (!user?.id) {
      router.replace("(public)");
    }
  }, [user, isMounted]);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await getToken({ template: "token" });
        setToken(token);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, [getToken]);

  useEffect(() => {
    if (user && user.verifiedExternalAccounts && user.verifiedExternalAccounts.length > 0) {
      setProviderId(user.verifiedExternalAccounts[0].providerUserId);
    }
  }, [user]);

  useEffect(() => {
    const sendUserData = async () => {
      if (user) {
        const userID = user.id;
        const firstName = user?.firstName;
        const Email = user?.primaryEmailAddress?.emailAddress;
        const ImageUrl = user?.imageUrl;
  
        const userData = {
          user_id: userID,
          email: Email,
          first_name: firstName || "",
          photo_url: ImageUrl || ""
        };
  
        try {
          const response = await fetch(
            Platform.OS === 'web' 
            ? 'http://localhost:8000/api/users/login/'
            : 'http://10.0.2.2:8000/api/users/login/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
            });

          const data = await response.json();
  
          if (data.token) {
            setToken(data.token);
            await saveToken('auth_jrf', data.token);
            const storedToken = await getToken('auth_jrf');
            console.log('Token recuperado:', storedToken);
          }
        } catch (error) {
          console.error('Erro ao enviar os dados do usuário:', error);
        }
      }
    };
  
    sendUserData();
  }, [user]);

  return (
    <>
      {Platform.OS === 'web' || Platform.OS === 'macos' ? (
        <Web_Body>
          <Header image={{ uri: userImageUrl }} onButtonClick={handleButtonClick} />
          <Web_Container>
            <MyTabs onSignOut={handleSignOut} /> 
          </Web_Container>
        </Web_Body>
      ) : (
        <Mob_Body>
          <Header image={{ uri: userImageUrl }} onButtonClick={handleButtonClick} /> 
          <MyTabs onSignOut={handleSignOut} /> 
        </Mob_Body>
      )}
    </>
  );
}

export const Web_Body = styled.View`
  flex: 1;
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

export const Mob_Body = styled.View`
  flex: 1;
  margin-top: 8%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Mob_Container = styled.ScrollView`
  flex: 1;
  margin-top: 3%;
  flex-direction: column;
  width: auto;
  min-width: 100px;
  max-width: 100%;
  height: auto;
  min-height: 200px;
  max-height: 100%;
`;
