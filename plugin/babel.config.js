module.exports = {
    plugins: [
        [
            require('./plugin.js'),
            {
                varName: 'hello'
            }
        ]
    ]
}