import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import Routes from './components/Routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <View>
      <Routes/>
      <StatusBar style="auto" translucent={true} hidden={true}/>
    </View>
  );
}