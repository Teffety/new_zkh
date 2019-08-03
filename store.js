import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tasks: [{

                id: 1,
                boolean: false,
                titel: 'lorem h1',
                text: 'Olalalalal its greate',
                author: 'lorr',
                date: new Date().toDateString()

            }, {

                id: 2,
                boolean: false,
                titel: 'lorem h2',
                text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.Zombie ipsum reversus ab viral inferno, nam rick grimes malum',
                author: 'lorrsss',
                date: new Date().toDateString()
            }, {

                id: 3,
                boolean: false,
                titel: 'lorem h3',
                text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and.Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and.Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and. De carne lumbering animata corpora quaeritis. Summus brains sit​​.',
                author: 'lorraaa',
                date: new Date().toDateString()
            }, {

                id: 4,
                boolean: false,
                titel: 'lorem h4',
                text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.',
                author: 'lorraaa',
                date: new Date().toDateString()
            }, {

                id: 5,
                boolean: false,
                titel: 'lorem h5',
                text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.',
                author: 'lorraaa',
                date: new Date().toDateString()
            }, {

                id: 6,
                boolean: false,
                titel: 'lorem h6',
                text: 'ZombieZombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.Zombie ipsum reversus ab viral inferno, nam rick grimes malum ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.',
                author: 'lorraaa',
                date: new Date().toDateString()
            }, {

                id: 7,
                boolean: false,
                titel: 'Новости ',
                text: 'ZombieZombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.Zombie ipsum reversus ab viral inferno, nam rick grimes malum ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.',
                author: 'lorraaa',
                date: new Date().toDateString()
            }, {

                id: 8,
                boolean: false,
                titel: 'Новости а что если он будет до усрачки длинный',
                text: 'ZombieZombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.Zombie ipsum reversus ab viral inferno, nam rick grimes malum ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.',
                author: 'lorraaa',
                date: new Date().toDateString()
            }, {

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
        coruptionInfo: [{
            info: [{
                titel: 'lorems1',
                text: 'olololololololRRRRRR'
            }, {
                titel: 'lorems2',
                text: 'olololololololRRRRRR'
            }, {
                titel: 'lorems3',
                text: 'olololololololRRRRRRloremlorem asdasdasdasdasfsdfrfe wiy324q7yiufhdcu8wearyr87 Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and.'
            }]
        }, {
            document: [{
                name: 'one',
                files: [{
                    name: 'отчет о проделанной работе по продиводествию коррупции МУП Сладковское ЖКХ от 29032019',
                    file: 'olololol'
                }, {
                    name: 'olololol',
                    file: 'olololol'
                }, {
                    name: 'olololol',
                    file: 'olololol'
                }]
            }, {
                name: 'two',
                files: [{
                    name: 'olololol',
                    file: 'olololol'
                }]
            }, {
                name: 'three',
                files: [{
                    name: 'olololol',
                    file: 'olololol'
                }]
            }]
        }],
        contacts: [{
            section__contact: [{
                    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum",
                    email: null
                },
                {
                    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum",
                    email: null
                },
                {
                    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum",
                    email: null
                },
                {
                    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum",
                    email: null
                },
                {
                    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum",
                    email: null
                },
                {
                    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum",
                    email: null
                },
                {
                    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum",
                    email: null
                },
                {
                    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum",
                    email: null
                },
                {
                    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum",
                    email: null
                },
                {
                    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum",
                    email: null
                },
                {
                    text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum",
                    email: "lorem@lorem.com"
                }
            ]
        }, {
            section__requisite: [{
                    name: "Zlorem",
                    text: "Lorem ipsum dolor sit amet."
                }, {
                    name: "Zlorem",
                    text: "Lorem ipsum dolor sit amet."
                }, {
                    name: "Zlorem",
                    text: "Lorem ipsum dolor sit amet."
                }, {
                    name: "Zlorem",
                    text: "Lorem ipsum dolor sit amet."
                }, {
                    name: "Zlorem",
                    text: "Lorem ipsum dolor sit amet."
                }

            ]
        }],
        about: {
            img: ['1.jpg', '2.jpg','horse.jpg','demon.jpeg'],
            aboutUs: [
                'Zombie ipsum reversus ab viral inferno, nam rick grimes malum', 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum', 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum',
                'Zombie ipsum reversus ab viral inferno, nam rick grimes malum', 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum', 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum',
                'Zombie ipsum reversus ab viral inferno, nam rick grimes malum', 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum', 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum',
                'Zombie ipsum reversus ab viral inferno, nam rick grimes malum', 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum', 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum',
                'Zombie ipsum reversus ab viral inferno, nam rick grimes malum'
            ],
            documents: [
                {
                    year: '2016',
                    files: [{
                            name: 'lorems lorems 2016',
                            file: 'lorem_lorem'
                        },
                        {
                            name: 'lorems lorems',
                            file: 'lorem_lorem'
                        },
                        {
                            name: 'lorems lorems',
                            file: 'lorem_lorem'
                        },
                        {
                            name: 'lorems lorems',
                            file: 'lorem_lorem'
                        },
                    ]
                },
                {
                    year: '2017',
                    files: [{
                            name: 'lorems lorems 2017',
                            file: 'lorem_lorem'
                        },
                        {
                            name: 'lorems lorems',
                            file: 'lorem_lorem'
                        },
                        {
                            name: 'lorems lorems',
                            file: 'lorem_lorem'
                        },
                        {
                            name: 'lorems lorems',
                            file: 'lorem_lorem'
                        },
                    ]
                },
                {
                    year: '2018',
                    files: [{
                            name: 'lorems lorems 2018',
                            file: 'lorem_lorem'
                        },
                        {
                            name: 'lorems lorems',
                            file: 'lorem_lorem'
                        },
                        {
                            name: 'lorems lorems',
                            file: 'lorem_lorem'
                        },
                        {
                            name: 'lorems lorems',
                            file: 'lorem_lorem'
                        },
                    ]
                },
                {
                    year: '2019',
                    files: [{
                            name: 'lorems lorems 2019',
                            file: 'lorem_lorem'
                        },
                        {
                            name: 'lorems lorems',
                            file: 'lorem_lorem'
                        },
                        {
                            name: 'lorems lorems',
                            file: 'lorem_lorem'
                        },
                        {
                            name: 'lorems lorems',
                            file: 'lorem_lorem'
                        },
                    ]
                }
            ]
        }

    },
    getters: {
        TASK: state => state.tasks,
        CORUPINFO: state => state.coruptionInfo,
        CONTACT: state => state.contacts,
        ABOUT: state => state.about,
    }
})