import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Platform,
} from "react-native";

import { useState } from "react";
import { router } from 'expo-router';

export function ModalPassword({ handleClose }) {

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function mostrarAlerta(titulo, mensagem) {

    // WEB
    if (Platform.OS === "web") {
      window.alert(`${titulo}\n\n${mensagem}`);
      return;
    }

    // MOBILE
    Alert.alert(titulo, mensagem);
  }

  function handleLogin() {

    const usuarioCorreto = "admin";
    const senhaCorreta = "12345";

    // CAMPOS VAZIOS
    if (
      login.trim() === "" ||
      senha.trim() === ""
    ) {

      mostrarAlerta(
        "Atenção",
        "Preencha todos os campos!"
      );

      return;
    }

    // LOGIN
    if (
      login.trim().toLowerCase() === usuarioCorreto &&
      senha.trim() === senhaCorreta
    ) {

      

      // LIMPA CAMPOS
      setLogin("");
      setSenha("");

      // FECHA MODAL
      handleClose();
      router.push('/explore');

    } else {

      mostrarAlerta(
        "Erro",
        "Login ou senha incorretos!"
      );
    }
  }

  return (

    <View style={styles.container}>

      <View style={styles.content}>

        <Text style={styles.title}>
          Fazer Login
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu login"
          placeholderTextColor="#999"
          value={login}
          onChangeText={setLogin}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <View style={styles.buttonArea}>

          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={handleClose}
          >

            <Text style={styles.buttonCancelText}>
              Voltar
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={handleLogin}
          >

            <Text style={styles.buttonLoginText}>
              Entrar
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  content: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 25,
  },

  input: {
    width: "100%",
    height: 55,
    backgroundColor: "#F8F8F8",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  buttonArea: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  buttonCancel: {
    flex: 1,
    height: 50,
    backgroundColor: "#E5E5E5",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  buttonLogin: {
    flex: 1,
    height: 50,
    backgroundColor: "#392DE9",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  buttonCancelText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },

  buttonLoginText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

});
