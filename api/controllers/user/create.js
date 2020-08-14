/**
 * Create
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  friendlyName : 'post user',
  description : 'untuk membuat user baru',

  inputs:{
    name: {
        type: 'string'
    },
    email:{
        type: 'string'
    },
    phone_number:{
        type: 'string'
    },
    gender:{
        type: 'boolean'
    }
  },

  exits: {
      success: {
          responseType : 'ok'
      },
      fail: {
          responseType : 'badRequest'
      }
  },

  fn: async function(inputs,exits){
      try{
        let data = {
            name            : inputs.name,
            email           : inputs.email,   
            phone_number    : inputs.phone_number,
            gender          : inputs.gender
        }

        const send = await CreateUser.create({
            name            : data.name,
            email           : data.email,
            phone_number    : data.phone_number,
            gender          : data.gender

        })
        return exits.success({
            status: 'success',
            message : 'user created',
            result : data
        })
      }catch(err){
          return exits.fail({
              status: 'badRequest',
              message: err.message
          })
      }
  }
};

