"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generate_open_ai_controller_1 = require("../controllers/generate_open_ai_controller");
const openAIRouter = (0, express_1.Router)();
openAIRouter.post("/", generate_open_ai_controller_1.generateOpenAIResponse);
exports.default = openAIRouter;
