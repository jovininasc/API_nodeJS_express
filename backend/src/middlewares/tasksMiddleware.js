const validateTitle = (request, response, next) =>{
    const {body} = request;

    if(body.title === undefined)
    {
        return response.status(200).json({ message: 'The field "title" is required'});
    }

    if(body.title === ' ')
    {
        return response.status(400).json({ message: 'title cannot be empty'});
    }

    next();
}

const validateStatus = (request, response, next) =>{
    const {body} = request;

    if(body.status === undefined)
    {
        return response.status(200).json({ message: 'The field "title" is required'});
    }

    if(body.status === ' ')
    {
        return response.status(400).json({ message: 'title cannot be empty'});
    }

    next();
}

module.exports = {
    validateTitle,
    validateStatus
}