var Airtable = require('airtable');
var moment = require('moment');

// send in options object with record, table, and base
module.exports.addRecord = async function(options){
  var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(options.base);
  var airtableResult = await base(options.table).create(options.record).then(result => {
    console.log("saved to airtable");
    return result;
  })
    .catch(err => {
      console.log("\nthere was an error with the AT push\n");
      console.error(err);
      return;
    });
  return airtableResult;
}

//
// module.exports.findOneById = async function(options) {
//   var result = await options.base(options.table)
//     .find(options.recordId)
//     .catch(err=>{console.error(err); return});
//   return result;
// }
//
// module.exports.findOneByValue = async function(options) {
//   theRecords = [];
//   await options.base(options.table).select(
//     {
//       maxRecords: 1,
//       view: options.view ? options.view : "Grid view",
//       filterByFormula: `${options.field}='${options.value}'`
//     }
//   ).eachPage(function page(records, next){
//     theRecords.push(...records);
//     next()
//   })
//   // .then(()=>{
//   //   // return(theRecords);
//   // })
//   .catch(err=>{console.error(err); return})
//   return theRecords[0];
// }
//
// module.exports.findManyByValue = async function(options) {
//   theRecords = [];
//   await options.base(options.table).select(
//     {
//       maxRecords: options.maxRecords,
//       view: options.view ? options.view : "Grid view",
//       filterByFormula: `${options.field}='${options.value}'`
//     }
//   ).eachPage(function page(records, next){
//     theRecords.push(...records);
//     next()
//   })
//   // .then(()=>{
//   //   // return(theRecords);
//   // })
//   .catch(err=>{console.error(err); return})
//   return theRecords;
// }
//
// module.exports.findManyByFormula = async function(options) {
//   theRecords = [];
//   await options.base(options.table).select(
//     {
//       maxRecords: options.maxRecords,
//       view: options.view ? options.view : "Grid view",
//       filterByFormula: options.formula
//     }
//   ).eachPage(function page(records, next){
//     theRecords.push(...records);
//     next()
//   })
//   // .then(()=>{
//   //   // return(theRecords);
//   // })
//   .catch(err=>{console.error(err); return})
//   return theRecords;
// }
//
//
// module.exports.findMany = async function(options) {
//   theRecords = [];
//   await options.base(options.table).select(
//     {
//       maxRecords: options.maxRecords,
//       view: options.view ? options.view : "Grid view",
//     }
//   ).eachPage(function page(records, next){
//     theRecords.push(...records);
//     next()
//   })
//   // .then(()=>{
//   //   // return(theRecords);
//   // })
//   .catch(err=>{console.error(err); return})
//   return theRecords;
// }
//
// module.exports.findManyByFormula = async function(options) {
//   theRecords = [];
//   await options.base(options.table).select(
//     {
//       maxRecords: options.maxRecords,
//       view: options.view,
//       filterByFormula: options.formula
//     }
//   ).eachPage(function page(records, next){
//     theRecords.push(...records);
//     next()
//   })
//   // .then(()=>{
//   //   // return(theRecords);
//   // })
//   .catch(err=>{console.error(err); return})
//   return theRecords;
// }
