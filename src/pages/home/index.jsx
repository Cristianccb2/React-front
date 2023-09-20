import React from 'react';
import { useSelector } from 'react-redux';

const HomeScreen = () => {

    const authData = useSelector(state => state.authSlice)

        return(
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col text-center'>
                        <br />
                        El usuario autenticado es: {authData && authData.email}
                        <br />
                        token: {authData && authData.token}
                        <br />
                        isAuth: {authData && (authData.isAuth ? 'Usuario autenticado' : 'Usuario =! autenticado')}
                        </div>
                    </div>
                </div>
            </>
        )
}
export default HomeScreen; 