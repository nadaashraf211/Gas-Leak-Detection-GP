var pool= require('./pool')
exports.dbQuery = (queryText,queryparams)=>{
    return new Promise((resolve , reject) => {
        pool.query(queryText,queryparams)
        .then(res =>{
            resolve(res);
        })
        .catch(err => {
            reject(err);
        })

    });
};