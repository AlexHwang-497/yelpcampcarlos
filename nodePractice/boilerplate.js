const fs = require('fs')
// console.groupCollapsed(fs)
const folderName=process.argv[2] || 'Project'


// asynchronosu version
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('in the CAllback!!!!')
//     if (err) throw err;
//   });
// console.log('I come after MKDIR file!!!!')


  // sycronous version
// fs.mkdirSync('Cats')
// console.log('I come after MKDIR file!!!!')

fs.mkdirSync(folderName)
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/app.js`)
fs.writeFileSync(`${folderName}/styles.css`)

  