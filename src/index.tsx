import { NativeModules } from 'react-native';

type HideUnderStatusBarType = {
  multiply(a: number, b: number): Promise<number>;
};

const { HideUnderStatusBar } = NativeModules;

export default HideUnderStatusBar as HideUnderStatusBarType;
