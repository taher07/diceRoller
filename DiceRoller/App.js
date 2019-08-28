import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { isRequired } from 'react-native/Libraries/StyleSheet/ColorPropType';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      uri: require('./src/images/dice1.png')
    };
  }

  getRandomVal = () => {
    return Math.ceil(Math.random() * 6);
  }

  gameButton = () => {
    //Alert.alert("Heyy " + this.getRandomVal()); 
    var randomNumber = this.getRandomVal();
    switch(randomNumber) {
      case 1:
        this.setState({uri: require('./src/images/dice1.png')});
        break;
      case 2:
        this.setState({uri: require('./src/images/dice2.png')});
        break;
      case 3:
        this.setState({uri: require('./src/images/dice3.png')});
        break;
      case 4:
        this.setState({uri: require('./src/images/dice4.png')});
        break;
      case 5:
        this.setState({uri: require('./src/images/dice5.png')});
        break;
      case 6:
        this.setState({uri: require('./src/images/dice6.png')});
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
        source = {this.state.uri}
        />
        <TouchableOpacity onPress={this.gameButton}>
          <Text style={styles.gameButton}>Play!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5C469',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameButton: {
    borderWidth: 2,
    marginTop: 30,
    color: "#fff",
    borderRadius: 2,
    fontSize: 20,
    letterSpacing: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#fff",
    fontWeight: "bold"
  }
});
