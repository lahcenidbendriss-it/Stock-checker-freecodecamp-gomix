const mongoose = require("mongoose");
const { Schema } = mongoose;

const StockSchema = new Schema({
  symbol: { type: String, required: true, unique: true },
  likes: { type: [String], default: [] },
}, { timestamps: true });

StockSchema.index({ symbol: 1 });

const Stock = mongoose.model("Stock", StockSchema);

module.exports = { Stock };
