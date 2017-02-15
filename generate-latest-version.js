/**
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2017. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 */
var fs = require('fs'),
    semver = require('semver');
var version = fs.readFileSync('/tmp/ver_info.txt').toString().trim();
if (!version || version === "") {
    version = JSON.parse(fs.readFileSync('package.json')).version; 
}

if (version) {
    console.log(semver.inc(version, 'prerelease', 'SNAPSHOT'));
}
