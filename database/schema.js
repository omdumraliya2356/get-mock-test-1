const express = require("express");
const webconfig = require("../config/db");
const mysql2 = require("mysql2");

webconfig.connect(function(err){
    if(err){
        console.log(err);
    }else{
        var sql = "CREATE DATABASE demo";
        webconfig.query(sql,(err, result)=>{
            if(err){
                console.log(err);
            }else{
                console.log("table created");
            }
        })
    }
});

module.exports = mysql2