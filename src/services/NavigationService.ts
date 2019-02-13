import { NavigationActions } from 'react-navigation';

let _navigator: any;

const setNavigator = (navigatorRef: any) => {
  _navigator = navigatorRef;
};

const navigate = (routeName: string, params: any) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
};

export default {
  navigate,
  setNavigator,
};
