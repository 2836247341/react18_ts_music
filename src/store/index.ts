import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux"
import counterReducer from "./modules/counter"

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type IRootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch

export default store