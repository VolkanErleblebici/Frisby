const frisby= require('frisby');
const Joi = frisby.Joi;

it('should be a teapot',function () {
    return frisby.get('http://services.groupkt.com/country/get/all')
        .expect('status',200)
        .expect('header', 'Content-Type', 'application/json;charset=UTF-8')
        .expect('bodyContains', 'RestResponse')
        .expect('jsonTypes', 'RestResponse', { 
            'result': Joi.array().required()

        })
        .expect('json', 'RestResponse.result.?', {       
            name: 'Turkey',
            alpha2_code : 'TR',
            alpha3_code : 'TUR',


        })


        /*
        .then(function (res) {
           var data=JSON.parse(res['_body']);
            console.log(data.RestResponse.result[1]['name']);
         //  console.log(data.RestResponse.result[1]['name']);
        });
*/
});