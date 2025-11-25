<template>
  <div class="container-ochi w-large-ochi mt-2">

    <div class="filetitlewrapper mt-1">
      <div class="filetitle"><h2>簡易簽辦單</h2></div>
      <div class="btnright">
        
      </div>
    </div>
  
    <div class="content-wrapper">

      <!-- ===== Application Form Detail (for /ReceiveDocD2/:id) ===== -->
      <div class="card border-nonfocus mt-4 mb-2">
        <div class="card-header bg-nonfocus fs-5">表單資訊</div>
        <div class="card-body">
          <div class="row mb-2">
            <label class="col-sm-2 col-form-label">單號</label>
            <div class="col-sm-10 align-middle" id="formid">--</div>
          </div>
          <div class="row mb-2">
            <label class="col-sm-2 col-form-label">主旨</label>
            <div class="col-sm-10 align-middle" id="formtitle">--</div>
          </div>
          <div class="row mb-2">
            <label class="col-sm-2 col-form-label">內容</label>
            <div class="col-sm-10 align-middle" id="formcontent">--</div>
          </div>
          <div class="row mb-2">
            <label class="col-sm-2 col-form-label">狀態</label>
            <div class="col-sm-10 align-middle" id="formstate">--</div>
          </div>
        </div>
      </div><!-- card -->

      <!-- ===== Approval Records ===== -->
      <div class="card border-nonfocus mt-3 mb-4">
        <div class="card-header bg-nonfocus fs-5">簽核紀錄</div>
        <div class="card-body">
          <table class="table small" id="approvallist">
            <thead class="border-bottom border-dark-subtle">
              <tr>
                <th>簽核者</th>
                <th>簽核意見</th>
                <th class="text-center">簽核時間</th>
                <th class="text-center">簽核狀態</th>
                <th class="text-center">功能</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="approvals.length === 0">
                <td colspan="4" class="text-center">無簽核紀錄</td>
              </tr>
              <tr v-for="(item, idx) in approvals" :key="item.id || idx">
                <td>{{ item.signatory }}</td>
                <td>{{ item.content }}</td>
                <td class="text-center">{{ formatDate(item.date) }}</td>
                <td class="text-center">{{ item.state }}</td>
                <td class="text-center">
                  <div class="btn-group btn-group-sm" role="group" v-if="isActionableApproval(item)">
                    <button type="button" class="btn btn-outline-dark" @click="openSignModal(item)">簽核</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    

    </div><!-- content-wrapper -->
  </div>


<div class="modal fade" id="signbox" tabindex="-1">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">簽核</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">


<div class="d-flex align-items-center justify-content-between">
            <div class="">簽核意見</div>
            <div>
             
            </div>
          </div>
          <textarea class="form-control mt-2" rows="3" v-model="comment"></textarea>


         <div class="form-check form-switch mt-2">
    <input class="form-check-input"
           type="checkbox"
           role="switch"
           id="switchCheckA"
           v-model="switchA">
    <label class="form-check-label" for="switchCheckA">加簽</label>
</div>

 <div class="ochiform TitleLength05" id="addsignpeople" v-show="switchA">
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
              <button type="button" class="btn btn-danger text-white me-1" @click="handleReject" :disabled="isSubmitting">否決</button>
              <button type="button" class="btn btn-dark me-1" @click="handleReturn" :disabled="isSubmitting" v-show="isReturnButtonVisible">退回</button>
              <button type="button" class="btn btn-dark me-1" @click="handleSkip" :disabled="isSubmitting" v-show="isSkipButtonVisible">跳關</button>
              <button type="button" class="btn btn-primary" @click="handleApprove" :disabled="isSubmitting">同意</button>
            </div>
    </div>
  </div>
</div>

</template>

<script>
import axios from 'axios';
import $ from 'jquery';
import 'jstree/dist/jstree.min.js';
import 'jstree/dist/themes/default/style.min.css';
import * as bootstrap from 'bootstrap';

export default {
  name: 'ReceiveDocView_D2',
  data() {
    return {
      applicationForm: null,
      approvals: [],
      isLoadingForm: false,
      isLoadingApprovals: false,
      switchA: false,   // 預設不顯示
      // 新增簽核 modal 狀態
      selectedApproval: null,
      comment: '',
      signType: null,
      isSubmitting: false,
      signboxModal: null,
    };
  },

  computed: {
    /**
     * isReturnButtonVisible
     * 目的：判斷「退回」按鈕是否應顯示
     * 規則：只在簽核者為「主任」或「經理」時顯示
     */
    isReturnButtonVisible() {
      if (!this.selectedApproval || !this.selectedApproval.signatory) {
        return false;
      }
      const signatory = this.selectedApproval.signatory;
      return signatory === '主任' || signatory === '經理';
    },
    // isSkipButtonVisible: 顯示條件 => 簽核者為「承辦人」且簽核狀態為「經理-退回」
    isSkipButtonVisible() {
      // 如果沒有選到任何簽核項目，或 approvals 資料為空，則不顯示
      if (!this.selectedApproval || !Array.isArray(this.approvals) || this.approvals.length === 0) return false;

      // 確保目前簽核者是承辦人（通常 UI 開啟簽核 modal 時就是該履歷）
      if (this.selectedApproval.signatory !== '承辦人') return false;

      // 透過 id 或物件參考找到目前簽核在 approvals 陣列中的 index
      const selId = this.selectedApproval && (this.selectedApproval.id != null ? this.selectedApproval.id : null);
      let idx = -1;
      if (selId != null) {
        idx = this.approvals.findIndex(a => a && a.id === selId);
      }
      if (idx === -1) {
        idx = this.approvals.findIndex(a => a === this.selectedApproval);
      }

      // 如果找不到或已經是第一筆記錄（沒有前一筆），則不顯示
      if (idx <= 0) return false;

      const prev = this.approvals[idx - 1];
      if (!prev) return false;

      // 顯示條件：前一筆簽核者是經理，且狀態為 '經理-退回'
      return prev.signatory === '經理' && prev.state === '經理-退回';
    },
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

  // 透過程式建立 signbox 的 modal 實體
  try {
    const modalEl = document.getElementById('signbox');
    if (modalEl) this.signboxModal = new bootstrap.Modal(modalEl);
  } catch (err) {
    console.error('[ReceiveDocView_D2] modal init error:', err);
  }
 
  },

  created() {
    // ===== 步驟 1：取得路由參數並開始載入資料 =====
    this.init();
  },
  methods: {
    // ===== UI helper: approval actionability =====
    isActionableApproval(item) {
      if (!item || !item.state) return false;
      const st = String(item.state).trim();
      return st === '修改中' || st === '審核中';
    },
    /**
     * init()
     * 目的：載入申請表單與簽核紀錄的進入點。
     * 行為：讀取路由參數 `id`，並依序呼叫 fetchApplicationForm() 與 fetchApprovalForms()。
     */
    async init() {
      try {
        const id = this.$route && this.$route.params && this.$route.params.id ? this.$route.params.id : null;
        console.log('[ReceiveDocView_D2] init() route id =', id);
        if (!id) {
          console.warn('[ReceiveDocView_D2] No id found in route params.');
          return;
        }

        // 取得主要申請表單
        const processInstanceId = await this.fetchApplicationForm(id);

        // 如果成功取得流程實例 ID，則接著取得簽核紀錄
        if (processInstanceId) {
          await this.fetchApprovalForms(processInstanceId);
        } else {
          console.warn('[ReceiveDocView_D2] No processInstanceId returned; skipping approvals fetch.');
        }
      } catch (err) {
        console.error('[ReceiveDocView_D2] init() error:', err);
      }
    },

    /**
     * fetchApplicationForm(id)
     * 目的：透過 PostgREST 代理，依據 id 取得申請表單。
     * API：GET /postgrest/application_form?id=eq.<ID>
     * 回傳：process_instance_id (字串) 或 null
     * 回應格式：物件陣列 (PostgREST 會回傳陣列)
     */
    async fetchApplicationForm(id) {
      // ===== 步驟 2：取得主要表單 =====
      this.isLoadingForm = true;
      try {
        console.log(`[ReceiveDocView_D2] fetching application_form for id=${id}`);
        const resp = await axios.get(`/postgrest/application_form?id=eq.${id}`);
        console.log('[ReceiveDocView_D2] application_form response:', resp);

        const data = resp && resp.data ? resp.data : null;
        if (!data || !Array.isArray(data) || data.length === 0) {
          console.warn('[ReceiveDocView_D2] No application_form found for id=', id);
          this.applicationForm = null;
          // 如果存在，則清除 DOM 目標
          this.fillFormDom(null);
          return null;
        }

        // PostgREST 會回傳陣列；取第一個元素
        this.applicationForm = data[0];
        console.log('[ReceiveDocView_D2] loaded applicationForm:', this.applicationForm);

        // 根據請求，填入指定的 DOM 元素 (ID：formid, formtitle, formcontent, formstate)
        this.fillFormDom(this.applicationForm);

        // 回傳 process_instance_id 供下一步使用
        return this.applicationForm.process_instance_id || null;
      } catch (err) {
        console.error('[ReceiveDocView_D2] fetchApplicationForm error:', err);
        this.applicationForm = null;
        this.fillFormDom(null);
        return null;
      } finally {
        this.isLoadingForm = false;
      }
    },

    /**
     * fillFormDom(form)
     * 目的：將資料填入舊有程式碼或腳本所需的 DOM 元素中。
     * 如果 `form` 為 null，則填入預設的 placeholder。
     */
    fillFormDom(form) {
      // ===== 步驟 3：插入表單資料 =====
      try {
        const idEl = document.getElementById('formid');
        const titleEl = document.getElementById('formtitle');
        const contentEl = document.getElementById('formcontent');
        const stateEl = document.getElementById('formstate');

        if (idEl) idEl.innerText = form && form.id != null ? String(form.id) : '--';
        if (titleEl) titleEl.innerText = form && form.title ? form.title : '--';
        if (contentEl) contentEl.innerText = form && form.content ? form.content : '--';
        if (stateEl) stateEl.innerText = form && form.state ? form.state : '--';
      } catch (err) {
        console.error('[ReceiveDocView_D2] fillFormDom error:', err);
      }
    },

    /**
     * fetchApprovalForms(processInstanceId)
     * 目的：透過 PostgREST 代理，取得與某個流程實例相關的簽核紀錄。
     * API：GET /postgrest/approval_form?process_instance_dad_id=eq.<process_instance_id>
     * 回應格式：簽核物件的陣列
     */
    async fetchApprovalForms(processInstanceId) {
      // ===== 步驟 4：取得簽核紀錄 =====
      this.isLoadingApprovals = true;
      try {
        console.log(`[ReceiveDocView_D2] fetching approval_form for process_instance_dad_id=${processInstanceId}`);
        const resp = await axios.get(`/postgrest/approval_form?process_instance_dad_id=eq.${processInstanceId}`);
        console.log('[ReceiveDocView_D2] approval_form response:', resp);

        const data = resp && resp.data ? resp.data : [];
        if (!Array.isArray(data)) {
          console.warn('[ReceiveDocView_D2] approval_form response is not array; setting empty list');
          this.approvals = [];
        } else {
          this.approvals = data;
        }

        // 為相容可能透過 id 讀取表格的舊腳本，確保表格內容由 Vue 填充並存在。
        console.log('[ReceiveDocView_D2] approvals loaded count=', this.approvals.length);
      } catch (err) {
        console.error('[ReceiveDocView_D2] fetchApprovalForms error:', err);
        this.approvals = [];
      } finally {
        this.isLoadingApprovals = false;
      }
    },

    /**
     * openSignModal(item)
     * 設定目前要操作的簽核項目並顯示 modal
     */
    openSignModal(item) {
      this.selectedApproval = item || null;
      this.comment = item && item.content ? item.content : '';
      this.signType = null;
      // 透過程式觸發顯示 modal
      try {
        if (this.signboxModal) this.signboxModal.show();
        else {
          const el = document.getElementById('signbox');
          if (el) new bootstrap.Modal(el).show();
        }
      } catch (err) {
        console.error('[ReceiveDocView_D2] openSignModal error:', err);
      }
    },

    async handleReject() {
      // 在執行否決前先顯示確認對話框
      try {
        const confirmed = window.confirm('確定要否決此簽核嗎？此動作將無法還原。');
        if (!confirmed) return;
      } catch (e) {
        // 如果 window.confirm 不可用，仍繼續
      }

      this.isSubmitting = true;
      try {
        // Step 1: PATCH 更新 approval_form
        const approvalId = this.selectedApproval && this.selectedApproval.id ? this.selectedApproval.id : null;
        if (!approvalId) {
          throw new Error('[ReceiveDocView_D2] handleReject: 無法取得 approvalId');
        }

        const signContent = this.comment || '';
        const now = new Date();
        const datePart = now.toLocaleDateString('sv-SE', { timeZone: 'Asia/Taipei' });
        const timePart = now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Taipei', hour12: false });
        const formattedDate = `${datePart} ${timePart}`;

        const patchApprovalBody = {
          content: signContent,
          state: '否決',
          date: formattedDate,
        };

        console.log('[ReceiveDocView_D2] Step 1: PATCH approval_form', { approvalId, patchApprovalBody });
        const patchApprovalResp = await axios.patch(`/postgrest/approval_form?id=eq.${approvalId}`, patchApprovalBody);
        console.info('[ReceiveDocView_D2] Step 1: approval_form updated', patchApprovalResp && patchApprovalResp.status);

        // Step 2: PATCH 更新 application_form
        const applicationId = (this.$route && this.$route.params && this.$route.params.id)
          ? this.$route.params.id
          : (this.applicationForm && this.applicationForm.id ? this.applicationForm.id : null);

        if (!applicationId) {
          throw new Error('[ReceiveDocView_D2] handleReject: 無法取得 applicationId');
        }

        const patchApplicationBody = {
          state: '否決',
          date: formattedDate,
        };

        console.log('[ReceiveDocView_D2] Step 2: PATCH application_form', { applicationId, patchApplicationBody });
        const patchAppResp = await axios.patch(`/postgrest/application_form?id=eq.${applicationId}`, patchApplicationBody);
        console.info('[ReceiveDocView_D2] Step 2: application_form updated', patchAppResp && patchAppResp.status);

        // 隱藏 modal 並導頁
        if (this.signboxModal) this.signboxModal.hide();
        this.$router.push('/PendingReceiveViewD');

      } catch (err) {
        console.error('[ReceiveDocView_D2] handleReject error:', err && (err.response || err.message) ? (err.response || err.message) : err);
      } finally {
        this.isSubmitting = false;
      }
    },

    async handleReturn() {
      this.isSubmitting = true;
      try {
        // Step 0: 基本資料檢查
        const approvalId = this.selectedApproval && this.selectedApproval.id ? this.selectedApproval.id : null;
        if (!approvalId) {
          throw new Error('[ReceiveDocView_D2] handleReturn: 無法取得 approvalId');
        }

        const signContent = this.comment || '';

        const now = new Date();
        const datePart = now.toLocaleDateString('sv-SE', { timeZone: 'Asia/Taipei' });
        const timePart = now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Taipei', hour12: false });
        const formattedDate = `${datePart} ${timePart}`;

        // 取得簽核者角色與 processInstanceId
        const signerRole = this.selectedApproval && this.selectedApproval.signatory ? this.selectedApproval.signatory : null;
        if (!signerRole) {
          throw new Error('[ReceiveDocView_D2] handleReturn: 無法取得簽核者角色');
        }

        const processInstanceId = this.applicationForm && this.applicationForm.process_instance_id ? this.applicationForm.process_instance_id : null;
        if (!processInstanceId) {
          throw new Error('[ReceiveDocView_D2] handleReturn: 無法取得 processInstanceId');
        }

        // Step 1: PATCH 更新 approval_form
        const stateValue = signerRole === '主任' ? '主任-退回' : (signerRole === '經理' ? '經理-退回' : '退回');
        const patchApprovalBody = {
          content: signContent,
          state: stateValue,
          date: formattedDate,
        };

        console.log('[ReceiveDocView_D2] Step 1: PATCH approval_form', { approvalId, patchApprovalBody });
        await axios.patch(`/postgrest/approval_form?id=eq.${approvalId}`, patchApprovalBody);
        console.info('Step 1: 更新 approval_form 完成', formattedDate);

        // Step 2: BPMN 回溯（change-state）
        const FromactivityMap = {
          '主任': 'ReceiveTask_11',
          '經理': 'ReceiveTask_24',
        };
        const fromActivity = FromactivityMap[signerRole];
        if (!fromActivity) {
          throw new Error('[ReceiveDocView_D2] handleReturn: 無法對應 from activityId');
        }

        const changeStateBody = {
          operations: [
            { type: 'MOVE_ACTIVITY_ID_TO', from: fromActivity, to: 'ReceiveTask_52' }
          ]
        };

        console.log('[ReceiveDocView_D2] Step 2: POST change-state', { processInstanceId, changeStateBody });
        await axios.post(`http://localhost:9090/api/flowable/process-instances/${processInstanceId}/change-state`, changeStateBody);

        // Step 3: 查詢 Flowable Execution，尋找 activityId === 'ReceiveTask_52'
        console.log('[ReceiveDocView_D2] Step 3: 查詢 Flowable Execution', { processInstanceId });
        const flowableResp = await axios.get('/flowable/runtime/executions', {
          params: { processInstanceId },
          auth: { username: 'rest-admin', password: 'test' },
        });

        const executionList = flowableResp && flowableResp.data && flowableResp.data.data ? flowableResp.data.data : [];
        const targetExecution = executionList.find(exe => exe.activityId === 'ReceiveTask_52');
        if (!targetExecution) {
          throw new Error('找不到對應 Execution');
        }

        const jobId = targetExecution.id;
        console.debug('Step 2: 找到 jobId', jobId);

        // Step 4: 送出 Flowable Signal
        console.log('[ReceiveDocView_D2] Step 4: 送出 Flowable Signal', { jobId });
        const signalBody = { action: 'signal' };
        await axios.put(`/flowable/runtime/executions/${jobId}`, signalBody, {
          auth: { username: 'rest-admin', password: 'test' }
        });

        // 完成後關閉 modal 並重新整理本頁 (stay on same page)
        try {
          const signboxEl = document.getElementById('signbox');
          if (signboxEl) {
            signboxEl.addEventListener('hidden.bs.modal', () => {
              try { window.location.reload(); } catch (e) { console.warn('[ReceiveDocView_D2] reload failed:', e); }
            }, { once: true });
          }
          if (this.signboxModal) this.signboxModal.hide();
          else if (!signboxEl) {
            try { window.location.reload(); } catch (e) { console.warn('[ReceiveDocView_D2] reload failed:', e); }
          }
        } catch (err) {
          console.error('[ReceiveDocView_D2] error while hiding sign modal or reloading:', err);
          try { window.location.reload(); } catch (e) { console.warn('[ReceiveDocView_D2] reload failed:', e); }
        }

      } catch (error) {
        console.error('Step 錯誤：', error);
      } finally {
        this.isSubmitting = false;
      }
    },

    async handleSkip() {
      this.isSubmitting = true;
      try {
        // Step 0: 基本資料檢查
        const approvalId = this.selectedApproval && this.selectedApproval.id ? this.selectedApproval.id : null;
        if (!approvalId) {
          throw new Error('[ReceiveDocView_D2] handleSkip: 無法取得 approvalId');
        }

        const signContent = this.comment || '';
        const now = new Date();
        const datePart = now.toLocaleDateString('sv-SE', { timeZone: 'Asia/Taipei' });
        const timePart = now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Taipei', hour12: false });
        const formattedDate = `${datePart} ${timePart}`;

        // Step 1: PATCH 更新 approval_form
        const patchApprovalBody = {
          content: signContent,
          state: '完成',
          date: formattedDate,
        };
        await axios.patch(`/postgrest/approval_form?id=eq.${approvalId}`, patchApprovalBody);
        console.info('Step 1: 更新 approval_form 完成', formattedDate);

        // Step 2: BPMN 流程跳關（從 ReceiveTask_8 跳到 ReceiveTask_11）
        const processInstanceId = this.applicationForm && this.applicationForm.process_instance_id ? this.applicationForm.process_instance_id : null;
        if (!processInstanceId) {
          throw new Error('[ReceiveDocView_D2] handleSkip: 無法取得 processInstanceId');
        }

        const changeStateBody = {
          operations: [
            { type: 'MOVE_ACTIVITY_ID_TO', from: 'ReceiveTask_8', to: 'ReceiveTask_11' }
          ]
        };
        await axios.post(`http://localhost:9090/api/flowable/process-instances/${processInstanceId}/change-state`, changeStateBody);

        // Step 3: 查詢 Flowable Execution，取得 ReceiveTask_11 的 execution id
        const flowableResp = await axios.get('/flowable/runtime/executions', {
          params: { processInstanceId },
          auth: { username: 'rest-admin', password: 'test' },
        });
        const executionList = flowableResp && flowableResp.data && flowableResp.data.data ? flowableResp.data.data : [];
        const targetExecution = executionList.find(exe => exe.activityId === 'ReceiveTask_11');
        if (!targetExecution) {
          throw new Error('找不到對應 Execution');
        }
        const jobId = targetExecution.id;
        console.debug('Step 2: 找到 jobId', jobId);

        // Step 4: 送出 Flowable Signal
        const signalBody = { action: 'signal' };
        await axios.put(`/flowable/runtime/executions/${jobId}`, signalBody, {
          auth: { username: 'rest-admin', password: 'test' }
        });

        // 完成後關閉 modal 並重新整理本頁 (stay on same page)
        try {
          const signboxEl = document.getElementById('signbox');
          if (signboxEl) {
            signboxEl.addEventListener('hidden.bs.modal', () => {
              try { window.location.reload(); } catch (e) { console.warn('[ReceiveDocView_D2] reload failed:', e); }
            }, { once: true });
          }
          if (this.signboxModal) this.signboxModal.hide();
          else if (!signboxEl) {
            try { window.location.reload(); } catch (e) { console.warn('[ReceiveDocView_D2] reload failed:', e); }
          }
        } catch (err) {
          console.error('[ReceiveDocView_D2] error while hiding sign modal or reloading:', err);
          try { window.location.reload(); } catch (e) { console.warn('[ReceiveDocView_D2] reload failed:', e); }
        }
      } catch (error) {
        console.error('Step 錯誤：', error);
      } finally {
        this.isSubmitting = false;
      }
    },

    async handleApprove() {
      // 確認操作：要求使用者確認是否確定要同意
      try {
        const confirmed = window.confirm('是否確定同意此簽核？');
        if (!confirmed) return;
      } catch (e) {
        // If confirm is not available, proceed without confirmation (edge case)
        console.warn('[ReceiveDocView_D2] confirm dialog failed or unavailable:', e);
      }
      // 處理加簽模式（若使用者勾選了加簽區塊）
      let addsigntype = null;
      let signlist = null;
      // 使用組件內的 additional 變數概念；若沒有，根據 switchA 推論
      const additional = this.switchA ? 'yes' : 'no';

      this.isSubmitting = true;
      try {
        if (this.switchA) {
          try {
            const sel = document.getElementById('addsigntype');
            addsigntype = sel ? sel.value : null;
          } catch (err) {
            console.warn('[ReceiveDocView_D2] 無法取得 addsigntype:', err);
            addsigntype = null;
          }

          try {
            const checkedNodes = $('#html1').jstree('get_checked', true) || [];
            signlist = Array.isArray(checkedNodes) ? checkedNodes.map(n => n.text) : [];
          } catch (err) {
            console.warn('[ReceiveDocView_D2] 取得 jstree checked nodes 失敗:', err);
            signlist = [];
          }

          console.log('[ReceiveDocView_D2] 加簽模式：', { addsigntype, signlist, additional });
        }

        // ===== Step 1：PATCH 更新 PostgREST approval_form =====
        const approvalId = this.selectedApproval && this.selectedApproval.id ? this.selectedApproval.id : null;
        if (!approvalId) {
          throw new Error('[ReceiveDocView_D2] handleApprove: 無法取得 approvalId');
        }

        const signContent = this.comment || '';
        const now = new Date();
        const datePart = now.toLocaleDateString('sv-SE', { timeZone: 'Asia/Taipei' });
        const timePart = now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Taipei', hour12: false });
        const formattedDate = `${datePart} ${timePart}`;

        const patchBody = {
          content: signContent,
          state: '同意',
          date: formattedDate,
        };

        console.log('[ReceiveDocView_D2] Step 1: 準備 PATCH approval_form', { approvalId, patchBody });
        const patchResp = await axios.patch(`/postgrest/approval_form?id=eq.${approvalId}`, patchBody);
        console.info('Step 1: 更新 approval_form 完成', formattedDate);
        console.log('[ReceiveDocView_D2] Step 1 response:', patchResp);

        // ===== Step 2：查詢 Flowable Execution =====
        // 先取得 applicationForm 的 processInstanceId（父流程）
        const parentProcessInstanceId = this.applicationForm && this.applicationForm.process_instance_id
          ? this.applicationForm.process_instance_id
          : null;
        if (!parentProcessInstanceId) {
          throw new Error('[ReceiveDocView_D2] handleApprove: 無法取得 applicationForm.process_instance_id');
        }

        // 取得簽核者角色 (假設存在 selectedApproval.signatory 或相關欄位)
        const signerRole = this.selectedApproval && this.selectedApproval.signatory
          ? this.selectedApproval.signatory
          : null;
        if (!signerRole) {
          throw new Error('[ReceiveDocView_D2] handleApprove: 無法取得簽核者角色');
        }

        const activityMap = {
          '主任': 'ReceiveTask_11',
          '經理': 'ReceiveTask_24',
          '會辦': 'ReceiveTask_39',
          '承辦人': 'ReceiveTask_8',
        };

        // 若為加簽模式，新增加簽對應事件
        if (this.switchA) {
          activityMap['主任加簽'] = 'IntermediateMessageEventBoundary_20';
          activityMap['經理加簽'] = 'IntermediateMessageEventBoundary_28';
          activityMap['會辦加簽'] = 'IntermediateMessageEventBoundary_43';
        }

        // 當簽核者非「主任」「經理」「會辦」「承辦人」時，使用 ReceiveTask_1，且 processInstanceId 改用 approval_form 的 process_instance_id
        let targetActivityId = activityMap[signerRole];
        let processInstanceToQuery = parentProcessInstanceId;
        if (!targetActivityId) {
          console.log(`[ReceiveDocView_D2] signerRole "${signerRole}" is not a special role; falling back to ReceiveTask_1`);
          targetActivityId = 'ReceiveTask_1';

          // 嘗試從 approval_form (selectedApproval) 取得 process_instance_id（若欄位名稱不同，先嘗試 common candidate keys）
          const approvalProcessInstanceId = this.selectedApproval && (
            this.selectedApproval.process_instance_id || this.selectedApproval.process_instance_dad_id || this.selectedApproval.process_instance
          ) ? (this.selectedApproval.process_instance_id || this.selectedApproval.process_instance_dad_id || this.selectedApproval.process_instance) : null;

          if (approvalProcessInstanceId) {
            processInstanceToQuery = approvalProcessInstanceId;
            console.log('[ReceiveDocView_D2] Using approval_form.process_instance_id for execution query:', processInstanceToQuery);
          } else {
            console.log('[ReceiveDocView_D2] approval_form.process_instance_id not found; using applicationForm.process_instance_id:', processInstanceToQuery);
          }
        }

        // 現在以選定的 processInstanceToQuery 查詢 executions
        console.log('[ReceiveDocView_D2] Step 2: 查詢 Flowable Execution', { processInstanceToQuery });
        const flowableResp = await axios.get('/flowable/runtime/executions', {
          params: { processInstanceId: processInstanceToQuery },
          auth: { username: 'rest-admin', password: 'test' },
        });

        const executionData = flowableResp && flowableResp.data && flowableResp.data.data
          ? flowableResp.data.data
          : [];
        console.log('[ReceiveDocView_D2] Step 2: Flowable response', executionData);

        // 如果為加簽模式，且簽核者為主任/經理/會辦，改用加簽對應的 activityId
        if (this.switchA && signerRole) {
          if (signerRole === '主任') targetActivityId = activityMap['主任加簽'] || targetActivityId;
          if (signerRole === '經理') targetActivityId = activityMap['經理加簽'] || targetActivityId;
          if (signerRole === '會辦') targetActivityId = activityMap['會辦加簽'] || targetActivityId;
        }

        // 從 executionData 中找出符合的 execution
        const targetExecution = executionData.find(exe => exe.activityId === targetActivityId);
        if (!targetExecution) {
          throw new Error('[ReceiveDocView_D2] handleApprove: 找不到對應 Execution');
        }

        const jobId = targetExecution.id;
        console.debug('Step 2: 找到 jobId', jobId);

        // ===== Step 3：送出 Flowable Signal =====
        console.log('[ReceiveDocView_D2] Step 3: 送出 Flowable Signal', { jobId });
        let signalBody = { action: 'signal' };
        if (this.switchA) {
          signalBody = {
            action: 'signal',
            variables: [
              { name: 'signlist', value: signlist || [], type: 'json' },
              { name: 'addsigntype', value: addsigntype }
            ]
          };
        }

        const signalResp = await axios.put(
          `/flowable/runtime/executions/${jobId}`,
          signalBody,
          { auth: { username: 'rest-admin', password: 'test' } }
        );
        console.info('Step 3: 送出 Flowable Signal 完成', signalResp);

        // ===== 完成流程 =====
        console.info('[ReceiveDocView_D2] handleApprove: 所有步驟完成');
        // 此處可以加入成功通知或重新載入資料的邏輯
        // 先關閉 modal，待 modal 隱藏事件後執行頁面重新整理 (reload)
        try {
          const signboxEl = document.getElementById('signbox');
          if (signboxEl) {
            signboxEl.addEventListener('hidden.bs.modal', () => {
              // Reload the page (hard refresh) to reflect changes
              try { window.location.reload(); } catch (e) { console.warn('[ReceiveDocView_D2] reload failed:', e); }
            }, { once: true });
          }
          if (this.signboxModal) this.signboxModal.hide();
          else if (!signboxEl) {
            // If no modal element at all, refresh immediately
            try { window.location.reload(); } catch (e) { console.warn('[ReceiveDocView_D2] reload failed:', e); }
          }
        } catch (err) {
          console.error('[ReceiveDocView_D2] error while hiding sign modal or reloading:', err);
          try { window.location.reload(); } catch (e) { console.warn('[ReceiveDocView_D2] reload failed:', e); }
        }

      } catch (err) {
        console.error('Step 錯誤：', err);
        console.error('[ReceiveDocView_D2] handleApprove error details:', err.response || err.message);
        // 此處可以加入錯誤通知的邏輯
      } finally {
        this.isSubmitting = false;
      }
    },

    /**
     * formatDate(dateString)
     * 目的：用於模板渲染的簡易日期格式化輔助函式。
     * 接受 ISO 字串或 null。回傳本地化的簡短字串或 '--'。
     */
    formatDate(dateString) {
      if (!dateString) return '--';
      try {
        const dt = new Date(dateString);
        if (Number.isNaN(dt.getTime())) return dateString;
        return dt.toLocaleString();
      } catch (err) {
        return dateString;
      }
    },

    // ... 保留空間給此組件中可能存在的其他方法 (請勿移除)
  },
};
</script>

<!--
  ---- 未來開發參考 ----
  - 此檔案使用的 API：
    1) GET /postgrest/application_form?id=eq.<ID>
       - 代理至 http://localhost:3000/application_form?id=eq.<ID>
       - PostgREST 即使是單筆紀錄也會回傳物件陣列。
       - 範例：[{ id:5, title:..., content:..., state:..., applicant:..., process_instance_id:..., date:... }]

    2) GET /postgrest/approval_form?process_instance_dad_id=eq.<process_instance_id>
       - 代理至 http://localhost:3000/approval_form?process_instance_dad_id=eq.<process_instance_id>
       - 回傳一個包含簽核物件的陣列。

  - Flowable REST 摘要：
    Flowable 的端點在 `vue.config.js` 中被設定代理，路徑為 `/flowable`。
    儲存在 application_form 中的 `process_instance_id` 是父 ID，用於取得 approval_form 的紀錄。

  - PostgREST 注意事項：
    PostgREST 查詢集合時總是回傳陣列；即使是過濾查詢 (例如 id=eq.X) 也會回傳陣列。
    組件應處理空陣列的情況。

  - 代理伺服器用法：
    此組件中的 API 呼叫（使用 axios）預設路徑為 `/postgrest/...`，這些請求會透過
    `vue.config.js` 中的設定代理至 `http://localhost:3000`。

  - 擴充建議：
    - 可透過新增卡片區塊及新的方法 (如 fetchAttachments(processInstanceId)) 來加入額外的流程節點 (如附件、歷史紀錄、留言)。
    - 保持方法名稱為動詞形式 (如 fetch..., fill..., format...)，並讓資料屬性名稱清晰 (如 applicationForm, approvals)。
    - 繼續使用 async/await、try/catch 和 console.log 的模式，以利於追蹤與除錯。
-->
