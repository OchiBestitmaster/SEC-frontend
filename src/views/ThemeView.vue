<template>
  <div class="container-ochi w-large-ochi mt-2">
   
    <div class="content-wrapper">
        <div class="my-3">

<button class="btn btn-primary">按鈕</button>
<button class="btn btn-secondary">按鈕</button>
<button class="btn btn-info">按鈕</button>
<button class="btn btn-success">按鈕</button>
<button class="btn btn-warning">按鈕</button>
<button class="btn btn-danger">按鈕</button>
<button class="btn btn-dark">按鈕</button>
<button class="btn btn-light">按鈕</button>

</div>

<div class="my-3">

<button class="btn btn-outline-primary">按鈕</button>
<button class="btn btn-outline-secondary">按鈕</button>
<button class="btn btn-outline-info">按鈕</button>
<button class="btn btn-outline-success">按鈕</button>
<button class="btn btn-outline-warning">按鈕</button>
<button class="btn btn-outline-danger">按鈕</button>
<button class="btn btn-outline-dark">按鈕</button>
<button class="btn btn-outline-light">按鈕</button>

</div>

<div class="my-3">

<button class="btn btn-primary btn-sm">按鈕</button>
<button class="btn btn-primary ">按鈕</button>
<button class="btn btn-primary btn-lg">按鈕</button>

</div>

<div class="my-3">

<a href="#" class="link-primary">Primary link</a>
<a href="#" class="link-secondary">Secondary link</a>
<a href="#" class="link-success">Success link</a>
<a href="#" class="link-danger">Danger link</a>
<a href="#" class="link-warning">Warning link</a>
<a href="#" class="link-info">Info link</a>
<a href="#" class="link-light">Light link</a>
<a href="#" class="link-dark">Dark link</a>

<p><a class="link-opacity-10" href="#">Link opacity 10</a></p>
<p><a class="link-opacity-25" href="#">Link opacity 25</a></p>
<p><a class="link-opacity-50" href="#">Link opacity 50</a></p>
<p><a class="link-opacity-75" href="#">Link opacity 75</a></p>
<p><a class="link-opacity-100" href="#">Link opacity 100</a></p>

</div>


<div class="ochiform TitleLength05">
<!-- 基本單欄 -->
<div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
  <!-- form item start -->
  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA1">基本單欄</label></div>
  <div class="col-md-auto flex-grow-1"><input class="form-control" id="formA1" type="text"></div>
  <!-- form item end -->
</div><!-- row -->

<!-- 基本單欄惟讀 -->
<div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
  <!-- form item start -->
  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA2">基本單欄</label></div>
  <div class="col-md-auto flex-grow-1"><input class="form-control-plaintext" id="formA2" type="text" readonly value="惟讀欄位"></div>
  <!-- form item end -->
</div><!-- row -->

<!-- 基本單欄 checkbox -->
<div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
  <!-- form item start -->
  <div class="col-md-auto TitleSetWidth text-md-end">基本單欄</div>
  <div class="col-md-auto flex-grow-1">
    <fieldset>
      <legend class="sr-only">標題欄</legend>
      <div class="form-check d-md-inline-block me-md-3">
        <input class="form-check-input" type="checkbox" id="lokiCheckbox">
        <label class="form-check-label" for="lokiCheckbox">Default checkbox</label>
      </div>
      <div class="form-check d-md-inline-block me-md-3">
        <input class="form-check-input" type="checkbox" id="lokiChecked" checked>
        <label class="form-check-label" for="lokiChecked">Checked checkbox</label>
      </div>
    </fieldset>
  </div>
  <!-- form item end -->
</div><!-- row -->

<!-- 基本單欄 radio -->
<div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
  <!-- form item start -->
  <div class="col-md-auto TitleSetWidth text-md-end">基本單欄</div>
  <div class="col-md-auto flex-grow-1">
    <fieldset>
      <legend class="sr-only">標題欄</legend>
      <div class="form-check d-md-inline-block me-md-3">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">Default radio</label>
      </div>
      <div class="form-check d-md-inline-block me-md-3">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        <label class="form-check-label" for="flexRadioDefault2">Default checked radio</label>
      </div>
    </fieldset>
  </div>
  <!-- form item end -->
</div><!-- row -->

<!-- 基本單欄textarea -->
<div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
  <!-- form item start -->
  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA4">基本單欄</label></div>
  <div class="col-md-auto flex-grow-1"><textarea rows="3" class="form-control" id="formA4"></textarea></div>
  <!-- form item end -->
</div><!-- row -->

<!-- 基本單欄textarea靠上對齊 -->
<div class="row mt-1 flex-md-nowrap OchiRow">
  <!-- form item start -->
  <div class="col-md-auto TitleSetWidth TitleUp text-md-end"><label class="form-label" for="formA5">基本單欄</label></div>
  <div class="col-md-auto flex-grow-1"><textarea rows="3" class="form-control" id="formA5"></textarea></div>
  <!-- form item end -->
</div><!-- row -->

<!-- 基本單欄加按鈕 -->
<div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
  <!-- form item start -->
  <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA6">單欄複合</label></div>
  <div class="col-md-auto flex-grow-1">
    <div class="d-flex flex-nowrap">
      <div class="flex-grow-1 me-1"><input class="form-control" id="formA6" type="text"></div>
      <div><button class="btn btn-primary text-nowrap">按鈕</button></div>
    </div><!-- d-flex -->
  </div>
  <!-- form item end -->
</div><!-- row -->
<!-- 基本單欄-起迄 -->
<div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
  <!-- form item start -->
  <div class="col-md-auto TitleSetWidth text-md-end">單欄複合</div>
  <div class="col-md-auto flex-grow-1">
    <div class="d-flex align-items-center flex-nowrap">
      <div class="flex-grow-1 me-1"><input class="form-control" type="date"></div>
      <div class="text-center">~</div>
      <div class="flex-grow-1 ms-1"><input class="form-control" type="date"></div>
    </div><!-- d-flex -->
  </div>
  <!-- form item end -->
</div><!-- row -->

<!-- 基本單欄-複合輸入框 -->
<div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
  <!-- form item start -->
  <div class="col-md-auto TitleSetWidth text-md-end">單欄複合</div>
  <div class="col-md-auto flex-grow-1">
    <div class="input-group">
      <span class="input-group-text">新台幣</span>
      <input type="text" class="form-control" aria-label="">
      <span class="input-group-text">元</span>
    </div>
  </div>
  <!-- form item end -->
</div><!-- row -->

<!-- 基本單欄-檔案上傳-1 -->
<div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
  <!-- form item start -->
  <div class="col-md-auto TitleSetWidth text-md-end">單欄特殊</div>
  <div class="col-md-auto flex-grow-1">
    <input type="file" class="form-control">
  </div>
  <!-- form item end -->
</div><!-- row -->

<!-- 基本單欄-檔案上傳-2 -->
<div class="row mt-1 flex-md-nowrap align-items-center OchiRow">
  <!-- form item start -->
  <div class="col-md-auto TitleSetWidth text-md-end">單欄特殊</div>
  <div class="col-md-auto flex-grow-1">
    <div class="input-group">
      <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
      <button class="btn btn-primary" type="button" id="inputGroupFileAddon04">上傳</button>
    </div>
  </div>
  <!-- form item end -->
</div><!-- row -->

<!-- 基本雙欄 -->
<div class="row gy-2 mt-1 align-items-center OchiRow">
  <div class="col-md-6">
    <!-- form item start -->
    <div class="row flex-md-nowrap align-items-center">
      <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="lokiMail">基本雙欄</label></div>
      <div class="col-md-auto flex-grow-1"><input class="form-control" id="lokiMail" type="text"></div>
    </div><!-- row -->
    <!-- form item end -->
  </div><!-- col -->
  <div class="col-md-6">
    <!-- form item start -->
    <div class="row flex-md-nowrap align-items-center">
      <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="Name">基本雙欄</label></div>
      <div class="col-md-auto flex-grow-1"><input class="form-control" id="Name" type="text"></div>
    </div><!-- row -->
    <!-- form item end -->
  </div><!-- col -->
</div><!-- row -->

<!-- 雙欄-按鈕、多欄位 -->
<div class="row gy-2 mt-1 align-items-center OchiRow">
  <div class="col-md-6">
    <!-- form item start -->
    <div class="row flex-md-nowrap align-items-center">
      <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA7">雙欄複合</label></div>
      <div class="col-md-auto flex-grow-1">
        <div class="d-flex flex-nowrap">
          <div class="flex-grow-1 me-1"><input class="form-control" id="formA7" type="text"></div>
          <div><button class="btn btn-primary text-nowrap">按鈕</button></div>
        </div><!-- d-flex -->
      </div>
    </div><!-- row -->
    <!-- form item end -->
  </div><!-- col -->
  <div class="col-md-6">
    <!-- form item start -->
    <div class="row flex-md-nowrap align-items-center">
      <div class="col-md-auto TitleSetWidth text-md-end"><label class="form-label" for="formA7">雙欄複合</label></div>
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

<!-- 基本三欄 -->
<div class="row gy-2 mt-1 align-items-center OchiRow">
  <div class="col-lg-4">
    <!-- form item start -->
    <div class="row flex-md-nowrap align-items-center">
      <div class="col-lg-auto TitleSetWidth text-md-end"><label class="form-label" for="formB1">基本三欄</label></div>
      <div class="col-lg-auto flex-grow-1"><input class="form-control" id="formB1" type="text"></div>
    </div><!-- row -->
    <!-- form item end -->
  </div><!-- col -->
  <div class="col-lg-4">
    <!-- form item start -->
    <div class="row flex-md-nowrap align-items-center">
      <div class="col-lg-auto TitleSetWidth text-md-end"><label class="form-label" for="formB2">基本三欄</label></div>
      <div class="col-lg-auto flex-grow-1"><input class="form-control" id="formB2" type="text"></div>
    </div><!-- row -->
    <!-- form item end -->
  </div><!-- col -->
  <div class="col-lg-4">
    <!-- form item start -->
    <div class="row flex-md-nowrap align-items-center">
      <div class="col-lg-auto TitleSetWidth text-md-end"><label class="form-label" for="formB3">基本三欄</label></div>
      <div class="col-lg-auto flex-grow-1"><input class="form-control" id="formB3" type="text"></div>
    </div><!-- row -->
    <!-- form item end -->
  </div><!-- col -->
</div><!-- row -->

</div><!-- ochiform -->
    </div>
  </div>
</template>

<script>
export default {
 
};
</script>
