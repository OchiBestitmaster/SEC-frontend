<template>
  <div class="container-ochi w-large-ochi mt-2">

    <div class="filetitlewrapper mt-1">
      <span class="filetitle"><h2>簡易簽辦單</h2></span>
      <span class="itemright"></span>
    </div>
  
    <div class="content-wrapper">

       <div class="card border-nonfocus mt-4 mb-2">
            <div class="card-header bg-nonfocus fs-5">簽核資料</div>
            <div class="card-body">
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
            </div>
          </div><!-- card -->


          <button type="button" class="btn btn-danger text-white me-1">否決</button>
              <button type="button" class="btn btn-dark me-1">退回</button>
              <a href="#" type="button" class="btn btn-primary" onclick="return confirm('是否確定送出？');">同意</a>

   



    </div><!-- content-wrapper -->
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
