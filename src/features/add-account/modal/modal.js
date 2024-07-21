import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    addAccount: false,
}

export const AddAccountSlice = createSlice( {
    name: 'addAccount',
    initialState,
    reducers: {
        addAccount: ( state, action ) => {
            state.addAccount = action.payload
        }
    }
} )

export const {addAccount} = AddAccountSlice.actions;

export const openModal = ( handle ) => ( dispatch ) => {
    dispatch( addAccount( handle ) );
    return handle;
}


export default AddAccountSlice.reducer