/**
 * Created by mikum on 2016/10/29.
 */
var nodes=(function(){
    var allchilds=document.getElementById('text-content').childNodes;
    var ret=[];
    for(var t=0;t<allchilds.length;t++) if(allchilds[t].tagName=='P') ret.push(allchilds[t]);
    return ret;
})();
var now=0;
var isup=true;

function next() {
    if(now>=nodes.length&&isup) {return;}
    if(!isup){
        var tnode=document.getElementById('text-content');
        var nowtop=tnode.offsetTop;
        tnode.style.top=(nowtop-70)+'px';
        isup=true;
        setTimeout(next,1500);
        return;
    }
    var node=nodes[now++];
    node.style.opacity=1;
    isup=false;
    setTimeout(next,500);
}
setTimeout(next,500);