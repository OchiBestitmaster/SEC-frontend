<template>
  <div class="container-ochi w-large-ochi mt-2">
    <nav class="itribreadcrumb d-none d-md-block" aria-label="breadcrumb">
      <ol class="breadcrumb bg-transparent">
        <li class="breadcrumb-item"><a href="#">簽核DEMO</a></li>
        <li class="breadcrumb-item active" aria-current="page">待簽表單</li>
      </ol>
    </nav>

    <div class="filetitlewrapper mt-1">
      <span class="filetitle"><h2>待簽表單</h2></span>
      <span class="itemright"></span>
    </div>

    <div class="content-wrapper">
      <div id="mydoc"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentViewer',
  mounted() {
    this.loadOnlyOfficeEditor();
  },
  methods: {
    loadOnlyOfficeEditor() {
      // 1. 動態載入 api.js
      if (!window.DocsAPI) {
        const script = document.createElement('script');
        script.src = 'http://localhost:8043/web-apps/apps/api/documents/api.js';
        script.onload = this.initEditor;
        document.head.appendChild(script);
      } else {
        this.initEditor();
      }
    },
    initEditor() {
      // 2. 初始化 DocEditor，掛載到 #mydoc
      const config = {
        document: {
          fileType: 'docx',
          key: 'doc-example-654', // 通常為文件唯一值
          title: 'Test Document',
          url: 'http://demo.anviweb.com/cogen/doc/F-AD-2-10B.doc', // 需公開連結
        },
        documentType: 'word',
        editorConfig: {
          mode: 'view', // 若要編輯則改為 edit
          lang: 'zh-TW'
        },
        height: '800px',
        width: '100%',
        token: '', // 若啟用 JWT 請填入
      };

      new window.DocsAPI.DocEditor('mydoc', config);
    }
  }
};
</script>
