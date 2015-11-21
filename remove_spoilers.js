(function(){
  $(document).ready(function(){
    function remove(){
      $(".linkflair-spoiler").removeClass("linkflair-spoiler");
      var timer = setTimeout(remove, 1000);
    }
    remove();
  })
})();
