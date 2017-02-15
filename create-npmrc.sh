#!/bin/bash
# Licensed Materials - Property of IBM
# (c) Copyright IBM Corporation 2017. All Rights Reserved.
#
# Note to U.S. Government Users Restricted Rights:
# Use, duplication or disclosure restricted by GSA ADP Schedule
# Contract with IBM Corp.

cat - >>$HOME/.npmrc <<EOF
always-auth=true
EOF

cat - >>$HOME/.npmrc <<EOF
# $NPM_NAME
email=$NPM_USER_ID
_auth=$NPM_TOKEN
EOF

if [ ! -z "${NPM_MIRROR_URL}"]; then

cat - >>$HOME/.npmrc <<EOF
registry=$NPM_MIRROR_URL
EOF

fi

cat - >.npmignore <<EOF
_codestation_script.sh
_customer_script.sh
_pipeline_script.sh
EOF
