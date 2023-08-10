const butao = document.getElementById('butao_spoiler');

butao.addEventListener("click", function() {
    $('#spoiler').css('display', 'none');
    $('.mortes').css('filter', 'blur(0px)')
  });