/********************************************************************************
 * Copyright 2017 IBM
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 ********************************************************************************/
/*eslint-env node */
var fs = require('fs'); 
var services = JSON.parse(fs.readFileSync(process.env.SERVICE_INSTANCE_FILE)).services;

var npm_service = findServiceInstance(services, process.env.SERVICE_INSTANCE_TYPE, process.env.SERVICE_INSTANCE);
if (npm_service) {
    var id = npm_service.parameters.name,
        url = npm_service.parameters.release_url,
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
