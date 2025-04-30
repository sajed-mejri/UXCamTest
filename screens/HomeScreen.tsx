import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import RNUxcam from 'react-native-ux-cam';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    RNUxcam.tagScreenName('HomeScreen');
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Page</Text>
      <Button title="Go to Test Page" onPress={() => navigation.navigate('Test')} />
    </View>
  );
};

export default HomeScreen;
