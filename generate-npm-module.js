/**
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2017. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 */

var fs = require('fs'); 

var pkg = JSON.parse(fs.readFileSync('package.json'));
if (pkg) {
    console.log('export NPM_MODULE_NAME="' + pkg.name + '"');
}

