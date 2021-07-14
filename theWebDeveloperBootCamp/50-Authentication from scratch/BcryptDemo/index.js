const bcrypt =require('bcrypt')

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, salt);
    console.log(salt);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw)
    if(result){
        console.log("logged you in!  successful match!")
    } else {
        console.log('incorrect!')
    }
}

// hashPassword('monkey')
login('monkey','$2b$12$Tu8hQF6iVX.im0HxuFIJp.9tafE65i4/iB1uswDsDfeJD15qciG')
