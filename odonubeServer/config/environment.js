module.exports = {

    // SECRETS FOR ENCRYPTION
    authSecret: 'Shall I let you pass, or Shall I not?',
    vSecret: 'Becoming an outstanding Oodonube User',
    cSecret: 'My incredible Odonube',
    mSecret: 'My secret moves will never be discovered',

    // SERVERS DATA
    apiPort: 6800,
    webPort: 5000,
    host: 'localhost',

    // DATABASE DATA
    mysqlPortLocal: '3306',
    mysqlUserLocal: 'root',
    mysqlPassLocal: '123456..',
    mysqlPort: '3306',
    mysqlUser: 'odonube',
    mysqlPass: '$Odonube123..$',
    dbName: "odonubeDB",
    connectionLimit: 100,

    // STATIC FILES PATHS
    // FTP DATA
    ftpHostLocal: 'localhost',
    ftpHostTest: '',
    ftpHostProd: '',
    ftpReportesPort: 2222,
    ftpPassMin: 10520,
    ftpPassMax: 10521,
    ftpUserTest: 'test',
    ftpUserProd: 'odonube',
    ftpPassTest: 'test',
    ftpPassProd: '$odonubeftp123..$',
    ftpReportesPath: '/reportes',

    //SSL DATA
    sslPath: '/etc/letsencrypt/live/dashboard.odonube.com/',
    sslPathTest: '/etc/letsencrypt/live/dashboard.odonube.com/',
    keyFile: 'privkey.pem',
    certFile: 'fullchain.pem',
    reqFile: 'request.pem'

}