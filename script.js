function drawTriangle(triangleSize) {
    document.write(triangleSize);
}
let i = 0
let outputLine = "";
for(i = 0; i < 5; i++){
    for (let j = 0; j < i; j++){
    
    outputLine += "*";
  }
      drawTriangle(outputLine + "<br>")
      outputLine = ""
}
   triangleSize(4);
