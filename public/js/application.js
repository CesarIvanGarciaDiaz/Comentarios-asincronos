$(function(){
  //muestra o esconde el formulario del nuevo comentario
  $("#new_comment_button").click(function(){
    $("#new_comment").show();
    $("#new_comment_button").hide();
  });

  $("input[type=submit]").click(function(){
    $("#new_comment").hide();
    $("#new_comment_button").show();
  });

  //
  //asincrono
  $('.container').on("click", 'input[name=submit_new_cmt]', function(event){
    event.preventDefault();
    //del id new_comment toma lo que contiene en textarea y metelo en la variable comentario
    var comentario = $("#new_comment").find("textarea").val();
    //del id new_comment toma lo que contiene el input y metelo en la variable autor
    var autor = $("#new_comment").find("input").val();

    //si alguna de las dos variables esta vacia entonces
    if( autor == '' || comentario == ''){
      alert("No Puedes Dejar Campos Vacios");
    }else {
//una forma de enviar los datos es de esta manera
      // post = {};
      // post.comentario = comentario
      // post.autor = autor
//y solo se mandaria $.post('/post',post);
      //envia comentario y autor a mi controlador para ser ingresado a la base de datos
      $.post('/post',{comentario:comentario,autor:autor});
      $("<li>" + comentario + "<span class='author'>" + autor + "</span></li>").insertAfter('ul li:last');
    }
  });

});
