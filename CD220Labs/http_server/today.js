module.exports.getDate = function getDate() {
    var aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
    return new Date(aestTime);
}
