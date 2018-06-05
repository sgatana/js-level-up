'use strict';

const proto = __dirname + '/messages.proto';
const fs = require('fs');
const grpc = require('grpc');
const process = require('process');

const serviceDef = grpc.load(proto);

const port = 3000;
