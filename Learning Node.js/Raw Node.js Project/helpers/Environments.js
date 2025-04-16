// title :Environments
// Description:Handle all environment related things
// Author:Niloy Chowdhury
// Date;16/4/2025

//dependecies

//module scaffolding
const environments={};

environments.staging={
    port:3000,
    envName : 'staging'
};

environments.production={
    port:5000,
    envName : 'production'
};

//determine which environment has passed
const curEnv=typeof(process.env.NODE_ENV)==='string'?
process.env.NODE_ENV:'staging';

//export corresponding environment object
const envExp=(typeof environments[curEnv]==='object')?
environments[curEnv]:environments.staging;

// console.log(typeof environments[curEnv]);

module.exports=envExp;
