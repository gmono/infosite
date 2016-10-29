/**
 * Created by mikum on 2016/10/29.
 */
var onresizefun=function () {
        var winheight=window.innerHeight;
        var textcont=document.getElementById('text-content');
        var textheight=textcont.offsetHeight;
        textcont.style.marginTop=(winheight-textheight)/2+'px';
    };
window.addEventListener('resize',onresizefun);
onresizefun();