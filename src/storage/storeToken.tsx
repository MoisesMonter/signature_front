import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";

// Função para armazenar o token
export async function saveToken(key: string, value: string): Promise<void> {
  try {
    if (Platform.OS === "web") {
      document.cookie = `${key}=${value}; path=/; secure; samesite=strict;`;
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  } catch (error) {
    console.error("Erro ao salvar o token:", error);
  }
}

// Função para recuperar o token
export async function getToken(key: string): Promise<string | null> {
  try {
    if (Platform.OS === "web") {
      const cookies = document.cookie.split(";").reduce((acc: Record<string, string>, cookie) => {
        const [k, v] = cookie.trim().split("=");
        acc[k] = v;
        return acc;
      }, {});
      return cookies[key] || null;
    } else {
      return await SecureStore.getItemAsync(key);
    }
  } catch (error) {
    console.error("Erro ao recuperar o token:", error);
    return null;
  }
}

// Função para remover o token
export async function removeToken(key: string): Promise<void> {
  try {
    if (Platform.OS === "web") {
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
    } else {
      await SecureStore.deleteItemAsync(key);
    }
  } catch (error) {
    console.error("Erro ao remover o token:", error);
  }
}

export const storetokenCache = { getToken, saveToken, removeToken };


//await tokenCache.saveToken("authToken", "seuValorAqui"); save

//const token = await tokenCache.getToken("authToken");  get

//await tokenCache.removeToken("authToken");  delete