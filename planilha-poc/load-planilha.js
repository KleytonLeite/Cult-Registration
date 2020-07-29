const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./google-credentials.json')

const doc = new GoogleSpreadsheet('13t1YbWN6N71UGpURfDbs6vIharBECzMmjG-Xb50lFDU')

const run = async () => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        console.log(doc.title)

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A2:B2')
        console.log(sheet.title)   
                        
        const cell = sheet.getCell(1, 0)
        console.log(cell.value)       

        

    } catch (err) {
        console.log(err)
    }
}
run()