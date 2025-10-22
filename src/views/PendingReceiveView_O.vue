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
              <th>表單名稱</th>
              <th>表單編號</th>
              <th>主旨</th>
              <th class="text-center">申請者</th>
              <th class="text-center">申請日期</th>
              <th class="text-center">表單狀態</th>
              <th class="text-center">審核狀態</th>
              <th class="text-center">功能</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>收文表單</td>
              <td scope="row" nowrap="">
                <div class="muted">250900012</div>
              </td>
              <td>台灣雷力企業聯合會TEPA</td>
              <td class="text-center">何金銀</td>
              <td class="text-center">2025/10/29</td>
              <td class="text-center">結案</td>
              <td class="text-center" nowrap="">核准</td>
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
