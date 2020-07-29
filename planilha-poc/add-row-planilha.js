const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./google-credentials.json')

const doc = new GoogleSpreadsheet('13t1YbWN6N71UGpURfDbs6vIharBECzMmjG-Xb50lFDU')

const run = async () => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        console.log(doc.title)

        const sheet = doc.sheetsByIndex[1]
       // cod	name	email	idade	data

       await sheet.addRow({
           Nome:'kleyton leite',
           Email:'musicpteclados@gmail.com',
           Whastapp:'41',
           Cupom: 'teste',
           Promo: 'teste',
           data:'14/07/2020'
       })

    } catch (err) {
        console.log(err)
    }
}
run()