function drawTriangle(n) {
    let outputLine = "";
    for(i = 0; i <= n; i++){
        outputLine += "*";
          drawTriangle(outputLine + "<br>")
          outputLine = ""
          console.log(outputLine);
}

}
drawTriangle(4);
   
