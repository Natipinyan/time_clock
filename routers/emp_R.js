const express = require('express');
const router = express.Router()
module.exports = router;

router.get("/",(req, res) => {
    res.render("mainPageEmp", {pageTitle:"בוקר טוב"});
});

router.get("/List",(req, res) => {
    let q="SELECT * FROM `employes`";
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

router.post("/Add",(req, res) => {
    let{first_name,family_name,phone}=req.body;
    let Query = "INSERT into employes";
    Query+="(first_name,family_name,phone)";
    Query+= " VALUES ";
    Query+=`('${first_name}','${family_name}','${phone}')`;
    console.log("adding task",Query);
    db_pool.query(Query, function (err, rows, fields) {
        if (err) {
            res.status(500).json({message: err})
        }
        res.redirect("/employs");
    });
});

router.post("/Update",(req, res) => {
    let first_name = req.body.nameOffUp;
    let last_name = req.body.lastNameOffUp;
    let phone = req.body.phoneOffUp;
    let id = req.body.idOffUp;
    let q=`UPDATE \`employes\`  SET \`first_name\`='${first_name}',\`family_name\`= '${last_name}',\`phone\`= '${phone}' WHERE id=${id} `;
    db_pool.query(q, function(err, rows, fields){
        if(err){
            res.status(500).json({message: err})
        }else{
            res.redirect("/employs");
        }
    });
});

router.delete("/Delete/:row_id",(req, res) => {
    let id=req.params.row_id;
    let q=`DELETE FROM \`employes\` WHERE id='${id}' `;
    db_pool.query(q, function(err, rows, fields){
        if(err){
            res.status(500).json({message: err})
        }else{
            res.status(200).json({message: "OK"});
        }
    });
});