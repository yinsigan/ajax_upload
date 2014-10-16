ajax_upload
===========

## 一个简单的html5 ajax图片上传库

### 依赖jquery和bootstrap(带bootstrap的进度条)

简单使用

只要调用ajax_upload即可。
当选择图片完成时就会自动上传。

``` javascript
$("#input_file").ajax_upload();
```

.min-progress 是自己定义的的样式，让bootstrap的进度条更细更好看。data-progress属性指定进度条的id。

``` html
<input data-progress="progress_div" data-url="/public_accounts/21/thumbs" id="image" name="image" type="file" />
<div class='progress min-progress' id='progress_div' style='display: none;'>
  <div aria-valuemax='100' aria-valuemin='0' aria-valuenow='1' class='progress-bar' role='progressbar' style='width: 0%;'></div>
</div>
```
