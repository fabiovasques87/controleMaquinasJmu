import {Adm} from '../pages/Adm';
import {Index} from '../pages/Index';
import {useRoutes } from 'react-router-dom';
import { Plenario } from '../pages/Plenario';
import { Video } from '../pages/Video';
import { Escrivao } from '../pages/Escrivao';
import { NotFound } from '../pages/NotFound';
import { Login } from '../pages/Login';
import { SearchItem } from '../pages/searchItem';

export const MyRoutes =() =>{
    return useRoutes([
        {path: '/', element: <Index />},
        {path: '/Adm', element: <Adm />},
        {path: '/Plenario', element: <Plenario />},
        {path: '/Video', element: <Video />},
        {path: '/Escrivao', element: <Escrivao />},
        {path: '/login', element: <Login />},
        {path: '/searchItem' , element:<SearchItem />},
        {path: '*', element:<NotFound />}
    ]);
}