import NavigationTab from './src/navigation/NavigationTab';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTab />
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
