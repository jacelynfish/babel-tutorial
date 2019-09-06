async function async1() {
  let one = await Promise.resolve(1)
  console.log(one)
}

async1.then(one => {
  console.log('one again')
})
