<template>
  <div class="container-ochi w-large-ochi mt-2">

    <div class="filetitlewrapper mt-1">
      <span class="filetitle"><h2>待處理公文</h2></span>
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
              <td class="text-center">連家玟</td>
              <td class="text-center">2025/10/31</td>
              <td class="text-center">審核中</td>
              <td class="text-center">
                <div class="btn-group btn-group-sm" role="group">
                  <a href="/ReceiveDocViewB" type="button" class="btn btn-outline-dark">檢視</a>
                
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


<div class="modal fade" id="backbox" tabindex="-1">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">退回</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
<div class="ochiform TitleLength04">
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA1">表單編號</label></div>
                  <div class="col-md-auto flex-grow-1">
                    
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
                <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA2">主旨</label></div>
                  <div class="col-md-auto flex-grow-1">
                  </div>
                  <!-- form item end -->
                </div><!-- row -->

                 <div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
                  <!-- form item start -->
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA3">退回原因</label></div>
                  <div class="col-md-auto flex-grow-1">
                    <textarea class="form-control" aria-describedby="formA3" rows="3"></textarea>
                  </div>
                  <!-- form item end -->
                </div><!-- row -->
              </div><!-- ochiform -->

      </div><!-- modal-body -->
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">取消</button>
        <a href="/PendingReceiveViewO2" onclick="return confirm('是否確定退回公文？');" type="button" class="btn btn-outline-dark">確定</a>
      </div>
    </div>
  </div>
</div>

</template>

<script>

export default {
 
};
</script>
