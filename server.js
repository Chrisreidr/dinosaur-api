const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const dinosaurs = {
    'tyrannosaurus': {
        'species': 'Tyrannosaurus Rex',
        'family': 'Tyrannosauridae',
        'size': ['Height: 12m (40ft)', 'Length: 4m (12ft)'],
        'weight': '12 metric tons',
        'timePeriod': 'Late Cretaceous',
        'timeline': '68 - 66 million years ago',
        'regions': 'Laramidia (Modern North America)',
        'diet': 'Carnivore',
        'description': 'Tyrannosaurus was a bipedal carnivore with a massive skull balanced by a long, heavy tail. Relative to its large and powerful hind limbs, the forelimbs of Tyrannosaurus were short but unusually powerful for their size, and they had two clawed digits. The most complete specimen measures up to 12.3–12.4 m (40.4–40.7 ft) in length, though T. rex could grow to lengths of over 12.4 m (40.7 ft), up to 3.66–3.96 m (12–13 ft) tall at the hips, and according to most modern estimates 8.4 metric tons (9.3 short tons) to 14 metric tons (15.4 short tons) in weight.'
    },
    'nanuqasaurus': {
        'species': 'nanuqasaurus',
        'family': 'Tyrannosauridae',
        'size': ['Height: 2-2.5m (6.6-8.2ft)', 'Length: 8-9m (26-30ft)'],
        'weight': '1,800 - 3,600 lbs',
        'timePeriod': 'Late Cretaceous',
        'timeline': '70.6 - 66 million years ago',
        'regions': 'Northern Alaska',
        'diet': 'Carnivore',
        'description': 'Nanuqasaurus was a smaller relative of the Tyrannosaurus Rex and lived about 70 million years ago northern Alaska was a part of an ancient subcontinent called Laramidia and experienced cold weather and extreme changes in the amount of daylight during the year, with seasons in which food was not readily available. Prey availability likely would have increased substantially during the summer, but then declined in the dark winter, leaving predators with little to eat.'
    },
    'quetzalcoatlus': {
        'species': 'Quetzalcoatlus',
        'family': 'Azhdarchidae',
        'size': ['Height: 18-20ft (5-6m)', 'Wingspan: 30ft (9m)'],
        'weight': '440 - 550 lbs',
        'timePeriod': 'Late Cretaceous',
        'timeline': '72.1 - 66 million years ago',
        'regions': 'Laramidia (Modern Texas and Montana',
        'diet': 'Carnivore',
        'description': 'Quetzalcoatlus was one of the largest known flying animals of all time. Quetzalcoatlus is a member of the family Azhdarchidae, a family of advanced toothless pterosaurs with unusually long, stiffened necks. Its name comes from the Aztec feathered serpent god, Quetzalcoatl, in Nahuatl.'
    },
    'dreadnoughtus': {
        'species': 'Dreadnoughtus Schrani',
        'family': 'Sauropod',
        'size': ['Long: 26m (85ft)', 'Height: 8.5m (28ft) at shoulder'],
        'weight': '49 metric tons',
        'timePeriod': 'Upper Cretaceous',
        'timeline': '86.6 - 66 million years ago',
        'regions': ['Patagonia', 'Argentina'],
        'diet': 'Herbivore',
        'description': 'Dreadnoughtus is one of the largest terrestrial vertebrates known, possessing the greatest mass of any land animal that can be calculated with reasonable certainty. D. schrani is known from a more complete skeleton than any other gigantic titanosaurian.'
    },
    'unknown': {
        'species': 'unknown',
        'family': 'uknown',
        'size': 'unknown',
        'weight': 'unknown',
        'timePeriod': 'unknown',
        'timeline': 'unknown',
        'regions': 'unkown',
        'diet': 'unknown',
        'description': 'unknown'
    }
}

// request
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:dinosaur-name', (req,res) => {
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