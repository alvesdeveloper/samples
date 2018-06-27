"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('regra insert');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('regra update');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('regra delete');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('regra select');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('regra getAll');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
