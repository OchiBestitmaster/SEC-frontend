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
                  <td>中央氣象署「綠能領域氣候服務研討會」（10/1 上午）歡迎報名參與。</td>
                  <td>台灣雷力企業聯合會TEPA</td>
                  <td nowrap="">
                    能資字第 11400759780 號
                  </td>
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
                  <td>產業綠領人才：淨零碳規劃管理師培訓課程。</td>
                  <td>台灣空氣品質健康安全協會</td>
                  <td nowrap="">
                    能資字第 11400759780 號
                  </td>
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
                  <td>數位發展部資通安全署於 114 年 9 月 5 日辦理「關鍵基礎設施資安檢測實務經驗與關鍵分享暨工控系統資訊安全基礎說明會議」，相關會議事項請依期辦理。</td>
                  <td>數發部</td>
                  <td nowrap="">
                    能資字第 11400759780 號
                  </td>
                </tr>

                <tr>
                  <td class="text-center">
                    <div class="form-check d-md-inline-block">
                      <input class="form-check-input" type="checkbox" id="checkboxD">
                    </div>
                  </td>
                  <td scope="row">
                    <div class="muted">250900009</div>
                  </td>
                  <td>敬邀貴公司參與「2025 第四屆亞太永續博覽會（SDG Asia）」；共襄盛舉感受各界企業永續轉型成果，並協助辦理，請查照。</td>
                  <td>財團法人台灣永續能源研究基金會</td>
                  <td>
                    （114）永研字第
                    11400795092 號
                  </td>
                </tr>

                <tr>
                  <td class="text-center">
                    <div class="form-check d-md-inline-block">
                      <input class="form-check-input" type="checkbox" id="checkboxE">
                    </div>
                  </td>
                  <td scope="row">
                    <div class="muted">250900008</div>
                  </td>
                  <td>本局原訂於 114 年 9 月 2 日上午假官田工業區職業安全衛生中心辦理「臺南市政府勞工局暨勞檢安全衛生聯繫會議」</td>
                  <td>臺南市政府勞工局</td>
                  <td>
                    南市高字第
                    11412375287 號
                  </td>
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
                  <td scope="row" nowrap="">
                    <div class="muted">250900012</div>
                  </td>
                  <td>中央氣象署「綠能領域氣候服務研討會」（10/1 上午）歡迎報名參與。</td>
                  <td>台灣雷力企業聯合會TEPA</td>

                  <td class="text-center">
                    <a href="#" class="link-danger"><i class="fa-solid fa-trash"></i></a>
                  </td>
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
                      <button class="btn btn-outline-primary">選擇</button>
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
</template>

<script>
export default {
 
};
</script>
