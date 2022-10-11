import {myStyles} from './Styles';
import { StatusBar } from 'expo-status-bar';
import { ImagePickerIOS, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage  } from './HomePage';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { MyCamera } from './MyCamera';
import { WebVi } from './WebView';
import { ImgPicker } from './ImgPicker';
import { Location } from './Location';


const stack= createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={myStyles.container}>
      <stack.Navigator>
        <stack.Screen name="Home" component={HomePage}/>
        <stack.Screen name="Page1" component={Page1}/>
        <stack.Screen name="Page2" component={Page2}/>
        <stack.Screen name="MyCamera" component={MyCamera}/>
        <stack.Screen name="WebVi" component={WebVi} />
        <stack.Screen name="ImgPicker" component={ImgPicker}/>
        <stack.Screen name="Location" component={Location} />


      </stack.Navigator>
    </NavigationContainer>
  );
};
