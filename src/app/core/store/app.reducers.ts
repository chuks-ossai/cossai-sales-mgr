import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app.state';
import { productReducer } from '../../features/modules/product/store';

export const appReducers: ActionReducerMap<IAppState, any> = {
  product: productReducer,
};
