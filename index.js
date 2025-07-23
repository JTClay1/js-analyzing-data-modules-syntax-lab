require('datejs'); // Enables Date.today() etc.

function combineUsers(...args) {
  // Initialize Return Object
  const combinedObject = { users: [] };

  //Merge Arrays
  combinedObject.users = [].concat(...args);

  //Add merge_date
  combinedObject.merge_date = Date.today().toString("M/d/yyyy")

  return combinedObject;
}


module.exports = { combineUsers };
