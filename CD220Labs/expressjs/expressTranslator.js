const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = new express();
app.use(express.static('cad220_staticfiles'))

function translate(textToTranslate,res) {
    let api_key = process.env.API_KEY;
    let api_url = process.env.API_URL;
    
    const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
    const { IamAuthenticator } = require('ibm-watson/auth');
    
    const languageTranslator = new LanguageTranslatorV3({
      version: '2018-05-01',
      authenticator: new IamAuthenticator({
        apikey: api_key,
      }),
      serviceUrl: api_url,
    });

    const translateParams = {
        text: textToTranslate,
        modelId: 'en-es',
      };
    
    languageTranslator.translate(translateParams)
        .then(translationResult => {
            res.send(translationResult.result.translations[0].translation);
        }).catch(err => {
          res.send(err.toString());
        });
}

app.get("/translate", (req,res) => {
    let textToTranslate = req.query.textToTranslate;
    translate(textToTranslate,res);
});

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})