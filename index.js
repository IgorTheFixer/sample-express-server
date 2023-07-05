//File reader
const fs = require('fs');

//Server Set-Up
const express = require('express')
const app = express()
const port = 3000

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,       
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

//Stream Option
// app.get('/', (req, res) => {
//   //Creating a large readable stream akin to OpenAPI's response
//   const fileStream = fs.createReadStream(
//     `./bacon.txt`,
//   );
//   fileStream.pipe(res);
// })

//String Option
app.get('/', (req, res) => {
  const fileName = "bacon.json"

  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data);
  });
})

app.listen(port, () => {
  console.log(`Test server listening on port ${port}`)
})