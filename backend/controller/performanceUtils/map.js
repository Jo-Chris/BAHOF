const {performance} = require('perf_hooks');

const {exportJsonResultCreator} = require("./_utils");

exports.mapDoubleFigure = (datastructure) => {

    let datastructureA = [...datastructure];
    let datastructureB = [...datastructure]


    const v0_FOF = performance.now()

    const output_FOF = [];

    for (let i = 0; i < datastructureA.length; i++) {
        datastructureA[i] = datastructureA[i].favourite_number * 2;
    }

    const v1_FOF = performance.now();

    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

    const v0_HOF = performance.now();

    const output_HOF = datastructureB.map(item => item.favourite_number * 2)

    const v1_HOF = performance.now();

    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---





    return exportJsonResultCreator(
        'map',
        datastructure.length,
        'mapDoubleFigure',
        output_HOF,
        output_FOF,
        v0_HOF,
        v1_HOF,
        v0_FOF,
        v1_FOF)
}
