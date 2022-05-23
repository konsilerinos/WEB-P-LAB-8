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
        'RU' : 'Становая тяга',
        'EN' : 'Deadlift',
        'BY' : 'Станавая цяга',
    },
    'p-1' : {
        'RU' : 'Базовое (многосуставное) упражнение, выполняемое обычно со штангой, а также с гантелью или гирей, удерживаемыми обеими руками и поднимаемая на уровень опущенных вытянутых рук. Используется как общий элемент физической подготовки и является одной из соревновательных дисциплин в таких видах спорта как пауэрлифтинг и силовой экстрим, применяется также и бодибилдерами для укрепления мышц поясницы, что позволяет в приседаниях лучше развивать ноги.',
        'EN' : 'Basic (multi-joint) exercise, usually performed with a barbell, as well as with a dumbbell or kettlebell, held with both hands and raised to the level of lowered outstretched arms. It is used as a general element of physical training and is one of the competitive disciplines in such sports as powerlifting and extreme power, it is also used by bodybuilders to strengthen the muscles of the lower back, which allows for better leg development in squats.',
        'BY' : 'Базавую (многосуставных) практыкаванне, выкананае звычайна са штангай, а таксама з гантэллю або гірай, ўтрымліваюцца абедзвюма рукамі і паднімальная на ўзровень апушчаных выцягнутых рук. Выкарыстоўваецца як агульны элемент фізічнай падрыхтоўкі і з\'яўляецца адной з спаборніцкіх дысцыплін у такіх відах спорту як паўэрліфцінгу і сілавы Экстрым, прымяняецца таксама і бодзібілдарамі для ўмацавання цягліц паясніцы, што дазваляе ў прысяданнях лепш развіваць ногі.',
    },
	'p-2' : {
        'RU' : 'При выполнении тяги задействовано почти 3/4 всей мышечной массы, в первую очередь это: разгибатели спины, ягодицы, четырёхглавая и двуглавая мышцы бедра, широчайшие мышцы спины, трапеции, задние пучки дельтовидных мышц, предплечья и бицепсы. Тяга на прямых ногах, т. н. «румынская тяга», дополнительно растягивает и нагружает бицепсы бёдер, заставляя их работать на пределе в динамическом напряжении, а также верхние доли ягодиц; веса в данном виде тяги используются умеренные, меньше, чем в «становой». Именно поэтому, выполняя разные варианты тяг, спортсмены больше всего набирают мышечную массу и поэтому данное упражнение относится к базовым.',
        'EN' : 'When performing traction, almost 3/4 of the entire muscle mass is involved, primarily these are: back extensors, buttocks, quadriceps and biceps muscles of the thigh, the widest muscles of the back, trapezoids, posterior bundles of deltoid muscles, forearms and biceps. Traction on straight legs, the so-called "Romanian traction", additionally stretches and loads the biceps of the hips, forcing them to work at the limit in dynamic tension, as well as the upper lobes of the buttocks; moderate weights are used in this type of traction, less than in the "stanovoy". That is why, performing different variants of traction, athletes gain muscle mass most of all and therefore this exercise belongs to the basic ones.',
        'BY' : 'Пры выкананні цягі задзейнічана амаль 3 / 4 ўсёй мышачнай масы, у першую чаргу гэта: разгінальнікі спіны, ягадзіцы, чатырохгаловая і двухгаловая мышцы сцягна, найшырэйшыя мышцы спіны, трапецыі, заднія пучкі дэльтападобных цягліц, перадплечча і біцэпсы. Цяга на прамых нагах, т. зв. "румынская цяга«, дадаткова расцягвае і нагружае біцэпсы сцёгнаў, прымушаючы іх працаваць на мяжы ў дынамічным напружанні, а таксама верхнія долі ягадзіц; вагі ў дадзеным выглядзе цягі выкарыстоўваюцца умераныя, менш, чым у»станавы". Менавіта таму, выконваючы розныя варыянты цяг, спартсмены больш за ўсё набіраюць мышачную масу і таму дадзенае практыкаванне ставіцца да базавых.',
    },
	'p-3' : {
        'RU' : 'Тяга может выполняться широким, средним и узким, параллельным, прямым или смешанным (разнохват) хватом или специальным хватом — в «замок». Постановка ног может быть чуть шире плеч или очень широкая (тяга в стиле «сумо»), ноги прямые или согнуты в коленях. Из спортивного инвентаря применяется обычно штанга, тяга с применением блина от штанги, гантели или гири, удерживаемых между ног обеими руками, называется «плие-приседанием».',
        'EN' : 'Traction can be performed with a wide, medium and narrow, parallel, straight or mixed (multi-grip) grip or a special grip — in a "lock". The setting of the legs can be slightly wider than the shoulders or very wide (sumo style traction), the legs are straight or bent at the knees. From sports equipment, a barbell is usually used, traction with the use of a pancake from a barbell, dumbbell or kettlebell held between the legs with both hands is called a "plie squat".',
        'BY' : 'Цяга можа выконвацца шырокім, сярэднім і вузкім, паралельным, прамым або змяшаным (разнохват) хватам або спецыяльным хватам — у «замак». Пастаноўка ног можа быць ледзь шырэй плечаў або вельмі шырокая (цяга ў стылі "сумо"), ногі прамыя або сагнутыя ў каленях. З спартыўнага інвентара ўжываецца звычайна штанга, цяга з ужываннем бліна ад штангі, гантэлі або гіры, якія ўтрымліваюцца паміж ног абедзвюма рукамі, называецца «плие-прысяданнем».',
    },
	'p-4' : {
        'RU' : 'Во всех вариантах тяг ноги чуть согнуты в коленях для снятия нагрузки с суставов, руки прямые вытянутые, спина обязательно прямая (нагрузка строго вертикальная на весь позвоночный столб, который амортизирует её вдоль всего тела спортсмена, что позволяет избежать травм позвоночника смещением отдельных позвонков и перенапряжением отдельных мелких стабилизирующих мышц).',
        'EN' : 'In all variants of traction, the legs are slightly bent at the knees to relieve the load from the joints, the arms are straight, the back is necessarily straight (the load is strictly vertical on the entire vertebral column, which dampens it along the entire body of the athlete, which avoids spinal injuries by displacement of individual vertebrae and overstrain of individual small stabilizing muscles).',
        'BY' : 'Ва ўсіх варыянтах цяг ногі ледзь сагнутыя ў каленях для зняцця нагрузкі з суставаў, рукі прамыя выцягнутыя, спіна абавязкова прамая (нагрузка строга вертыкальная на ўвесь пазваночны слуп, які амартызуе яе ўздоўж усяго цела спартсмена, што дазваляе пазбегнуць траўмаў пазваночніка зрушэннем асобных пазванкоў і перанапружаннем асобных дробных стабілізуючым цягліц).',
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