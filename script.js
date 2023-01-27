$(document).ready(function(){

    $(".numericos, .operacoes").click(function(){
        var valor = $(this).html();
        $(".visor").val(
            $(".visor").val() + valor)
    });

    $(".virgula").click(function(){
        $(".visor").val(
            $(".visor").val()+"."
        );
    });

    $(".resultado").click(function(){
        var valorv = $(".visor").val();
        var resultado = eval(valorv);
        $(".visor").val(resultado);
        var lista = $(".history > ul");
        $(".")
    });

    $(".limpar").click(function(){

        $(".visor").val("");

    });

});