const express = require("express");
const pool = require("../config/db");
const mssql = require("mssql");

pool.connect(function(err){
    if(err){
        console.log(err);
    }else{
        var sql = "CREATE TABLE admins(id INT AUTO_INCREMENT primary key NOT NULL, userName varchar(255), password varchar(255))";
        pool.query(sql,(err, result)=>{
            if(err){
                console.log(err);
            }else{
                console.log("table created");
            }
        })
    }
});

module.exports = webconfig