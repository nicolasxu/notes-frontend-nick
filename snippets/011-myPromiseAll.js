
function myPromissAll(promises) {
  const resloveArr = []

  return new Promise(function(resolve, reject) {
    const length = promises.length
    const allRes = new Array(length).fill(0)
    let counter = 0
    for (let i = 0; i < promises.length; i++) {
      promises[i].then((oneRes) => {
        allRes[i] = oneRes
        counter++
        if (counter >= length) {
          resolve(allRes)
        }
      }).catch((err) => {
        reject(err)
      })
    }
  })
}


myPromissAll([
  Promise.resolve('hi'),
  Promise.resolve('bye'),
  Promise.resolve('exit'),]).then(res => console.log(res))


