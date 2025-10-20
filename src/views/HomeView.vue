<template>
  <div class="container-ochi w-large-ochi mt-2">

    <div class="content-wrapper">
     <div class="row mt-3">
        <div class="col">
          <div class="card shadow-sm custom-border-start-A">
            <div class="card-body">
              <div class=" d-flex justify-content-between align-items-center">
                <div class="">
                  <div class="display-6 text-primary">12</div>
                  <div>待處理公文</div>
                </div>
                <div class="">
                  <i class="fa-solid fa-pen-to-square text-primary opacity-25 fs-1"></i>
                </div>
              </div>
            </div><!-- card-body -->
          </div><!-- card -->
        </div><!-- col -->
       <div class="col">
         <div class="card shadow-sm custom-border-start-C">
           <div class="card-body">
             <div class=" d-flex justify-content-between align-items-center">
               <div class="">
                 <div class="display-6 text-success">9</div>
                 <div>簽核中公文</div>
               </div>
               <div class="">
                 <i class="fa-solid fa-paper-plane text-success opacity-25 fs-1"></i>
               </div>
             </div>
           </div><!-- card-body -->
         </div><!-- card -->
       </div><!-- col -->
       <div class="col">
         <div class="card shadow-sm custom-border-start-B">
           <div class="card-body">
             <div class=" d-flex justify-content-between align-items-center">
               <div class="">
                 <div class="display-6 text-warning">5</div>
                 <div>即將逾期公文</div>
               </div>
               <div class="">
                 <i class="fa-solid fa-circle-info text-warning opacity-25 fs-1"></i>
               </div>
             </div>
           </div><!-- card-body -->
         </div><!-- card -->
       </div><!-- col -->
       <div class="col">
         <div class="card shadow-sm custom-border-start-D">
           <div class="card-body">
             <div class=" d-flex justify-content-between align-items-center">
               <div class="">
                 <div class="display-6 text-danger">3</div>
                 <div>逾期公文</div>
               </div>
               <div class="">
                <i class="fa-solid fa-exclamation text-danger opacity-25 fs-1"></i>
               </div>
             </div>
           </div><!-- card-body -->
         </div><!-- card -->
       </div><!-- col -->
     </div><!-- row -->

      <div class="card mt-4 mb-2 border-nonfocus">
        <div class="card-header bg-nonfocus fs-5">公文總覽</div>
        <div class="card-body">
          <table class="table small">
            <thead class="border-bottom border-dark-subtle">
            <tr>
              <th>表單編號</th>
              <th nowrap="">申請者</th>
              <th>來文單位</th>
              <th>來文字號</th>
              <th>主旨</th>
              <th>狀態</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td scope="row" nowrap="">
                <div class="muted">250900012</div>
              </td>
              <td>何金銀</td>
              <td>台灣雷力企業聯合會TEPA</td>
              <td>能資字第 11407059780 號</td>
              <td>中央氣象署「綠能領域氣候服務研討會」（10/1 上午）歡迎報名參與。</td>
              <td class="status" nowrap="">處理中</td>
            </tr>

            <tr>
              <td scope="row">
                <div class="muted">250900011</div>
              </td>
              <td>何金銀</td>
              <td>台灣空氣品質健康安全協會</td>
              <td>能資字第 114002 53780 號</td>
              <td>產業綠領人才：淨零碳規劃管理師培訓課程。</td>
              <td class="status">處理中</td>
            </tr>

            <tr>
              <td scope="row">
                <div class="muted">250900010</div>
              </td>
              <td>翁亞筠</td>
              <td>經濟部能源署</td>
              <td nowrap="">
                能資字第 11400759780 號
              </td>
              <td>數位發展部資通安全署「關鍵基礎設施資安檢測實務經驗與關鍵分享暨工控系統資訊安全基礎說明會議」</td>
              <td class="status">處理中</td>
            </tr>

            <tr>
              <td scope="row">
                <div class="muted">250900009</div>
              </td>
              <td>何金銀</td>
              <td>財團法人台灣永續能源研究基金會</td>
              <td>
                （114）永研字第
                11400795092 號
              </td>
              <td>敬邀貴公司參與「2025 第四屆亞太永續博覽會（SDG Asia）」</td>
              <td class="status">處理中</td>
            </tr>

            <tr>
              <td scope="row">
                <div class="muted">250900008</div>
              </td>
              <td>何金銀</td>
              <td>臺南市政府勞工局</td>
              <td>
                南市高字第 11412375287 號
              </td>
              <td>本官田工業區職業安全衛生中心辦理「臺南市政府勞工局暨勞檢安全衛生聯繫會議」</td>
              <td class="status">處理中</td>
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
