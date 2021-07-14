// const sing = async() => {
//     // throw new Error('Uh OH!!!!')
//     throw 'Oh, no PROMLEM!!!'
//     return 'LA LA LA LA'
// }

// sing().then((data)=>{
//     console.log("Promise REsoelved! with:",data)
// })
// .catch(err=>{
//     console.log('OH, no Promise rejected!!!!')
//     console.log(err)
// })

// const login= async(username,password)=>{
//     if(!username || !password) throw 'Missing Credientials'
//     if(password==='corgifeet') return 'Welcome!'
//     throw 'Invalid Password'

// }
// login('asdfasdf','corgifeet')
//     .then(msg=>{
//         console.log("LOGGED in!")
//         console.log(msg)
//     })
//     .catch(err=>{
//         console.log('ERROR!!!')
//         console.log(err)
        
//     })

    const delayedColorChange = (color,delay)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                document.body.style.backgroundColor=color;
                resolve()
            },delay)
        })
    }
    // delayedColorChange('red',1000)
        // .then(()=> delayedColorChange('orange',1000))
        // .then(()=> delayedColorChange('red',1000))
        // .then(()=> delayedColorChange('green',1000))
        // .then(()=> delayedColorChange('purple',1000))
        // .then(()=> delayedColorChange('blue',1000))

////////this is the equlivanet of what you did above
async function rainbow(){
    await delayedColorChange('red',1000)
    console.log('HI!!!!!!!!')
    await delayedColorChange('orange',1000)
    await delayedColorChange('purple',1000)
    await delayedColorChange('green',1000)
    await delayedColorChange('yellow',1000)
    await delayedColorChange('blue',1000)
    return 'all done'
}
rainbow().then(()=>console.log('end of the Rainbow!!!'))

async function printRainbow(){
    await rainbow();
    console.log('end of the Rainbow!!!')
}