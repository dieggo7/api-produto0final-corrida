const db = require('../../mongo');

exports.createCollection = async (req, res, next) => {
    try {
        const collectionName = req.body.collectio_name
        
        const client = MongoAPIError.connectdb()
        await client.createCollection(collectionName)

        return res.status(201).send({'Mensagem': `Colletion criada com sucesso!`});

    } catch (error) {
        return res.status(500).send({'error': error});
    }
}