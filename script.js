/* Get postMassage from Iframe Domain (Iframe height) */
var myEventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var myEventListener = window[myEventMethod];
var myEventMessage = myEventMethod == "attachEvent" ? "onmessage" : "message";
/* Insert content height to Iframe */
myEventListener(myEventMessage, function (e) {
    if (e.data === parseInt(e.data))
        document.getElementById('hirtmetallbau').height = e.data + "px";
}, false);
/* Action on resize Browser window */
window.addEventListener('resize', function(event){
  /* Remove Iframe */
  var frame = document.getElementById("hirtmetallbau");
  frame.parentNode.removeChild(frame);
  /* Create new Iframe */
  var iframe = document.createElement('iframe');
  iframe.src = 'embed.hsdw.ch/kollegger/';
  iframe.width="100%";
  iframe.setAttribute('allowFullScreen', '');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('scrolling', 'no');
  iframe.id="hirtmetallbau";
  document.getElementById('hsdwcontent').appendChild(iframe);
});
