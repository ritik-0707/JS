//  const { Console } = require('console');


// const {readFileSync,writeFileSync} = require('fs');
// const os= require('os');
// const user =os.type();
// const pth=require('path');
// const abs=pth.resolve(__dirname);

// console.log(abs);
// writeFileSync( './subfile.txt',' ritik gupta',{flag:'a'});


const _ =require('lodash');
const item=[1,[2,[3,[4]]]];
const nitems=_.flattenDeep(item);
console.log(nitems);