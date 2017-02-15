/**
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2017. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 */

var fs = require('fs'); 
var services = JSON.parse(fs.readFileSync('/tmp/tc_services.json')).services; 

var npm_mirror = findServiceInstance(services, 'npm-mirror');
if (npm_mirror) {
    console.log('export NPM_MIRROR_URL="' + npm_mirror.dashboard_url + '"');
}

var npm_si = findServiceInstance(services, '-npm');
if (npm_si) {
    var name = npm_si.parameters.name,
        url = npm_si.parameters.dashboard_url,
        user_id = npm_si.parameters.user_id,
        token = npm_si.parameters.token,
        id = name.substring(0, name.length-4);
    console.log('export NPM_NAME="' + id + '"');
    console.log('export NPM_RELEASE_URL="' + url + '"');
    console.log('export NPM_USER_ID="' + user_id + '"');
    console.log('export NPM_TOKEN="' + token + '"');
}

function findServiceInstance(services, suffix) {
    var nexus = services.filter(function (v) {
        return v.service_id === 'nexus'
            && v.parameters && v.parameters.name
            && v.parameters.name.endsWith(suffix);
    });
    if (nexus.length>0) {
        return nexus[0];
    }
}