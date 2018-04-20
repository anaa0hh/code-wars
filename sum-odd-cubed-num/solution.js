function cubeOdd(arr) {
    let sum = 0
    for (const n of arr) {
      if (!Number.isInteger(n)) {
        return undefined
      }
      if (n & 1) {
        sum += n * n * n
      }
    }
    return sum
  }