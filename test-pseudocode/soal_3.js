function printStars(count) {
  for (let i = 1; i <= count; i++) {
    let star = "*";
    for (let j = 1; j < i; j++) {
      star += "*";
    }
    console.log(star);
  }
}

printStars(5);
