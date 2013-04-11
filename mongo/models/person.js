var mongoose = require('mongoose')
  , Schema = mongoose.Schema

/**
 * Person Schema
 */

var PersonSchema = new Schema({
  name      : String,
  surname   : String,
  age       : Number,
  male      : Boolean,
  continent : [ "Europe", "America", "Asia", "Africa", "Australia", "Antartica" ], // ENUM type
  photo     : Buffer, // BLOB/BINARY
  data      : Object // JSON encoded
})


/**
 * Validations
 */

var validatePresenceOf = function (value) {
  return value && value.length
}

/**
 * Methods
 */

PersonSchema.methods = {

  fullName: function () {
    return this.name + ' ' + this.surname;
  }
}

mongoose.model('Person', PersonSchema)
