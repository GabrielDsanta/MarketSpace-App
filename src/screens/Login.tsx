import { Center, Text, VStack } from "native-base";
import { CustomInput } from "@components/CustomInput";
import { useState } from "react";
import { ButtonWithText } from "@components/ButtonWithText";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native"

import MarketSpaceIcon from "@assets/MarketSpaceIcon.svg";
import { AuthNavigationRoutesProps } from "@routes/auth.routes";

const { height } = Dimensions.get("window")

export function Login() {
  const navigation = useNavigation<AuthNavigationRoutesProps>()

  const [teste, setTeste] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <VStack roundedBottom={28} flex={1} bg="gray.200">
        <Center mt={2}>
          <MarketSpaceIcon height={120} width={150} />
          <Text
            fontFamily={"mono"}
            fontSize="48px"
            fontWeight="extrabold"
            color="gray.700">
            marketspace
          </Text>

          <Text
            mt={-2}
            fontFamily={"mono"}
            fontSize="20px"
            fontWeight="light"
            color="gray.500">
            Seu espaço de compra e venda
          </Text>
        </Center>

        <Center px={10} mt={16}>
          <Text
            fontFamily={"body"}
            fontSize="20px"
            fontWeight="light"
            color="gray.500">
            Acesse sua conta
          </Text>

          <CustomInput
            mt={4}
            placeholder="Placeholder"
            value={teste}
          />
          <CustomInput
            isIconVisible
            mt={4}
            placeholder="Placeholder"
            value={teste}
          />

          <ButtonWithText bg="blue.500" mt={8} text="Entrar" />
        </Center>
      </VStack>

      <Center px={10} h={height * 0.22} bg="white">
        <Text color="gray.600" fontSize="md" fontFamily="body">Ainda não tem acesso?</Text>
        <ButtonWithText onPress={() => navigation.navigate("signUp")} color="gray.600" bg="gray.300" mt={4} text="Criar uma conta" />
      </Center>
    </SafeAreaView>
  );
}
