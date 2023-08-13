module.exports.getDate = function getDate() {
    let cstTime = new Date().toLocaleString("en-US");
    // let cstTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"}); 
    return new Date(cstTime);
}
