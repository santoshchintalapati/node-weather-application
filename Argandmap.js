// 1 Read the location & language to be passed from command line
// 2 form a URL with user given data
// 3 Get the responce from URL
// 4. display the data 
const yargs = require('yargs')
const request = require('postman-request')

const getGioCoordinates = (location,language,push) => {
    debugger;
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+location+'.json'+'?access_token=pk.eyJ1Ijoic2FudG9zaGNoMDUiLCJhIjoiY2tlZ2JwdTRqMDRweTJ3cWliOHZrN2dzOSJ9.-O20BDJITZnEUPTqo8c-Uw'
    
       request({url:url, json:true}, (error, responce) =>{
        // callback(responce.body.features[0]);
         push(responce);
        // return responce;
        //console.log('Longitude is '+responce.body.features[0].bbox[0]+' and Latitude is '+responce.body.features[0].bbox[1])
           
    })
    }
yargs.command({
    command: 'map',
    describe: 'Get location and weather details',
    biuilder: {
        loc: {
            describe: 'Name of the location',
            demandOption: true,
            type: 'string'
        },
        lng: {
            describe: 'language of choice',
            demandOption: false,
            type: 'string'
        }

    },
    handler(argv) {(
      
     //console.log(argv.loc)
      getGioCoordinates(argv.loc, argv.lng)
       
    )}

});

yargs.parse();
module.exports = {
    getGioCoordinates: getGioCoordinates,
}
//getGioCoordinates("visakhapatnam", '');
