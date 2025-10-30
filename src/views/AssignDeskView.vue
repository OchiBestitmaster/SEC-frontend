<template>
  <div class="container-ochi w-large-ochi mt-2">

    <div class="filetitlewrapper mt-1">
      <span class="filetitle"><h2>收文分案</h2></span>
      <span class="itemright"></span>
    </div>
  
    <div class="content-wrapper">

      <div class="row">
        <div class="col-xl-8">
          <div class="card border-nonfocus mt-4 mb-2">
            <div class="card-header bg-nonfocus fs-5">待分案公文</div>
            <div class="card-body">
              <table class="table small" id="assigningpaper">
                <thead class="border-bottom border-dark-subtle">
                <tr>
                  <th width="60">選擇</th>
                  <th class="text-nowrap">表單編號</th>
                  <th class="text-nowrap">主旨</th>
                  <th class="text-nowrap">來文單位</th>
                  <th class="text-nowrap">來文字號</th>
                  <th class="text-center" width="80">狀態</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in assigningList" :key="item.id" v-show="!item.assigned">
                  <td class="text-center">
                    <div class="form-check d-md-inline-block">
                      <input class="form-check-input" type="checkbox" :id="`chk-${item.id}`" v-model="item.selected" @change="onSelect(item)">
                    </div>
                  </td>
                  <td scope="row" nowrap="">
                    <div class="muted"><a :href="`/ReceiveDocViewonly`" target="_blank">{{ item.id }}</a></div>
                  </td>
                  <td v-html="item.title"></td>
                  <td>{{ item.unit }}</td>
                  <td nowrap="">{{ item.docNo }}</td>
                  <td class="text-center"><span :class="item.statusClass" v-if="item.status" v-html="item.statusText"></span><span v-else class="text-center">待分案</span></td>
                </tr>
                <tr v-if="assigningList.filter(i => !i.assigned).length === 0">
                  <td colspan="6" class="text-center text-muted">目前無待分案項目</td>
                </tr>
                </tbody>
              </table>

              <nav aria-label="Page navigation">
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link">上一頁</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">下一頁</a>
                  </li>
                </ul>
              </nav>

            </div>
          </div><!-- card -->
        </div><!-- col -->
        <div class="col-xl-4">
          <div class="card mt-4 mb-2 border-success-subtle border-3">
            <div class="card-header fs-5 bg-success-subtle fw-bold">已選擇公文</div>
            <div class="card-body">

              <table class="table small" id="assignedpaper">
                <thead class="border-bottom border-dark-subtle">
                <tr>
                  <th class="text-nowrap">表單編號</th>
                  <th class="text-nowrap">主旨</th>
                  <th class="text-nowrap">來文單位</th>
                  <th width="60">移除</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in assignedList" :key="item.id">
                  <td scope="row" nowrap="">
                    <div class="muted">{{ item.id }}</div>
                  </td>
                  <td v-html="item.title"></td>
                  <td>{{ item.unit }}</td>

                  <td class="text-center">
                    <a href="#" class="link-danger" @click.prevent="removeAssigned(item)"><i class="fa-solid fa-trash"></i></a>
                  </td>
                </tr>
                <tr v-if="assignedList.length === 0">
                  <td colspan="4" class="text-center text-muted">尚未選取任何公文</td>
                </tr>

                </tbody>
              </table>

            </div>
          </div><!-- card -->

          <div class="card mt-4 mb-2 border-primary-subtle border-3">
            <div class="card-header fs-5 bg-primary-subtle fw-bold">分案對象</div>
            <div class="card-body">

              <div class="ochiform TitleLength03">
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA1">同仁</label></div>
                  <div class="col-md-auto flex-grow-1">
                    <div class="input-group input-group-sm">
                      <input type="text" class="form-control" aria-label="" id="formA1" v-model="selectedAssignee">
                      <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#customtopicbox">選擇</button>
                    </div>
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA2">說明</label></div>
                  <div class="col-md-auto flex-grow-1">
                    <textarea class="form-control" id="formA2" aria-describedby="formA3" rows="3" v-model="note"></textarea>
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
              </div><!-- ochiform -->
              <div class="text-end mt-2">
                <button class="btn btn-outline-primary me-1">取消</button>
                <button class="btn btn-primary" id="assignsendOK" @click="onSubmit">送出</button>
              </div>

            </div>
          </div><!-- card -->
        </div><!-- col -->
      </div><!-- row -->




    </div><!-- content-wrapper -->
  </div>


<div class="modal fade" id="customtopicbox" tabindex="-1">
  <div class="modal-dialog modal-sm modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">分案對象</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <div id="html1">
  <ul>
    <li>行管部
      <ul>
        <li>連家玟</li>
        <li>馮展榮</li>
        <li>李麗敏</li>
        <li>全嘉傑</li>
        <li>辛文暄</li>
      </ul>
    </li>
    <li>財務部
      <ul>
        <li>黄士晉</li>
        <li>賈宜德</li>
        <li>蔣智安</li>
        <li>包唯中</li>
      </ul>
    </li>
    <li>技術部
      <ul>
        <li>王芷茵</li>
        <li>侯韶恩</li>
        <li>蕭昊天</li>
      </ul>
    </li>
  </ul>
</div>
      </div><!-- modal-body -->
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal" id="treelistOK">確定</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { ref, onMounted } from 'vue';
import $ from 'jquery';
import 'jstree/dist/jstree.min.js';
import 'jstree/dist/themes/default/style.min.css';
import * as bootstrap from 'bootstrap';

export default {
  setup() {
    // sample data (using values similar to the original static rows)
    const assigningList = ref([
      {
        id: '250900011',
        title: '淨零碳規劃管理師培訓課程',
        unit: '台灣空氣品質健康安全協會',
        docNo: '能資字第 11400759780 號',
        status: '',
        statusText: '',
        statusClass: '',
        selected: false,
        assigned: false,
      },
      {
        id: '250900010',
        title: '「關鍵基礎設施資安檢測實務經驗與關鍵分享暨工控系統資訊安全基礎說明會議」',
        unit: '數發部',
        docNo: '能資字第 11400759780 號',
        status: '',
        statusText: '',
        statusClass: '',
        selected: false,
        assigned: false,
      },
      {
        id: '250900009',
        title: '敬邀貴公司參與第四屆亞太永續博覽會',
        unit: '財團法人台灣永續能源研究基金會',
        docNo: '（114）永研字第 11400795092 號',
        status: '',
        statusText: '',
        statusClass: '',
        selected: false,
        assigned: false,
      },
    ]);

    // start with no pre-selected assigned items
    const assignedList = ref([]);

    // ensure items present in assignedList are marked as assigned in assigningList
    const syncAssignedFlags = () => {
      const setAssigned = new Set(assignedList.value.map(a => a.id));
      assigningList.value.forEach(i => {
        i.assigned = setAssigned.has(i.id);
        i.selected = false;
      });
    };

    syncAssignedFlags();

    const selectedAssignee = ref('');
    const note = ref('');

    function onSubmit() {
      if (confirm('是否確定分案?')) {
        // clear form fields
        selectedAssignee.value = '';
        note.value = '';
        
        // clear assigned table and reset flags
        assignedList.value.forEach(item => {
          const orig = assigningList.value.find(i => i.id === item.id);
          if (orig) {
            orig.assigned = false;
            orig.selected = false;
          }
        });
        assignedList.value = [];
      }
    }

    function onSelect(item) {
      // when checkbox toggles
      if (item.selected) {
        // mark assigned and add to assignedList if not exists
        item.assigned = true;
        const exists = assignedList.value.find(a => a.id === item.id);
        if (!exists) {
          assignedList.value.push({ id: item.id, title: item.title, unit: item.unit, docNo: item.docNo });
        }
      } else {
        // uncheck => remove from assignedList
        const idx = assignedList.value.findIndex(a => a.id === item.id);
        if (idx !== -1) assignedList.value.splice(idx, 1);
        item.assigned = false;
      }
    }

    function removeAssigned(item) {
      // remove from assigned list and make it visible again in assigningList
      const idx = assignedList.value.findIndex(a => a.id === item.id);
      if (idx !== -1) assignedList.value.splice(idx, 1);
      const orig = assigningList.value.find(i => i.id === item.id);
      if (orig) {
        orig.assigned = false;
        orig.selected = false;
      }
    }

    onMounted(() => {
      // keep existing jstree initialization and bootstrap tooltip wiring
      $('#html1').jstree({
        core: { themes: { icons: false } },
        plugins: ['checkbox'],
      });

      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      [...tooltipTriggerList].forEach(el => new bootstrap.Tooltip(el));

      // when user clicks 確定, read selected nodes from jstree and populate the input
      $('#treelistOK').on('click', () => {
        const tree = $('#html1').jstree(true);
        if (tree) {
          const nodes = tree.get_selected(true) || [];
          const names = nodes.map(n => n.text).filter(Boolean).join(', ');
          selectedAssignee.value = names;
        }
      });
    });

    return {
      assigningList,
      assignedList,
      selectedAssignee,
      note,
      onSelect,
      onSubmit,
      removeAssigned,
    };
  },
};
</script>
