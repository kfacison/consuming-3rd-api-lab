var express = require('express');
var router = express.Router();


const ROOT_URL = 'https://catfact.ninja/';

router.get('/facts', 
    async function(req, res, next) {
        const options = {
            headers: {
                "X-CSRF-TOKEN": token,
            }
        };
        const ranNum = Math.floor(Math.random() * 100) + 10;
        console.log(ranNum);
        const catInfo = await fetch(`${ROOT_URL}fact?max_length=${ranNum}`)
        .then(res => res.json());
        console.log(catInfo)
        res.render('cat/fact', {catInfo});
    });

module.exports = router;