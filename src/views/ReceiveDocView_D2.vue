<template>
  <div class="container-ochi w-large-ochi mt-2">

    <div class="filetitlewrapper mt-1">
      <div class="filetitle"><h2>簡易簽辦單</h2></div>
      <div class="btnright">
        <a href="/ReceiveDocD" type="button" class="btn btn-outline-dark">新增</a>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    

    </div><!-- content-wrapper -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ReceiveDocView_D2',
  data() {
    return {
      applicationForm: null,
      approvals: [],
      isLoadingForm: false,
      isLoadingApprovals: false,
    };
  },
  created() {
    // ===== Step 1: get route param and start data loading =====
    this.init();
  },
  methods: {
    /**
     * init()
     * Purpose: Entry point to load application form and approval records.
     * Behavior: reads route param `id` and calls fetchApplicationForm(), then fetchApprovalForms().
     */
    async init() {
      try {
        const id = this.$route && this.$route.params && this.$route.params.id ? this.$route.params.id : null;
        console.log('[ReceiveDocView_D2] init() route id =', id);
        if (!id) {
          console.warn('[ReceiveDocView_D2] No id found in route params.');
          return;
        }

        // Fetch main application form
        const processInstanceId = await this.fetchApplicationForm(id);

        // If we got a process instance id, fetch approval records
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
     * Purpose: Retrieve application form by id from PostgREST proxy.
     * API: GET /postgrest/application_form?id=eq.<ID>
     * Returns: process_instance_id (string) or null
     * Response format: array of objects (PostgREST returns array)
     */
    async fetchApplicationForm(id) {
      // ===== Step 2: Fetch main form =====
      this.isLoadingForm = true;
      try {
        console.log(`[ReceiveDocView_D2] fetching application_form for id=${id}`);
        const resp = await axios.get(`/postgrest/application_form?id=eq.${id}`);
        console.log('[ReceiveDocView_D2] application_form response:', resp);

        const data = resp && resp.data ? resp.data : null;
        if (!data || !Array.isArray(data) || data.length === 0) {
          console.warn('[ReceiveDocView_D2] No application_form found for id=', id);
          this.applicationForm = null;
          // clear DOM targets if present
          this.fillFormDom(null);
          return null;
        }

        // PostgREST returns array; take first
        this.applicationForm = data[0];
        console.log('[ReceiveDocView_D2] loaded applicationForm:', this.applicationForm);

        // Fill DOM elements as requested (IDs: formid, formtitle, formcontent, formstate)
        this.fillFormDom(this.applicationForm);

        // return process_instance_id for next step
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
     * Purpose: Populate the DOM elements with IDs required by caller code / legacy scripts.
     * If `form` is null, fills placeholders.
     */
    fillFormDom(form) {
      // ===== Step 3 Insert Form =====
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
     * Purpose: Retrieve approval records related to a process instance from PostgREST proxy.
     * API: GET /postgrest/approval_form?process_instance_dad_id=eq.<process_instance_id>
     * Response format: array of approval objects
     */
    async fetchApprovalForms(processInstanceId) {
      // ===== Step 4: Fetch approvals =====
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

        // For compatibility with any legacy scripts reading table by id, ensure table body exists and is populated by Vue.
        console.log('[ReceiveDocView_D2] approvals loaded count=', this.approvals.length);
      } catch (err) {
        console.error('[ReceiveDocView_D2] fetchApprovalForms error:', err);
        this.approvals = [];
      } finally {
        this.isLoadingApprovals = false;
      }
    },

    /**
     * formatDate(dateString)
     * Purpose: Simple date formatting helper used in template rendering.
     * Accepts ISO strings or null. Returns localized short string or '--'.
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

    // ... keep room for other methods that may exist in this component (do not remove)
  },
};
</script>

<!--
  ---- CONTEXT FOR FUTURE DEVELOPMENT ----
  - APIs used in this file:
    1) GET /postgrest/application_form?id=eq.<ID>
       - Proxied to http://localhost:3000/application_form?id=eq.<ID>
       - PostgREST returns an array of objects (even for single record).
       - Example: [{ id:5, title:..., content:..., state:..., applicant:..., process_instance_id:..., date:... }]

    2) GET /postgrest/approval_form?process_instance_dad_id=eq.<process_instance_id>
       - Proxied to http://localhost:3000/approval_form?process_instance_dad_id=eq.<process_instance_id>
       - Returns an array of approval objects.

  - Flowable REST summary:
    Flowable endpoints are proxied under `/flowable` to Flowable REST (configured in `vue.config.js`).
    The `process_instance_id` stored on the application_form is the parent id used to fetch approval_form records.

  - PostgREST notes:
    PostgREST always returns arrays for collections; filter queries (e.g. id=eq.X) still return arrays.
    Components should guard against empty arrays.

  - Proxy usage:
    API calls in this component assume axios calls to paths like `/postgrest/...` which are proxied
    in `vue.config.js` to `http://localhost:3000`.

  - Extension suggestions:
    - Additional flow nodes (attachments, history, comments) can be added by introducing new cards
      and new methods like fetchAttachments(processInstanceId).
    - Keep method names verb-like (fetch..., fill..., format...) and data properties clear (applicationForm, approvals).
    - Continue using async/await, try/catch, and console.log patterns for traceability.
-->
