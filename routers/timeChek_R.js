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
   let id    = req.body.idEmp;

    let Query = "INSERT into list_time";
    Query+="(idEmployee)";
    Query+= " VALUES ";
    Query+=`('${id}')`;
    console.log(Query);


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

    let id    = req.body.idEmp;
    let Query=`UPDATE \`list_time\`  SET 
    \`Depature_Time\`= CURRENT_TIMESTAMP WHERE idEmployee=${id} AND Depature_Time is null`;

    console.log(Query);

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

