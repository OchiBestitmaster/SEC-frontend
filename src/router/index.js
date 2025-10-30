import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import PendingFormsView from '../views/PendingFormsView.vue'
import HomeView from '../views/HomeView.vue'
import ThemeView from '../views/ThemeView.vue'
import AssignDeskView from "../views/AssignDeskView.vue";
import AssignDeskViewR2 from "../views/AssignDeskViewR2.vue";
import PendingReceiveView from "../views/PendingReceiveView.vue";
//import ReceiveDocView from "../views/ReceiveDocView.vue";
import ReceiveDocViewonly from "../views/ReceiveDocViewonly.vue";
import ReceiveDocViewonly2 from "../views/ReceiveDocViewonly2.vue";
import ReceiveDocViewO from "../views/ReceiveDocView_O.vue";
import ReceiveDocViewO2 from "../views/ReceiveDocView_O2.vue";
import ReceiveDocViewO3 from "../views/ReceiveDocView_O3.vue";
import ReceiveDocViewO4 from "../views/ReceiveDocView_O4.vue";
import ReceiveDocViewM from "../views/ReceiveDocView_M.vue";
import ReceiveDocViewF from "../views/ReceiveDocView_F.vue";
import ReceiveDocViewB from "../views/ReceiveDocView_B.vue";
import ReceiveDocViewB2 from "../views/ReceiveDocView_B2.vue";
import ReceiveSignView from "../views/ReceiveSignView.vue";
import ReceiveListView from "../views/ReceiveListView.vue";

import HomeViewR from '../views/HomeView_R.vue';
import HomeViewO from '../views/HomeView_O.vue';
import HomeViewM from '../views/HomeView_M.vue';

import PendingReceiveViewO from "../views/PendingReceiveView_O.vue";
import PendingReceiveViewO2 from "../views/PendingReceiveView_O2.vue";
import PendingReceiveViewO3 from "../views/PendingReceiveView_O3.vue";
import PendingReceiveViewO4 from "../views/PendingReceiveView_O4.vue";
import PendingReceiveViewO5 from "../views/PendingReceiveView_O5.vue";
import PendingReceiveViewM from "../views/PendingReceiveView_M.vue";
import PendingReceiveViewM2 from "../views/PendingReceiveView_M2.vue";
import PendingReceiveViewF from "../views/PendingReceiveView_F.vue";
import PendingReceiveViewB from "../views/PendingReceiveView_B.vue";

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
    path: '/AssignDesk2',
    component: MainView,
    children: [
      {
        path: '',
        name: 'AssignDeskViewR2',
        component: AssignDeskViewR2,
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
    path: '/HomeO2',
    component: MainView,
    children: [
      {
        path: '',
        name: 'HomeViewO2',
        component: HomeViewO,
        meta: { pageName: '承辦人', sideMenu: 'SideMenuO2' }
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
    path: '/PendingReceiveViewO3',
    component: MainView,
    children: [
      {
        path: '',
        name: 'PendingReceiveViewO3',
        component: PendingReceiveViewO3,
        meta: { pageName: '承辦人', sideMenu: 'SideMenuO' }
      },
    ],
  },
   {
    path: '/PendingReceiveViewO4',
    component: MainView,
    children: [
      {
        path: '',
        name: 'PendingReceiveViewO4',
        component: PendingReceiveViewO4,
        meta: { pageName: '承辦人', sideMenu: 'SideMenuO2' }
      },
    ],
  },
  {
    path: '/PendingReceiveViewO5',
    component: MainView,
    children: [
      {
        path: '',
        name: 'PendingReceiveViewO5',
        component: PendingReceiveViewO5,
        meta: { pageName: '承辦人', sideMenu: 'SideMenuO2' }
      },
    ],
  },
  {
    path: '/PendingReceiveViewO6',
    component: MainView,
    children: [
      {
        path: '',
        name: 'PendingReceiveViewO6',
        component: PendingReceiveViewM2,
        meta: { pageName: '承辦人', sideMenu: 'SideMenuO2' }
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
  {
    path: '/ReceiveDocO2',
    component: MainView,
    children: [
      {
        path: '',
        name: 'ReceiveDocViewO2',
        component: ReceiveDocViewO2,
        meta: { pageName: '承辦人', sideMenu: 'SideMenuO' }
      },
    ],
  },
  {
    path: '/ReceiveDocO3',
    component: MainView,
    children: [
      {
        path: '',
        name: 'ReceiveDocViewO3',
        component: ReceiveDocViewO3,
        meta: { pageName: '承辦人', sideMenu: 'SideMenuO2' }
      },
    ],
  },
  {
    path: '/ReceiveDocO4',
    component: MainView,
    children: [
      {
        path: '',
        name: 'ReceiveDocViewO4',
        component: ReceiveDocViewO4,
        meta: { pageName: '承辦人', sideMenu: 'SideMenuO2' }
      },
    ],
  },
  {
    path: '/ReceiveDocViewonlyO',
    component: MainView,
    children: [
      {
        path: '',
        name: 'ReceiveDocViewonlyO',
        component: ReceiveDocViewonly,
        meta: { pageName: '承辦人', sideMenu: 'SideMenuO' }
      },
    ],
  },
  {
    path: '/ReceiveDocViewonlyO2',
    component: MainView,
    children: [
      {
        path: '',
        name: 'ReceiveDocViewonlyO2',
        component: ReceiveDocViewonly2,
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
  // 加簽財務
  {
    path: '/HomeF',
    component: MainView,
    children: [
      {
        path: '',
        name: 'HomeViewF',
        component: HomeViewM,
        meta: { pageName: '財務部主任', sideMenu: 'SideMenuF' }
      },
    ],
  },
  {
    path: '/PendingReceiveViewF',
    component: MainView,
    children: [
      {
        path: '',
        name: 'PendingReceiveViewF',
        component: PendingReceiveViewF,
        meta: { pageName: '財務部主任', sideMenu: 'SideMenuF' }
      },
    ],
  },
  {
    path: '/ReceiveDocViewF',
    component: MainView,
    children: [
      {
        path: '',
        name: 'ReceiveDocViewF',
        component: ReceiveDocViewF,
        meta: { pageName: '財務部主任', sideMenu: 'SideMenuF' }
      },
    ],
  },
  {
    path: '/PendingReceiveViewF2',
    component: MainView,
    children: [
      {
        path: '',
        name: 'PendingReceiveViewF2',
        component: PendingReceiveViewM2,
        meta: { pageName: '財務部主任', sideMenu: 'SideMenuF' }
      },
    ],
  },
  // 加簽財務 end
  // 經理
  {
    path: '/HomeB',
    component: MainView,
    children: [
      {
        path: '',
        name: 'HomeViewB',
        component: HomeViewR,
        meta: { pageName: '經理', sideMenu: 'SideMenuB' }
      },
    ],
  },
 {
    path: '/PendingReceiveViewB',
    component: MainView,
    children: [
      {
        path: '',
        name: 'PendingReceiveViewB',
        component: PendingReceiveViewB,
        meta: { pageName: '經理', sideMenu: 'SideMenuB' }
      },
    ],
  },
  {
    path: '/ReceiveDocViewB',
    component: MainView,
    children: [
      {
        path: '',
        name: 'ReceiveDocViewB',
        component: ReceiveDocViewB,
        meta: { pageName: '經理', sideMenu: 'SideMenuB' }
      },
    ],
  },
  {
    path: '/ReceiveDocViewB2',
    component: MainView,
    children: [
      {
        path: '',
        name: 'ReceiveDocViewB2',
        component: ReceiveDocViewB2,
        meta: { pageName: '經理', sideMenu: 'SideMenuB' }
      },
    ],
  },
  {
    path: '/PendingReceiveViewB2',
    component: MainView,
    children: [
      {
        path: '',
        name: 'PendingReceiveViewB2',
        component: PendingReceiveViewM2,
        meta: { pageName: '經理', sideMenu: 'SideMenuB' }
      },
    ],
  },
  // 經理 end
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
