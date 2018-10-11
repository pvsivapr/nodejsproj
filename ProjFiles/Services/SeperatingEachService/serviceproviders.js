var bodyParser = require('body-parser')

/*
var appRouter = function(app, conn)
{
  // parse application/x-www-form-urlencoded
  // app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  // app.use(bodyParser.json())

  app.get("/GetAllServiceProviders", function(req, res) 
  {
      var sql ="Select * FROM sivaprasad_userdb";//"Select * FROM indianpincodes";
      conn.query(sql, function (err, result)
      {
          if (err)
          {
              throw err;
          }
          else
          {
              var data1 = JSON.stringify(result);
              res.send(data1);
          }
      });
  });

  app.post("/GetLocationsByUserLocation", function(req, res) 
  {
      if(!req.body.user_location_latitude || !req.body.user_location_longitude || !req.body.user_allowed_distance )
      {
          res.send({"status": "error", "message": "missings a parameter", "locations": null});
      }
      else
      {
          var sql = "SELECT *, ( 6371 * acos( cos( radians("+req.body.user_location_latitude+") ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians("+req.body.user_location_longitude+") ) + sin( radians("+req.body.user_location_latitude+") ) * sin( radians( latitude ) ) ) ) AS distance FROM locations_basic_sample HAVING distance < "+req.body.user_allowed_distance+" ORDER BY distance";// LIMIT 0 , 20;";//"Select * FROM locations_basic_sample";
          conn.query(sql, function (err, result)
          {
              if (err)
              {
                  throw err;
              }
              else
              {
                  console.log("Got all results successfully");
                  var data1 = JSON.stringify(result);
                  respObject = "Got all results successfullyyyyyyy";
                  console.log(respObject);
                  res.send(data1);
              }
              // conn.end();
          });
      }
  });
}

module.exports = appRouter;
*/

var ConnService = require('../ConnectionService.js');
var conn = ConnService.GetConnection1();
var appRouter = 
{
  // parse application/x-www-form-urlencoded
  // app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  // app.use(bodyParser.json())

  GetAllServiceProviders : function(req, res) 
  {
      var sql ="Select * FROM sivaprasad_userdb";//"Select * FROM indianpincodes";
      conn.query(sql, function (err, result)
      {
          if (err)
          {
              throw err;
          }
          else
          {
              var data1 = JSON.stringify(result);
              res.send(data1);
          }
      });
  },

  GetLocationsByUserLocation : function(req, res) 
  {
      if(!req.body.user_location_latitude || !req.body.user_location_longitude || !req.body.user_allowed_distance )
      {
          res.send({"status": "error", "message": "missings a parameter", "locations": null});
      }
      else
      {
          var sql = "SELECT *, ( 6371 * acos( cos( radians("+req.body.user_location_latitude+") ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians("+req.body.user_location_longitude+") ) + sin( radians("+req.body.user_location_latitude+") ) * sin( radians( latitude ) ) ) ) AS distance FROM locations_basic_sample HAVING distance < "+req.body.user_allowed_distance+" ORDER BY distance";// LIMIT 0 , 20;";//"Select * FROM locations_basic_sample";
          conn.query(sql, function (err, result)
          {
              if (err)
              {
                  throw err;
              }
              else
              {
                  console.log("Got all results successfully");
                  var data1 = JSON.stringify(result);
                  respObject = "Got all results successfullyyyyyyy";
                  console.log(respObject);
                  res.send(data1);
              }
              // conn.end();
          });
      }
  }
}

module.exports = appRouter;

/*
var ConnService = require('./ConnectionService.js');

var conn = ConnService.GetConnection1();
module.exports = {
    GetAllServiceProviders :  function(req, res)
    {
        var sql ="Select * FROM sivaprasad_userdb";//"Select * FROM indianpincodes";
        conn.query(sql, function (err, result)
        {
            if (err)
            {
                throw err;
            }
            else
            {
                var data1 = JSON.stringify(result);
                res.send(data1);
            }
        });
    },
    GetLocationsByUserLocation : function(req, res) 
    {
        if(!req.body.user_location_latitude || !req.body.user_location_longitude || !req.body.user_allowed_distance )
        {
            res.send({"status": "error", "message": "missings a parameter", "locations": null});
        }
        else
        {
            var sql = "SELECT *, ( 6371 * acos( cos( radians("+req.body.user_location_latitude+") ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians("+req.body.user_location_longitude+") ) + sin( radians("+req.body.user_location_latitude+") ) * sin( radians( latitude ) ) ) ) AS distance FROM locations_basic_sample HAVING distance < "+req.body.user_allowed_distance+" ORDER BY distance";// LIMIT 0 , 20;";//"Select * FROM locations_basic_sample";
            conn.query(sql, function (err, result)
            {
                if (err)
                {
                    throw err;
                }
                else
                {
                    console.log("Got all results successfully");
                    var data1 = JSON.stringify(result);
                    respObject = "Got all results successfullyyyyyyy";
                    console.log(respObject);
                    res.send(data1);
                }
                // conn.end();
            });
        }
    }
}
*/