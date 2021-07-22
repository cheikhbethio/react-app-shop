import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native";
import Colors from '../Constantes/Colors';

const ProductItem = (props) => {
  let TouchComp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchComp = TouchableNativeFeedback;
  }

  return (
    <TouchComp onPress={props.onViewDetails}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: props.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}> {props.title} </Text>
          <Text style={styles.price}> ${props.price} </Text>
        </View>
        <View style={styles.actions}>
          <Button title="View Details" onPress={props.onViewDetails}/>
          <Button title="To cart" onPress={props.onAddToCart}/>
        </View>
      </View>
    </TouchComp>
  );
}

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: Colors.white,
    height: 300,
    margin: 20
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    height: '15%'
  },
  details: {
    alignItems: 'center',
    height: '15%'
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  }

});