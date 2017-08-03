/*-----navbar-brand scrolls page back to top-----*/
function dd_scrolltotop(duration){
     duration = duration || 1500
     var rootel = (document.compatMode =="BackCompat")? document.body : document.documentElement
     if (rootel.scrollTop == 0) // in some browsers such as Chrome, use document.body instead of document.documentElement
          rootel = document.body
     var curscrolltop = rootel.scrollTop, scrolltimer, elapsedtime, starttime = new Date().getTime(), animatedegree = 0
     var totaldis = curscrolltop
     clearTimeout(scrolltimer)
     function jumptop(){
          elapsedtime = new Date().getTime() - starttime
          if (elapsedtime < duration){
               rootel.scrollTop = totaldis - (totaldis * (1-Math.cos((elapsedtime/duration)*Math.PI)) / 2)
               scrolltimer = setTimeout(function(){jumptop()}, 10)
          }
     }
     jumptop()
}
