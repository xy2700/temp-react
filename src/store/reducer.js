import {combineReducers} from "redux"
import infoReducer from "@/components/main/info/reducer"
import newsReducer from "@/components/main/news/reducer"

export default combineReducers({
    infoReducer,
    newsReducer
})
