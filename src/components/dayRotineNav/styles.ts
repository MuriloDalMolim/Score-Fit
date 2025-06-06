import { StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const style = StyleSheet.create({
  container: {
    backgroundColor: themes.colors.darkblue,
    paddingVertical: 15,
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  daySelection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  dayText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 15,
  },
});