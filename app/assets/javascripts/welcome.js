(function(){
  var color;
  var fontSize;
  var fontSize2;
  var i = 0;

  $(document).ready(initialize);
  function initialize(){
    $( '#tp_face, #txty' ).click(clickIt);
  }

  function clickIt(){
    $("audio").trigger('play');
    var click = ""
    $('#click').show(100);
    setTimeout(function(){ $('#click').hide(50); }, 200);
    randomColor();
    $('#score').remove();
    $('body').append("<div id='score' style='font-size: 100px;'>" +i+ "</div>").css({'color': color, 'border-style': 'inset', 'font-family': "'Sigmar One', cursive"});
    i+=1;
    randomColor();
    $(body).css({'text-shadow': "2px 2px"+ color , 'font-style': 'bolder'});
    randomColor();
    $(body).css({'background-color' : color, 'font-style': 'bolder'});
    randomColor();
    $('#tp_face').css({'background-color': color});
    randomColor();
    $('.side').css({'background-color': color});
  }

  function blowUpTxt(){
    console.log(fontSize);
    fontSize = $('#txty').css('font-size').slice(0,-2);
    fontSize = parseInt(fontSize) + 20;
    $('#txty').css({'font-size': fontSize});
    // fontSize2 = $('.side').css('font-size').slice(0,-2);
    // fontSize2 = parseInt(fontSize2) + 2;
    // $('.side').css({'font-size': fontSize2});

  }
  function randomColor(){
    color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

})();
