const express = require('express');
const router = express.Router()
module.exports = router;

router.get("/",(req, res) => {

    res.render("mainPageTimeChek", {pageTitle:"בוקר טוב"});

});

router.get("/List",(req, res) => {

    let q="SELECT * FROM `list_time`";

    db_pool.query(q, function(err, rows, fields){

        if(err)
        {
            res.status(500).json({message: err})
        }
        else
        {
            res.status(200).json(rows );
        }
    });
});

router.post("/in",(req, res) => {

   /* let id = req.body.idOffUp;

    let q=`UPDATE \`list_time\`  SET \`Entry_Time\`= '2023-09-23T17:28:14.000Z' WHERE id=${id} `;*/

    let{idEmployee}=req.body;

    let Query = "INSERT into list_time";
    Query+="(idEmployee,Entry_Time)";
    Query+= " VALUES ";
    Query+=`('${idEmployee}','2023-09-23T17:28:14.000Z')`;


    db_pool.query(Query, function(err, rows, fields){

        if(err)
        {
            res.status(500).json({message: err})
        }
        else
        {
            res.status(200).json(rows );
        }
    });
});

router.post("/out",(req, res) => {

    let id = req.body.idEmployee;

    let Query=`UPDATE \`list_time\` SET \`Depature_Time\`='2023-09-22T21:00:00.000Z' WHERE idEmployee=${id} `;


    db_pool.query(Query, function(err, rows, fields){

        if(err)
        {
            res.status(500).json({message: err})
        }
        else
        {
            res.status(200).json(rows );
        }
    });
});

