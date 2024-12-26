const fs = require('fs')

async function getContent(filename) {
    const isExists = fs.existsSync(filename);

    if (!isExists) {
        fs.writeFile(filename, "This is a test file.", (err) => {
            if (err) {
                return console.log("something went wrong");
            }

            console.log("the file is created");
        })
    } else {
        fs.readFile(filename,{encoding:'utf-8'},(err,data)=>{
            if(err){
                return console.log("cannot read file");
            }
            console.log(data);
        })
    }



}

function appendText(filename){
    fs.appendFile(filename,"\nthis is append the file",(err)=>{
        if(err){
            return console.log("somethinfg went wrong in writing");
        }

        console.log("append file sucessfull");
    })
}





appendText("input.txt")