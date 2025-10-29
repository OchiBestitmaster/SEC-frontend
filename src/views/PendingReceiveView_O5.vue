<template>
  <div class="container-ochi w-large-ochi mt-2">

    <div class="filetitlewrapper mt-1">
      <span class="filetitle"><h2>公文查詢</h2></span>
      <span class="itemright"></span>
    </div>
  
    <div class="content-wrapper">

      <div class="card border-nonfocus mt-4 mb-2">
        <div class="card-header bg-nonfocus fs-5">條件查詢</div>
        <div class="card-body">
          <div class="ochiform TitleLength05">  
            <div class="row gy-2 mt-1 align-items-center OchiRow">
              <div class="col-md-6">
                <!-- form item start -->
                <div class="row flex-md-nowrap align-items-center">
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="lokiMail">公文類型</label></div>
                  <div class="col-md-auto flex-grow-1">
                    <select class=" form-select">
                        <option value="" selected disabled>請選擇</option>
                        <option>文件用印申請單</option>
                        <option>繳銷廢舊印信申請單</option>
                        <option>公務用派車單</option>
                        <option>宴客申請單</option>
                        <option>國內旅費報支單</option>
                        <option>國外旅費報支單</option>
                    </select>
                  </div>
                </div><!-- row -->
                <!-- form item end -->
              </div><!-- col -->
              <div class="col-md-6">
                <!-- form item start -->
                <div class="row flex-md-nowrap align-items-center">
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="Name">申請日期</label></div>
                  <div class="col-md-auto flex-grow-1">
                    <div class="d-flex align-items-center flex-nowrap">
                      <div class="flex-grow-1 me-1"><input class="form-control" type="date"></div>
                      <div class="text-center">~</div>
                      <div class="flex-grow-1 ms-1"><input class="form-control" type="date"></div>
                    </div><!-- d-flex -->
                  </div>
                </div><!-- row -->
                <!-- form item end -->
              </div><!-- col -->
            </div><!-- row -->
            <div class="row gy-2 mt-1 align-items-center OchiRow">
              <div class="col-md-6">
                <!-- form item start -->
                <div class="row flex-md-nowrap align-items-center">
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="lokiMail">單號</label></div>
                  <div class="col-md-auto flex-grow-1">
                    <input class="form-control" type="text" placeholder="請輸入單號">
                  </div>
                </div><!-- row -->
                <!-- form item end -->
              </div><!-- col -->
              <div class="col-md-6">
                <!-- form item start -->
                <div class="row flex-md-nowrap align-items-center">
                  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="Name">關鍵字</label></div>
                  <div class="col-md-auto flex-grow-1">
                    <input class="form-control" type="text" placeholder="請輸入關鍵字">
                  </div>
                </div><!-- row -->
                <!-- form item end -->
              </div><!-- col -->
            </div><!-- row -->
          </div>

        <div class="d-flex align-items-center justify-content-between my-2">
        <div class=""></div>
        <div>
          <button type="button" class="btn btn-outline-dark me-1">取消</button>
          <button type="button" class="btn btn-primary me-1">查詢</button>
        </div>
      </div>

        </div>
      </div><!-- card -->
      
        <div class="card border-nonfocus mt-4 mb-2">
        <div class="card-header bg-nonfocus fs-5">公文清單</div>
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
              <td>用印申請單</td>
              <td scope="row" nowrap="">
                <div class="muted">250900012</div>
              </td>
              <td>用印文件名稱</td>
              <td class="text-center">連家玟</td>
              <td class="text-center">2025/10/31</td>
              <td class="text-center">結案</td>
              <td class="text-center">
                <div class="btn-group btn-group-sm" role="group">
                  
                  <a href="/ReceiveDocO4" target="_blank" type="button" class="btn btn-outline-dark">檢視</a>
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
