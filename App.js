import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BleManager } from 'react-native-ble-plx';

export default class App extends React.Component {
  constructor() {
    super();
    this.manager = new BleManager();
  }

  render() {
    this.scanAndConnect();
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }

  scanAndConnect() {
    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        return
      }

      console.log('DEVICE ID: ' + device.id);
      // device.readRSSI(device.id).then(function(dev) {
      //   console.log('DEVICE RSSI: ' + dev.rssi);
      // });

      if (device.name === 'TI BLE Sensor Tag' || 
          device.name === 'SensorTag') {

        this.manager.stopDeviceScan();
      }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
