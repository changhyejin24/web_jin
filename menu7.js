function query(){
    var ret = confirm("해당상품 판매사이트로 이동하시겠습니까?");
    return ret;
}
function noAction(e){
    e.preventDefalut();
}