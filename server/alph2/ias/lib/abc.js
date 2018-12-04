/**
 * @api {put} /v1/reports/airings/notify Notify IAS to create scheduled airings report
 * @apiName PutNotifyScheduledReport
 * @apiGroup Airing Schedule
 * @apiParam (Body Object) {String} request-id Request id of the schedule created on TaskR.
 * @apiSuccess (200 Response) {String} msg
 * @apiSuccessExample {json} Success-Response:
 *     200 OK
 *     "Request received."
 */