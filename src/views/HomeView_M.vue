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
        <div class="card-header bg-nonfocus fs-5">我的公文匣</div>
        <div class="card-body">
          <table class="table small">
            <thead class="border-bottom border-dark-subtle">
            <tr>
              <th>表單名稱</th>
              <th>表單編號</th>
              <th>主旨</th>
              <th class="text-center">申請者</th>
              <th class="text-center">申請日期</th>
              <th class="text-center">表單狀態</th>
              <th class="text-center">功能</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="align-middle">收文表單</td>
              <td class="align-middle">
                <div class="muted">250900012</div>
              </td>
              <td class="align-middle">台灣雷力企業聯合會TEPA</td>
              <td class="text-center align-middle">何金銀</td>
              <td class="text-center align-middle">2025/10/29</td>
              <td class="text-center align-middle">審核中</td>
              <td class="text-center">
                <div class="btn-group btn-group-sm" role="group">
                  <button type="button" class="btn btn-outline-dark">檢視</button>
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
