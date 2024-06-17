const express = require("express");
const connection = require("../config/db");
const mysql2 = require("mysql2");

connection.connect(function(err){
    if(err){
        console.log(err);
    }else{
        var sql = "CREATE DATABASE demo";
        connection.query(sql,(err, result)=>{
            if(err){
                console.log(err);
            }else{
                console.log("table created");
            }
        })
    }
});

module.exports = mysql2