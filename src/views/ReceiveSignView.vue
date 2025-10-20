<template>
  <div class="container-ochi w-large-ochi mt-2">

    <div class="filetitlewrapper mt-1">
      <span class="filetitle"><h2>收文檢視</h2></span>
      <span class="itemright"></span>
    </div>
  
    <div class="content-wrapper">

      <div class="row">
        <div class="col-xl-6">
          <div class="card mt-4 mb-2 border-nonfocus">
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
        </div><!-- col -->
        <div class="col-xl-6">
          <div class="card mt-4 mb-2 border-nonfocus">
            <div class="card-header bg-nonfocus">
              <div class="d-flex align-items-center justify-content-between">
                <div class="fs-5">公文檢視</div>
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
              <div class="image-container">
                <img id="image" src="images/demopaper.jpg" alt="可縮放圖片" class="zoomable-img" />
              </div>

            </div>
          </div><!-- card -->
        </div><!-- col -->
      </div><!-- row -->

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
              <button type="button" class="btn btn-primary me-1">加簽</button>
              <button type="button" class="btn btn-primary">同意</button>
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
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>行政總務組 經理 王正義 (E112)</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
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
  data() {
    return {
      scale: 0.4 // 初始縮放比例
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
