import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleProp,
  ViewStyle
} from "react-native";

import type { Product as ProductType } from "../../data";
import { Cart } from "../Cart/Cart";

const styles = StyleSheet.create({
  product: {
    height: "90%",
    width: "90%",
    borderRadius: 4,
    backgroundColor: "#fff"
  },
  featureImages: {
    width: "100%"
  },
  productDetails: {
    flex: 1,
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: "#eaeaea"
  },
  star: {
    color: "#9ac336"
  },
  stars: {
    flexDirection: "row"
  },
  priceContainer: { alignSelf: "flex-end" },
  priceText: { fontSize: 24, fontWeight: "500" }
});

interface IProduct {
  product: ProductType;
  onClose: () => void;
}

export const Product = ({ product, onClose }: IProduct): React.ReactElement => {
  if (!product) return null;

  const imageList = product.images.flatMap((image) => image.list);

  const Rating = ({ value }: { value: number }): React.ReactElement => {
    const stars = new Array(Math.round(value)).fill(value).map((_, index) => (
      <Text key={index} accessibilityLabel="rating star" style={styles.star}>
        ★
      </Text>
    ));

    return <View style={styles.stars}>{stars}</View>;
  };

  const Price = ({
    value,
    currency
  }: {
    value: number;
    currency: string;
  }): React.ReactElement => (
    <View style={styles.priceContainer}>
      <Text style={styles.priceText}>
        {currency}
        {value}
      </Text>
    </View>
  );

  const Button = ({
    onPress,
    style,
    children
  }: {
    onPress: () => void;
    style: StyleProp<ViewStyle>;
    children: React.ReactElement;
  }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={style}>{children}</View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          backgroundColor: "#00000080"
        }
      ]}
    >
      <View style={styles.product}>
        <View style={styles.featureImages}>
          <FlatList
            initialNumToRender={2}
            horizontal={true}
            decelerationRate="fast"
            data={imageList}
            keyExtractor={(item) => item.path}
            renderItem={({ item }) => (
              <Image
                style={{ width: 150, height: 150 }}
                source={{ uri: item.path }}
                resizeMode="contain"
              />
            )}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            maxToRenderPerBatch={1}
          />
        </View>

        <ScrollView style={styles.productDetails}>
          <Text>
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </Text>
        </ScrollView>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            backgroundColor: "#eaeaea",
            borderTopColor: "lightgrey"
          }}
        >
          <Text accessibilityHint={product.name}>{product.name}</Text>
          <Rating value={product.rating} />
          <Price currency="£" value={product.price} />
          <Cart currency="£" value={product.price} />
          <Button
            style={{
              backgroundColor: "#07574c",
              height: 50,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderTopColor: "#568d4c",
              padding: 10
            }}
            onPress={onClose}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "300" }}>
              Buy now!
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};
