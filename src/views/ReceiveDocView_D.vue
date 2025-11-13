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
          <a href="#" type="button" class="btn btn-primary" onclick="return confirm('是否確定送出？');">送出</a>
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
        <a href="#" type="button" class="btn btn-outline-dark" onclick="return confirm('是否確定送出？');" id="formsend">送出</a>
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
export default {
  data() {
    return {
      switchA: false,
      switchB: false,
      switchC: false,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      tobossSelection: ''
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

    
  },
  watch: {
    switchA(newVal) {
      if (!newVal) {
        this.checkbox1 = false;
        this.checkbox2 = false;
        this.checkbox3 = false;
      }
    },
    switchB(newVal) {
      if (!newVal) {
        this.tobossSelection = '';
      }
    }
  },
  methods: {
  
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
    }
  }
};
</script>

<style scoped>

</style>
