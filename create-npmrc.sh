#!/bin/bash

#*******************************************************************************
# Copyright 2017 IBM
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#*******************************************************************************

if [ -z "${NPM_USER_ID}" ]; then
NPM_USER_ID=$(echo $NPM_TOKEN | base64 -d | cut -d ':' -f 1)
fi

cat - >$HOME/.npmrc <<EOF
always-auth=true
EOF

cat - >>$HOME/.npmrc <<EOF
email=$NPM_USER_ID
_auth=$NPM_TOKEN
EOF

if [ ! -z "${NPM_MIRROR_URL}" ]; then

cat - >>$HOME/.npmrc <<EOF
registry=$NPM_MIRROR_URL
EOF

fi

cat - >.npmignore <<EOF
_codestation_script.sh
_customer_script.sh
_pipeline_script.sh
EOF
