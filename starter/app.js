const express =require ('express')
const app =express()
const port = 3000

//routes
app.get('/hello', (req, res) => {
  res.send('This is hello world page guys')
})

app.listen(port, () =>{
  console.log(`listening on port ${port}`)
})
