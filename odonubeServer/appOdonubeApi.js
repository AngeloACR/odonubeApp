const db = require('./database');
const apiServer = require('./apiServer');
const config = require('./config/environment');
const cronjobs = require('./cronjobs');

// https://www.nginx.com/blog/nginx-caching-guide/

const apiPort = config.apiPort;
const apiApp = apiServer.init(apiPort);

apiApp.listen(apiPort, () => {
    console.log('Server running at: ' + apiPort);
});

let jobs = cronjobs.setCronJobs();
jobs.forEach(job => {
    job.start();
});