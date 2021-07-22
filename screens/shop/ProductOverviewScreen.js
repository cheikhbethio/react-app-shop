import React from 'react';
import { FlatList } from "react-native";
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';


const ProductOverViewScreen = (props) => {
  const products = useSelector(state => state.product.avalaiblesProducts)
  const onViewDetails = (product) => {
    props.navigation.navigate('ProductDetails', {
      productId: product.id,
      productTitle: product.title
    });
  };
  const onAddToCart = () => {};
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={(itemData) => <ProductItem
        imageUrl={itemData.item.imageUrl}
        title={itemData.item.title}
        price={itemData.item.price}
        onViewDetails={ () => {
          onViewDetails(itemData.item);
        }}
        onAddToCart={onAddToCart}
      />}
    />
  )
}

ProductOverViewScreen.navigationOptions = {
  headerTitle: 'All Products'
};

export default ProductOverViewScreen;
