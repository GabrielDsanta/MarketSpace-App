import { Center, ScrollView, Text, VStack } from "native-base";
import { CustomInput } from "@components/CustomInput";
import { ButtonWithText } from "@components/ButtonWithText";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";

import MarketSpaceIcon from "@assets/MarketSpaceIcon.svg";
import * as yup from "yup";

const { height } = Dimensions.get("window");

type FormDataProps = {
  email: string;
  password: string;
};

const ValidationSchemaForm = yup.object({
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve possuir no mínimo 6 dígitos"),
});

export function Login() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(ValidationSchemaForm),
  });

  function handleSubmitForm({ email, password }: FormDataProps) {
    console.log(email);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <VStack pb={6} roundedBottom={28} flex={1} bg="gray.200">
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
              color="gray.500"
              mb={4}>
              Acesse sua conta
            </Text>

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  placeholder="E-mail"
                  mb={errors.email?.message ? 0 : 4}
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  placeholder="Senha"
                  mb={errors.password?.message ? 0 : 4}
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <ButtonWithText
              onPress={handleSubmit(handleSubmitForm)}
              bg="blue.500"
              mt={8}
              text="Entrar"
            />
          </Center>
        </VStack>

        <Center px={10} h={height * 0.22} bg="white">
          <Text color="gray.600" fontSize="md" fontFamily="body">
            Ainda não tem acesso?
          </Text>
          <ButtonWithText
            onPress={() => navigation.navigate("signUp")}
            color="gray.600"
            bg="gray.300"
            mt={4}
            text="Criar uma conta"
          />
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
}
