function query(){
    var ret = confirm("뉴스기사 본문으로 이동하시겠습니까?");
    return ret;
}
function noAction(e){
    e.preventDefalut();
}
