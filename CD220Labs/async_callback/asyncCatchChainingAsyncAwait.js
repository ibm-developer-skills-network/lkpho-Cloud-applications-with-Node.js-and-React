const axios = require('axios').default;

/*
In the following code we try to get list of all book ids from remote url and then based on that make request about each of the 
id. Finally print them all out. We are using axios get, which returns a promise. 
*/
async function connectToURL(url){
    const resp = await axios.get(url);
    let listOfWork = resp.data.work;
    let workids = listOfWork.map((work)=>{
          return work.workid
    });
    workids.forEach(async (workid)=>{
            const req = await axios.get("https://reststop.randomhouse.com/resources/works/"+workid);
            console.log(req.data.titleAuth);

    });
}
connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham').catch(err => {
    console.log(err.toString())
});
