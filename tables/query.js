const express = require("express");
const connection = require("../config/db");
const mysql = require("mysql");

connection.connect(function(err){
    if(err){
        console.log(err);
    }else{
        var sql = "CREATE TABLE admins(id INT AUTO_INCREMENT primary key NOT NULL, userName varchar(255), password varchar(255))";
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