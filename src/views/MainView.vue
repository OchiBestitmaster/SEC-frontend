<template>
<div id="basecontentwrapper" class="d-flexOchi flex-column flex-content-between">
  <div id="mainheaderwrapper">

    <div id="mainheader" class="d-flexOchi align-items-center justify-content-between">
      <div id="headerlogo" class="d-flexOchi align-items-center">
        <div class="d-inline-block"><button class="btn btn-primary btn-xs" id="sidebarToggle"><i class="fas fa-bars "></i></button></div>
        <div class="d-inline-block ms-1"><img src="images/logo_w.svg" height="30" class="ms-2"></div>
        <div class="d-inline-block ms-1 logocolor">公文與簽辦系統</div>
      </div><!-- headerlogo -->
      <div id="headerinfo" class="text-white">
        您好 黃金貝
       ｜<a>登出</a>
      </div><!-- headerinfo -->
    </div><!-- mainheader -->

  </div><!-- mainheaderwrapper -->
  <div id="maincontent" class="flex-grow-1 d-flexOchi align-items-stretch">
    <div id="sidebar-wrapper" class="bg-white shadowR">
      <div class="metismenubox" id="promenu">

        <!--<div class="p-2">
        <div class="card shadow-sm border-light-subtle">

          <div class="card-header bg-secondary text-white">
            <div class="row">
              <div class="col-6 text-center border-end fw-bold">
                今日新增
              </div>
              <div class="col-6 text-center fw-bold">
                急件公文
              </div>
            </div>
          </div>

          <div class="card-body py-2">
            <div class="row ">
              <div class="col-6 text-center border-end">
                <span class="text-secondary display-5">8</span>
              </div>
              <div class="col-6 text-center">
                <div class="text-warning display-5">2</div>
              </div>
            </div>
          </div>

        </div>
      </div>-->

<ul id="metismenu">
<li><router-link to="/">公文儀表板</router-link></li>
<li><a href="#" class="has-arrow">我的公文匣</a>
  <ul>
    <li><router-link to="/">待處理公文</router-link></li>
    <li><router-link to="/">代理人公文</router-link></li>
    <li><router-link to="/">知會公文</router-link></li>
  </ul>
</li>
<li><a href="#" class="has-arrow">公文製作</a>
  <ul>
    <li><router-link to="/">文件用印申請單</router-link></li>
    <li><router-link to="/">繳銷廢舊印信申請單</router-link></li>
    <li><router-link to="/">公務用派車單</router-link></li>
    <li><router-link to="/">宴客申請單</router-link></li>
    <li><router-link to="/">國內旅費報支單</router-link></li>
    <li><router-link to="/">國外旅費報支單</router-link></li>
  </ul>
</li>
<li><router-link to="/my-forms">個人設定</router-link></li>
</ul>
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
<script>
import '@fortawesome/fontawesome-free/css/all.css';
//import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/bscostom.scss"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@/assets/css/style.css"
import "@/assets/css/OClayout.css"
import "metismenu/dist/metisMenu.css";
import "metismenu/dist/metisMenu.min.js";
import $ from "jquery";
import { onMounted} from "vue"; 
import { RouterView } from 'vue-router';

export default({
    components: {
        RouterView
    },
    setup() {
        $(document).ready(() => {
            RWDlayoutIni();
            // 移除這裡的初始化，避免重複初始化
            // $("#metismenu").metisMenu({
            //     toggle: false,
            //     preventDefault: false
            // });
        });
        
        $(window).on('resize', RWDlayoutIni);
       
      
//RWD layout function
function RWDlayoutIni(){
    //設定側欄選單的高度，以便在展開後可以產生捲軸
    var docHeight = $(window).height();
    var mainheaderwrapperHeight = $("#mainheaderwrapper").height();
    var mainfooterHeight = $("#mainfooter").height();
    var sidebarwrapperH = docHeight - mainheaderwrapperHeight - mainfooterHeight + "px";
    $(".metismenubox").css("height",sidebarwrapperH);
    
    // 修改這裡的初始化，添加 preventDefault: false
    $("#metismenu").metisMenu({
        toggle: false,//可展開所有項目
        preventDefault: false  // 添加這行，防止阻止默認的鏈接行為
    });


    //判斷螢幕寬度決定是否顯示側欄
    var docwidth = $(window).width();
    var sidebarwrapper = $("#sidebar-wrapper");
    if(docwidth < 1100){
        sidebarwrapper.hide();
    }else{
        sidebarwrapper.show();
    }
    //內容判斷寬度
    var containerochiW = docwidth - 40  + "px";
    var containerochiWs = docwidth - 290 + "px";
    if(docwidth < 1650 && docwidth > 1101){
        $(".tboverW").css("width",containerochiWs);
    }else if(docwidth < 1100){
        $(".tboverW").css("width",containerochiW);
    }else{
        $(".tboverW").css("width","inherit");
    }

}

onMounted(() => {
      //切換選單動作
$("#sidebarToggle").on("click",function(){
    var sidebarwrapper = $("#sidebar-wrapper");
    if(sidebarwrapper.is(":visible")){
        sidebarwrapper.fadeOut();
    }else{
        sidebarwrapper.fadeIn();
    }
});


    });

    },
})
</script>
<style scoped>

</style>
