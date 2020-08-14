module.exports = {
    friendlyName: 'Delete user',
  
    description: 'Delete user',
  
    inputs: {
    id: {
        type: 'string'
     
      }
    },
  
    exits: {
      success: {
        responseType: 'ok'
      },
      notFound: {
        responseType: 'notFoundResponse'
      },
      badRequest: {
        responseType: 'badRequest'
      },
      forbidden: {
        responseType: 'forbidden'
      },
      exist: {
        responseType: 'existResponse'
      },
      serverError: {
        responseType: 'serverError'
      }
    },

    fn: async function(inputs,exits){
        try{
            const destroy = await CreateUser
            .destroyOne({
              id: inputs.id
            })

            if(destroy){
                return exits.success({
                    status: 'success',
                    message: 'berhasil dihapus',
                    data: destroy
                })
            }else{
                return exits.badRequest({
                    status:'failed',
                    message : 'gagal menghapus'
                })
            }
        }catch(err){
            return exits.serverError({
                status: 'failed',
                message: err.message
              })
        }
    }
}