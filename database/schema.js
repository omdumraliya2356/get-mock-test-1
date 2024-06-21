const express = require("express");
const pool = require("../config/db");
const mysql2 = require("mysql2");

pool.connect(function(err){
    if(err){
        console.log(err);
    }else{
        var sql = "CREATE DATABASE demo";
        pool.query(sql,(err, result)=>{
            if(err){
                console.log(err);
            }else{
                console.log("table created");
            }
        })
    }
});

module.exports = mysql2