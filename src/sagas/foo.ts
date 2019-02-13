import { AnyAction } from 'redux';
import { Alert } from 'react-native';
import { call, put, fork, takeLatest } from 'redux-saga/effects';

import { FOO_Action } from '../constants';

function* fooSaga(action: AnyAction) {
  try {
    yield call(/*function*/);
    yield put(/*action*/);
  } catch (err) {
    Alert.alert('failed');
  }
}

function* watchAuth() {
  yield takeLatest(FOO_Action, fooSaga);
}

export default fork(watchAuth);
