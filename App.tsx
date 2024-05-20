import React from "react";
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { productList } from "./data";
import { Products } from "./screens/Products";
import { Header } from "./components/header/header";

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
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.app}>
        <ScrollView>
          <Products products={productList} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
