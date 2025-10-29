<template>
  <div class="container-ochi w-large-ochi mt-2">

    <div class="filetitlewrapper mt-1">
      <span class="filetitle"><h2>公文檢視</h2></span>
      <span class="itemright"></span>
    </div>
  
    <div class="content-wrapper">

      <div class="row">
       
        <div class="col-xl-12">
          <div class="card border-nonfocus mt-4 mb-2">
            <div class="card-header bg-nonfocus">
              <div class="d-flex align-items-center justify-content-between">
                <div class="fs-5">公文內容</div>
                <div>
                  <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
                    <button type="button" class="btn btn-outline-dark" @click="zoomIn">放大</button>
                    <button type="button" class="btn btn-outline-dark" @click="resetZoom">重置</button>
                    <button type="button" class="btn btn-outline-dark" @click="zoomOut">縮小</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="image-containerL2">
                <img src="images/papersign.jpg" alt="" class=" img-fluid"  />
              </div>

            </div>
          </div><!-- card -->
        </div><!-- col -->
      </div><!-- row -->


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
              <td>2</td>
              <td>行政總務組 經理 王正義 (E112)</td>
              <td>所提意見甚為妥當，請依此原則推動。</td>
              <td>2025/10/31</td>
              <td>同意</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div><!-- card -->

     
    </div><!-- content-wrapper -->
  </div>


<div class="modal fade" id="customsignbox" tabindex="-1">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">自訂流程</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

 <table class="table small" id="assignpeople">
    <thead class="border-bottom border-dark-subtle">
    <tr>
        <th class="text-center">關卡</th>
        <th>簽核者</th>
        <th class="text-center">功能</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td class="text-center align-middle">1</td>
        <td>
            <select class=" form-select">
                <option value="" selected disabled>請選擇</option>
                <optgroup label="行管部">
                    <option value="連家玟">連家玟</option>
                    <option value="馮展榮">馮展榮</option>
                    <option value="李麗敏">李麗敏</option>
                    <option value="全嘉傑">全嘉傑</option>
                    <option value="辛文暄">辛文暄</option>
                </optgroup>

                <optgroup label="財務部">
                    <option value="黄士晉">黄士晉</option>
                    <option value="賈宜德">賈宜德</option>
                    <option value="蔣智安">蔣智安</option>
                    <option value="包唯中">包唯中</option>
                </optgroup>

                <optgroup label="技術部">
                    <option value="王芷茵">王芷茵</option>
                    <option value="侯韶恩">侯韶恩</option>
                    <option value="蕭昊天">蕭昊天</option>
                </optgroup>
            </select>
        </td>
        <td class="text-center">
        <div class="btn-group btn-group-sm" role="group">
            <a href="#" type="button" class="btn btn-outline-danger">刪除</a>
        </div>
        </td>
    </tr>
    <tr>
        <td class="text-center align-middle">2</td>
        <td>
            <select class=" form-select">
                <option value="" selected disabled>請選擇</option>
                <optgroup label="行管部">
                    <option value="連家玟">連家玟</option>
                    <option value="馮展榮">馮展榮</option>
                    <option value="李麗敏">李麗敏</option>
                    <option value="全嘉傑">全嘉傑</option>
                    <option value="辛文暄">辛文暄</option>
                </optgroup>

                <optgroup label="財務部">
                    <option value="黄士晉">黄士晉</option>
                    <option value="賈宜德">賈宜德</option>
                    <option value="蔣智安">蔣智安</option>
                    <option value="包唯中">包唯中</option>
                </optgroup>

                <optgroup label="技術部">
                    <option value="王芷茵">王芷茵</option>
                    <option value="侯韶恩">侯韶恩</option>
                    <option value="蕭昊天">蕭昊天</option>
                </optgroup>
            </select>
        </td>
        <td class="text-center">
        <div class="btn-group btn-group-sm" role="group">
            <a href="#" type="button" class="btn btn-outline-dark">新增</a>
        </div>
        </td>
    </tr>
    </tbody>
</table>
      </div><!-- modal-body -->
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">取消</button>
        <a href="/PendingReceiveViewB2" type="button" class="btn btn-outline-dark" onclick="return confirm('是否確定送出？');">確定</a>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      scale: 0.38 // 初始縮放比例
    };
  },
  mounted() {
    // 組件掛載後初始化
    this.updateZoom();
  },
  methods: {
    zoomIn() {
      this.scale += 0.2;
      this.updateZoom();
    },
    zoomOut() {
      if (this.scale > 0.4) {
        this.scale -= 0.2;
        this.updateZoom();
      }
    },
    resetZoom() {
      this.scale = 0.8;
      this.updateZoom();
    },
    updateZoom() {
      const image = document.getElementById('image');
      const container = document.querySelector('.image-container');
      
      if (image && container) {
        image.style.transform = `scale(${this.scale})`;
        // 僅水平置中
        container.scrollTop = 0;
        container.scrollLeft = (image.offsetWidth * this.scale - container.clientWidth) / 2;
      }
    }
  }
};
</script>

<style scoped>

</style>
