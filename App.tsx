import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNUxcam from 'react-native-ux-cam';

import HomeScreen from './screens/HomeScreen';
import TestScreen from './screens/TestScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    RNUxcam.optIntoSchematicRecordings();
    RNUxcam.startWithConfiguration({
      userAppKey: '96w9n35tuerjjkq',
      enableAutomaticScreenNameTagging: false,
      // @ts-ignore
      enableImprovedScreenCapture: true,
    });
    RNUxcam.setUserIdentity('sajed12');
    console.log('✅ UXCam started as sajed12');
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
