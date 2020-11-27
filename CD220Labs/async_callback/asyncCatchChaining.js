const axios = require('axios').default;

/*
In the following code we try to get list of all book ids from remote url and then based on that make request about each of the 
id. Finally print them all out. We are using axios get, which returns a promise. 
*/
const connectToURL = (url)=>{
  const req = axios.get(url);
  req.then(resp => {
      let listOfWork = resp.data.work;
      return listOfWork.map((work)=>{
          return work.workid
      })
    }).then((workids)=>{
        let promisesArr = [];
        workids.forEach((workid)=>{
            const req = axios.get("https://reststop.randomhouse.com/resources/works/"+workid);
            promisesArr.push(req);
            req.then(resp=>{
                console.log(resp.data.titleAuth);
            })
        });
    })
  .catch(err => {
      console.log(err.toString())
  });
}
connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham');
