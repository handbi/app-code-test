import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";

import type { Product as IProduct } from "../../data";

const styles = StyleSheet.create({
  products: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  productContainer: {
    height: 200,
    width: "50%",
    padding: 5,
  },
  product: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    borderRadius: 4,
  },
  productImage: {
    width: "100%",
    height: "70%",
  },
  productText: {
    padding: 5,
  },
});

interface IProducts {
  products: IProduct[];
}

export const Products = ({ products }: IProducts) => {
  const Product = (product: IProduct) => {
    return (
      <TouchableHighlight onPress={() => {}} style={styles.productContainer}>
        <View style={styles.product}>
          <Image
            accessibilityLabel="Product"
            source={{ uri: product.images[0].list[2].path }}
            resizeMode="contain"
            style={styles.productImage}
          />
          <Text style={styles.productText}>{product.name}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return <View style={styles.products}>{products.map(Product)}</View>;
};
