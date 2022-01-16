globalThis.waitForElement('[class="QS5gu sy4vM"]', 3000).then(function(elemList) {
    elemList[0].scrollIntoView();
    elemList[0].click();
}).catch((e)=>{
    console.log(e);
});