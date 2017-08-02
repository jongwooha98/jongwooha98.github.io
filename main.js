var keywords = ["adaptable", "practical", "considerate", "rational", "ambitious", "impartial", "unassuming", "generous", "questioning why you are still staring at this."];
var count = 1;
setInterval(function(){    
    $("span.keyword").fadeOut(400, function(){        
        $(this).html(keywords[count]);        
        count++;        
        if(count == keywords.length)            
            count = 0;        
        $(this).fadeIn(400);    
    });
}, 2000);