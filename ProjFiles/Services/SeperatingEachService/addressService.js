var bodyParser = require('body-parser');
var conn = require("./SeperateDBData/dbConnnection.js");

// var ConnService = require('../ConnectionService.js');
// var conn = ConnService.GetConnection1();

var tableName = "indianpincodes";
var appRouter =
{
  // parse application/x-www-form-urlencoded
  // app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  // app.use(bodyParser.json())

//   app.get("/", function(req, res) 
//   {
//       res.send("Hello World");
//   });

  GetAllStates : function(req, res) 
  {
      var sql = "SELECT DISTINCT state_name FROM "+tableName;//"Select * FROM indianpincodes";
      conn.query(sql, function (err, result)
      {
          if (err)
          {
              throw err;
          }
          else
          {
            var states_list = {"states_list" : result}
            var data1 = JSON.stringify(states_list);
            res.send(data1);
            //   var data1 = JSON.stringify(result);
            //   res.send(data1);
            }
            //conn.end();
      });
  },

  GetDistrictsByStateName : function(req, res) 
  {
    if(!req.body.state_name)
    {
        res.send({"status": "error", "message": "missings a parameter", "locations": null});
    }
    else
    {
        var sql = "SELECT DISTINCT district_name FROM "+tableName+" WHERE state_name = "+ "'" + req.body.state_name + "'";
        conn.query(sql, function (err, result)
        {
            if (err)
            {
                throw err;
            }
            else
            {
                var districts_list = {"districts_list" : result}
                var data1 = JSON.stringify(districts_list);
                res.send(data1);
                // var data1 = JSON.stringify(result);
                // res.send(data1);
            }
            //conn.end();
        });
    }
  },

  GetMandalsByDistrict : function(req, res) 
  {
    if(!req.body.district_name || !req.body.state_name)
    {
        res.send({"status": "error", "message": "missings a parameter", "locations": null});
    }
    else
    {
        var sql = "SELECT DISTINCT mandal_name FROM "+tableName+" WHERE district_name = "+ "'" + req.body.district_name + "'";
        conn.query(sql, function (err, result)
        {
            if (err)
            {
                throw err;
            }
            else
            {
                
                var mandals_list = {"mandals_list" : result}
                var data1 = JSON.stringify(mandals_list);
                res.send(data1);
                // var data1 = JSON.stringify(result);
                // res.send(data1);
            }
            //conn.end();
        });
    }
  },

  GetVillagesByDistrict : function(req, res) 
  {
    if(!req.body.district_name || !req.body.state_name)
    {
        res.send({"status": "error", "message": "missings a parameter", "locations": null});
    }
    else
    {
        var sql = "SELECT * FROM "+tableName+" WHERE district_name = "+ "'" + req.body.district_name + "'";
        conn.query(sql, function (err, result)
        {
            if (err)
            {
                throw err;
            }
            else
            {
                var villages_list = {"villages_list" : result}
                var data1 = JSON.stringify(villages_list);
                res.send(data1);
                // var data1 = JSON.stringify(result);
                // res.send(data1);
            }
            //conn.end();
        });
    }
  },

  GetVillagesByMandal : function(req, res) 
  {
    if(!req.body.mandal_name || !req.body.district_name || !req.body.state_name)
    {
        res.send({"status": "error", "message": "missings a parameter", "locations": null});
    }
    else
    {
        var sql = "SELECT * FROM "+tableName+" WHERE mandal_name = "+ "'" + req.body.mandal_name + "'";
        conn.query(sql, function (err, result)
        {
            if (err)
            {
                throw err;
            }
            else
            {
                var villages_list = {"villages_list" : result}
                var data1 = JSON.stringify(villages_list);
                res.send(data1);
                // var data1 = JSON.stringify(result);
                // res.send(data1);
            }
            //conn.end();
        });
    }
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
                  var data1 = JSON.stringify(result);
                  res.send(data1);
              }
              //conn.end();
          });
      }
  },

  AddServiceLocations : function(req, res) 
  {
      if(!req.body.user_name || !req.body.user_Password || !req.body.user_address || !req.body.user_mobile || !req.body.user_location_latitude || !req.body.user_location_longitude )
      {
          res.send({"status": "error", "message": "missings a parameter", "locations": null});
      }
      else
      {
          var sql = "INSERT INTO locations_basic_sample (userName, password, address, mobile, latitude, longitude ) VALUES ('"+req.body.user_name+"', '"+req.body.user_Password+"', '"+req.body.user_address+"', '"+req.body.user_mobile+"', '"+req.body.user_location_latitude+"', '"+req.body.user_location_longitude+"')";
          
          conn.query(sql, function (err, result)
          {
              if (err)
              {
                  res.send({"status": "success", "message": err.message});
              }
              else
              {
                  res.send({"status": "success", "message": "One record inserted"});
              }
              //conn.end();
          });
      }
  },
  
  UserBasicLocationsData : function(req, res) 
  {
      var sql = "Select * FROM locations_basic_sample";
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
            //conn.end();
      });
  }
}
module.exports = appRouter;
