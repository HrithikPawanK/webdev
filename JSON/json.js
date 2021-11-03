const data = '{"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}';

// string --> JSON object :-> JSON.parse()

const dataObject = JSON.parse(data)

console.dir(dataObject)

// JSON object --> string :-> JSON.stringify()

console.log(JSON.stringify(dataObject))

