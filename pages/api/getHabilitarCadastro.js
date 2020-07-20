import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from'../../google-credentials.json'

const doc = new GoogleSpreadsheet('1lZX6QuETHFhiTojs4RK8EqR32V_i2E79_yIMeprJHIQ')
 
 export default async(req, res) => {

    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A3:D3')
        
                
        const habilitarCadastro = sheet.getCell(2, 0)
        const pegarTextoCadastro = sheet.getCell(2, 1)
        const habilitarTextoCadastroErro = sheet.getCell(2, 2)
        const pegarTextoCadastroErro = sheet.getCell(2, 3)

       
        res.end(JSON.stringify({
            showCadastro: habilitarCadastro.value === 'VERDADEIRO',
            message: pegarTextoCadastro.value,
            habilitarTextoCadastroErro:habilitarTextoCadastroErro.value === 'VERDADEIRO',
            messageErro: pegarTextoCadastroErro.value
        }))

    } catch (err) {
        console.log(err)
    }
 }