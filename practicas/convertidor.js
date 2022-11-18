function convertir(){
    let n = document.getElementById("num").value;
    let bx = parseInt(document.getElementById("basex").value);
    let by = parseInt(document.getElementById("basey").value);
    let r = (parseInt(n, bx)).toString(by);
    document.getElementById("convertido").value=r;
  }