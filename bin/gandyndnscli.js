#!/usr/bin/env node

const commander = require('commander');
const ganDynDns = require('../lib/gandyndns');

commander
    .command('update', 'Update the IP address of your domain at Gandi')
    .option('-d, --domain-name', 'The domain name to be updated')
    .option('-n, --name', 'The name of the record to be updated')
    .option('-t, --type', 'The type of the recorder to be updated')
    .option('-a, --api-key', 'You personnal API key from https://account.gandi.net/ in the "security" section')
    .action(function(domainName, name, type, apiKey) {
        ganDynDns.update(domainName, name, type, apiKey);
    });

commander.parse(process.argv);
