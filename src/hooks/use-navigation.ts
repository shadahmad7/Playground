import { useNavigation as _useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../navigations/MainNavigator/types';

type AppNavigationProp = StackNavigationProp<MainStackParamList>;

export const useNavigation = () => {
  const navigation = _useNavigation<AppNavigationProp>();

  return {
    push: navigation.push,
    pop: navigation.pop,
    navigate: navigation.navigate,
    goBack: navigation.goBack,
    replace: navigation.replace,
    reset: navigation.reset,
  };
};
