import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import PendingFormsView from '../views/PendingFormsView.vue'
import HomeView from '../views/HomeView.vue'
import ThemeView from '../views/ThemeView.vue'
import AssignDeskView from "../views/AssignDeskView.vue";
import PendingReceiveView from "../views/PendingReceiveView.vue";
import ReceiveDocView from "../views/ReceiveDocView.vue";
import ReceiveSignView from "../views/ReceiveSignView.vue";
import ReceiveListView from "../views/ReceiveListView.vue";

import HomeViewR from '../views/HomeView_R.vue'
const routes = [
  // 收文窗口
  {
    path: '/HomeR',
    component: MainView,
    children: [
      {
        path: '',
        name: 'HomeViewR',
        component: HomeViewR,
        meta: { pageName: '收文窗口', sideMenu: 'SideMenuA' }
      },
    ],
  },
  {
    path: '/AssignDesk',
    component: MainView,
    children: [
      {
        path: '',
        name: 'AssignDeskView',
        component: AssignDeskView,
        meta: { pageName: '收文窗口', sideMenu: 'SideMenuA' }
      },
    ],
  },
  {
    path: '/ReceiveList',
    component: MainView,
    children: [
      {
        path: '',
        name: 'ReceiveListView',
        component: ReceiveListView,
        meta: { pageName: '收文窗口', sideMenu: 'SideMenuA' }
      },
    ],
  },
  {
    path: '/',
    component: MainView,
    children: [
      {
        path: '',
        name: 'HomeView',
        component: HomeView,
        meta: { pageName: '黃金貝', sideMenu: 'SideMenuA' }
      },
    ],
  },
  {
    path: '/formview',
    component: MainView,
    children: [
      {
        path: '',
        name: 'PendingFormsView',
        component: PendingFormsView,
        meta: { pageName: '待簽核表單主管', sideMenu: 'SideMenuA' }
      },
    ],
  },
  {
    path: '/theme',
    component: MainView,
    children: [
      {
        path: '',
        name: 'ThemeView',
        component: ThemeView,
        meta: { pageName: '主題設定管理員', sideMenu: 'SideMenuB' }
      },
    ],
  },
  
  {
    path: '/PendingReceive',
    component: MainView,
    children: [
      {
        path: '',
        name: 'PendingReceiveView',
        component: PendingReceiveView,
        meta: { pageName: '收文處理員', sideMenu: 'SideMenuA' }
      },
    ],
  },
  {
    path: '/ReceiveDoc',
    component: MainView,
    children: [
      {
        path: '',
        name: 'ReceiveDocView',
        component: ReceiveDocView,
        meta: { pageName: '新收文建立者', sideMenu: 'SideMenuA' }
      },
    ],
  },
  {
    path: '/ReceiveSign',
    component: MainView,
    children: [
      {
        path: '',
        name: 'ReceiveSignView',
        component: ReceiveSignView,
        meta: { pageName: '簽辦意見者', sideMenu: 'SideMenuB' }
      },
    ],
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// [AI修正，暫不確認作用]简化路由守卫，暂时移除 Keycloak 验证
router.beforeEach((to, from, next) => {
  next()
})

export default router
