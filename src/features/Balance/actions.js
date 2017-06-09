import * as Api from 'features/Api';

export const getBalances = () =>
  Api.get('balances')
