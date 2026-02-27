import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import counterReducer from './modules/counter'
import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'
import { shallowEqual } from 'react-redux'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer
  }
})

type IRootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
