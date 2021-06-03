const fs = require('fs')
const {forEachCounterIncreaseByOne} = require("./performanceUtils/forEach");
const {filterCountryEqualsAustriaForInLoop} = require("./performanceUtils/filters");
const {chainingExampleOne} = require("./performanceUtils/chaining");
const {mapDoubleFigure} = require("./performanceUtils/map");

const {filterCountryEqualsAustria} = require("./performanceUtils/filters");

exports.getAllFilter = (req, res, next) => {
    res.status(200).json([
        {
            type: 'map',
            functions: [
                'mapDoubleFigure',
            ],
        },
        {
            type: 'filter',
            functions: [
                'filterCountryEqualsAustria',
                'filterCountryEqualsAustriaForInLoop'
            ]
        },
        {
            type: 'forEach',
            functions: [
                'forEachCounterIncreaseByOne'
            ]
        },
        {
            type: 'chaining',
            functions: [
                'chainingExampleOne'
            ]
        },
    ]);
}


exports.getFilter = async (req, res, next) => {
    let dbSource = req.params.data

    let data = JSON.parse(await fs.readFileSync('data/' + dbSource + '.txt'));

    let filter = req.params.filter;

    switch (filter) {
        case "filterCountryEqualsAustria": {
            const result = filterCountryEqualsAustria(data)
            res.status(200).json(result)
            break;
        }
        case "forEachCounterIncreaseByOne": {
            const result = forEachCounterIncreaseByOne(data);
            res.status(200).json(result)
            break;
        }
        case "filterCountryEqualsAustriaForInLoop": {
            const result = filterCountryEqualsAustriaForInLoop(data)
            res.status(200).json(result)
            break;
        }
        case "mapDoubleFigure": {
            const result = mapDoubleFigure(data)
            res.status(200).json(result)
            break;
        }
        case "chainingExampleOne": {
            const result = chainingExampleOne(data)
            res.status(200).json(result)
            break;
        }
    }


    // res.status(404).json({'error': 'either filter or data source invalid'})
}
