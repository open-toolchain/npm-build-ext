#!/bin/bash
# Licensed Materials - Property of IBM
# (c) Copyright IBM Corporation 2017. All Rights Reserved.
#
# Note to U.S. Government Users Restricted Rights:
# Use, duplication or disclosure restricted by GSA ADP Schedule
# Contract with IBM Corp.


# get latest version
npm view "${NPM_MODULE_NAME}" dist-tags.latest --registry "${NEXUS_URL}" >/tmp/ver_info.txt
( cd $EXT_DIR ; npm install semver )
NEW_VER=$( node $EXT_DIR/generate-latest-version.js )

sed -i 's/"version".*:[^,]*,/"version": "'${NEW_VER}'",/g' package.json

