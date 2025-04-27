const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user:{
    type:mongoose.Types.ObjectId,
    ref:"User"
  }
});

// todoSchema.statics.findActive = function () {
//   return this.find({ status: 'active' },{__v : 0,_id:0});
// };

// todoSchema.methods.findActive = function () {
//   return this.model("Todo").find({ status: "active" });
// };

todoSchema.methods = {
  findActive:function(){
    return mongoose.model("Todo").find({ status: "inactive" });
  },
};

todoSchema.statics = {
  findByJs: function(){
    return this.find({ title: /c/i });
  },
};

todoSchema.query = {
  byLanguage: function(language) {
    return this.find({ title: new RegExp(language, "i") });
  },
};

module.exports = todoSchema;
