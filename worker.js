self.addEventListener('message',function(e){
    var msg = e.data;
    self.postMessage(msg+' processed');
});
self.postMessage("Ready");
