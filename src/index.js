
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return [];
  const result = [];
  let isReverse = false;
  for(let array of matrix){
    if(isReverse) array.reverse();
    for(let item of array){
      result.push(item);
    }
    isReverse = !isReverse;
  }
  return result;
}
