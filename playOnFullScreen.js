//now new tab is open grab iframe src 
//wait a sec
console.log("working");
    const src = document.getElementsByTagName("iframe")[0].src;
    console.log(src);
    window.close()
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
    
