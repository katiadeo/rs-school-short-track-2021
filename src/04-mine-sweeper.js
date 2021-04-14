/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  let count;
  let chuncked;

  matrix.forEach((item, i) => {
    item.forEach((cell, j) => {
      // если поле - true, пушим один
      if (cell === true) {
        result.push(1);
      }

      // если поле - false, запускаем счетчик с нуля
      if (cell === false) {
        count = 0;

        // верхний подмассив: ищем (справа / слева / в середине) -> добавляем к счетчику один
        if (matrix[i - 1]) {
          if (matrix[i - 1][j]) count++;
          if (matrix[i - 1][j + 1]) count++;
          if (matrix[i - 1][j - 1]) count++;
        }

        // нижний подмассив: ищем (справа / слева / в середине) -> добавляем к счетчику один
        if (matrix[i + 1]) {
          if (matrix[i + 1][j]) count++;
          if (matrix[i + 1][j + 1]) count++;
          if (matrix[i + 1][j - 1]) count++;
        }

        // ищем элементы справа / слева - если есть -> добавляем к счетчику один
        if (item[j + 1]) count++;
        if (item[j - 1]) count++;
        result.push(count);
        // result = [1, 2, 1, 2, 1, 1, 1, 1, 1]
      }

      // делим результирущий массив на подмассивы
      const size = matrix[i].length;
      chuncked = result.reduce((acc, curr) => {
        if (acc[acc.length - 1].length === size) {
          acc.push([]);
        }
        acc[acc.length - 1].push(curr);
        return acc;
      }, [[]]);
    });
  });

  return chuncked;
}

module.exports = minesweeper;
