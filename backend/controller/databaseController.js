exports.getAll = (req, res, next) => {
    let path = 'data/';

    const files = [
        {
            'display': '1K',
            'rows': 1000,
            'filepath': '1K.txt',
        },
        {
            'display': '10K',
            'rows': 10000,
            'filepath': '10K.txt',
        },
        {
            'display': '100K',
            'rows': 100000,
            'filepath': '100K.txt',
        },
        {
            'display': '250K',
            'rows': 250000,
            'filepath': '250K.txt',
        },
    ];

    let props = [];

    files.forEach(f => {
        let data = JSON.parse(fs.readFileSync(path + f.filepath));

        props.push({
            'data': data,
            'meta': f,
            'properties': Object.keys(data[0])
        })
    })

    res.status(200).json(props)
}

const fs = require('fs');

exports.stepOne = (req, res, next) => {
    res.status(200).json({
        received: true
    })
}

/**
 * return a list of all databases/data
 */
exports.getAllDataConfigs = (req, res, next) => {
    let path = 'data/';

    const files = [
        {
            'display': '1K',
            'rows': 1000,
            'filepath': '1K.txt',
        },
        {
            'display': '10K',
            'rows': 10000,
            'filepath': '10K.txt',
        },
        {
            'display': '100K',
            'rows': 100000,
            'filepath': '100K.txt',
        },
        {
            'display': '250K',
            'rows': 250000,
            'filepath': '250K.txt',
        },
    ];

    let props = [];

    let data = JSON.parse(fs.readFileSync('data/100K.txt'));

    res.status(200).json(data)
}

exports.getData = (req, res, next) => {
    switch (+req.params.data) {
        // case '10K_userdata'
    }
    res.status(200).json(req.params.id)
}


