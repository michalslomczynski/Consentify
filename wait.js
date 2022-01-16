globalThis.waitForElement = function(querySelector, timeout) {
    return new Promise((resolve, reject)=>{
      var timer = false;
      var elem = document.querySelectorAll(querySelector);
      if(elem.length) return resolve(elem);
      const observer = new MutationObserver(()=>{
        var elem = document.querySelectorAll(querySelector);
        if(elem.length){
          observer.disconnect();
          if(timer !== false) clearTimeout(timer);
          return resolve(elem);
        }
      });
      observer.observe(document.body, {
        childList: true, 
        subtree: true
      });
      if(timeout) timer = setTimeout(()=>{
        observer.disconnect();
        reject();
      }, timeout);
    });
}