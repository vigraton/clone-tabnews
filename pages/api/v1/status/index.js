function status(request, response){
    response.status(200).json({chave: "Sinistro"});
}

export default status;