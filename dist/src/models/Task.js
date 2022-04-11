"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, 'name must be provided!'], trim: true, maxlength: [20, 'cannot be more tha 20'] },
    completed: {
        type: Boolean,
        default: false,
    },
});
exports.default = (0, mongoose_1.model)('Task', taskSchema);
//# sourceMappingURL=Task.js.map