const Resultados = require('./results/controller/main');
const Cache = require('./cache/controller/main');
var CronJob = require('cron').CronJob;

module.exports.setCronJobs = function () {
    let jobs = [];
/*     let jobTimeA = '00 00 00/3 * * *'
    var jobA = new CronJob(jobTimeA, Resultados.agregarSorteos, null, true, 'America/Guayaquil');
    jobs.push(jobA) */

    return jobs;
}