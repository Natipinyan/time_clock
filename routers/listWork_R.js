const express = require('express');
const router = express.Router()
module.exports = router;

router.get("/",(req, res) => {
    res.render("listForWork", {pageTitle:"בוקר טוב"});
});

router.post("/List",(req, res) => {
    let id = req.body.idEmp;
    console.log(id);
    let q=`SELECT * FROM \`list_time\` WHERE idEmployee="${id}"`;
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

router.delete("/Delete/:row_id",(req, res) => {
    let id=req.params.row_id;
    let q=`DELETE FROM \`list_time\` WHERE id='${id}' `;
    db_pool.query(q, function(err, rows, fields){
        if(err){
            res.status(500).json({message: err})
        }else{
            res.status(200).json({message: "OK"});
        }
    });
});

router.delete("/DeleteW/:row_id",(req, res) => {
    let id=req.params.row_id;
    let q=`DELETE FROM \`list_time\` WHERE idEmployee='${id}' `;
    db_pool.query(q, function(err, rows, fields){
        if(err){
            res.status(500).json({message: err})
        }else{
            res.status(200).json({message: "OK"});
        }
    });
});
