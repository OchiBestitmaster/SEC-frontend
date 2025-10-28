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
                  <th>表單編號</th>
                  <th>主旨</th>
                  <th>來文單位</th>
                  <th>來文字號</th>
                  <th class="text-center">狀態</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td class="text-center">
                    <div class="form-check d-md-inline-block">
                      <input class="form-check-input" type="checkbox" id="checkboxA">
                    </div>
                  </td>
                  <td scope="row" nowrap="">
                    <div class="muted">250900012</div>
                  </td>
                  <td>「綠能領域氣候服務研討會」歡迎報名參與。</td>
                  <td>台灣雷力企業聯合會TEPA</td>
                  <td nowrap="">
                    能資字第 11400759780 號
                  </td>
                  <td class="text-center"><span class="text-danger" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="退回者:連家玟<br>原因:非執行業務">退回</span></td>
                </tr>
                <tr>
                  <td class="text-center">
                    <div class="form-check d-md-inline-block">
                      <input class="form-check-input" type="checkbox" id="checkboxB">
                    </div>
                  </td>
                  <td scope="row">
                    <div class="muted">250900011</div>
                  </td>
                  <td>淨零碳規劃管理師培訓課程</td>
                  <td>台灣空氣品質健康安全協會</td>
                  <td nowrap="">
                    能資字第 11400759780 號
                  </td>
                  <td class="text-center text-nowrap">待分案</td>
                </tr>

                <tr>
                  <td class="text-center">
                    <div class="form-check d-md-inline-block">
                      <input class="form-check-input" type="checkbox" id="checkboxC">
                    </div>
                  </td>
                  <td scope="row">
                    <div class="muted">250900010</div>
                  </td>
                  <td>「關鍵基礎設施資安檢測實務經驗與關鍵分享暨工控系統資訊安全基礎說明會議」</td>
                  <td>數發部</td>
                  <td nowrap="">
                    能資字第 11400759780 號
                  </td>
                  <td class="text-center">待分案</td>
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
                  <th>表單編號</th>
                  <th>主旨</th>
                  <th>來文單位</th>
                  <th width="60">移除</th>
                </tr>
                </thead>
                <tbody>
                <tr>
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
                      <input type="text" class="form-control" aria-label="">
                      <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#customtopicbox">選擇</button>
                    </div>
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA2">說明</label></div>
                  <div class="col-md-auto flex-grow-1">
                    <textarea class="form-control" aria-describedby="formA3" rows="3"></textarea>
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
              </div><!-- ochiform -->
              <div class="text-end mt-2">
                <button class="btn btn-outline-primary me-1">取消</button>
                <button class="btn btn-primary">送出</button>
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
        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">確定</button>
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

  }
};
</script>
