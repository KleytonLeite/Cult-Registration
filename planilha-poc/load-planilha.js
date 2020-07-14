const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./google-credentials.json')

const doc = new GoogleSpreadsheet('1lZX6QuETHFhiTojs4RK8EqR32V_i2E79_yIMeprJHIQ')

const run = async () => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        console.log(doc.title)

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A3:B3')
        console.log(sheet.title)
        
        const habilitarCadastro = sheet.getCell(2, 0)
        console.log(habilitarCadastro.value)

        const pegarTextoCadastro = sheet.getCell(2, 1)
        console.log(pegarTextoCadastro.value)

        


    } catch (err) {
        console.log(err)
    }
}
run()