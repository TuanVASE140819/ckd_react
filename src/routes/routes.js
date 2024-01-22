import Review from '../pages/Review';
import Home from '../pages/Home';
 

const publicRoutes = [

    {path: '/', component: Home},
    {path: '/review', component: Review, },
    {path: '/video', component: Review, layout:null }

];

const privateRoutes = [
    
];

export { privateRoutes, publicRoutes }