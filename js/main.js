/*-----home-section: change of keyword & color-----*/
var keywords = ["practical", "adaptable", "considerate", "rational", "ambitious", "impartial", "unassuming", "generous", "wondering why you're still staring at this."];
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
}, 2500);