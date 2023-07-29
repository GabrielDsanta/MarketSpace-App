import { HStack, Image, Pressable } from "native-base";
import { Dimensions } from "react-native";
import { UserImage } from "./UserImage";

interface ProductItemCardProps {
    source: string;
}

const { height, width } = Dimensions.get("window")

export function ProductItemCard({ source }: ProductItemCardProps){
    return(
        <Pressable>
            <Image rounded="lg" w={width * 0.4} h={height * 0.16} alt="Foto Do Produto" source={{ uri: source }} />
            <HStack>
                <UserImage size="small" source="https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000" />
            </HStack>
        </Pressable>
    )
}