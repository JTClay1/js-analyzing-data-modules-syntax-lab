function combineUsers(...args) {
  // Initialize Return Object
  const combinedObject = { users: [] };

  // Merge Arrays
  combinedObject.users = [].concat(...args);

  // Add merge_date using native Date
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const year = today.getFullYear();
  combinedObject.merge_date = `${month}/${day}/${year}`;

  return combinedObject;
}

module.exports = { combineUsers };
