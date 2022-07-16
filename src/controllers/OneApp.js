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
const balance_1 = require("../services/balance");
const bills_1 = require("../services/bills");
class OneApp {
    constructor(token) {
        this.token = token;
        this.publicToken = `Bearer ${this.token.publicKey}`;
        this.secretToken = `Bearer ${this.token.secretKey}`;
        console.log(this.token);
    }
    getTokens() {
        return this.token;
    }
    getBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, balance_1.balance)(this.secretToken)
                .then(response => response.data);
        });
    }
    sendMoney(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, bills_1.processPayment)(payload, this.secretToken)
                .then(response => response.data);
        });
    }
    DataPlans(provider) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, bills_1.getDataPlans)(provider, this.publicToken)
                .then(response => response.data);
        });
    }
    purchaseData(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, bills_1.processDataPurchase)(payload, this.secretToken)
                .then(response => response.data);
        });
    }
    purchaseAirtime(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, bills_1.processAirtime)(payload, this.secretToken)
                .then(response => response.data);
        });
    }
    electricityVerifier(meterno, provider) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, bills_1.verifyElectricity)(meterno, provider, this.publicToken)
                .then(response => response.data);
        });
    }
    purchaseElectricity(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, bills_1.processElectricity)(payload, this.secretToken)
                .then(response => response.data);
        });
    }
    CableTVPlans(provider) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, bills_1.getCable)(provider, this.publicToken)
                .then(response => response.data);
        });
    }
    verifyCable(provider, iuc) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, bills_1.findIUC)(provider, iuc, this.publicToken)
                .then(response => response.data);
        });
    }
    purchaseCableTV(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, bills_1.processCable)(payload, this.secretToken)
                .then(response => response.data);
        });
    }
    BankList() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, bills_1.getBankList)(this.publicToken)
                .then(response => response.data);
        });
    }
}
exports.default = OneApp;
