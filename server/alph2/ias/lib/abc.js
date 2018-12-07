/**
 * @api {get} /v1/config Get an IAS config value from "ETCD" 4.0 modified test 2.
 * @apiName GetConfigValue
 * @apiGroup General
 * @apiParam (Query) {String} key Name of the ETCD config key stored under /ias
 * @apiHeader (Request Header) {String} authorization-token User unique JWT access token
 * @apiSuccess (200 Response Object) {String} value Strigified value of type like Array, Boolean, etc.
 * @apiError (404 Response Object) {String} msg
 * @apiErrorExample {json} Error-Response:
 *     404 Not Found
 *     {
 *       "msg": "Config key missing in query param"
 *     }
 *     {
 *       "msg": "Invalid key"
 *     }
 */
