import {createRouter,createWebHistory} from 'vue-router';
import HomeComponent from '@/components/StoreCategories.vue';
import LoginComponent from '@/components/Login_User.vue';
import StoreDetailComponent from '@/components/StoreDetail.vue'; 
import ReviewList from '@/components/ReviewList.vue';
import MenuList from '@/components/MenuList.vue';
import SignUpUserComponent from '@/components/Signup_User.vue';
import SignUpOwnerComponent from '@/components/Signup_Owner.vue';
import FindEmailComponent from '@/components/FindEmail.vue';

// export default인 경우에는 {} 필요없고, 여러개 요소가 있을 경우 {} 필요
import { memberRoutes } from "./memberRouter.js";
import { orderRoutes } from "./orderRouter.js";
import { menuRoutes } from "./menuRouter.js";
import { storeRoutes } from "./storeRouter.js";

const routes = [
  {path:'/' , name: 'HOME' , component: HomeComponent},
  {path:'/login' , name: 'Login' , component: LoginComponent},
  {path:'/menu' , name: 'Menu' , component: MenuList},
  {path:'/review' , name: 'Review' , component: ReviewList},
  {path:'/:id/store' , name: 'Store' , component: StoreDetailComponent, props: true},
  {path:'/sign-up-user' , name: 'sign-up-user' , component: SignUpUserComponent},
  {path:'/sign-up-owner' , name: 'sign-up-owner' , component: SignUpOwnerComponent},
  {path:'/find-email' , name: 'find-email' , component: FindEmailComponent},
  ...memberRoutes,
  ...orderRoutes,
  ...menuRoutes,
  ...storeRoutes,
]
const router = createRouter({
  history: createWebHistory(),
  routes
}
);
export default router;