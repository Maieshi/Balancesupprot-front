import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    open: false,
}

export const MenuSlice = createSlice( {
    name: 'menu',
    initialState,
    reducers: {
        openMenu: ( state, action ) => {
            state.open = action.payload
        }
    }
} )

export const {openMenu} = MenuSlice.actions;

export const openModal = ( handle ) => ( dispatch ) => {
    dispatch( openMenu( handle ) );
}


export default MenuSlice.reducer