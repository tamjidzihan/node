const logger = require('./logger')

const fileName = logger.loggerInfo.fileName

const sayHello = () => {

    console.log(fileName)

    logger.loggerInfo()
}


sayHello()