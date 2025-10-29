<template>
  <div class="container-ochi w-large-ochi mt-2">

    <div class="filetitlewrapper mt-1">
      <span class="filetitle"><h2>收文檢視</h2></span>
      <span class="itemright"></span>
    </div>
  
    <div class="content-wrapper">

     <div class="card border-nonfocus mt-4 mb-2">
            <div class="card-header bg-nonfocus fs-5">基本資料</div>
            <div class="card-body">
              <div class="ochiform TitleLength05">
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA1">表單編號</label></div>
                  <div class="col-md-auto flex-grow-1">
                    台汽電字第1140000125號
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA2">主旨</label></div>
                  <div class="col-md-auto flex-grow-1">
                    114年度擬提供彩色雷射文件輸出設備予貴單位使用，請查照。
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA3">來文字號</label></div>
                  <div class="col-md-auto flex-grow-1">
                    睿字第20250912KH-10485號
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA4">來文單位</label></div>
                  <div class="col-md-auto flex-grow-1">
                    睿朱數位股份有限公司
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA5">申請人</label></div>
                  <div class="col-md-auto flex-grow-1">
                    黃金貝
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA6">部門</label></div>
                  <div class="col-md-auto flex-grow-1">
                    行政管理部
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA7">申請時間</label></div>
                  <div class="col-md-auto flex-grow-1">
                    2025-10-01
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA7">分文者</label></div>
                  <div class="col-md-auto flex-grow-1">
                    何金銀
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA7">附件</label></div>
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
                <div class="fs-5">公文檢視</div>
                <div>

                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="image-containerL">
                <img src="images/demopaper.jpg" class="w-100" />
              </div>

            </div>
          </div><!-- card -->

          <div class="card mt-4 mb-2 border-primary-subtle border-3">
        <div class="card-header bg-primary-subtle">

          <div class="d-flex align-items-center justify-content-between">
            <div class="fs-5 fw-bold">簽辦內容</div>

          </div>
        </div>
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between">
            <div class="">簽辦內容</div>
            <div>
              <select class="form-select form-select-sm">
                <option selected disabled>選擇回覆樣板</option>
                <option>同意辦理，請依權責續行。</option>
                <option>所提建議可行，請參照意見修正後再行報送。</option>
                <option>所提意見甚為妥當，請依此原則推動。</option>
                <option>暫不宜辦理，建議先行觀察後續情勢，再行評估。</option>
              </select>
            </div>
          </div>
          <textarea class="form-control mt-2" rows="3"></textarea>

          <div class="d-flex align-items-center justify-content-between my-2">
            <div class=""></div>
            <div>
              <button type="button" class="btn btn-danger text-white me-1">否決</button>
              <button type="button" class="btn btn-dark me-1" data-bs-toggle="modal" data-bs-target="#backbox">跳關送簽</button>
              <button type="button" class="btn btn-primary me-1" data-bs-toggle="modal" data-bs-target="#customtopicbox">加簽</button>
              <a href="/PendingReceiveViewF2" type="button" class="btn btn-primary" onclick="return confirm('是否確定送出？');">同意</a>
            </div>
          </div>

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
              <th>站點</th>
              <th>簽核者</th>
              <th>簽核意見</th>
              <th>簽核時間</th>
              <th>簽核狀態</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>0</td>
              <td>行政總務組 陳怡君 (E175)</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>行政總務組 主任 邱顯義 (E123)</td>
              <td>同意辦理，請依權責續行。</td>
              <td>2025/10/31</td>
              <td>同意</td>
            </tr>
            <tr>
              <td>1-2</td>
              <td>財務組 主任 黄士晉 (E151)</td>
              <td>所提意見甚為妥當，請依此原則推動。</td>
              <td>2025/10/31</td>
              <td>同意</td>
            </tr>
            <tr>
              <td>2</td>
              <td>行政總務組 經理 王正義 (E112)</td>
              <td>所提建議可行，請參照意見修正後再行報送。</td>
              <td>2025/10/31</td>
              <td><span class=" text-danger">退回</span></td>
            </tr>
            <tr>
              <td>2-1</td>
              <td>行政總務組 陳怡君 (E175)</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <!--<tr>
              <td colspan="5" class="fw-bold">會辦</td>
            </tr>
            <tr>
              <td>3</td>
              <td>技術部 經理 何儀瑜 (E239)</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td colspan="5" class="fw-bold">陳</td>
            </tr>
            <tr>
              <td>4</td>
              <td>副總經理 陳仁豪 (E104)</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>-->
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


 <div class="ochiform TitleLength05">
    <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
      <!-- form item start -->
      <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA100">加簽類型</label></div>
      <div class="col-md-auto flex-grow-1">
        <select class="form-select form-select-sm">
          <option selected disabled>選擇加簽類型</option>
          <option>會簽</option>
          <option>並簽</option>
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
      </div>
      <!-- form item end -->
    </div><!-- row -->
</div>




      </div><!-- modal-body -->
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">取消</button>
        <a href="/PendingReceiveViewM2" type="button" class="btn btn-outline-dark" onclick="return confirm('是否確定送出？');">送出</a>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="backbox" tabindex="-1">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">跳關送簽</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">


 <div class="ochiform TitleLength04">
    <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
      <!-- form item start -->
      <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA100">跳關關卡</label></div>
      <div class="col-md-auto flex-grow-1">
        <select class="form-select form-select-sm">
          <option selected disabled>選擇跳關關卡</option>
          <option>行政總務組 經理 王正義 (E112)</option>
          </select>
      </div>
      <!-- form item end -->
    </div><!-- row -->
</div>




      </div><!-- modal-body -->
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">取消</button>
        <a href="/PendingReceiveViewO2" type="button" class="btn btn-outline-dark" onclick="return confirm('是否確定送出？');">送出</a>
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

<style scoped>

</style>
