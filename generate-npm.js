/**
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2017. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 */
/*eslint-env node */
var fs = require('fs'); 
var services = JSON.parse(fs.readFileSync(process.env.SERVICE_INSTANCE_FILE)).services;

var npm_service = findServiceInstance(services, process.env.SERVICE_INSTANCE_TYPE, process.env.SERVICE_INSTANCE);
if (npm_service) {
    var id = npm_service.parameters.name,
        url = npm_service.parameters.dashboard_url,
        mirror_url = npm_service.parameters.mirror_url,
        snapshot_url = npm_service.parameters.snapshot_url,
        user_id = npm_service.parameters.user_id,
        token = npm_service.parameters.token;
    console.log('export NPM_NAME="' + id + '"');
    console.log('export NPM_RELEASE_URL="' + url + '"');
    console.log('export NPM_USER_ID="' + user_id + '"');
    console.log('export NPM_TOKEN="' + token + '"');
    console.log('export NPM_MIRROR_URL="' + mirror_url + '"');
    console.log('export NPM_SNAPSHOT_URL="' + snapshot_url + '"');
}

function findServiceInstance(services, type, name) {
    var nexus = services.filter(function (v) {
        return v.service_id === type
            && (name  === '(default)'
                || v.parameters && v.parameters.name === name);
    });
    if (nexus.length>0) {
        return nexus[0];
    }
}
