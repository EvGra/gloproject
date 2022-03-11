let arr = []

arr.push('23', '13', '345', '435', '567', '54', '234')

arr.forEach((item) => {
  if (item[0] == 2 || item[0] == 4){
    console.log(item)
  }
})
  
for (let i = 0; i <= 100; i++) {
  let item = 1

  for (let j = 2; (j <= i/2) && (item == 1); j = j + 1) {
    if (i%j == 0) {
      item = 0
    }
  }
  if (item == 1) {
    console.log(`${i} - Делители этого числа: 1 и ${i}`)
  }
}