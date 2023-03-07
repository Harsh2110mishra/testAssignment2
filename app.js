import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Constants from "expo-constants";

import Cart from "./cart";
import Product from "./products";

// PS: This feature of cart. needs either redux or React.context for better state management like total price, quantity. Also, in 1 hour I am only able to create this simple cart feature so if needed I can create more flexible cart feature but need more time.

export default function App() {
  const products = [
    { id: 1, name: "Product-1", price: 100, quantity: 0 },
    { id: 2, name: "Product-2", price: 200, quantity: 0 },
    { id: 3, name: "Product-3", price: 300, quantity: 0 },
  ];

  let cart = [];
  const [quantity, setQuantity] = useState(0);

  const addToCart = (product) => {
    if (cart.length === 0 || cart.find((pr) => pr !== product)) {
      cart.push(product);
    }
    setQuantity(product.quantity + 1);
  };

  const removeFromCart = (product) => {
    if (cart.length === 0 || cart.find((pr) => pr !== product)) {
      return;
    }
    setQuantity(product.quantity - 1);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone! Save to
          get a shareable url.
        </Text>
        <FlatList
          data={products}
          renderItems={(item) => {
            <Product
              name={item.name}
              price={item.price}
              quantity={quantity}
              addToCart={(item) => {
                addToCart(item);
              }}
              removeFromCart={(item) => {
                removeFromCart(item);
              }}
            />;
          }}
          keyExtractor={item.id}
        />
      </View>
      <View>
        cart.map((products)=>
        {
          <Cart
            name={products.name}
            price={products.price}
            quantity={products.quantity}
            total={products.quantity * products.price}
          />
        }
        )
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
