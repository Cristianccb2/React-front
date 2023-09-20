import React from 'react';
import HeaderComponent from '../components/ui/header';
import FooterComponent from '../components/ui/footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return(
        <>
        {/* Header */}
        <HeaderComponent/>
        {/* Body */}
        <Outlet/>
        {/* Footer */}
        <FooterComponent/>
        </>
    )
}
export default MainLayout;