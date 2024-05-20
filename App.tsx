import React from "react";
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";

import type { Product as IProduct } from "./data";

import { productList } from "./data";
import { Products } from "./components/Products/Products";
import { Product } from "./components/Product/Product";

const logoUri =
  "data:image/png;base64,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";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#07574c",
  },
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    backgroundColor: "#07574c",
    width: "100%",
    height: "100%",
  },
  logo: {
    height: 80,
  },
});

globalThis.totalCost = 0;

export default function App() {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [currentProduct, setCurrentProduct] = React.useState<IProduct | null>(
    null
  );

  React.useEffect(() => {
    async function FetchProducts() {
      const response = await Promise.resolve(productList);
      setProducts(response);
    }

    FetchProducts();
  });

  const handleProductClick = React.useCallback(
    (productId: IProduct) => {
      setCurrentProduct(productId);
    },
    [setCurrentProduct]
  );

  const handleCloseProduct = () => {
    globalThis.totalCost += currentProduct?.price;

    setCurrentProduct(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.app}>
        <View>
          <Image
            accessibilityLabel="React logo"
            source={{ uri: logoUri }}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        <ScrollView>
          <Products
            products={products}
            onProductSelected={handleProductClick}
          />
        </ScrollView>

        <Product product={currentProduct} onClose={handleCloseProduct} />
      </View>
    </SafeAreaView>
  );
}
