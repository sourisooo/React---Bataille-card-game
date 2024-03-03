import {configureStore} from '@reduxjs/toolkit'
import deck from './deck'

const store = configureStore({
    reducer: {
        deck: deck
    },
    devTools: true
})

export default store