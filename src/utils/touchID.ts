import TouchID, {
  TouchIDError,
  AuthenticateConfig,
} from 'react-native-touch-id';

export type BiometryType = boolean | string | TouchIDError;
export type TouchIDError = TouchIDError;

const defaultConfig = {
  fallbackTitle: '', // no effect, ignore
  fallbackLabel: '', // use this
  unifiedErrors: true,
};

export const checkTouchSupport = async () => {
  try {
    // @ts-ignore
    return await TouchID.isSupported({ unifiedErrors: true });
  } catch (err) {
    return false;
  }
};

export const authWithTouchID = async (
  msg: string = '',
  config: AuthenticateConfig = defaultConfig,
) => TouchID.authenticate(msg, config);
