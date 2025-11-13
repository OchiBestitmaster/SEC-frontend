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
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA3">單號</label></div>
                  <div class="col-md-auto flex-grow-1">
                    
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA1">主旨</label></div>
                  <div class="col-md-auto flex-grow-1">
                    
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA2">內容</label></div>
                  <div class="col-md-auto flex-grow-1">
                    
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA4">狀態</label></div>
                  <div class="col-md-auto flex-grow-1">
                    
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
              </div><!-- ochiform -->
            </div>
          </div><!-- card -->

      <div class="card border-nonfocus mt-4 mb-2">
        <div class="card-header bg-nonfocus">

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
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="align-middle">申請者</td>
              <td class="align-middle"></td>
              <td class="align-middle"></td>
              <td class="align-middle"></td>
              <td>
                <div class="btn-group btn-group-sm" role="group">
                  <a href="/ReceiveDocViewM" type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#signbox">簽核</a>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div><!-- card -->



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




      </div><!-- modal-body -->
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#signbox">取消</button>
        <a href="/PendingReceiveViewM2" type="button" class="btn btn-outline-dark" onclick="return confirm('是否確定送出？');">送出</a>
      </div>
    </div>
  </div>
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
          <textarea class="form-control mt-2" rows="3"></textarea>


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
        <select class="form-select form-select-sm">
          <option selected disabled>選擇加簽類型</option>
          <option>會簽</option>
          <option>串簽</option>
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
         <button type="button" class="btn btn-danger text-white me-1">否決</button>
              <button type="button" class="btn btn-dark me-1">退回</button>
              <a href="/PendingReceiveViewF2" type="button" class="btn btn-primary" onclick="return confirm('是否確定送出？');">同意</a>
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
            switchA: false,   // 預設不顯示
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

};
</script>

<style scoped>

</style>
