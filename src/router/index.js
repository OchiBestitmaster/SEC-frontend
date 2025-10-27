import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import PendingFormsView from '../views/PendingFormsView.vue'
import HomeView from '../views/HomeView.vue'
import ThemeView from '../views/ThemeView.vue'
import AssignDeskView from "../views/AssignDeskView.vue";
import PendingReceiveView from "../views/PendingReceiveView.vue";
//import ReceiveDocView from "../views/ReceiveDocView.vue";
import ReceiveDocViewonly from "../views/ReceiveDocViewonly.vue";
import ReceiveDocViewO from "../views/ReceiveDocView_O.vue";
import ReceiveDocViewM from "../views/ReceiveDocView_M.vue";
import ReceiveSignView from "../views/ReceiveSignView.vue";
import ReceiveListView from "../views/ReceiveListView.vue";

import HomeViewR from '../views/HomeView_R.vue';
import HomeViewO from '../views/HomeView_O.vue';
import HomeViewM from '../views/HomeView_M.vue';

import PendingReceiveViewO from "../views/PendingReceiveView_O.vue";
import PendingReceiveViewO2 from "../views/PendingReceiveView_O2.vue";
import PendingReceiveViewM from "../views/PendingReceiveView_M.vue";
import PendingReceiveViewM2 from "../views/PendingReceiveView_M2.vue";

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
    path: '/ReceiveDocViewonly',
    component: MainView,
    children: [
      {
        path: '',
        name: 'ReceiveDocViewonly',
        component: ReceiveDocViewonly,
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
  // 收文窗口 end
  // 承辦人
  {
    path: '/HomeO',
    component: MainView,
    children: [
      {
        path: '',
        name: 'HomeViewO',
        component: HomeViewO,
        meta: { pageName: '承辦人', sideMenu: 'SideMenuO' }
      },
    ],
  },
  {
    path: '/PendingReceiveViewO',
    component: MainView,
    children: [
      {
        path: '',
        name: 'PendingReceiveViewO',
        component: PendingReceiveViewO,
        meta: { pageName: '承辦人', sideMenu: 'SideMenuO' }
      },
    ],
  },
  {
    path: '/PendingReceiveViewO2',
    component: MainView,
    children: [
      {
        path: '',
        name: 'PendingReceiveViewO2',
        component: PendingReceiveViewO2,
        meta: { pageName: '承辦人', sideMenu: 'SideMenuO' }
      },
    ],
  },
  {
    path: '/ReceiveDocO',
    component: MainView,
    children: [
      {
        path: '',
        name: 'ReceiveDocViewO',
        component: ReceiveDocViewO,
        meta: { pageName: '承辦人', sideMenu: 'SideMenuO' }
      },
    ],
  },
  // 承辦人 end
  // 主任
  {
    path: '/HomeM',
    component: MainView,
    children: [
      {
        path: '',
        name: 'HomeViewM',
        component: HomeViewM,
        meta: { pageName: '主任', sideMenu: 'SideMenuM' }
      },
    ],
  },
  {
    path: '/PendingReceiveViewM',
    component: MainView,
    children: [
      {
        path: '',
        name: 'PendingReceiveViewM',
        component: PendingReceiveViewM,
        meta: { pageName: '主任', sideMenu: 'SideMenuM' }
      },
    ],
  },
  {
    path: '/ReceiveDocViewM',
    component: MainView,
    children: [
      {
        path: '',
        name: 'ReceiveDocViewM',
        component: ReceiveDocViewM,
        meta: { pageName: '主任', sideMenu: 'SideMenuM' }
      },
    ],
  },
  {
    path: '/PendingReceiveViewM2',
    component: MainView,
    children: [
      {
        path: '',
        name: 'PendingReceiveViewM2',
        component: PendingReceiveViewM2,
        meta: { pageName: '主任', sideMenu: 'SideMenuM' }
      },
    ],
  },
  // 主任 end
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
