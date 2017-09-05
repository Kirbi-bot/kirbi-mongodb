# kirbi-mongodb module
A module for [Kirbi](https://github.com/richardson-media-house/kirbi) adding [MongoDB](https://www.mongodb.com) support through [Mongoose](http://mongoosejs.com).<!--  -->
  
## Usage
1. Add `"mongodb"` to the `externalModules` array in the Kirbi config. <b>Note: Make sure it is specified before any other modules that will use this database.</b>
2. Set `databases.default` value to `"mongodb"`.
3. Add database settings to the Kirbi config value under `databases.mongodb`. 


### Sample database config:

```
"databases": {
    "default": "mongodb",
    "mongodb": {
        "connection": "localhost/test",
        "options": {
            "useMongoClient": true
        }
    }
}
```