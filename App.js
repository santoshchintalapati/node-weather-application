// Import the express node js package to work with web server
const express = require('express')
const map = require('./Argandmap.js');
const hbs = require('hbs')
const path = require('path')
const port = process.env.PORT || 3000;
// Instanciate the the express  
const app = express()


//Listen to the specific port where we route incoming requests.  
app.listen(port,()=>{
    console.log('App server launched and lsitening to port ' +port +' for browser request')
})
const customTemplates = path.join(__dirname,'/templates')
const partialsPath = path.join(__dirname,'/templates/partials')

console.log(__dirname)
// Build the application file paths using path library 
const publicDir = path.join(__filename,'../public')
console.log(publicDir);
// Set the view engine to hbs if we wantto 
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)
app.set('views',customTemplates)
console.log(partialsPath);
// This is to send a responce for the static pages.
app.use(express.static(publicDir))

app.get('',(req,resp) => {
    //console.log('got the request santosh')
    resp.render('index',{
              createdBy:'Santosh Chintalapati',
              poweredBy:'node Js partials'
            })
})
app.get('/about',(req,res) => {
    //res.render('about',{name:"back end user"})
})


//Lets say we are accessing <domain>/help page
app.get('/help',(req,res)=>{
    res.send('<h1>This is help page!!!</h1>')
 })
//Lets say we are accessing <domain>/help page
app.get('/about',(req,res)=>{
    res.send('<h1>This is help page!!!</h1>')
 }) 
//Lets say we are accessing <domain>/help page
app.get('/wether',(req,res)=>{
    
    if(!req.query.search){
    res.send({
        error : "Please enter the location!"
    })
      return
    }
    debugger;
    map.getGioCoordinates(req.query.search,'',(rea) => {

        debugger;
        res.send(
                {
                   location:"req.query.search",
                   longitude:rea.body.features[0].bbox[0],
                   latitide: rea.body.features[0].bbox[1]
                } );

    })

    
    
         
    });
 

  
 