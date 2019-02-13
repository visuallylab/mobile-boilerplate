import { all } from 'redux-saga/effects';

import FooSaga from './foo';

export default function* sagas() {
  yield all([FooSaga]);
}
