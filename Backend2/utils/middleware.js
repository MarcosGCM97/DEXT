const logger = require('./logger')

const requestLogger = (request, response, next) => {
    logger.info('Method:', request.method)
    logger.info('Path:  ', request.path)
    logger.info('Body:  ', request.body)
    logger.info('---')
    next()
  }

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknoun endpoint' })
}

const errorHandler = (error, response) => {
    logger.error(error.message)
    
    if(error.name === 'CastError'){
        return response.status(400).send({
            error: 'malformated id'
        })
    }
}