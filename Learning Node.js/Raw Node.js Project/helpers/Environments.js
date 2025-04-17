// title :Environments
// Description:Handle all environment related things
// Author:Niloy Chowdhury
// Date;16/4/2025

//dependecies

//module scaffolding
const environments={};

environments.staging={
    port:3000,
    envName : 'staging',
    secretKey:'dg748ffyuf683gt4fgyfew7f'
};

environments.production={
    port:5000,
    envName : 'production',
    secretKey:'ew4q54we25r3ry480gy54gy8h'
};

//determine which environment has passed
const curEnv=typeof(process.env.NODE_ENV)==='string'?
process.env.NODE_ENV:'staging';

//export corresponding environment object
const envExp=(typeof environments[curEnv]==='object')?
environments[curEnv]:environments.staging;

// console.log(typeof environments[curEnv]);

module.exports=envExp;
