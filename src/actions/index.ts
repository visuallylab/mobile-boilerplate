import { FOO_Action } from '@projectName/constants';

export const fooAction = (foo: boolean) => ({
  type: FOO_Action,
  payload: {
    foo,
  },
});
