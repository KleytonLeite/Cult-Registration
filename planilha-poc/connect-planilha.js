const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./google-credentials.json')

const doc = new GoogleSpreadsheet('13t1YbWN6N71UGpURfDbs6vIharBECzMmjG-Xb50lFDU')

const run = async () => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        console.log(doc.title)

    } catch (err) {
        console.log(err)
    }
}
run()