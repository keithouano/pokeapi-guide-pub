const values = {};

values.protocol = 'https';
values.hostName = '://pokeapi.co';
values.versionPath = '/api/v2/';
values.timeout = 20 * 1000; // 20 seconds
values.expire = 7 * 24 * 60 * 60 * 1000; // 7 days

values.setProtocol = newProtocol => {
    values.protocol = newProtocol;
}
values.setHostName = newHostName => {
    values.hostName = `://${newHostName}`;
}
values.setVersionPath = newVersionPath => {
    values.versionPath = newVersionPath;
}
values.setTimeout = newTimeout => {
    values.timeout = newTimeout;
}
values.setExpire = newExpire => {
    values.Expire = newExpire;
}

exports.values = values
