const { performance } = require('perf_hooks');

const {exportJsonResultCreator} = require("./_utils");

exports.filterCountryEqualsAustria = (datastructure) => {
    const filterItem = 'Austria';

    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

    let v0_FOF = performance.now();

    let newArr = [];

    for (let i = 0; i < datastructure.length; i++) {
        if (datastructure[i].country !== filterItem) {
            newArr.push(datastructure[i])
        }
    }

    let output_FOF = newArr;
    let v1_FOF = performance.now();

    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

    let v0_HOF = performance.now();

    let output_HOF = datastructure.filter(item => item.country !== filterItem)

    let v1_HOF = performance.now();

    return exportJsonResultCreator('filter', datastructure.length, 'filterCountryEqualsAustria',
        output_HOF, output_FOF, v0_HOF, v1_HOF, v0_FOF, v1_FOF)
}


exports.filterCountryEqualsAustriaForInLoop = (datastructure) => {
    const filterItem = 'Austria';

    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

    let v0_HOF = performance.now();
    let output_HOF = datastructure.filter(item => item.country !== filterItem)
    let v1_HOF = performance.now();

    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

    let v0_FOF = performance.now()

    let newArr = [];

    for (let i of datastructure) {
        i.country !== filterItem ? newArr.push(i) : null;
    }

    let output_FOF = newArr;
    let v1_FOF = performance.now();

    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


    return exportJsonResultCreator('filter', datastructure.length, 'filterCountryEqualsAustriaForInLoop',
        output_HOF, output_FOF, v0_HOF, v1_HOF, v0_FOF, v1_FOF)
}
