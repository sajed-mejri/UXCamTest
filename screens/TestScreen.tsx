import React, { useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import RNUxcam from 'react-native-ux-cam';

const TestScreen = () => {
  useEffect(() => {
    RNUxcam.tagScreenName('TestScreen');
  }, []);
  const handlePress = () => {
    RNUxcam.logEvent('TestButtonClicked', 'Button Pressed');
    Alert.alert('Button Pressed');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Test Page</Text>
      <Button title="Click Me" onPress={handlePress} />
    </View>
  );
};

export default TestScreen;
