import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

export default function CartScreen() {
  return (
    

    <View style={styles.container}>
      <Text style={styles.title}>Meu Carrinho</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.card}>
          <Image
            source={require('./assets/bike2.png')}
            style={styles.image}
          />

          <View style={styles.info}>
            <Text style={styles.bikeName}>Bicicleta Aro 29 Houston Discovery - Cinza Metálico</Text>
            <Text style={styles.price}>$1099,00 ( à vista)</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require('./assets/bike.png')}
            style={styles.image}
          />

          <View style={styles.info}>
            <Text style={styles.bikeName}>Bicicleta Aro 29 Houston Discovery</Text>
            <Text style={styles.price}>R$ 1099,00 ( à vista)</Text>
          </View>
        </View>

        <View style={styles.summary}>
          <Text style={styles.summaryText}>Preço</Text>
          <Text style={styles.summaryValue}>R$ 2198,00</Text>
        </View>

        <View style={styles.summary}>
          <Text style={styles.summaryText}>Entrega</Text>
          <Text style={styles.summaryValue}>R$ 20,00</Text>
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalPrice}>R$ 2218,00</Text>
        </View>

        <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={() => router.push('/finalizacao')}
              >
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#1F2937',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },

  info: {
    marginLeft: 15,
    flex: 1,
  },

  bikeName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  price: {
    color: '#3B82F6',
    fontSize: 16,
    fontWeight: 'bold',
  },

  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  summaryText: {
    color: '#9CA3AF',
    fontSize: 16,
  },

  summaryValue: {
    color: '#fff',
    fontSize: 16,
  },

  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30,
  },

  totalText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  totalPrice: {
    color: '#3B82F6',
    fontSize: 24,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#2563EB',
    padding: 18,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 30,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
