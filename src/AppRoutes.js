import React from 'react';
import {createBrowserRouter} from 'react-router-dom';

/* importar las vistas */
import HomeScreen from './pages/home'
import LoginScreen from './pages/login'
import PedidosScreen from './pages/pedidos'
import ProductosScreen from './pages/productos'
import CategoriasScreen from './pages/categorias'
import ClientesScreen from './pages/clientes';

/* importar layouts */
import MainLayout from './layouts/MainLayout'

  const router = createBrowserRouter([
    {path: '/login',
      element: <LoginScreen/>
    },
    {
      path:'/',
      element: <MainLayout/>,
      children: [
        {path: 'dashboard', element: <HomeScreen/>},
        {path: 'pedidos', element: <PedidosScreen/>},
        {path: 'productos', element: <ProductosScreen/>},
        {path: 'categorias', element: <CategoriasScreen/>},
        {path: 'clientes', element: <ClientesScreen/>}
      ]
    }

  ])


export default router;