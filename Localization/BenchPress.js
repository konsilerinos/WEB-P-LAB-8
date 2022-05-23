const allLang = ['RU', 'EN', 'BY'];

var lang = 'RU';
var hash = 'RU';

const langArr = {
    'title' : {
        'RU' : 'Спортивный клуб',
        'EN' : 'Sports club',
        'BY' : 'Спартыўны клуб',
    },
    'h1-1' : {
        'RU' : 'Жим штанги лёжа',
        'EN' : 'Brench press',
        'BY' : 'Жым штангі лежачы',
    },
    'p-1' : {
        'RU' : 'Базовое физическое упражнение со свободным весом. Выполняющий упражнение ложится на скамейку, опускает гриф до касания с грудью и поднимает до полного выпрямления в локтевом суставе. Используется в бодибилдинге как упражнение для развития больших и малых грудных мышц, трицепсов и переднего пучка дельтовидной мышцы.',
        'EN' : 'Basic physical exercise with free weight. The person performing the exercise lies down on the bench, lowers the neck to touch the chest and raises it to full straightening in the elbow joint. It is used in bodybuilding as an exercise for the development of large and small pectoral muscles, triceps and anterior bundle of the deltoid muscle.',
        'BY' : 'Базавую фізічнае практыкаванне са свабодным вагой. Выконваючы практыкаванне кладзецца на лаўку, апускае грыф да дотыку з грудзьмі і падымае да поўнага выпроствання ў локцевым суставе. Выкарыстоўваецца ў бодзібілдынгу як практыкаванне для развіцця вялікіх і малых грудных цягліц, трыцэпс і пярэдняга пучка дэльтападобнай мышцы.',
    },
    'p-2' : {
        'RU' : 'Является одной из основных дисциплин в пауэрлифтинге (наряду c приседанием и становой тягой), где используется отличная от бодибилдинга техника: с целью жима максимально большого веса напрягаются трицепсы, передние пучки дельтовидных мышц и широчайшие мышцы спины; роль грудных мышц значительно снижена.',
        'EN' : 'It is one of the main disciplines in powerlifting (along with squatting and deadlift), where a technique different from bodybuilding is used: in order to press as much weight as possible, the triceps, the anterior bundles of the deltoid muscles and the widest muscles of the back are strained; the role of the pectoral muscles is significantly reduced.',
        'BY' : 'З\'яўляецца адной з асноўных дысцыплін у паўэрліфтынгу (разам c прысяданнем і станавы цягай), дзе выкарыстоўваецца выдатная ад бодзібілдынгу тэхніка: з мэтай рэжыму максімальна вялікай вагі напружваюцца трыцэпс, пярэднія пучкі дэльтападобных цягліц і найшырэйшыя мышцы спіны; ролю грудных цягліц значна зніжана.',
    },
    'p-3' : {
        'RU' : 'В бодибилдинге варьирование техники жима лёжа позволяет акцентировать нагрузку на разных мышцах. При выполнении жима лёжа штанги узким хватом бо́льшая нагрузка ложится на трицепсы. Гриф можно опускать на верхнюю часть груди, среднюю и нижнюю, что позволяет предотвратить «застой» в росте мышц. Вариантами жима лёжа также являются жим на тренажёре Смита, жим гантелей, жим в наклоне и жим обратным хватом.',
        'EN' : 'In bodybuilding, varying the bench press technique allows you to focus the load on different muscles. When performing a bench press of a barbell with a narrow grip, a large load falls on the triceps. The neck can be lowered to the upper part of the chest, middle and lower, which prevents "stagnation" in muscle growth. Variants of the bench press are also bench press on the Smith simulator, dumbbell press, tilt press and reverse grip press.',
        'BY' : 'У бодзібілдынгу вар\'іраванне тэхнікі рэжыму лежачы дазваляе акцэнтаваць нагрузку на розных цягліцах. Пры выкананні рэжыму лежачы штангі вузкім хватам вялікая нагрузка кладзецца на трыцэпс. Грыф можна апускаць на верхнюю частку грудзей, сярэднюю і ніжнюю, што дазваляе прадухіліць "застой" у росце цягліц. Варыянтамі рэжыму лежачы таксама з\'яўляюцца жым на трэнажоры Сміта, жым гантэлей, Жым ў нахіле і жым зваротным хватам.',
    },
    'home-link' : {
        'RU' : 'О клубе',
        'EN' : 'About',
        'BY' : 'Аб клубе',
    },
    'training-link-1' : {
        'RU' : 'Разминка',
        'EN' : 'Warm-up',
        'BY' : 'Размінка',
    },
    'training-link-2' : {
        'RU' : 'Жим лёжа',
        'EN' : 'Bench press',
        'BY' : 'Жым лежачы',
    },
	'training-link-3' : {
        'RU' : 'Присед со штангой',
        'EN' : 'Squat with barbell',
        'BY' : 'Прысядаючы са штангай',
    },
    'training-link-4' : {
        'RU' : 'Становая тяга',
        'EN' : 'Deadlift',
        'BY' : 'Станавая цяга',
    },
    'quote-1' : {
        'RU' : 'Юрий Власов',
        'EN' : 'Yuri Vlasov',
        'BY' : 'Юрый Уласаў',
    },
    'head-p-1-link' : {
        'RU' : 'Главная',
        'EN' : 'Main page',
        'BY' : 'Галоўны',
    },
    'head-p-2-link' : {
        'RU' : 'Тренировки',
        'EN' : 'Trainings',
        'BY' : 'Трэніроўка',
    },
	'head-p-3-link' : {
        'RU' : 'Цитаты',
        'EN' : 'Quots',
        'BY' : 'Цытата',
    },
	'head-p-4-link' : {
        'RU' : 'Локализация',
        'EN' : 'Localization',
        'BY' : 'Лакалізацыя',
    }
}