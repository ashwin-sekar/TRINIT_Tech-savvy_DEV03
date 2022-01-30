const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plotSchema = new Schema({
  a: {
    type: Array,
  },
  V: {
    type: Array,
  },
  t: {
    type: Array,
  },
  l: {
    type: Array,
  },
  o: {
    type: Array,
  },
});

module.exports = User = mongoose.model("Plot", plotSchema);
