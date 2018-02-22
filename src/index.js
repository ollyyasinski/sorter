class Sorter {

  constructor() {
      this.array = [];
  }

  add(element) {
      this.array.push(element);
  }

  at(index) {
      return this.array[index];
  }

  get length() {
      return this.array.length;
  }

  toArray() {
      return this.array;
  }

  sort(indices) {
      indices = indices.sort();
      var minIdx, temp, nextIdx,
          len = indices.length;
      for (var i = 0; i < len; i++) {
          minIdx = indices[i];
          for (var j = i + 1; j < len; j++) {
              nextIdx = indices[j];
              if (this.array[nextIdx] < this.array[minIdx]) {
                  minIdx = nextIdx;
              }
          }
          temp = this.array[indices[i]];
          this.array[indices[i]] = this.array[minIdx];
          this.array[minIdx] = temp;
      }
  }

  setComparator(compareFunction) {
      this.sort = function(indices) {
          indices = indices.sort();
          var minIdx, temp, nextIdx,
              len = indices.length;
          for (var i = 0; i < len; i++) {
              minIdx = indices[i];
              for (var j = i + 1; j < len; j++) {
                  nextIdx = indices[j];
                  if (compareFunction(this.array[nextIdx], this.array[minIdx]) < 0) {
                      minIdx = nextIdx;
                  }
              }
              temp = this.array[indices[i]];
              this.array[indices[i]] = this.array[minIdx];
              this.array[minIdx] = temp;
          }
      };
  }
}

module.exports = Sorter;