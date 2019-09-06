module.exports = function({ types }) {
    return {
        name: 'custom-compile-test',
        visitor: {
            VariableDeclarator(path, { opts }) {
                if(path.node.id.name === 'a') path.node.id.name = opts.varName || 'b'
            }
        }
    }
}