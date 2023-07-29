import { ReactNode } from "react";
import { IIconButtonProps, Text, Pressable } from "native-base";

type ButtonWithText = IIconButtonProps & {
  text: string;
  color?: string;
  children?: ReactNode;
};

export function ButtonWithText({
  text,
  color,
  children,
  w,
  bg,
  h,
  ...rest
}: ButtonWithText) {
  return (
    <Pressable
      alignItems="center"
      h={h}
      justifyContent="center"
      flexDirection="row"
      _pressed={{ opacity: 0.6, backgroundColor: bg }}
      bg={bg}
      rounded={6}
      py={3}
      {...rest}
      w={w ? w : "full"}>
      {children && children}
      <Text ml={1} fontSize="md" fontFamily="heading" color={color ? color : "white"}>
        {text}
      </Text>
    </Pressable>
  );
}
