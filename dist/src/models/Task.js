"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    name: String,
    completed: Boolean,
});
exports.default = (0, mongoose_1.model)('Task', taskSchema);
//# sourceMappingURL=Task.js.map