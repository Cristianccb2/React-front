import { createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        token: null,
        isAuth: false,
        email: null
    },
    reducers:{
        setLoginAction:(state, action)=>{
            return{
                ...state,
                token: action.payload.token,
                isAuth: action.payload.isAuth,
                email: action.payload.email,
                password: action.payload.password
            }
        }
    }
})

export const {setLoginAction} = authSlice.actions;
export default authSlice.reducer;