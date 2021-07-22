import React from 'react'
import { ScrollView, StyleSheet, Text, View, Button, Image } from 'react-native'
import { useSelector } from 'react-redux';
import Colors from '../../Constantes/Colors'


const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam('productId');
  const product = useSelector(state => state.product.avalaiblesProducts.find(prod => prod.id === productId));

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: product.imageUrl }} />
      <View style={styles.actions}>
        <Button color={Colors.primary} title="Add to cart" />
      </View>
      <Text style={styles.price}>${ product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  )
}


ProductDetailScreen.navigationOptions = (data) => {
  return {
    headerTitle: data.navigation.getParam('productTitle')
  }
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  actions: {
    marginVertical: 20,
    alignItems: 'center'
  },
  image: {width: '100%', height: 300},
  price: { fontSize: 20, color: '#888', textAlign: 'center', marginVertical: 20},
  description: {fontSize: 14, textAlign: 'center', marginHorizontal: 20}
})
