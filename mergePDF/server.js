const express = require('express')
const path = require('path')
const app = express()
const multer = require('multer')
const { mergePdfs } = require('./merge')
const upload = multer({ dest: 'mcbc' })
app.use('/static', express.static('public'))

const port = 3000

app.get('/', (req, res) =>
{
    res.sendFile(path.join(__dirname, "templates/index.html"))
})

app.post('/merge', upload.array('pdfs', [1,10]), async (req, res, next) =>
{
    console.log(req.files)
    let mujiPDF=[];
    for(let i of req.files)mujiPDF.push(path.join(__dirname,i.path));
    let d=await mergePdfs(mujiPDF);

    
    // let d = await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path),path.join(__dirname, req.files[2].path),path.join(__dirname, req.files[3].path),path.join(__dirname, req.files[4].path))
    

    res.redirect(`http://localhost:3000/static/${d}.pdf`)
    // res.send({data:req.files})
})
app.listen(port, () =>
{
    console.log(`Example app listening on port http://localhost:${port}`)
})
