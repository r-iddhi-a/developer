import { configureStore } from '@reduxjs/toolkit';
import React from 'react'
import CoReducer from './CoReducer'

const CoStore = configureStore({
    reducer:{
        "User":CoReducer
    }
}) 

export default CoStore;