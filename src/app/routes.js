import HomeComponent from 'src/pages/home/home';
import VideosComponent from 'src/pages/videos/videos';

export default [
    {
        name: 'home',
        path: '/',
        component: HomeComponent,
    },
    {
        name: 'videos',
        path: '/videos',
        component: VideosComponent,
    },
];
