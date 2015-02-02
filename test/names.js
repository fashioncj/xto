/**
 * XadillaX created at 2014-11-15 00:16
 *
 * Copyright (c) 2014 Huaban.com, all rights
 * reserved.
 */
var xto = require("../");

var companies = xto.mapper;

companies.forEach(function(ele) {
    var str = "+ ";
    str += ele.companyname;
    str += "（";
    str += ele.shortname;
    str += "，";
    str += ele.code;
    str += "）";

    console.log(str);
});

