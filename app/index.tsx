import {
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { theme } from "@/data/constants";

import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";

export default function Index() {
  const [mostrarPesquisa, alternarPesquisa] = useState(false);
  const [localizacoes, setLocalizacoes] = useState([1, 2, 3]);

  const identificadorLocation = (loc) => {
    console.log("Localização: ", loc);
  };

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

          {localizacoes.length > 0 && mostrarPesquisa ? (
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
              {localizacoes.map((loc, index) => {
                let mostrarBorda = index + 1 != localizacoes.length;
                let classeBorda = mostrarBorda
                  ? "border-b-2 border-b-gray-400"
                  : "";
                return (
                  <TouchableOpacity
                    onPress={() => identificadorLocation(loc)}
                    key={index}
                    className={
                      "flex-row items-center border-0 p-3 px-4 mb-1 " +
                      classeBorda
                    }
                  >
                    <MapPinIcon size={20} color={"gray"} />
                    <Text className="text-black text-lg ml-2">
                      Londres, Inglaterra
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>

        {/* Seção de previsão */}
        <View></View>
      </SafeAreaView>
    </View>
  );
}
