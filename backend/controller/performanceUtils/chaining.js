const {performance} = require('perf_hooks');

const {exportJsonResultCreator} = require("./_utils");

/*
 * filter out all customers from Austria,
 * double their id
 */


exports.chainingExampleOne = (datastructure) => {
    let filterCriteria = 'Austria';
    let mapCriteria = 2

    let v0_HOF = performance.now();

    let output_HOF = datastructure
        .filter(item => item.country === filterCriteria)
        .map(item => item.id * mapCriteria)

    let v1_HOF = performance.now();

    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

    let v0_FOF = performance.now()

    let output_FOF = [];

    for (let i of datastructure) {
        if (i.country === filterCriteria) {
            output_FOF.push(i.id *= mapCriteria);
        }
    }

    let v1_FOF = performance.now();

    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

    return exportJsonResultCreator(
        'multiple',
        datastructure.length,
        'chainingExampleOne',
        output_HOF,
        output_FOF,
        v0_HOF,
        v1_HOF,
        v0_FOF,
        v1_FOF)
}
