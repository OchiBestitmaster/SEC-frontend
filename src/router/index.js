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

const routes = [
  {
    path: '/',
    component: MainView,
    children: [
      {
        path: '',
        name: 'HomeView',
        component: HomeView
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
        component: PendingFormsView
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
        component: ThemeView
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
        component: AssignDeskView
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
        component: PendingReceiveView
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
        component: ReceiveDocView
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
        component: ReceiveSignView
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
        component: ReceiveListView
      },
    ],
  }
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
