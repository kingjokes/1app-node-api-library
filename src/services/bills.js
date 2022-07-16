"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyElectricity = exports.findIUC = exports.getCable = exports.getBankList = exports.getDataPlans = exports.processCable = exports.processElectricity = exports.processAirtime = exports.processDataPurchase = exports.processPayment = void 0;
const axios = require('axios');
const CreateFormData_1 = require("../hooks/CreateFormData");
const processPayment = (details, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield axios.post('https://api.1app.online/v1/sendmoney', (0, CreateFormData_1.CreateFormData)(details), {
            headers: {
                'Authorization': token,
                'content-type': 'multipart/form-data'
            }
        });
    }
    catch (e) {
        console.log(e.message);
        return e.message;
    }
});
exports.processPayment = processPayment;
const processDataPurchase = (details, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield axios.post('https://api.1app.online/v1/databundle', (0, CreateFormData_1.CreateFormData)(details), {
            headers: {
                'Authorization': token,
                'content-type': 'multipart/form-data'
            }
        });
    }
    catch (e) {
        console.log(e.message);
        return e.message;
    }
});
exports.processDataPurchase = processDataPurchase;
const processAirtime = (details, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield axios.post('https://api.1app.online/v1/airtime', (0, CreateFormData_1.CreateFormData)(details), {
            headers: {
                'Authorization': token,
                'content-type': 'multipart/form-data'
            }
        });
    }
    catch (e) {
        console.log(e.message);
        return e.message;
    }
});
exports.processAirtime = processAirtime;
const processElectricity = (details, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield axios.post('https://api.1app.online/v1/electricity', (0, CreateFormData_1.CreateFormData)(details), {
            headers: {
                'Authorization': token,
                'content-type': 'multipart/form-data'
            }
        });
    }
    catch (e) {
        console.log(e.message);
        return e.message;
    }
});
exports.processElectricity = processElectricity;
const processCable = (details, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield axios.post('https://api.1app.online/v1/cabletv', (0, CreateFormData_1.CreateFormData)(details), {
            headers: {
                'Authorization': token,
                'content-type': 'multipart/form-data'
            }
        });
    }
    catch (e) {
        console.log(e.message);
        return e.message;
    }
});
exports.processCable = processCable;
const getDataPlans = (provider, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield axios.get(`https://api.1app.online/v1/getdataplans?provider=${provider}`, {
            headers: {
                'Authorization': token
            }
        });
    }
    catch (e) {
        return e.message;
    }
});
exports.getDataPlans = getDataPlans;
const getBankList = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield axios.get(`https://api.1app.online/v1/listbanks`, {
            headers: {
                'Authorization': token
            }
        });
    }
    catch (e) {
        return e.message;
    }
});
exports.getBankList = getBankList;
const getCable = (provider, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield axios.get(`https://api.1app.online/v1/listcabletv?tv=${provider}`, {
            headers: {
                'Authorization': token
            }
        });
    }
    catch (e) {
        return e.message;
    }
});
exports.getCable = getCable;
const findIUC = (provider, iuc, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield axios.get(`https://api.1app.online/v1/verifycable?type=${provider}&iuc=${iuc}`, {
            headers: {
                'Authorization': token
            }
        });
    }
    catch (e) {
        return e.message;
    }
});
exports.findIUC = findIUC;
const verifyElectricity = (meterno, provider, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield axios.get(`https://api.1app.online/v1/verifyelect?meterno=${meterno}&provider=${provider}`, {
            headers: {
                'Authorization': token
            }
        });
    }
    catch (e) {
        return e.message;
    }
});
exports.verifyElectricity = verifyElectricity;
