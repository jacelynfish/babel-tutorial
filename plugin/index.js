const parse = require('@babel/parser').parse
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default

const t = require('@babel/types')
const fs = require('fs')


fs.readFile('./code.js', 'utf8', (err, data) => {
    if(err) return;
    let ast = parse(data, {
        sourceType: 'script'
    })
    console.log(JSON.stringify(ast, null, 2))

    let visitor = {
        VariableDeclarator(path, state) {
            if(path.node.id.name === 'a') path.node.id.name = 'b'
        }
    }
    traverse(ast, visitor)
    let { code } = generate(ast, {} , data)
    // console.log(code)
});


