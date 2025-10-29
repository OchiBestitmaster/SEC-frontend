<template>
  <ul id="metismenu">
    <li><router-link to="/HomeO2">公文儀表板</router-link></li>
    <li><a href="#" class="has-arrow">我的公文匣</a>
      <ul>
        <li><router-link to="/PendingReceiveViewO4">待處理公文</router-link></li>
        <li><router-link to="/">代理人公文</router-link></li>
        <li><router-link to="/">知會公文</router-link></li>
        <li><router-link to="/PendingReceiveViewO5">公文杳詢</router-link></li>
      </ul>
    </li>
    <li><a href="#" class="has-arrow">公文製作</a>
      <ul>
        <li><a href="http://localhost:7089/index.html" target="_blank">文件用印申請單</a></li>
        <li><router-link to="/">繳銷廢舊印信申請單</router-link></li>
        <li><router-link to="/">公務用派車單</router-link></li>
        <li><router-link to="/">宴客申請單</router-link></li>
        <li><router-link to="/">國內旅費報支單</router-link></li>
        <li><router-link to="/">國外旅費報支單</router-link></li>
      </ul>
    </li>
    <li><router-link to="/my-forms">個人設定</router-link></li>
  </ul>
</template>

<script setup>
</script>
