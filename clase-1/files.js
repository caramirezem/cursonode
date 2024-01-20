const fs = require('node:fs');
const path = './clase-1';

function reader(dir){
    fs.readdir(dir, {withFileTypes: true}, (err, files) => {
        if(err) {
            console.log(err)
        } else {
            files.forEach(file => {
                console.log(file.name + '/')
            })
        }
    })
}

reader(path)