$(function(){
    $('#width').bind('input', function(){
        var width =$(this).val();
        var resultat = width.replace(/width:/, '');
        $('#task1').css({'width':resultat});
        if ($('#task1').innerWidth()==490){
            $('#width').css({'border-bottom': '3px solid #00CC00'})
        }
    });
    $('#height').bind('input', function(){
        var height =$(this).val();
        var resultat2 = height.replace(/height:/, '');
        $('#task1').css({'height': resultat2});
        if ($('#task1').innerHeight()==603){
            $('#height').css({'border-bottom': '3px solid #00CC00'})
        }
    });
    $('#top').bind('input', function(){
        var top =$(this).val();
        var resultat_top = top.replace(/top:/, '');
        $('#task3').css({'top': resultat_top});
        if(top=="top: 235px;"){
            $(this).css({'border-bottom': '3px solid #00CC00'})
        }
    });
    $('#left').bind('input', function(){
        var left =$(this).val();
        var resultat_left = left.replace(/left:/, '');
        $('#task3').css({'left': resultat_left});
        if(left=="top: 259px;"){
            $(this).css({'border-bottom': '3px solid #00CC00'})
        }
    });
    $('#absolute').bind('input', function(){
        var absolute =$(this).val();
        console.log(absolute)
        var resultat_absolute = absolute.replace(/position:/, '');
        $('#task4').css({'position': resultat_absolute});
        if (absolute=="position: absolute;"){
            $(this).css({'border-bottom': '3px solid #00CC00'})
        }
    });
    $('#top2').bind('input', function(){
        var top =$(this).val();
        var resultat_top = top.replace(/top:/, '');
        $('#task4').css({'top': resultat_top});
        if(top=="top: 2680px;"){
            $(this).css({'border-bottom': '3px solid #00CC00'})
        }
    });
    $('#left2').bind('input', function(){
        var left =$(this).val();
        var resultat_left = left.replace(/left:/, '');
        $('#task4').css({'left': resultat_left});
        if(left=="top: 650px;"){
            $(this).css({'border-bottom': '3px solid #00CC00'})
        }
    });
    $('#relative').bind('input', function(){
        var relative =$(this).val();
        var resultat_relative = relative.replace(/position:/, '');
        $('#task5').css({'position': resultat_relative});
        if (relative=="position: relative;"){
            $(this).css({'border-bottom': '3px solid #00CC00'})
        }
    });
    $('#top3').bind('input', function(){
        var top =$(this).val();
        var resultat_top = top.replace(/top:/, '');
        $('#task5').css({'top': resultat_top});
        if(top=="top: 235px;"){
            $(this).css({'border-bottom': '3px solid #00CC00'})
        }
    });
    $('#left3').bind('input', function(){
        var left =$(this).val();
        var resultat_left = left.replace(/left:/, '');
        $('#task5').css({'left': resultat_left});
        if(left=="top: 259px;"){
            $(this).css({'border-bottom': '3px solid #00CC00'})
        }
    });
    $('#color').bind('input', function(){
        var color =$(this).val();
        var resultat_color = color.replace(/color:/, '');
        $('.window-p').css({'color':resultat_color});
        $(this).css({'border-bottom': '3px solid #00CC00'})
    });
    $('#back').bind('input', function(){
        var back =$(this).val();
        var resultat_back = back.replace(/background:/, '');
        $('.window-p').css({'background': resultat_back});
        $(this).css({'border-bottom': '3px solid #00CC00'})
    });
    $('#border').bind('input', function(){
        var border =$(this).val();
        var resultat_border = border.replace(/border:/, '');
        $('.window-p').css({'border': resultat_border})
        $(this).css({'border-bottom': '3px solid #00CC00'})
    });
});