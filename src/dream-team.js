module.exports = function createDreamTeam( members) {
  let result = [];
  if (Array.isArray(members)) {
     for (let name of members) {
        if (typeof name === 'string') {
           let nameWithoutSpaces = name.trim();
              result.push(nameWithoutSpaces[0].toUpperCase());
            }
          }
        }
    if (result.length == 0) {
    return false
    } else { 
    return result.sort().join('') 
    }
};