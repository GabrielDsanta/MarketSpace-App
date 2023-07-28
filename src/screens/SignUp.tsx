import { Center, Text, VStack, Pressable, View, ScrollView } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { PencilSimpleLine, User } from "phosphor-react-native";
import { CustomInput } from "@components/CustomInput";
import { ButtonWithText } from "@components/ButtonWithText";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native"
import { AuthNavigationRoutesProps } from "@routes/auth.routes";

import MarketSpaceIcon from "@assets/MarketSpaceIcon.svg";

import * as yup from "yup";

type FormDataProps = {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirm: string;
};

const ValidationSchemaForm = yup.object({
  name: yup.string().required("Informe o nome"),
  phone: yup.string().required("Informe o telefone"),
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
  password: yup
    .string()
    .required("Informe a senha")
    .min(6, "A senha deve possuir no mínimo 6 dígitos"),
  password_confirm: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password")], "A confirmação da senha não confere"),
});

export function SignUp() {
  const navigation = useNavigation<AuthNavigationRoutesProps>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(ValidationSchemaForm),
  });

  function handleSubmitForm({
    email,
    name,
    password,
    password_confirm,
    phone,
  }: FormDataProps) {
    console.log(name);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} flex={1}>
        <VStack roundedBottom={28} flex={1} bg="gray.200">
          <Center px={10} mt={2}>
            <MarketSpaceIcon width={80} />

            <Text
              fontFamily={"mono"}
              fontSize="24px"
              fontWeight="extrabold"
              color="gray.700">
              Boas vindas !
            </Text>

            <Text
              fontFamily={"body"}
              fontSize="16px"
              w="100%"
              mt={1}
              textAlign="center"
              color="gray.500">
              Crie sua conta e use o espaço para comprar itens variados e vender
              seus produtos
            </Text>

            <Pressable
              mt={8}
              p={6}
              mb={4}
              borderWidth={3}
              alignItems="center"
              justifyContent="center"
              borderColor="blue.500"
              rounded="full"
              bg="gray.300">
              <User weight="bold" size={42} color="#a7a7a7" />
              <View
                h={45}
                w={45}
                alignItems="center"
                position="absolute"
                justifyContent="center"
                bg="blue.500"
                left={60}
                top={12}
                rounded="full">
                <PencilSimpleLine color="#FFF" size={20} />
              </View>
            </Pressable>

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  placeholder="Nome"
                  mb={errors.name?.message ? 0 : 4}
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  placeholder="E-mail"
                  value={value}
                  mb={errors.email?.message ? 0 : 4}
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  placeholder="Telefone"
                  mb={errors.phone?.message ? 0 : 4}
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.phone?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  mb={errors.password?.message ? 0 : 4}
                  isIconVisible
                  placeholder="Senha"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password_confirm"
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  mb={errors.password_confirm?.message ? 0 : 4}
                  isIconVisible
                  placeholder="Confirmar senha"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.password_confirm?.message}
                />
              )}
            />

            <ButtonWithText
              onPress={handleSubmit(handleSubmitForm)}
              text="Criar"
              bg="gray.700"
            />

            <Text fontFamily="body" fontSize="16px" color="gray.600" mb={3} mt={8}>Já tem uma conta?</Text>

            <ButtonWithText 
              text="Ir para o login"
              onPress={() => navigation.navigate("login")}
              bg="gray.300"
              color="gray.600"
              mb={4}
            />
          </Center>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
