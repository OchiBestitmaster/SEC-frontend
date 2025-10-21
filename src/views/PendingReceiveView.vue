<template>
  <div class="container-ochi w-large-ochi mt-2">

    <div class="filetitlewrapper mt-1">
      <span class="filetitle"><h2>待處理收文</h2></span>
      <span class="itemright"></span>
    </div>
  
    <div class="content-wrapper">

      <div class="card border-nonfocus mt-4 mb-2">
        <div class="card-header bg-nonfocus fs-5">收文清單</div>
        <div class="card-body">
          <table class="table small" id="assigningpaper">
            <thead class="border-bottom border-dark-subtle">
            <tr>
              <th>表單編號</th>
              <th>主旨</th>
              <th>來文單位</th>
              <th>來文字號</th>
              <th width="290" class="text-center">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td scope="row" nowrap="">
                <div class="muted">250900012</div>
              </td>
              <td>中央氣象署「綠能領域氣候服務研討會」（10/1 上午）歡迎報名參與。</td>
              <td>台灣雷力企業聯合會TEPA</td>
              <td nowrap="">
                能資字第 11400759780 號
              </td>
              <td class="text-center">
                <div class="btn-group btn-group-sm" role="group">
                  <button type="button" class="btn btn-outline-danger">退回</button>
                  <button type="button" class="btn btn-outline-success">轉發</button>
                  <button type="button" class="btn btn-outline-primary">存查</button>
                  <button type="button" class="btn btn-outline-primary">簽辦</button>
                  <button type="button" class="btn btn-outline-primary">回文</button>
                </div>
              </td>
            </tr>
            <tr>
              <td scope="row">
                <div class="muted">250900011</div>
              </td>
              <td>產業綠領人才：淨零碳規劃管理師培訓課程。</td>
              <td>台灣空氣品質健康安全協會</td>
              <td nowrap="">
                能資字第 11400759780 號
              </td>
              <td class="text-center">
                <div class="btn-group btn-group-sm" role="group">
                  <button type="button" class="btn btn-outline-danger">退回</button>
                  <button type="button" class="btn btn-outline-success">轉發</button>
                  <button type="button" class="btn btn-outline-primary">存查</button>
                  <button type="button" class="btn btn-outline-primary">簽辦</button>
                  <button type="button" class="btn btn-outline-primary">回文</button>
                </div>
              </td>
            </tr>

            <tr>
              <td scope="row">
                <div class="muted">250900010</div>
              </td>
              <td>數位發展部資通安全署於 114 年 9 月 5 日辦理「關鍵基礎設施資安檢測實務經驗與關鍵分享暨工控系統資訊安全基礎說明會議」，相關會議事項請依期辦理。</td>
              <td>數發部</td>
              <td nowrap="">
                能資字第 11400759780 號
              </td>
              <td class="text-center">
                <div class="btn-group btn-group-sm" role="group">
                  <button type="button" class="btn btn-outline-danger">退回</button>
                  <button type="button" class="btn btn-outline-success">轉發</button>
                  <button type="button" class="btn btn-outline-primary">存查</button>
                  <button type="button" class="btn btn-outline-primary">簽辦</button>
                  <button type="button" class="btn btn-outline-primary">回文</button>
                </div>
              </td>
            </tr>

            <tr>
              <td scope="row">
                <div class="muted">250900009</div>
              </td>
              <td>敬邀貴公司參與「2025 第四屆亞太永續博覽會（SDG Asia）」；共襄盛舉感受各界企業永續轉型成果，並協助辦理，請查照。</td>
              <td>財團法人台灣永續能源研究基金會</td>
              <td>
                （114）永研字第
                11400795092 號
              </td>
              <td class="text-center">
                <div class="btn-group btn-group-sm" role="group">
                  <button type="button" class="btn btn-outline-danger">退回</button>
                  <button type="button" class="btn btn-outline-success">轉發</button>
                  <button type="button" class="btn btn-outline-primary">存查</button>
                  <button type="button" class="btn btn-outline-primary">簽辦</button>
                  <button type="button" class="btn btn-outline-primary">回文</button>
                </div>
              </td>
            </tr>

            <tr>
              <td scope="row">
                <div class="muted">250900008</div>
              </td>
              <td>本局原訂於 114 年 9 月 2 日上午假官田工業區職業安全衛生中心辦理「臺南市政府勞工局暨勞檢安全衛生聯繫會議」</td>
              <td>臺南市政府勞工局</td>
              <td>
                南市高字第
                11412375287 號
              </td>
              <td class="text-center">
                <div class="btn-group btn-group-sm" role="group">
                  <button type="button" class="btn btn-outline-danger">退回</button>
                  <button type="button" class="btn btn-outline-success">轉發</button>
                  <button type="button" class="btn btn-outline-primary">存查</button>
                  <button type="button" class="btn btn-outline-primary">簽辦</button>
                  <button type="button" class="btn btn-outline-primary">回文</button>
                </div>
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




    </div><!-- content-wrapper -->
  </div>
</template>

<script>

export default {
 
};
</script>
