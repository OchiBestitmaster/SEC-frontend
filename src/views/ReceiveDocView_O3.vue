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
                <img src="images/docsample.jpg" alt="" class=" img-fluid"  />
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
              <button type="button" class="btn btn-sm btn-outline-dark" data-bs-toggle="modal" data-bs-target="#customsignbox">修改</button>
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

      <div class="card mt-4 mb-2">
        <div class="card-header fs-5  fw-bold">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckA">
            <label class="form-check-label" for="switchCheckA">會辦</label>
          </div>
        </div>
        <div class="card-body p-0">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" disabled>
              <label class="form-check-label" for="firstCheckbox">行政管理部-主任-經理</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" disabled>
              <label class="form-check-label" for="secondCheckbox">財務部-主任-經理</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" disabled>
              <label class="form-check-label" for="thirdCheckbox">技術部-經理</label>
            </li>
          </ul>
        </div>
      </div><!-- card -->

      <div class="card mt-4 mb-2 ">
        <div class="card-header fs-5  fw-bold">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckA">
            <label class="form-check-label" for="switchCheckA">陳</label>
          </div>
        </div>
        <div class="card-body p-0">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <input class="form-check-input me-1" type="radio" value="" id="firstCheckbox" disabled>
              <label class="form-check-label" for="firstCheckbox">副總經理</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox" disabled>
              <label class="form-check-label" for="secondCheckbox">副總經理-總經理</label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox" disabled>
              <label class="form-check-label" for="thirdCheckbox">副總經理-總經理-董事長</label>
            </li>
          </ul>
        </div>
      </div><!-- card -->

      <div class="card mt-4 mb-2">
        <div class="card-header fs-5  fw-bold">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckA">
            <label class="form-check-label" for="switchCheckA">費用核銷</label>
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
          <button type="button" class="btn btn-primary">送出</button>
        </div>
      </div>
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
        <a href="/PendingReceiveViewO6" type="button" class="btn btn-outline-dark" onclick="return confirm('是否確定送出？');">確定</a>
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

    // --- 動態簽核流程表格管理 ---
    const table = document.getElementById('assignpeople');
    if (table) {
      const tbody = table.querySelector('tbody');

      /**
       * @function updateRows
       * @description 更新整個表格的狀態，包括重新編號「關卡」和根據行位置（是否為最後一行）更新「新增」/「刪除」按鈕。
       */
      const updateRows = () => {
        const rows = tbody.querySelectorAll('tr');
        const totalRows = rows.length;

        rows.forEach((row, index) => {
          // 1. 重新編號「關卡」欄位 (第一欄)
          const levelCell = row.cells[0];
          if (levelCell) {
            levelCell.textContent = index + 1;
          }

          // 2. 更新「功能」欄位的按鈕 (第三欄)
          const buttonCell = row.cells[2];
          if (buttonCell) {
            const buttonGroup = buttonCell.querySelector('.btn-group');
            buttonGroup.innerHTML = ''; // 清空現有按鈕

            if (index === totalRows - 1) {
              // 如果是最後一行，顯示「新增」按鈕
              const addButton = document.createElement('a');
              addButton.href = '#';
              addButton.type = 'button';
              addButton.className = 'btn btn-outline-dark btn-add'; // 使用 class 以便於事件綁定
              addButton.textContent = '新增';
              buttonGroup.appendChild(addButton);
            } else {
              // 如果不是最後一行，顯示「刪除」按鈕
              const deleteButton = document.createElement('a');
              deleteButton.href = '#';
              deleteButton.type = 'button';
              deleteButton.className = 'btn btn-outline-danger btn-delete'; // 使用 class 以便於事件綁定
              deleteButton.textContent = '刪除';
              buttonGroup.appendChild(deleteButton);
            }
          }
        });
      };

      // 使用事件委派來處理按鈕點擊，這樣就不用為每個按鈕單獨綁定事件
      tbody.addEventListener('click', (e) => {
        e.preventDefault(); // 防止 <a> 標籤的默認跳轉行為

        // --- 點擊「新增」按鈕的邏輯 ---
        if (e.target && e.target.classList.contains('btn-add')) {
          const currentRow = e.target.closest('tr');
          const newRow = currentRow.cloneNode(true); // 深度複製整列 <tr>

          // 重置新列中 <select> 的值為預設選項
          const select = newRow.querySelector('select');
          if (select) {
            select.selectedIndex = 0;
          }

          tbody.appendChild(newRow); // 將新列添加到表格末尾
          updateRows(); // 新增後更新整個表格狀態
        }

        // --- 點擊「刪除」按鈕的邏輯 ---
        if (e.target && e.target.classList.contains('btn-delete')) {
          const rowToDelete = e.target.closest('tr');
          tbody.removeChild(rowToDelete); // 刪除該列
          updateRows(); // 刪除後更新整個表格狀態
        }
      });

      // --- 組件掛載時，立即執行一次，確保初始狀態正確 ---
      updateRows();
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
    }
  }
};
</script>

<style scoped>

</style>
