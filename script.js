function drawTriangle(triangleSize) {
    document.write(triangleSize);
}
let i = 0
let triangleSize = "";
for(i = 0; i < 5; i++){
    for (let j = 0; j < i; j++){
    
    triangleSize += "*";
  }
      drawTriangle(triangleSize + "<br>")
      triangleSize = ""
}
  
