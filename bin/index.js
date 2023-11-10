#! /usr/bin/env node

const yargs = require("yargs");
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

const err_message = 'unable to filter the data: '

const options = yargs
    .scriptName('filter')
    .usage(`Usage: $0 -d <directory> -s <start> -e <end>`)
    .options({
        'd': {
        alias: 'directory',
        demandOption: true,
        describe: 'CSV files directory path',
        type: 'string'
        },
        's': {
            alias: 'start',
            demandOption: true,
            describe: 'Inclusive starting time to fetch the CSV data (format:RFC3339)',
            type: 'string'
        },
        'e': {
            alias: 'end',
            demandOption: true,
            describe: 'Exclusive starting time to fetch the CSV data (format:RFC3339)',
            type: 'string'
        },
    })
    .argv;

const directoryPath = path.join(options.d, '/');
const startTime = options.s;
const endTime = options.e;

const readdir = (dirname) => {
    return new Promise((resolve, reject) => {
        fs.readdir(dirname, (err, filenames) => {
            if (err) {
                return console.log(err_message + err);
            } else {
                resolve(filenames);
            }         
        });
    });
};

const filterCSVFiles = (filename) => {
    return filename.split('.')[1] == 'csv';
};

const readCSVData = async (filePath) => {
    return new Promise((resolve, reject) => {
        let csvData = [];
        fs.createReadStream(filePath)
        .pipe(parse({ delimiter: ';' }))
        .on('data', (data) => {
            let row = data[0].split(',');
            if (new Date(row[1]) >= new Date(startTime) && new Date(row[1]) < new Date(endTime)) {
                console.log(data[0]);
            }
        })
        .on('end', () => {
            resolve(csvData) 
        })
        .on('error', (err) => {
            return console.log(err_message + err)
        });
    });
}

const filter = async () => {
    try {
        let filenames = await readdir(directoryPath);
        filenames = filenames.filter(filterCSVFiles);

        for (const filename of filenames) {
            let filePath = directoryPath + filename;

            await readCSVData(filePath);
        }    
    } catch (err) {
        console.log(err_message + err)
    }
}

module.exports = filter

filter();
