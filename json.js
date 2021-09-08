$().ready(function(){
    $.getJSON( "/voicetalent_exp/data.json", function( data ) {
    console.log(data);
    $("#text").html(data["text"]);
  });
});