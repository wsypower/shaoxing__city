import Vue from 'vue';
import VueRouter from 'vue-router';
import BasicLayout from '../views/Layout/BasicLayout.vue';
import UserLayout from '../views/Layout/UserLayout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'layout',
    component: BasicLayout,
    children: [
      { path: '/', redirect: { name: 'home' } },
      {
        path: '/user',
        name: 'userLayout',
        component: UserLayout,
        children: [
          {
            path: '/user/login',
            name: 'login',
            component: () => import('../views/User/Login.vue'),
          },
          {
            path: '/user/registration',
            name: 'registration',
            component: () => import('../views/User/Registration.vue'),
          },
        ],
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home/Home.vue'),
      },
      {
        path: '/center',
        name: 'center',
        component: () => import('../views/Center/Center.vue'),
      },
      {
        path: '/issue-report',
        name: 'issue-report',
        component: () => import('../views/IssueReport/IssueReport.vue'),
      },
      {
        path: '/history-case',
        name: 'history-case',
        component: () => import('../views/HistoryCase/HistoryCase.vue'),
      },
      {
        path: '/history-case-detail',
        name: 'history-case-detail',
        component: () => import('../views/HistoryCase/HistoryCaseDetail.vue'),
      },
      {
        path: '/modify-password',
        name: 'modify-password',
        component: () => import('../views/ModifyPassword/ModifyPassword.vue'),
      },
      {
        path: '/regarding',
        name: 'regarding',
        component: () => import('../views/Regarding/Regarding.vue'),
      },
      //诱导停车
      {
        path: '/parking',
        name: 'parking',
        component: () => import('../views/Parking/Parking.vue'),
      },
    ],
  },
];

const router = new VueRouter({ routes });

export default router;
