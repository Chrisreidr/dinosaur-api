const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const dinosaurs = {
    'tyrannosaurus': {
        'name': 'Tyrannosaurus',
        'timePeriod': 'Jurassic',
        'diet': 'Carnivore'
    },
    'quetzalcoatlus': {
        'name': 'Quetzalcoatlus',
        'timePeriod': 'Cretaceous',
        'diet': 'Carnivore'
    },
    'dreadnoughtus': {
        'name': 'Dreadnoughtus',
        'timePeriod': 'Cretaceous',
        'diet': 'Herbivore'
    },
    'unknown': {
        'name': 'unknown',
        'timePeriod': 'unknown',
        'diet': 'unknown'
    }
}

// request
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res) => {
    const dinoName = req.params.name.toLowerCase();
    if(dinosaurs[dinoName]){
        res.json(dinosaurs[dinoName]);
    } else {
        res.json(dinosaurs['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The sever is running on port: ${PORT}. Better go catch it!`);
})