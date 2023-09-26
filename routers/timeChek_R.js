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
   let date  =  req.body.date;

    let Query = "INSERT into list_time";
    Query+="(idEmployee,Entry_Time)";
    Query+= " VALUES ";
    Query+=`('${id}',"${date}")`;
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
    let date  =  req.body.date;
    //let Query= `UPDATE "list_time" SET "${`Depature_Time`}" = ${date} WHERE "list_time.id" = ${id}`;
    let Query=`UPDATE \`list_time\`  SET \`Depature_Time\`='${date}' WHERE idEmployee=${id} `;

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

