import { Dimensions, TouchableOpacity } from "react-native";
import { FormControl, IInputProps, Input } from "native-base";
import { Eye } from "phosphor-react-native";

type CustomInputProps = IInputProps & {
  placeholder: string;
  icon?: string;
  value: string;
  isIconVisible?: boolean;
  errorMessage?: string | null;
};

const { height } = Dimensions.get("window");

export function CustomInput({
  placeholder,
  value,
  icon,
  isIconVisible = false,
  errorMessage,
  isInvalid,
  ...rest
}: CustomInputProps) {
  const inputIsInvalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={inputIsInvalid}>
      <Input
        {...rest}
        bg="white"
        px={4}
        placeholder={placeholder}
        value={value}
        rounded={6}
        placeholderTextColor="gray.400"
        borderWidth={0}
        h={(height * 0.1) / 1.5}
        fontSize="18px"
        fontFamily="body"
        _focus={{
          bg: "white",
          borderWidth: 1.5,
          borderColor: "gray.400",
        }}
        cursorColor="#5F5B62"
        rightElement={
          isIconVisible ? (
            <TouchableOpacity style={{ marginRight: 15 }}>
              <Eye color="#5F5B62" size={24} />
            </TouchableOpacity>
          ) : undefined
        }
      />

      <FormControl.ErrorMessage mb={4}>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
