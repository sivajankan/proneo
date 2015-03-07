var all_files = [],
      current_file_id = 0,
      locked = false,
      prev_count_files = 0,
      waiting = 0,
      drop, dropzone, handleNextFile, handleReaderLoad, noopHandler;
      
function stop_default_actions(){
  evt.stopPropagation();
  evt.preventDefault();
}

function drop(evt) {
  stop_default_actions(evt);

  var files = evt.dataTransfer.files;
  var count = files.length;
  var i, j;

  if ( count > 0 ) {
    prev_count_files = all_files.length;

    if ( $("#dropzoneLabel").length !== 0 ) {
        $("#dropzone").html('');
    }

    for ( i = prev_count_files + waiting, j = 0; i < prev_count_files + files.length + waiting; i++, j++ ) {
        $("#dropzone").append('<div class="file ' + i + '"><div class="name">' + files[j].name + '</div><div class="progress">Waiting...</div></div>');
    }

    waiting += count;

    if ( ! locked ) {
        waiting -= count;
        all_files.push.apply(all_files, files);
        //handleNextFile();
    }
  }
};

(function($, window) {
  "use strict";
  var document = window.document;
    
  $(document).ready(function(){
    dropzone = document.getElementById("dropzone");
    dropzone.addEventListener("dragenter", stop_default_actions, false);
    dropzone.addEventListener("dragexit", stop_default_actions, false);
    dropzone.addEventListener("dragover", stop_default_actions, false);
    dropzone.addEventListener("drop", drop, false); 
  });
)(jQuery, window));
