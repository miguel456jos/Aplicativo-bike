import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
  ScrollView,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { router } from 'expo-router';



export default function App() {

  function handleCart() {

    Alert.alert(
      'Carrinho',
      'Produto adicionado ao carrinho!'
    );
  }

  return (

    <LinearGradient
      colors={['#000000', '#000000', '#0A0F8F', '#0A0F8F']}
      locations={[0, 0.48, 0.48, 1]}
      start={{ x: 0.25, y: 0 }}
      end={{ x: 0.75, y: 1 }}
      style={styles.container}
    >

      <StatusBar barStyle="light-content" />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >

        {/* TÍTULO */}
        <Text style={styles.title}>
          Bicicleta Houston
        </Text>

        {/* CARD */}
        <View style={styles.cardsContainer}>
        <View style={styles.card}>

        

          <Image
            source={require('./assets/bike.png')}
            style={styles.image}
          />

          <Text style={styles.bikeName}>
            Bicicleta Aro 29 Houston Discovery
          </Text>

          <Text style={styles.description}>
            A bicicleta Houston Discovery com aro 29,
            tamanho 18 e 21 marchas é uma excelente
            escolha para ciclistas que buscam
            desempenho, conforto e estilo para
            aventuras urbanas e trilhas leves.
          </Text>

          <Text style={styles.price}>
            10x R$109,9
          </Text>
          <Text style={[styles.price, { fontSize: 14}]}>
            á vista R$1099,00
          </Text>

          {/* BOTÃO */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => router.push('/carrinho')}
          >
            <Text style={styles.buttonText}>
              Adicionar ao carrinho
            </Text>
          </TouchableOpacity>

          

        </View>

        <View style={styles.card}>

          <Image
            source={require('./assets/bike2.png')}
            style={styles.image}
          />

          <Text style={styles.bikeName}>
            Bicicleta Aro 29 Houston Discovery - Cinza Metálico
          </Text>

          <Text style={styles.description}>
           A bicicleta Houston Discovery com aro 29, tamanho 18 e 21 marchas é uma escolha excelente para ciclistas que buscam desempenho e estilo.
          </Text>

          <Text style={styles.price}>
            10x R$109,90
          </Text>
          <Text style={[styles.price, { fontSize: 14}]}>
            á vista R$1099,00
          </Text>

          {/* BOTÃO */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => router.push('/carrinho')}
          >
            <Text style={styles.buttonText}>
              Adicionar ao carrinho
            </Text>
          </TouchableOpacity>

        </View>
        </View>

      </ScrollView>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  scroll: {
    flexGrow: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },

  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 25,
    alignSelf: 'flex-start',
  },

  cardsContainer: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },


  card: {
    flex: 1,
    backgroundColor: '#111827',
    borderRadius: 20,
    padding: 15,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.35,
    shadowRadius: 15,
    elevation: 10,
  },

  image: {
    width: '100%',
    height: 240,
    resizeMode: 'contain',
  },

  bikeName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 18,
  },

  description: {
    color: '#94A3B8',
    marginTop: 12,
    fontSize: 15,
    lineHeight: 24,
  },

  price: {
    color: '#3B82F6',
    fontSize: 28,
    marginTop: 20,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#2563EB',

    marginTop: 24,

    paddingVertical: 16,

    borderRadius: 14,

    alignItems: 'center',

    shadowColor: '#2563EB',

    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowOpacity: 0.4,
    shadowRadius: 10,

    elevation: 6,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
