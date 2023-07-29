import { Image, View } from "native-base";

interface UserImageProps {
    source: string;
    size: "large" | "small"
}

export function UserImage({ source, size }: UserImageProps){
    return(
        <View overflow="hidden" h={size === "large" ? 12 : 10} w={size === "large" ? 12 : 10} borderWidth={3} borderColor="blue.500" rounded="full">
            <Image h="full" w="full" alt="Foto do usuário" source={{ uri: source }} />
        </View>
    )
}