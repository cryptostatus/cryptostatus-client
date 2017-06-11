import * as Api from 'features/Api';

export const getBalances = () =>
  Api.get('balances')

export const createBalance = (data) =>
  Api.post('balances', data)
