import { Button, IIconButtonProps, Text } from "native-base";

type ButtonWithText = IIconButtonProps & {
    text: string;
    color?: string;
}

export function ButtonWithText({ text, color, ...rest }: ButtonWithText){
    return(
        <Button rounded={6} py={3} {...rest} w="full">
            <Text fontSize="md" fontFamily="heading" color={color ? color : "white"}>{text}</Text>
        </Button>
    )
}