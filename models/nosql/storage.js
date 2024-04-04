const mongooseDelete = require('mongoose-delete');
const mongoose = require('mongoose');

const StorageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    timestamps: true, //TODO createAt, updateAt
    versionKey: false,
  }
);

StorageSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('storage', StorageSchema);