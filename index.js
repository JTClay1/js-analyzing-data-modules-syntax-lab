require('datejs');

function combineUsers(...args) {
  const combinedObject = { users: [] };
  combinedObject.users = [].concat(...args);
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");
  return combinedObject;
}

module.exports = combineUsers; 
