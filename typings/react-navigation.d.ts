import 'react-navigation';
import {
  FlatList as NativeFlatList,
  SectionList as NativeSectionList,
} from 'react-native';

declare module 'react-navigation' {
  class SectionList extends NativeSectionList {}
  class FlatList extends NativeFlatList<any> {}
}
