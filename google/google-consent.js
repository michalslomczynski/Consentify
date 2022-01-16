globalThis.waitForElement('[class="VfPpkd-vQzf8d"]', 3000).then(function(elemList) {
    elemList[2].click();
    elemList[2].scrollIntoView();
    elemList[4].click();
    elemList[7].scrollIntoView();
    elemList[7].click();
    elemList[13].scrollIntoView();
    elemList[13].click();
}).catch((e)=>{
    console.log(e);
});