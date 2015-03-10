var proneo = {};

proneo.log = function(msg) {
   $("#proneo_log_content").append(msg);
   console.log(msg);
};


function event_arrestor(evt) {
  console.log( "%s started", evt.type);
  evt.stopPropagation();
  evt.preventDefault();
}

function process_drop(evt) {
  event_arrestor(evt);
  var files = evt.dataTransfer.files;
  var count = files.length;
  console.log(count + " files were dropped");
  console.log(files);
  
  for (var i = 0, f; file = files[i]; i++) {
    var msg = "<p>File information: <strong>" + file.name +
      "</strong> type: <strong>" + file.type +
      "</strong> size: <strong>" + file.size +
      "</strong> bytes</p>";
    proneo.log(msg);
    var file_info = 'Type:' + file.type + ',Size:' + file.size;
    var div_content = '<div class="file ' + i + '" title="' + file_info + '">' + 
                      '<div class="name">' + file.name + '</div>' + 
                      '</div>';    
    $("#activefiles").append(div_content);
  }
}

$(document).ready(function() {
  var dropzone = document.getElementsByTagName('body')[0];
  dropzone.addEventListener('dragenter', event_arrestor, false);
  dropzone.addEventListener('dragover', event_arrestor, false);
  dropzone.addEventListener('dragexit', event_arrestor, false);
  dropzone.addEventListener('dragleave', event_arrestor, false);
  dropzone.addEventListener('drop', process_drop, false);
  
  proneo.log("it started");
  
  $('#clear_log').on("click", function(){
    console.log("ProNeo clear log");
    $('#proneo_log_content').empty();
  });
 
});