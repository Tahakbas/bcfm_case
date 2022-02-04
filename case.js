
const app = require('express')();
const { status } = require('express/lib/response');
const fetch = require('node-fetch');

const url = 'http://api.weatherapi.com/v1/current.json';
const key = '8bea24f905ea4950976132927220102';


let temp = 0;

app.get('/', (req, res) =>{
    res.json({firstname: 'taha numan', lastname: 'akbaş'})
})


app.get('/temperature', (req,res)=>{
    const city = req.query.city;
    console.log("xxxx");
    console.log(city);
    console.log("xxxx");
    if(city == "" || city == undefined || city == null){
        res.json({message: "page not found"})
       
    }else {
        console.log("xxxx");
        console.log(city);
        console.log("xxxx");
        getResult(city);
        
       setTimeout(()=>{
            
            res.json({temperature: `${getTemp()}`});
         },500);
        
    }
    
});

app.get('*', function (req, res) {
    if(status != 200){
    res.json({message: "This page not found!"});
    }
})

app.listen(3000);

function getResult (city) {
    let query = `${url}?key=${key}&q=${city}&aqi=no`;
    
    fetch(query).then(wheather => { return wheather.json()}).then(setTemp);
    

    
}

const setTemp = result => {
    
        temp = `${result.current.temp_c}`;
    
    
    //console.log("")
    //console.log(`${result.current.temp_c}`);
     
}

function getTemp(){

    return temp;
}

//getResult("istanbul");