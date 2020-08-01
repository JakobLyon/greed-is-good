const mysql = require('mysql');
const fs = require('fs');

var connection = mysql.createConnection({
    host: 'newswire.theunderminejournal.com',
    user: 'anonymous',
    database: 'newsstand'
  });
   
connection.connect();

connection.query('select item.when, pricemin, priceavg, pricemax, pricestart, priceend, quantitymin, quantityavg from tblItemHistoryDaily as item join tblRealm as realm on realm.house = item.house where item.item = 152510 and realm.house = 86;', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
    fs.writeFile('timeSeriesData.txt', JSON.stringify(results), err => {
        if (error) throw error;
        console.log('file is written');
    })
});
   
  connection.end();