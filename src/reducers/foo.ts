import { FOO_Action } from '@projectName/constants';

const initialState = {
  fooState: false,
};
const foo = (state = initialState, action: any) => {
  switch (action.type) {
    case FOO_Action:
      return {
        ...state,
        fooState: action.payload.foo,
      };
    default:
      return state;
  }
};

export default foo;
