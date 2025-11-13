<template>
  <div class="container-ochi w-large-ochi mt-2">

    <div class="filetitlewrapper mt-1">
      <div class="filetitle"><h2>簡易簽辦單</h2></div>
      <div class="btnright">
        <a href="/ReceiveDocD" type="button" class="btn btn-outline-dark">新增</a>
      </div>
    </div>
  
    <div class="content-wrapper">

      <div class="card border-nonfocus mt-4 mb-2">
        <div class="card-header bg-nonfocus fs-5">簡易簽辦單列表</div>
        <div class="card-body">
          <table class="table small" id="assigningpaper">
            <thead class="border-bottom border-dark-subtle">
             <tr>
              <th>單號</th>
              <th>主旨</th>
              <th class="text-center">申請者</th>
              <th class="text-center">申請日期</th>
              <th class="text-center">狀態</th>
              <th class="text-center">功能</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="align-middle">25252525</td>
              <td class="align-middle">台灣雷力企業聯合會TEPA</td>
              <td class="text-center align-middle">連家玟</td>
              <td class="text-center align-middle">2025/10/31</td>
              <td class="text-center align-middle">審核中</td>
              <td class="text-center align-middle">
                <div class="btn-group btn-group-sm" role="group">
                  <a href="/ReceiveDocViewM" type="button" class="btn btn-outline-dark">檢視</a>
                </div>
              </td>
            </tr>
    </tbody>
          </table>

        

        </div>
      </div><!-- card -->




    </div><!-- content-wrapper -->
  </div>
</template>

<script>

export default {
 
};
</script>
