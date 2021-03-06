"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3333;
app.use(express_1.default.json());
app.get('/', function (request, response) {
    response.json({ message: "hello world" });
});
app.listen((port), '🐱‍👤server is running');
