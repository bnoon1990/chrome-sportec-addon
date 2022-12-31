if (typeof linkNo !== 'undefined') {
    linkNo ++;
}else{
    var linkNo = 2;
}
console.log("linkNo = " + linkNo);
var row = document.getElementsByClassName('display-bg')[linkNo];
var nLink = row.firstChild.href;

console.log(nLink);
window.open(nLink,'SOCCER FOR CUNTS');