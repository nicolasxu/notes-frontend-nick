function generateRecords(limit) {
  const res = []
  for (let i = 0; i < limit; i++) {
    res.push({id: counter++, name: 'nick'})
  }
  return res
}
let counter = 0

async function* genFetch(page=1, limit=50) {

  let internalPage = page
  while(true) {
    const p = new Promise((resolve, reject) => {
      setTimeout(() =>{
        const newRecords = generateRecords(limit, internalPage)
        console.log('newPage', internalPage)
        internalPage++
        resolve(newRecords)
      }, 2000)
    })
    let pageInput = yield await p
    if (pageInput) {
      internalPage = pageInput
    }
  }
}

const generator = genFetch()

async function main() {
  let res = await generator.next()
  res = await generator.next(9)
  res = await generator.next()
  console.log(res)
}

main()

// generator.next().then((r) => console.log(r))