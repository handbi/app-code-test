import React from "react";
import { View, Text } from "react-native";

interface ICart {
  currency: string;
  value: number;
}

const style = {
  container: { alignSelf: "flex-end" },
  text: { color: "grey", marginTop: 5, marginBottom: 5 }
};

export const Cart = ({ currency, value }: ICart) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>
        Total: {currency}
        {globalThis.totalCost + value}
      </Text>
    </View>
  );
};
