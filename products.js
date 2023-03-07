import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity} from 'react-native';

export default function Product(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {props.name}
      </Text>
       <Text style={styles.paragraph}>
        {props.price}
      </Text>
       <TouchableOpacity onPress={props.removeFromCart}><Text> Remove from cart </Text></TouchableOpacity>
          <Text style={styles.paragraph}>
        {props.quanity}
      </Text>
        <TouchableOpacity onPress={props.addToCart}><Text> Add to Cart </Text></TouchableOpacity>
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
});
