/*-----home-section: change of keyword & color-----*/
var keywords = ["adaptable", "practical", "considerate", "rational", "ambitious", "impartial", "unassuming", "generous", "questioning why you're still staring at this."];
var count = 1;
setInterval(function(){    
    $("span.keyword").fadeOut(300, function(){        
        $(this).html(keywords[count]);        
        count++;        
        if(count == keywords.length)            
            count = 0;
    var hue = 'rgb('
        + (Math.floor(Math.random() * 256)) + ','
        + (Math.floor(Math.random() * 256)) + ','
        + (Math.floor(Math.random() * 256)) + ')';      
        $(this).fadeIn(300).css('color', hue);    
    });
}, 2000);