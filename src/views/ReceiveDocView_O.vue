<template>
  <div class="container-ochi w-large-ochi mt-2">

    <div class="filetitlewrapper mt-1">
      <span class="filetitle"><h2>收文檢視</h2></span>
      <span class="itemright"></span>
    </div>
  
    <div class="content-wrapper">

      <div class="row">
        <div class="col-xl-6">
          <div class="card border-nonfocus mt-4 mb-2">
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
          <div class="card border-nonfocus mt-4 mb-2">
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
            <div class="fs-5 fw-bold">簽辦流程</div>
            <div>
              <button type="button" class="btn btn-sm btn-outline-dark" >修改</button>
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
            </tbody>
          </table>
        </div>
      </div><!-- card -->

      <div :class="getCardClasses(switchA)">
        <div :class="getHeaderClasses(switchA)">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckA" v-model="switchA">
            <label class="form-check-label" for="switchCheckA">會辦</label>
          </div>
        </div>
        <div class="card-body p-0">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" :disabled="!switchA" v-model="checkbox1">
              <label class="form-check-label" for="firstCheckbox">行政管理部-主任-經理</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" :disabled="!switchA" v-model="checkbox2">
              <label class="form-check-label" for="secondCheckbox">財務部-主任-經理</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" :disabled="!switchA" v-model="checkbox3">
              <label class="form-check-label" for="thirdCheckbox">技術部-經理</label>
            </li>
          </ul>
        </div>
      </div><!-- card -->

      <div :class="getCardClasses(switchB)">
        <div :class="getHeaderClasses(switchB)">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckB" v-model="switchB">
            <label class="form-check-label" for="switchCheckB">陳</label>
          </div>
        </div>
        <div class="card-body p-0">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <input class="form-check-input me-1" type="radio" value="vp" id="firstRadio" name="toboss" :disabled="!switchB" v-model="tobossSelection">
              <label class="form-check-label" for="firstRadio">副總經理</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="radio" value="vp-gm" id="secondRadio" name="toboss" :disabled="!switchB" v-model="tobossSelection">
              <label class="form-check-label" for="secondRadio">副總經理-總經理</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="radio" value="vp-gm-chairman" id="thirdRadio" name="toboss" :disabled="!switchB" v-model="tobossSelection">
              <label class="form-check-label" for="thirdRadio">副總經理-總經理-董事長</label>
            </li>
          </ul>
        </div>
      </div><!-- card -->

      <div :class="getCardClasses(switchC)">
        <div :class="getHeaderClasses(switchC)">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckC" v-model="switchC">
            <label class="form-check-label" for="switchCheckC">費用核銷</label>
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
              <td></td>
              <td>財務組 陳欣婷 (E326)</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>財務組 主任 鐘平仁 (E120)</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div><!-- card -->

      <div class="d-flex align-items-center justify-content-between my-2">
        <div class=""></div>
        <div>
          <button type="button" class="btn btn-outline-primary me-1">重設</button>
          <button type="button" class="btn btn-primary me-1">加簽</button>
          <a href="/PendingReceiveViewO2" type="button" class="btn btn-primary" onclick="return confirm('是否確定送出？');">送出</a>
        </div>
      </div>




    </div><!-- content-wrapper -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      scale: 0.38, // 初始縮放比例
      switchA: false,
      switchB: false,
      switchC: false,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      tobossSelection: ''
    };
  },
  mounted() {
    // 組件掛載後初始化
    this.updateZoom();
  },
  watch: {
    switchA(newVal) {
      if (!newVal) {
        this.checkbox1 = false;
        this.checkbox2 = false;
        this.checkbox3 = false;
      }
    },
    switchB(newVal) {
      if (!newVal) {
        this.tobossSelection = '';
      }
    }
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
    },
    getCardClasses(switchState) {
      return {
        'card mt-4 mb-2': true,
        'border-primary-subtle border-3': switchState
      };
    },
    getHeaderClasses(switchState) {
      return {
        'card-header fs-5 fw-bold': true,
        'bg-primary-subtle': switchState
      };
    }
  }
};
</script>

<style scoped>

</style>
