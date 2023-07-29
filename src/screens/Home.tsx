import { ButtonWithText } from "@components/ButtonWithText";
import { ProductItemCard } from "@components/ProductItemCard";
import { UserImage } from "@components/UserImage";
import {
  Actionsheet,
  HStack,
  Input,
  Pressable,
  Text,
  VStack,
  View,
  useDisclose,
} from "native-base";
import {
  ArrowRight,
  MagnifyingGlass,
  Plus,
  Sliders,
  Tag,
} from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <SafeAreaView style={{ paddingHorizontal: 20 }}>
      <HStack my={6} justifyContent="space-between">
        <HStack alignItems="center">
          <UserImage
            size="large"
            source="https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000"
          />
          <VStack ml={2}>
            <Text fontFamily="body" fontSize="16px">
              Boas vindas,
            </Text>
            <Text fontFamily="heading" fontSize="16px" fontWeight="bold">
              Maria!
            </Text>
          </VStack>
        </HStack>

        <ButtonWithText
          h="12"
          w="40%"
          bg="gray.700"
          text="Criar anúncio"
          color="#FFF"
          children={<Plus color="#FFF" size={20} />}
        />
      </HStack>

      <Text my={3} fontSize="16px" fontFamily="body" color="gray.500">
        Seus produtos anunciados para venda
      </Text>

      <Pressable rounded="lg" bg="#e0e1eb">
        <HStack
          alignItems="center"
          justifyContent="space-between"
          py={4}
          px={5}>
          <HStack alignItems="center">
            <Tag color="#364D9D" size={28} />
            <VStack ml={3}>
              <Text fontSize="20px" color="gray.600" fontWeight="bold">
                4
              </Text>
              <Text>anúncios ativos</Text>
            </VStack>
          </HStack>

          <HStack justifyContent="center" alignItems="center">
            <Text mr={2} color="blue.700" fontFamily="heading" fontSize="14px">
              Meus anúncios
            </Text>
            <ArrowRight color="#364D9D" size={24} />
          </HStack>
        </HStack>
      </Pressable>

      <Text mt={6} mb={3} fontSize="16px" color="gray.500">
        Compre produtos variados
      </Text>

      <HStack
        rounded="lg"
        w="full"
        py={1}
        alignItems="center"
        justifyContent="center"
        bg="#FFF">
        <Input
          fontSize="20px"
          w="73%"
          _focus={{ bg: "#FFF" }}
          cursorColor="#000000"
          borderWidth="0"
          bg="#FFF"
          placeholder="Buscar anúncio"
        />
        <TouchableOpacity>
          <MagnifyingGlass weight="bold" color="#3E3A40" size={24} />
        </TouchableOpacity>
        <Text mx={3} fontSize="24px" color="gray.400">
          |
        </Text>
        <TouchableOpacity>
          <Sliders weight="bold" color="#3E3A40" size={24} />
        </TouchableOpacity>
      </HStack>

      {/* <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
        </Actionsheet.Content>
      </Actionsheet> */}

      {/* <ProductItemCard source="https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000" /> */}
    </SafeAreaView>
  );
}
