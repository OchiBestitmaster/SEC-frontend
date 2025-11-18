<template>
  <div class="container-ochi w-large-ochi mt-2">

    <div class="filetitlewrapper mt-1">
      <span class="filetitle"><h2>簡易簽辦單</h2></span>
      <span class="itemright"></span>
    </div>
  
    <div class="content-wrapper">

       <div class="card border-nonfocus mt-4 mb-2">
            <div class="card-header bg-nonfocus fs-5">基本資料</div>
            <div class="card-body">
              <div class="ochiform TitleLength03">
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA1">主旨</label></div>
                  <div class="col-md-auto flex-grow-1">
                    <input type="text" class="form-control" id="formA1" value="">
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA2">內容</label></div>
                  <div class="col-md-auto flex-grow-1">
                    <textarea class="form-control" id="formA2" rows="4"></textarea>
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
                
              </div><!-- ochiform -->
            </div>
          </div><!-- card -->

      <div class="card mt-4 mb-2 border-primary-subtle border-3">
        <div class="card-header bg-primary-subtle">

          <div class="d-flex align-items-center justify-content-between">
            <div class="fs-5 fw-bold">簽辦流程</div>
            <div>
              
            </div>
          </div>
        </div>
        <div class="card-body">
          <table class="table small">
            <thead class="border-bottom border-dark-subtle">
            <tr>
              <th>簽核者</th>
              <th>簽核意見</th>
              <th>簽核時間</th>
              <th>簽核狀態</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>申請者</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>主任</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>經理</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div><!-- card -->

      <div :class="getCardClasses(switchA)">
        <div :class="getHeaderClasses(switchA)">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckA" v-model="switchA">
            <label class="form-check-label" for="switchCheckA">會辦</label>
          </div>
        </div>
        <div class="card-body p-0">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" :disabled="!switchA" v-model="checkbox1">
              <label class="form-check-label" for="firstCheckbox">行政管理部-主任</label>
            </li>
          </ul>
        </div>
      </div><!-- card -->

     

      <div class="d-flex align-items-center justify-content-between my-2">
        <div class=""></div>
        <div>
          <button type="button" class="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#customtopicbox">加簽</button>
          <a href="#" type="button" class="btn btn-primary" onclick="return confirm('是否確定送出？');" id="formsend">送出</a>
        </div>
      </div>




    </div><!-- content-wrapper -->
  </div>


<div class="modal fade" id="customtopicbox" tabindex="-1">
  <div class="modal-dialog modal-sm modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">加簽</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">


 <div class="ochiform TitleLength05">
    <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
      <!-- form item start -->
      <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA100">加簽類型</label></div>
      <div class="col-md-auto flex-grow-1">
        <select class="form-select form-select-sm" id="addsigntype">
          <option selected disabled>選擇加簽類型</option>
          <option value="1">會簽</option>
          <option value="2">串簽</option>
          </select>
      </div>
      <!-- form item end -->
    </div><!-- row -->
    <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
      <!-- form item start -->
      <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA101">加簽人員</label></div>
      <div class="col-md-auto flex-grow-1">
        <div id="html1">
  <ul>
    <li>行管部
      <ul>
        <li>孔聖智</li>
        <li>楊冠全</li>
        <li>文家田</li>
        <li>孫珮珊</li>
        <li>呂宇安</li>
      </ul>
    </li>
    <li>財務部
      <ul>
        <li>温子修</li>
        <li>馬佳玉</li>
        <li>蔣智安</li>
        <li>包唯中</li>
      </ul>
    </li>
    <li>技術部
      <ul>
        <li>羅世豪</li>
        <li>麥立哲</li>
        <li>紀欣儀</li>
      </ul>
    </li>
  </ul>
</div>
      </div>
      <!-- form item end -->
    </div><!-- row -->
</div>




      </div><!-- modal-body -->
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">取消</button>
        <a href="#" type="button" class="btn btn-outline-dark" onclick="return confirm('是否確定送出？');">送出</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery';
import 'jstree/dist/jstree.min.js';
import 'jstree/dist/themes/default/style.min.css';
import * as bootstrap from 'bootstrap';
import axios from 'axios';

export default {
  data() {
    return {
      switchA: false,
      checkbox1: false,
      tobossSelection: '',
      // ===== State for form submission flow =====
      isSubmitting: false
    };
  },
  mounted() {
    $('#html1').jstree({
        core: {
        themes: {
          icons: false
        }
      },
      plugins: ['checkbox'],
    });

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
[...tooltipTriggerList].forEach(el => new bootstrap.Tooltip(el));

    // ===== Bind form submit event handler =====
    const formSendBtn = document.getElementById('formsend');
    if (formSendBtn) {
      formSendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleFormSubmit();
      });
    }
  },
  watch: {
    switchA(newVal) {
      if (!newVal) {
        this.checkbox1 = false;
      }
    },
    switchB(newVal) {
      if (!newVal) {
        this.tobossSelection = '';
      }
    }
  },
  methods: {
    // ===== UI Helper Methods =====
    getCardClasses(switchState) {
      return {
        'card mt-4 mb-2': true,
        'border-primary-subtle border-3': switchState
      };
    },
    getHeaderClasses(switchState) {
      return {
        'card-header fs-5 fw-bold': true,
        'bg-primary-subtle': switchState
      };
    },

    // ===== API Authentication =====
    /**
     * Generate Basic Auth header for Flowable REST API
     * @returns {Object} Headers with Authorization
     */
    getBasicAuthHeader() {
      const credentials = 'rest-admin:test';
      const encoded = btoa(credentials);
      return {
        'Authorization': `Basic ${encoded}`,
        'Content-Type': 'application/json'
      };
    },

    // ===== Step 1: Main form submit handler =====
    /**
     * Main entry point for form submission
     * Orchestrates the entire workflow:
     * 1. Determine checkbox state
     * 2. Create Flowable process instance
     * 3. Insert form into PostgREST
     * 4. Update process variables
     * 5. Find ReceiveTask execution
     * 6. Send signal to execute task
     */
    async handleFormSubmit() {
      if (this.isSubmitting) {
        console.warn('Form submission already in progress');
        return;
      }

      this.isSubmitting = true;
      try {
        console.log('🔄 Starting form submission workflow...');

        // ===== Step 1: Determine additional flag =====
        const additional = this.checkbox1 ? 'yes' : 'no';
        console.log(`✓ Step 1: Additional flag determined: ${additional}`);

        // ===== Step 2: Create Flowable process instance =====
        const processInstanceId = await this.createProcess(additional);
        console.log(`✓ Step 2: Process instance created: ${processInstanceId}`);

        // ===== Step 3: Insert application form to PostgREST =====
        const applicationFormId = await this.insertForm(processInstanceId);
        console.log(`✓ Step 3: Application form inserted: ${applicationFormId}`);

        // ===== Step 4: Update Flowable process variables =====
        await this.updateVariables(processInstanceId, applicationFormId);
        console.log(`✓ Step 4: Process variables updated`);

        // ===== Step 5: Find ReceiveTask execution =====
        const jobId = await this.findReceiveTaskExecution(processInstanceId);
        console.log(`✓ Step 5: ReceiveTask execution found: ${jobId}`);

        // ===== Step 6: Send signal to execute task =====
        await this.signalExecution(jobId);
        console.log(`✓ Step 6: Signal sent successfully`);

        console.log('✅ Form submission workflow completed successfully!');
        alert('簽辦單已送出');
      } catch (error) {
        console.error('❌ Form submission workflow failed:', error);
        alert(`提交失敗: ${error.message}`);
      } finally {
        this.isSubmitting = false;
      }
    },

    // ===== Step 2: Create Flowable process instance =====
    /**
     * Create a new Flowable process instance with initial variables
     * @param {string} additional - 'yes' or 'no' based on checkbox state
     * @returns {Promise<string>} Process instance ID
     * @throws {Error} If process creation fails
     * 
     * API: POST /flowable/runtime/process-instances
     * Response format: { "id": "...", "processDefinitionId": "..." }
     */
    async createProcess(additional) {
      try {
        const url = '/flowable/runtime/process-instances';
        const payload = {
          processDefinitionKey: 'mainbpm',
          variables: [
            { name: 'rollback', value: 'no' },
            { name: 'additional', value: additional }
          ]
        };

        console.log(`📤 Sending POST request to ${url}`);
        console.log(`📋 Payload:`, payload);

        const response = await axios.post(url, payload, {
          headers: this.getBasicAuthHeader()
        });

        if (!response.data || !response.data.id) {
          throw new Error('Invalid response: missing process instance ID');
        }

        const processInstanceId = response.data.id;
        console.log(`📥 Response received: processInstanceId = ${processInstanceId}`);

        return processInstanceId;
      } catch (error) {
        console.error('❌ Failed to create process instance:', error);
        throw new Error(`Process creation failed: ${error.response?.data?.message || error.message}`);
      }
    },

    // ===== Step 3: Insert form data to PostgREST =====
    /**
     * Insert application form data into PostgREST database
     * @param {string} processInstanceId - Flowable process instance ID
     * @returns {Promise<number>} Application form ID
     * @throws {Error} If insertion fails
     * 
     * API: POST /postgrest/application_form
     * Response format: array [{ "id": ..., "title": "...", ... }]
     * PostgREST returns array due to "Prefer: return=representation" header
     */
    async insertForm(processInstanceId) {
      try {
        const url = '/postgrest/application_form';
        
        // ===== Get form data from DOM =====
        const titleElement = document.getElementById('formA1');
        const contentElement = document.getElementById('formA2');
        
        const title = titleElement ? titleElement.value : '';
        const content = contentElement ? contentElement.value : '';

        if (!title || !content) {
          throw new Error('Form fields (主旨/內容) are required');
        }

        // ===== Construct current datetime string =====
        const now = new Date();
        const dateString = now.toLocaleString('zh-TW', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }).replace(/\//g, '/');

        const payload = {
          title: title,
          content: content,
          state: '審核中',
          applicant: '承辦人',
          date: dateString,
          process_instance_id: processInstanceId
        };

        console.log(`📤 Sending POST request to ${url}`);
        console.log(`📋 Payload:`, payload);

        const response = await axios.post(url, payload, {
          headers: {
            'Prefer': 'return=representation',
            'Content-Type': 'application/json'
          }
        });

        // ===== Extract ID from response array =====
        if (!Array.isArray(response.data) || response.data.length === 0) {
          throw new Error('Invalid response: missing form data in array');
        }

        const applicationFormId = response.data[0].id;
        console.log(`📥 Response received: applicationFormId = ${applicationFormId}`);
        console.log(`📥 Returned form data:`, response.data[0]);

        return applicationFormId;
      } catch (error) {
        console.error('❌ Failed to insert application form:', error);
        throw new Error(`Form insertion failed: ${error.response?.data?.message || error.message}`);
      }
    },

    // ===== Step 4: Update Flowable process variables =====
    /**
     * Update process instance variables with form reference IDs
     * @param {string} processInstanceId - Flowable process instance ID
     * @param {number} applicationFormId - PostgREST application form ID
     * @throws {Error} If update fails
     * 
     * API: PUT /flowable/runtime/process-instances/<processInstanceId>/variables
     * Body format: array of variable objects
     */
    async updateVariables(processInstanceId, applicationFormId) {
      try {
        const url = `/flowable/runtime/process-instances/${processInstanceId}/variables`;
        const payload = [
          { name: 'processInstanceId', value: processInstanceId },
          { name: 'application_form_id', value: applicationFormId }
        ];

        console.log(`📤 Sending PUT request to ${url}`);
        console.log(`📋 Payload:`, payload);

        const response = await axios.put(url, payload, {
          headers: this.getBasicAuthHeader()
        });

        console.log(`📥 Variables updated successfully`);
        console.log(`📥 Response:`, response.data);
      } catch (error) {
        console.error('❌ Failed to update process variables:', error);
        throw new Error(`Variable update failed: ${error.response?.data?.message || error.message}`);
      }
    },

    // ===== Step 5: Find ReceiveTask execution =====
    /**
     * Query Flowable for executions and find the ReceiveTask_8 job
     * @param {string} processInstanceId - Flowable process instance ID
     * @returns {Promise<string>} Execution ID of ReceiveTask_8
     * @throws {Error} If ReceiveTask_8 not found
     * 
     * API: GET /flowable/runtime/executions?processInstanceId=<id>
     * Response format:
     * {
     *   "data": [
     *     { "id": "...", "activityId": null },
     *     { "id": "...", "activityId": "ReceiveTask_8" },
     *     ...
     *   ]
     * }
     */
    async findReceiveTaskExecution(processInstanceId) {
      try {
        const url = '/flowable/runtime/executions';
        
        console.log(`📤 Sending GET request to ${url}`);
        console.log(`📋 Query params: processInstanceId = ${processInstanceId}`);

        const response = await axios.get(url, {
          params: { processInstanceId: processInstanceId },
          headers: this.getBasicAuthHeader()
        });

        // ===== Extract execution list =====
        const executionList = response.data.data || response.data;
        console.log(`📥 Response received:`, response.data);
        console.log(`📥 Execution list:`, executionList);

        // ===== Find ReceiveTask_8 =====
        const receiveTaskExecution = executionList.find(
          e => e.activityId === 'ReceiveTask_8'
        );

        if (!receiveTaskExecution) {
          throw new Error('ReceiveTask_8 not found in execution list');
        }

        const jobId = receiveTaskExecution.id;
        console.log(`✓ Found ReceiveTask_8 execution: ${jobId}`);

        return jobId;
      } catch (error) {
        console.error('❌ Failed to find ReceiveTask execution:', error);
        throw new Error(`Execution search failed: ${error.response?.data?.message || error.message}`);
      }
    },

    // ===== Step 6: Send signal to execution =====
    /**
     * Send a signal action to execute the ReceiveTask
     * @param {string} jobId - Execution ID of ReceiveTask_8
     * @throws {Error} If signal fails
     * 
     * API: PUT /flowable/runtime/executions/<jobId>
     * Body: { "action": "signal" }
     */
    async signalExecution(jobId) {
      try {
        const url = `/flowable/runtime/executions/${jobId}`;
        const payload = {
          action: 'signal'
        };

        console.log(`📤 Sending PUT request to ${url}`);
        console.log(`📋 Payload:`, payload);

        const response = await axios.put(url, payload, {
          headers: this.getBasicAuthHeader()
        });

        console.log(`📥 Signal sent successfully`);
        console.log(`📥 Response:`, response.data);
      } catch (error) {
        console.error('❌ Failed to send signal:', error);
        throw new Error(`Signal execution failed: ${error.response?.data?.message || error.message}`);
      }
    }
  }
};
</script>

<style scoped>

</style>

<!-- 
  ===============================================
  CONTEXT FOR FUTURE DEVELOPMENT
  ===============================================
  
  【本流程使用的 API 清單】
  
  1. Flowable REST API (需 Basic Auth: rest-admin/test)
     - POST   /flowable/runtime/process-instances
       建立流程實例，初始化 rollback 和 additional 變數
       
     - PUT    /flowable/runtime/process-instances/<processInstanceId>/variables
       更新流程變數 (processInstanceId, application_form_id)
       
     - GET    /flowable/runtime/executions?processInstanceId=<id>
       查詢特定流程實例的所有 execution，尋找 ReceiveTask_8
       
     - PUT    /flowable/runtime/executions/<jobId>
       向 execution 發送 signal 動作，觸發流程進行
  
  2. PostgREST API (無需驗證，但需設置特定 header)
     - POST   /postgrest/application_form
       新增簽辦表單記錄
       Header: "Prefer: return=representation" (讓 PostgREST 返回插入的資料)
       Response: 陣列格式 [{ "id": ..., "title": ..., ... }]
  
  【Flowable REST 結構邏輯摘要】
  
  - 流程實例 (Process Instance)：代表一個業務流程的執行實例，由 processDefinitionKey 定義
  - 執行單位 (Execution)：流程中的執行節點，每個執行單位有 activityId 標示目前所在活動
  - 變數 (Variables)：流程實例或執行單位所持有的資料，可在各節點間傳遞
  - Signal (訊號)：用來觸發流程推進到下一個節點
  
  關鍵點：
  * 建立流程後會自動到達第一個接收任務節點 (ReceiveTask_8)
  * 需找到該節點的 execution 才能發送 signal
  * signal 觸發後流程推進，可能進入下一個流程節點
  
  【PostgREST 的回傳特性】
  
  - 當設置 "Prefer: return=representation" header 時，POST 響應為陣列格式
  - 必須取 response.data[0] 來獲取新插入的記錄
  - 若未設置此 header，POST 響應可能僅為 HTTP 201 無主體
  - 用 response.data[0].id 來提取新記錄的 ID
  
  【Proxy 使用方式】
  
  根據 vue.config.js 配置：
  
  - /flowable/* 請求會被代理到 http://localhost:5080/flowable-rest/service
    前端程式碼：axios.get('/flowable/runtime/process-instances')
    實際請求：GET http://localhost:5080/flowable-rest/service/runtime/process-instances
    
  - /postgrest/* 請求會被代理到 http://localhost:3000
    前端程式碼：axios.post('/postgrest/application_form')
    實際請求：POST http://localhost:3000/application_form
  
  特別注意：proxy 配置自動移除路徑前綴 (pathRewrite)，勿重複加入
  
  【流程節點擴充指南】
  
  本檔案目前實現 D 型簽辦的完整流程。如需添加其他流程節點或簽辦類型：
  
  1. 建立新的 view 檔案 (例如 ReceiveDocView_O.vue)，複製本結構
  2. 修改 processDefinitionKey 若需要不同的流程定義
  3. 在 findReceiveTaskExecution 中調整查找的 activityId
     - 替換 'ReceiveTask_8' 為新的節點 ID
  4. 若需多個檢查點，可在 mounted() 中綁定多個按鈕事件
  5. 若需異步驗證，在 handleFormSubmit 前添加驗證 methods
  
  【Copilot 擴充時應延續的風格】
  
  命名規範：
  - 方法名稱用駝峰式 (camelCase)，且應以動作開頭 (handle/get/create/insert/update/find/signal)
  - 變數名稱清晰易讀，避免縮寫 (processInstanceId 而非 pid)
  - 常數用全大寫 (PROCESS_KEY = 'mainbpm')
  
  程式碼風格：
  - 使用 async/await，不用 .then()
  - 所有 API 呼叫用 try/catch，詳細記錄 console.log
  - 每個 method 上方保留詳細註解說明用途、API 路由、回傳格式
  - 使用區塊註解標示邏輯步驟 (===== Step X: ... =====)
  - 保持模組化，新增功能應為獨立 methods，不覆蓋現有方法
  
  API 呼叫模式：
  - Flowable 需 Basic Auth，由 getBasicAuthHeader() 提供
  - PostgREST 根據需求決定 headers (Prefer/Content-Type)
  - 所有錯誤訊息應包含 API 路由和詳細錯誤內容
  
  測試建議：
  - 在瀏覽器開發者工具 Console 監控 console.log 輸出
  - 檢查 Network 標籤確認 HTTP 請求和回應
  - 逐步驗證每個 API 呼叫是否成功
  
  ===============================================
-->
