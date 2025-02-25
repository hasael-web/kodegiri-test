function printMultiples(start_value, end_value, multiple = 5) {
  for (let i = start_value; i <= end_value; i += multiple) {
    if (i > 0 && i <= 60) {
      console.log(`${i} KURANG`);
    }
    if (i > 60 && i <= 70) {
      console.log(`${i} CUKUP`);
    }
    if (i > 70 && i <= 80) {
      console.log(`${i} BAIK`);
    }
    if (i > 80) {
      console.log(`${i} SANGAT BAIK`);
    }
  }
}

printMultiples(50, 100, 5);
