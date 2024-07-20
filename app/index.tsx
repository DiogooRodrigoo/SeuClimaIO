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

  const identificadorLocation = (loc: number) => {
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
                      Cidade Tiradentes, São Paulo
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>

        {/* Seção de previsão */}
        <View className="mx-4 flex justify-around flex-1 mb-2">
          {/* Localização */}
          <Text className="text-white text-center text-2xl font-bold">
            Cidade Tiradentes,
            <Text className="text-lg font-semibold text-gray-300">
              São Paulo
            </Text>
          </Text>

          {/* Imagem do Tempo */}
          <View className="flex-row justify-center">
            <Image
              className="w-52 h-52"
              source={require("@/assets/images/ensolarado.png")}
            />
          </View>

          {/* Graus Celsius */}
          <View className="space-y-2">
            <Text className="text-center font-bold text-white text-6xl ml-5">
              23&#176;
            </Text>
            <Text className="text-center  text-white text-xl tracking-widest">
              Parcialmente nublado
            </Text>
          </View>

          {/* Outras estatísticas */}
          <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center">
              <Image
                className="h-6 w-6 ilter grayscale"
                source={require("@/assets/images/vento.png")}
              />
              <Text className="text-white font-semibold text-base">22KM</Text>
            </View>

            <View className="flex-row space-x-2 items-center">
              <Image
                className="h-6 w-6 ilter grayscale"
                source={require("@/assets/images/gota.png")}
              />
              <Text className="text-white font-semibold text-base">40%</Text>
            </View>

            <View className="flex-row space-x-2 items-center">
              <Image
                className="h-6 w-6 ilter grayscale"
                source={require("@/assets/images/sol.png")}
              />
              <Text className="text-white font-semibold text-base">
                6:05 AM
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
