const rows = parseInt();

if (rows < 1 || rows > 10) {

} else {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if (j % 3 === 0) continue;
      if (j % 7 === 0) {
        console.log(row.trim());
        break;
      }
      row += j + " ";
    }
    if (row.includes("7")) break;
    console.log(row.trim());
  }
}
