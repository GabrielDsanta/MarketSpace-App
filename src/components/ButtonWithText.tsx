import { Button, IIconButtonProps, Text } from "native-base";

type ButtonWithText = IIconButtonProps & {
    text: string;
    color?: string;
}

export function ButtonWithText({ text, color, bg, ...rest }: ButtonWithText){
    return(
        <Button _pressed={{ opacity: 0.6, backgroundColor: bg }} bg={bg} rounded={6} py={3} {...rest} w="full">
            <Text fontSize="md" fontFamily="heading" color={color ? color : "white"}>{text}</Text>
        </Button>
    )
}