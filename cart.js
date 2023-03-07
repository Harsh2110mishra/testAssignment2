import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Cart(props) {

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {props.name}
      </Text>
     <Text style={styles.paragraph}>
        {props.quanity} x {props.price}
      </Text>
       <Text style={styles.paragraph}>
        {total}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
