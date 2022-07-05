

export async function errorHandling(error, req, res, next){
    res.send(error);
}