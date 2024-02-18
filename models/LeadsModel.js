const mongoose = require('mongoose');

const LeadsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String
  },
  leadId:{
    type:String,
    required:true
  },
  mobile:{
    type:String
  },
  leadStage:{
    type:String
  },
  OpsStatus:{
    type:String
  },
  email: {
    type: String,
  },
  // Other user fields
});

module.exports = mongoose.model('Lead', LeadsSchema);
