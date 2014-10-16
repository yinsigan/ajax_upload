(function($) {

    $.fn.ajax_upload = function() {
      var _this = $(this);
      var id = $(this).attr("id");
      var progress = _this.data("progress");
      var progress_div = $("#" + progress);

      // 执行
      initFileOnlyAjaxUpload(_this, id);

      function initFileOnlyAjaxUpload(_this, id) {
        _this.on('change', function(evt) {
          var formData = new FormData();
          var action = _this.data("url");

          var fileInput = document.getElementById(id);
          var file = fileInput.files[0];
          formData.append(_this.attr("name"), file);

          sendXHRequest(formData, action);
        })
      }

      function sendXHRequest(formData, uri) {
        var xhr = new XMLHttpRequest();

        xhr.upload.addEventListener('loadstart', onloadstartHandler, false);
        xhr.upload.addEventListener('progress', onprogressHandler, false);
        xhr.upload.addEventListener('load', onloadHandler, false);
        xhr.addEventListener('readystatechange', onreadystatechangeHandler, false);

        xhr.open('POST', uri, true);

        // Fire!
        xhr.send(formData);
      }


      function onloadstartHandler(evt) {
      }

      //文件上传，等待应答
      function onloadHandler(evt) {
      }

      //上传进度
      function onprogressHandler(evt) {
        progress_div.show();
        var progress_content = progress_div.children(".progress-bar")
        var percent = evt.loaded/evt.total*100;
        progress_content.width(percent + '%');
        progress_content.html(percent + '%');
      }

      function onreadystatechangeHandler(evt) {
        var status, text, readyState;

        try {
          readyState = evt.target.readyState;
          text = evt.target.responseText;
          status = evt.target.status;
        }
        catch(e) {
          return;
        }

        //正确返回
        if (readyState == 4 && status == '200' && evt.target.responseText) {
          // evt.target.responseText
          progress_div.delay(1000).fadeOut();
        }
      }


    }

}(jQuery));
