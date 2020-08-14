
module.exports = {
    friendlyName: 'Find All Jenis Barang',
  
    description: 'Find all jenis barang',
  
    inputs: {

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
 
            const data = await CreateUser.find()
            return exits.success({
                status: 'success',
                message : data
            })
        }catch(err){
            return exits.serverError({
                status: 'failed',
                message: err.message
              })
        }
    }
}