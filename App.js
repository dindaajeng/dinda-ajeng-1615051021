import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class Hitungvolumebalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p: 0,
      l: 0,
      t: 0,
      v: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>

      <View style={{ height: 24, backgroundColor: 'black' }} />

        <View style={{ backgroundColor: 'blue' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
            Volume Balok
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: 'blue' }}>
            <TextInput
            style={{ height: 40 }}
              placeholder="Masukkan Panjang "
              onChangeText={(p) => this.setState({ p })}
              keyboardType='numeric'
            />
            <TextInput
             style={{ height: 40 }}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi) => this.setState({ t })}
              keyboardType='numeric'
            />
            <TextInput
             style={{ height: 40 }}
              placeholder="Masukkan  lebar"
              onChangeText={(l) => this.setState({ l })}
              keyboardType='numeric'
            />

            <Button
              onPress={() => this.setState({
                volume: (this.state.l * this.state.t * this.state.p)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
              color='#78e08f'
            />
       </View>

        <View style={{ margin: 20, backgroundColor: 'red' }}>
          <Text style={{ padding: 10, fontSize: 20 }} >
              Panjang {'\t'}= {this.state.p} {'\n'}
              Tinggi  {'\t'}{'\t'}= {this.state.t} {'\n'}
              Lebar   {'\t'}{'\t'}= {this.state.l} {'\n'}
              Volume {'\t'}{'\t'}= {this.state.v}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => Hitungvolumebalok);
