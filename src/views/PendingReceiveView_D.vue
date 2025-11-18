<template>
  <div class="container-ochi w-large-ochi mt-2">

    <div class="filetitlewrapper mt-1">
      <div class="filetitle"><h2>簡易簽辦單</h2></div>
      <div class="btnright">
        <a href="/ReceiveDocD" type="button" class="btn btn-outline-dark">新增</a>
      </div>
    </div>
  
    <div class="content-wrapper">

      <div class="card border-nonfocus mt-4 mb-2">
        <div class="card-header bg-nonfocus fs-5">簡易簽辦單列表</div>
        <div class="card-body">
          <table class="table small" id="assigningpaper">
            <thead class="border-bottom border-dark-subtle">
             <tr>
              <th>單號</th>
              <th>主旨</th>
              <th class="text-center">申請者</th>
              <th class="text-center">申請日期</th>
              <th class="text-center">狀態</th>
              <th class="text-center">功能</th>
            </tr>
            </thead>
            <tbody>
              <tr v-if="approvalList.length === 0">
                <td colspan="6" class="text-center">尚無資料</td>
              </tr>
              <tr v-for="item in approvalList" :key="item.id">
                <td class="align-middle">{{ item.id }}</td>
                <td class="align-middle">{{ item.title }}</td>
                <td class="text-center align-middle">{{ item.applicant }}</td>
                <td class="text-center align-middle">{{ formatDate(item.date) }}</td>
                <td class="text-center align-middle">{{ item.state }}</td>
                <td class="text-center align-middle">
                  <div class="btn-group btn-group-sm" role="group">
                    <a :href="`/ReceiveDocD2/${item.id}`" class="btn btn-outline-dark">檢視</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div><!-- card -->

    </div><!-- content-wrapper -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PendingReceiveViewD',
  data() {
    return {
      approvalList: []
    };
  },
  mounted() {
    this.fetchApprovalList();
  },
  methods: {
    async fetchApprovalList() {
      try {
        const res = await axios.get('/postgrest/application_form');
        const data = Array.isArray(res.data) ? res.data : [];
        this.approvalList = data.map(item => ({
          id: item.id,
          title: item.title,
          content: item.content,
          state: item.state,
          applicant: item.applicant,
          process_instance_id: item.process_instance_id,
          date: item.date
        }));
      } catch (error) {
        console.error('Error fetching /approval_form:', error);
      }
    },
    formatDate(value) {
      if (!value) return '';
      const d = new Date(value);
      if (isNaN(d)) return value;
      return d.toLocaleDateString();
    }
  }
};
</script>
