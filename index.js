const express = require('express')
const app = express()
const PORT = 5000
const Register = require('./api/routes/register')

// //seed phrase code
// const bip39 = require('bip39')
// const mnemonic = bip39.generateMnemonic()
// console.log(mnemonic)

require('dotenv').config();
require('./config/database').connect() 

app.use(express.json())

app.use('/api', Register);

app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`);
});