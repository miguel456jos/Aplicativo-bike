import { View, Button, Text } from "react-native";
import { useAuth } from "../contexts/authContext";

export default function SignIn() {
  const { signIn } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Tela de Login</Text>

      <Button
        title="Entrar"
        onPress={signIn}
      />
    </View>
  );
}