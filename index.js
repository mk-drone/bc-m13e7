let fs = require('fs');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', ()=>{
    console.log('Enter path:');
    let path = process.stdin.read();
    if(path !== null){        
        fs.readdir(path.trim(), (err,files)=>{
            if(!err){
                fs.writeFile('./directory_list.txt', files.join('\n'), (err)=>{
                    if(err){
                        throw err;
                    }else{
                        console.log('File List Saved');
                    }
                })
            }
        });
    }
})
