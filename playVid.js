if (typeof linkNo !== 'undefined') {
    linkNo += 2;
}else{
    var linkNo = 2;
}
console.log("linkNo = " + linkNo);
var row = document.getElementsByClassName('display-bg')[linkNo];
var nLink = row.firstChild.href;

window.open(nLink,'SOCCER');



delay(1000).then(() => {
    const src = document.getElementsByTagName("iframe")[0].src;
    console.log(src);
    //window.close()
    window.open(src,'Pure vid');
    let playPromise = document.getElementsByTagName("video")[0].play();
if (playPromise !== undefined) {
    playPromise.then(function() {
    // Automatic playback started!
    console.log("playing");
    }).catch(function(error) {
        console.log(error);
    });
}
});


