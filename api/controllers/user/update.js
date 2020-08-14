/**
 * UpdateController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    friendlyName : 'update user',
    description : 'untuk update user baru',
  
    inputs:{
    id:{
        type: 'string'
    },
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
        try {

            const id = inputs.id;
            // const {
            //   name,
            //   email,
            //   gender,
            //   phone_number
            // } = inputs;
            const users = await CreateUser.updateOne({
                id : inputs.id
            }).set({
                name    : inputs.name,
                email   : inputs.email,
                gender  : inputs.gender,
                phone_number : inputs.phone_number 
            });
            return exits.success({
                status: 'success',
                message : 'user updated',
                result : users
            })
          } catch (err) {
            return exits.fail({
                status: 'badRequest',
                message: err.message
            })
          }
    }
};

