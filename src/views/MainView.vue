<template>
  <div id="basecontentwrapper" class="d-flexOchi flex-column flex-content-between">
    <div id="mainheaderwrapper">

      <div id="mainheader" class="d-flexOchi align-items-center justify-content-between">
        <div id="headerlogo" class="d-flexOchi align-items-center">
          <div class="d-inline-block"><button class="btn btn-primary btn-xs" id="sidebarToggle"><i class="fas fa-bars "></i></button></div>
          <div class="d-inline-block ms-1"><img src="images/logo_w.svg" height="30" class="ms-2"></div>
          <div class="d-inline-block ms-1 logocolor">公文與簽辦系統</div>
        </div><!-- headerlogo -->
        <HeaderInfo :username="username" />
      </div><!-- mainheader -->

    </div><!-- mainheaderwrapper -->
    <div id="maincontent" class="flex-grow-1 d-flexOchi align-items-stretch">
      <div id="sidebar-wrapper" class="bg-white shadowR">
        <div class="metismenubox" id="promenu">
          <component :is="currentSideMenu" />
        </div><!-- metismenubox -->
      </div><!-- sidebar-wrapper -->
      <div class="flex-grow-1">
        <div class="container-ochi w-large-ochi mt-2">
          <router-view></router-view>
        </div><!-- container-ochi -->
      </div><!-- flex-grow-1 -->
    </div><!-- maincontent -->
    <div id="mainfooter">
      <div>版權所有© 2025 ITRI. 工業技術研究院著作</div>
    </div><!-- mainfooter -->
  </div><!-- d-flex -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeaderInfo from '@/components/layout/HeaderInfo.vue';
import SideMenuA from '@/components/layout/SideMenuA.vue';
import SideMenuB from '@/components/layout/SideMenuB.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import "@/assets/css/bscostom.scss"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@/assets/css/style.css"
import "@/assets/css/OClayout.css"
import "metismenu/dist/metisMenu.css";
import "metismenu/dist/metisMenu.min.js";
import $ from "jquery";

import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const username = computed(() => route.meta.pageName || '預設名稱');

const sideMenus = {
  SideMenuA,
  SideMenuB
};

const currentSideMenu = computed(() => sideMenus[route.meta.sideMenu] || SideMenuA);

onMounted(() => {
  const RWDlayoutIni = () => {
    //設定側欄選單的高度，以便在展開後可以產生捲軸
    const docHeight = $(window).height();
    const mainheaderwrapperHeight = $("#mainheaderwrapper").height();
    const mainfooterHeight = $("#mainfooter").height();
    const sidebarwrapperH = docHeight - mainheaderwrapperHeight - mainfooterHeight + "px";
    $(".metismenubox").css("height", sidebarwrapperH);

    // 修改這裡的初始化，添加 preventDefault: false
    if ($("#metismenu").length > 0 && !$("#metismenu").data("metisMenu")) {
      $("#metismenu").metisMenu({
        toggle: false, //可展開所有項目
        preventDefault: false // 添加這行，防止阻止默認的鏈接行為
      });
    }

    //判斷螢幕寬度決定是否顯示側欄
    const docwidth = $(window).width();
    const sidebarwrapper = $("#sidebar-wrapper");
    if (docwidth < 1100) {
      sidebarwrapper.hide();
    } else {
      sidebarwrapper.show();
    }
    //內容判斷寬度
    const containerochiW = docwidth - 40 + "px";
    const containerochiWs = docwidth - 290 + "px";
    if (docwidth < 1650 && docwidth > 1101) {
      $(".tboverW").css("width", containerochiWs);
    } else if (docwidth < 1100) {
      $(".tboverW").css("width", containerochiW);
    } else {
      $(".tboverW").css("width", "inherit");
    }
  };

  RWDlayoutIni();
  $(window).on('resize', RWDlayoutIni);

  //切換選單動作
  $("#sidebarToggle").on("click", function () {
    const sidebarwrapper = $("#sidebar-wrapper");
    if (sidebarwrapper.is(":visible")) {
      sidebarwrapper.fadeOut();
    } else {
      sidebarwrapper.fadeIn();
    }
  });
});
</script>
<style scoped>

</style>
