const frisby= require('frisby');
const Joi = frisby.Joi;

it('should be a teapot',function () {
    return frisby.get('http://services.groupkt.com/country/get/all')
        .expect('status',200)//status 200 kontrol...
        .expect('header', 'Content-Type', 'application/json;charset=UTF-8')//header kontrol
        .expect('bodyContains', 'RestResponse')
        .expect('jsonTypes', 'RestResponse', { 
            'result': Joi.array().required()//array kontrol...
        })
        .expect('json', 'RestResponse.result.?', {       
            /*
            anahtar kontrolleri...
            */
            name: 'Turkey',
            alpha2_code : 'TR',
            alpha3_code : 'TUR',
        })        
        .then(function (res) {
           var data=JSON.parse(res['_body']);
           // 249 karakter kontrol...
           expect(data.RestResponse.messages[0]).toBe('Total [249] records found.');
           //console.log(data.RestResponse.messages[0]);
           //console.log(data.RestResponse.result[1]['name']);
        });

});