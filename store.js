import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); 

export const store = new Vuex.Store({
state:{
     tasks: [{

             id: 1,
             boolean:false,
             titel: 'lorem h1',
             text: 'Olalalalal its greate',
             author: 'lorr',
             date: new Date().toDateString()

         }, {

             id: 2,
             boolean:false,
             titel: 'lorem h2',
             text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.Zombie ipsum reversus ab viral inferno, nam rick grimes malum',
             author: 'lorrsss',
             date: new Date().toDateString()
         }, {

             id: 3,
             boolean:false,
             titel: 'lorem h3',
             text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and.Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and.Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and. De carne lumbering animata corpora quaeritis. Summus brains sit​​.',
             author: 'lorraaa',
             date: new Date().toDateString()
         }, {

             id: 4,
             boolean:false,
             titel: 'lorem h4',
             text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.',
             author: 'lorraaa',
             date: new Date().toDateString()
         }, {

             id: 5,
             boolean:false,
             titel: 'lorem h5',
             text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.',
             author: 'lorraaa',
             date: new Date().toDateString()
         }, {

             id: 6,
             boolean:false,
             titel: 'lorem h6',
             text: 'ZombieZombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.Zombie ipsum reversus ab viral inferno, nam rick grimes malum ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.',
             author: 'lorraaa',
             date: new Date().toDateString()
         }
         , {

             id: 7,
             boolean: false,
             titel: 'Новости ',
             text: 'ZombieZombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.Zombie ipsum reversus ab viral inferno, nam rick grimes malum ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.',
             author: 'lorraaa',
             date: new Date().toDateString()
         }, {

             id: 8,
             boolean: false,
             titel: 'Новости ',
             text: 'ZombieZombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.Zombie ipsum reversus ab viral inferno, nam rick grimes malum ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.',
             author: 'lorraaa',
             date: new Date().toDateString()
         }
         , {

             id: 9,
             boolean: false,
             titel: 'Новости ',
             text: 'ZombieZombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.Zombie ipsum reversus ab viral inferno, nam rick grimes malum ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.',
             author: 'lorraaa',
             date: new Date().toDateString()
         }, {

             id: 10,
             boolean: false,
             titel: 'Новости ',
             text: 'ZombieZombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.Zombie ipsum reversus ab viral inferno, nam rick grimes malum ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.',
             author: 'lorraaa',
             date: new Date().toDateString()
         }

     ],
     coruptionInfo:[]
},
getters:{
    TASK: state => state.tasks,
    CORUPINFO: state => state.coruptionInfo
},



})

