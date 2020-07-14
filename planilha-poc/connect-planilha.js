const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./google-credentials.json')

const doc = new GoogleSpreadsheet('1lZX6QuETHFhiTojs4RK8EqR32V_i2E79_yIMeprJHIQ')

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