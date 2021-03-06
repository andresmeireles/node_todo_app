"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeController_1 = __importDefault(require("../src/controller/homeController"));
const router = (0, express_1.Router)();
const controller = new homeController_1.default();
router.route('/tasks')
    .get(controller.index);
// .post()
exports.default = router;
//# sourceMappingURL=home.js.map