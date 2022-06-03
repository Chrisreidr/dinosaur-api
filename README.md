# dinosaur-api

To gain access to the api use the js below:

fetch(`https://dinosaur-api-100devs.herokuapp.com`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(`Error:${err}`);
    })
}

Use parameters /api/:dinosaur-name for object on said dinosaur. For example,
https://dinosaur-api-100devs.herokuapp.com/api/tyrannosaurs will return the object for Tyrannosaurus