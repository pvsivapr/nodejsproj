var bodyParser = require('body-parser')

var appRouter = function(app, conn)
{
  // parse application/x-www-form-urlencoded
  // app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  // app.use(bodyParser.json())

  app.get("/", function(req, res) {
      res.send("Hello World");
  });
  app.get("/UserData", function(req, res) {
    var sql = "Select * FROM sivaprasad_userdb";
    conn.query(sql, function (err, result)
    {
      if (err)
      {
        throw err;
      }
      else
      {
        console.log("Got all results successfully");
        // for (var i = 0; i < result.length; i++)
        // {
        //   var row = result[i];
        //   console.log(row.userName);
        // }
        var data1 = JSON.stringify(result);
        // console.log("Result :  ", data1);
        // return data1;
        respObject = "Got all results successfullyyyyyyy";
        console.log(respObject);
        res.send(data1);
      }
      // conn.end();
    });
  });///locations_basic_sample

  app.post("/UsersData", function(req, res) {
    if(!req.body.user_id || !req.body.user_name || !req.body.user_Password || !req.body.user_address || !req.body.user_mobile )
    {
      res.send({"status": "error", "message": "missings a parameter", "user_id": req.body.user_id});
    }
    else
    {
      var sql = "INSERT INTO sivaprasad_userdb (userId, userName, password, address, mobile ) VALUES ("+req.body.user_id+", '"+req.body.user_name+"', '"+req.body.user_Password+"', '"+req.body.user_address+"', '"+req.body.user_mobile+"')";
      conn.query(sql, function (err, result)
      {
        if (err)
        {
          res.send({"status": "success", "message": err.message});
          // throw err;
        }
        else
        {
          res.send({"status": "success", "message": "One record inserted"});
          // console.log("1 record inserted");
        }
        // conn.end();
      });
    }
  });


  app.get("/", function(req, res) {
    res.send("Hello World");
});
app.get("/UserBasicLocationsData", function(req, res) {
  var sql = "Select * FROM locations_basic_sample";
  conn.query(sql, function (err, result)
  {
    if (err)
    {
      throw err;
    }
    else
    {
      console.log("Got all results successfully");
      // for (var i = 0; i < result.length; i++)
      // {
      //   var row = result[i];
      //   console.log(row.userName);
      // }
      var data1 = JSON.stringify(result);
      // console.log("Result :  ", data1);
      // return data1;
      respObject = "Got all results successfullyyyyyyy";
      console.log(respObject);
      res.send(data1);
    }
    // conn.end();
  });
});///locations_basic_sample

app.get("/GetSpecificUserLocationsData", function(req, res) {
  var sql = "SELECT *, ( 6371 * acos( cos( radians(16.904791) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(82.002704) ) + sin( radians(16.904791) ) * sin( radians( latitude ) ) ) ) AS distance FROM locations_basic_sample HAVING distance < 25 ORDER BY distance LIMIT 0 , 20;";//"Select * FROM locations_basic_sample";
  //  var sql = "SELECT id, ( 6371 * acos( cos( radians(37) ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(-122) ) + sin( radians(37) ) * sin( radians( lat ) ) ) ) AS distance FROM your_table_name HAVING distance < 25 ORDER BY distance LIMIT 0 , 20;";
  //SELECT *, ( 6371 * acos( cos( radians(37) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(-122) ) + sin( radians(37) ) * sin( radians( latitude ) ) ) ) AS distance FROM locations_basic_sample HAVING distance < 25 ORDER BY distance LIMIT 0 , 20;
  //SELECT *, ( 6371 * acos( cos( radians(16.904791) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(82.002704) ) + sin( radians(16.904791) ) * sin( radians( latitude ) ) ) ) AS distance FROM locations_basic_sample HAVING distance < 25 ORDER BY distance LIMIT 0 , 20;
  conn.query(sql, function (err, result)
  {
    if (err)
    {
      throw err;
    }
    else
    {
      console.log("Got all results successfully");
      // for (var i = 0; i < result.length; i++)
      // {
      //   var row = result[i];
      //   console.log(row.userName);
      // }
      var data1 = JSON.stringify(result);
      // console.log("Result :  ", data1);
      // return data1;
      respObject = "Got all results successfullyyyyyyy";
      console.log(respObject);
      res.send(data1);
    }
    // conn.end();
  });
});///locations_basic_sample

app.post("/UsersBasicLocationsData", function(req, res) {
  if(!req.body.user_id || !req.body.user_name || !req.body.user_Password || !req.body.user_address || !req.body.user_mobile )
  {
    res.send({"status": "error", "message": "missings a parameter", "user_id": req.body.user_id});
  }
  else
  {
    var sql = "INSERT INTO locations_basic_sample (userId, userName, password, address, mobile, latitude, longitude ) VALUES ("+req.body.user_id+", '"+req.body.user_name+"', '"+req.body.user_Password+"', '"+req.body.user_address+"', '"+req.body.user_mobile+"')";
    conn.query(sql, function (err, result)
    {
      if (err)
      {
        res.send({"status": "success", "message": err.message});
        // throw err;
      }
      else
      {
        res.send({"status": "success", "message": "One record inserted"});
        // console.log("1 record inserted");
      }
      // conn.end();
    });
  }
});


  app.get("/account", function(req, res) {
      var accountMock = {
          "username": "nraboy",
          "password": "1234",
          "twitter": "@nraboy"
      }
      if(!req.query.username) {
          return res.send({"status": "error", "message": "missing username"});
      } else if(req.query.username != accountMock.username) {
          return res.send({"status": "error", "message": "wrong username"});
      } else {
          return res.send(accountMock);
      }
  });
  app.post("/account", function(req, res) {
      if(!req.body.username || !req.body.password || !req.body.twitter) {
          return res.send({"status": "error", "message": "missing a parameter"});
      } else {
          return res.send(req.body);
      }
  });
}
module.exports = appRouter;
//http://localhost:3000/account?username=nraboy
