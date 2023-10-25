import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/Home/HomePage';
import { CharactersPage } from '../pages/Characters/CharactersPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,        
    },
    {
        path: '/home',
        element: <HomePage />
    },
    {
        path: '/character',
        element: <CharactersPage />
    }
]);