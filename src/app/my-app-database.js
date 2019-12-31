'use strict'

function init({ driver }){
  return {
    insertLog: log => driver.insertLog(clone(log)),
    getLogs: () => driver.getLogs()
  }
}

function clone(obj){
  return JSON.parse(JSON.stringify(obj));
}

module.exports = { init };