const frisby= require('frisby');
const Joi = frisby.Joi;

it('should be a teapot',function () {
    return frisby.get('http://services.groupkt.com/state/get/USA/all')
        .expect('status',200)
        .expect('header', 'Content-Type', 'application/json;charset=UTF-8')
        .expect('bodyContains', 'result')
        .expect('jsonTypes', 'RestResponse', { 
            'result': Joi.array().required()
        })
        .expect('jsonTypes', 'RestResponse.result.?', { 
           // 'result': Joi.array().required(),
            'id': Joi.number().required(),
            'name': Joi.string().required(),
            'abbr': Joi.string().required(),
            'country': Joi.string().required(),
            'area': Joi.string().required(),
            'largest_city': Joi.string().required(),
            'capital': Joi.string().required()
        })
        


        /*
        .then(function (res) {
           var data=JSON.parse(res['_body']);
            console.log(data.RestResponse.result[1]['name']);
         //  console.log(data.RestResponse.result[1]['name']);
        });
*/
});