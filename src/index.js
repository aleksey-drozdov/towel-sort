
// You should implement your task here.

module.exports = function towelSort(matrix) {
  var newArr = [];
  if (matrix) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix.indexOf(matrix[i]) % 2 == 0) {
        for (let j = 0; j < matrix[i].length; j++) {
          newArr.push(matrix[i][j])
        }
      } else {
        for (let j = matrix[i].length - 1; j > -1; j--) {
          newArr.push(matrix[i][j])
        }
      }
    }
    return newArr;
  } else {
    return [];
  }
}
