function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function findSmallestAreaDiffValues(arr) {
    let n = arr.length;
    let sortedArray = [...arr].sort((a, b) => a - b);
    const minAreaIndexes = []
    let minDifference = Number.MAX_VALUE;
    let minSortedIdx1 = 0
    
    for (let i = 0; i < n - 1; i++) {
      let currentDiff = Math.abs(sortedArray[i + 1] - sortedArray[i]);
      if (currentDiff < minDifference) {
        minDifference = currentDiff;
        minSortedIdx1 = i
      }
    }

      arr.forEach((el,index)=>{
          if(el==sortedArray[minSortedIdx1] || el==sortedArray[minSortedIdx1+1]){
              minAreaIndexes.push(index)
          }
      })
                  
      return minAreaIndexes
  }
  
  function toggleCursorStyle() {
    document.getElementById("canvas").toggleAttribute("is-drawing");
  }
  
  function removeCursorStyle() {
    document.getElementById("canvas").removeAttribute("is-drawing");
  }
  
  export {
    getRandomColor,
    findSmallestAreaDiffValues,
    toggleCursorStyle,
    removeCursorStyle,
  };
  
