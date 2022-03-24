import 'react-native-gesture-handler';
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTab from './src/navigation/NavigationTab';
import NavigationDrawer from './src/navigation/NavigationDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationDrawer />
      {/* <NavigationTab /> */}
      {/* <NavigationStack /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
