import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import credentials from'../../google-credentials.json'

const doc = new GoogleSpreadsheet('1lZX6QuETHFhiTojs4RK8EqR32V_i2E79_yIMeprJHIQ')

const genCode = () => {
    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4)
}

export default async(req, res) => {

    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)

        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A3:B5')
                        
        const habilitarCadastro = sheetConfig.getCell(2, 0)
        const pegarTextoCadastro = sheetConfig.getCell(4, 1)

        let Cod = ''
        let messageCadastro = ''
        if(habilitarCadastro.value === 'VERDADEIRO'){
            Cod = genCode()
            messageCadastro = pegarTextoCadastro.value
        }
       // cod	name	email	idade	data

       await sheet.addRow({
           Cod,
           Nome:data.Nome,
           Email:data.Email,
           Idade:data.Idade,
           'Data Cadastro': moment().format('DD/MM/YYYY HH:mm:ss'),
           messageCadastro
       })
       res.end(JSON.stringify({
           showCodigo: Cod !== '',
           Cod,
           messageCadastro 
       }))
    } catch (err) {
        console.log(err)
        res.end('error')
    } 
}