import { useState } from 'react';

import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Text,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { ModalPassword } from '@/components/modal';


export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  function openLogin() {
    setModalVisible(true);
  }

  function closeLogin() {
    setModalVisible(false);
  }

  return (

    <LinearGradient
      colors={['#000000', '#000000', '#000C7B', '#000C7B']}
      locations={[0, 0.5, 0.5, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >

      <Image
        source={require('./assets/capa.png')}
        style={styles.logo}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={openLogin}
      >
        <Text style={styles.buttonText}>
          Bem-Vindo
        </Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
      >
        <ModalPassword
          handleClose={closeLogin}
        />
      </Modal>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
    marginBottom: 40,
  },

  button: {
    backgroundColor: '#2563EB',
    width: '50%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    elevation: 6,
    shadowColor: '#2563EB',

    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowOpacity: 0.4,
    shadowRadius: 10,

    
    
  },

  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

});