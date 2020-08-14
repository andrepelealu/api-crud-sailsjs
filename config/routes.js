/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  'POST /api/create' : {action : 'user/create'},
  'PATCH /api/update/:id' : {action : 'user/update'},
  'GET /api/getall' : {action: 'user/get'},
  'DELETE /api/delete/:id' : {action: 'user/delete'}
};
