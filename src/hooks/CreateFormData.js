"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFormData = void 0;
const FormData = require('form-data');
const CreateFormData = (payload) => {
    let formData = new FormData();
    for (const item in payload) {
        formData.append(item, payload[item]);
    }
    return formData;
};
exports.CreateFormData = CreateFormData;
