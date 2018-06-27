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
        .expect('json','RestResponse.result.?', { name: 'India' })
        .then(function (res) {
            var data=('json','RestResponse.result.?', { name: 'India' })
            
            console.log('volkan');
            console.log(data);
      })

});