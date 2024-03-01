function modal() {
  formCont.style.position = "absolute";
  formCont.style.transitionDuration = 300 + "ms";
  formCont.style.opacity = 1;
}
/*
  function formFunc(params) {
    let num, quant, phone, classDirector;
  }*/

function modalClose() {
  formCont.style.transitionDuration = 300 + "ms";
  formCont.style.opacity = 0;
  setTimeout(() => {
    formCont.style.position = "unset";
  }, 300);
}
