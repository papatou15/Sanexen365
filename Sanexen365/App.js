import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import Routes from './components/Routes';

export default function App() {
  return (
    <View>
      <Routes/>
      <StatusBar style="auto" translucent={true}/>
    </View>
  );
}