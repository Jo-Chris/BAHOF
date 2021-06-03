const {performance} = require('perf_hooks');

const {exportJsonResultCreator} = require("./_utils");

exports.forEachCounterIncreaseByOne = (datastructure) => {

    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

    let logfile = [];

    let datastructureA = [...datastructure];
    let datastructureB = [...datastructure];

    logfile.push('A')

    let v0_HOF = performance.now();

    let counterHOF = 0;

    datastructureB.forEach((item, index) => {
        logfile.push('hof' + index);

        counterHOF += (item.favourite_number / 2)
    })

    let v1_HOF = performance.now();

    logfile.push('B')



    let v0_FOF = performance.now()

    let counterFOF = 0;

    logfile.push('C')

    for (let i = 0; i < datastructureA.length; i++) {
        logfile.push(i)
        counterFOF += (datastructureA[i].favourite_number / 2)
    }

    logfile.push('D')

    let v1_FOF = performance.now();





    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

    return logfile;

    return exportJsonResultCreator(
        'map',
        datastructure.length,
        'mapDoubleFigure',
        counterHOF,
        counterFOF,
        v0_HOF,
        v1_HOF,
        v0_FOF,
        v1_FOF)
}
