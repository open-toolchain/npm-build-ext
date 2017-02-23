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

var fs = require('fs'),
    semver = require('semver');
var versions = JSON.parse(fs.readFileSync(process.env.VER_INFO));

var pkg_version = JSON.parse(fs.readFileSync('package.json')).version;

console.log(pkg_version);
var maj = semver.major(pkg_version),
    min = semver.minor(pkg_version),
    micro = semver.patch(pkg_version),
    rel_version = maj + '.' + min + '.' + micro;

if (semver.eq(pkg_version, rel_version)) {
    // release version
    return;
}

var range = '>=' + pkg_version + ' <' + rel_version;

versions.push(pkg_version);

var max_version = semver.maxSatisfying(versions, range);
//console.log('max version: ' + max_version);


console.log(semver.inc(max_version, 'prerelease', 'SNAPSHOT'));

