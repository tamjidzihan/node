
const loggerInfo = () => {
    const fileName = __filename;
    const directories = __dirname

    console.log('message');
    console.log(fileName);
    console.log(directories);

}


module.exports.loggerInfo = loggerInfo