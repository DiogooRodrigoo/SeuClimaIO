import {
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { theme } from "@/data/constants";

import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useState } from "react";

export default function Index() {
  const [mostrarPesquisa, alternarPesquisa] = useState(false);
  return (
    <View className="flex-1 relative">
      <StatusBar style={"light"} />
      <Image
        blurRadius={50}
        source={require("@/assets/images/bg.jpeg")}
        className="absolute h-full w-full"
      />

      <SafeAreaView className="flex flex-1">
        {/* Seção de Pesquisa */}
        <View style={{ height: "7%" }} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{
              backgroundColor: mostrarPesquisa
                ? theme.bgBranco(0.3)
                : "transparent",
            }}
          >
            {mostrarPesquisa ? (
              <TextInput
                placeholder="Pesquisar Cidade"
                placeholderTextColor={"lightgray"}
                className="pl-6 h-10 text-white text-lg flex-1 pb-1"
              />
            ) : null}

            <TouchableOpacity
              onPress={() => alternarPesquisa(!mostrarPesquisa)}
              style={{ backgroundColor: theme.bgBranco(0.4) }}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassIcon size="25" color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View></View>
      </SafeAreaView>
    </View>
  );
}
