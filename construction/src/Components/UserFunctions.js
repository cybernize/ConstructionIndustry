import axios from 'axios';

// creates new users in the database
export const register = newUser=>{
    return axios.post('users/register',{
        firstName:newUser.firstName,
        lastName:newUser.lastName,
        email:newUser.email,
        password:newUser.password,
    })
    .then(res=>{
        console.log('Registered !');
        return res;
    })
    .catch(err=>{
        console.log(err)
        return err;
    })
}

// Login to the system
export const login = user=>{
    return axios.post('users/login',{
        email:user.email,
        password:user.password
    })
    .then(res=>{
        localStorage.setItem('usertoken',res.data)
        return res.data
    })
    .catch(err=>{
        console.log(err)
    })
}

