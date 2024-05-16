import MyOrderList from '@/views/member/MyOrderList';
import MyInfo from '@/views/member/MyInfo';
import MyFavorite from '@/views/member/MyFavorite';
import MyReview from '@/views/member/MyReview';
import UpdateMyInfoComponent from '@/views/member/UpdateMyInfo';

export const memberRoutes = [
    {
        path: '/my-orders',
        name: 'MyOrderList',
        component: MyOrderList,
    },
    {
        path: '/my-info',
        name: 'MyInfo',
        component: MyInfo,
    },
    {
        path: '/my-favorite',
        name: 'MyFavorite',
        component: MyFavorite,
    },
    {
        path: '/my-review',
        name: 'MyReview',
        component: MyReview,
    },
    {
        path:'/update/myinfo' , 
        name: 'UpdateMyInfo' , 
        component: UpdateMyInfoComponent
    },
]