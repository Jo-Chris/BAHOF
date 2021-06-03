exports.exportJsonResultCreator =
    (
        functionType,
        database,
        functionName,
        dataHOF,
        dataFOF,
        v0HOF,
        v1HOF,
        v0FOF,
        v1FOF
    ) => {
        return {
            'type': functionType,
            'database': database,
            'functionName': functionName,
            'resultLength': [
                {
                    'higherOrder': dataHOF.length,
                    'firstOrder': dataFOF.length
                },
            ],
            'timeToPerform':
                [
                    {
                        'higherOrder': v1HOF - v0HOF,
                        'firstOrder': v1FOF - v0FOF
                    }
                ]
        }
    }
