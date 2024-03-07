// Продвинутый:
//   Написать класс PaginationUtil. Класс принимает массив значений (типы не имеют значения) и число, отображающее количество элементов на странице.
//   Пример реализации:


// helper.pageItemCount(0); // 4
// helper.pageItemCount(1); // на последней странице - 2
// helper.pageItemCount(2); // -1, так как такой страницы нет
// pageIndex - принимает индекс элемента в массиве значений и возвращает его страницу, иначе -1
// helper.pageIndex(5); // 1
// helper.pageIndex(2); // 0
// helper.pageIndex(20); // -1
// helper.pageIndex(-10); //-1

class PaginationUtil {
  constructor(values, countNum) {
    this.values = values;
    this.countNum = countNum;
  }

  pageCount() {
    return Math.ceil(this.values.length / this.countNum);
  }

  itemCount() {
    return this.values.length;
  }

  pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1;
    }
    if (pageIndex === this.pageCount() - 1) {
      return this.values.length % this.countNum;
    }
    return this.countNum;
  }
  pageIndex(index) {
    if (index < 0 || index >= this.values.length) {
      return -1;
    }
    return Math.floor(index / this.countNum);
  }
}

const helper = new PaginationUtil(['a', 'b', 'c', 'd', 'e', 'f'], 4);
console.log(helper.pageCount()); // 2
console.log(helper.itemCount()); // 6
console.log(helper.pageItemCount(0)); // 4
console.log(helper.pageItemCount(1)); // на последней странице - 2
console.log(helper.pageItemCount(2)); // -1, так как такой страницы нет
console.log(helper.pageIndex(5)); // 1
console.log(helper.pageIndex(2)); // 0
console.log(helper.pageIndex(20)); // -1
console.log(helper.pageIndex(-10)); //-1