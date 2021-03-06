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
        'RU' : 'Присед со штангой',
        'EN' : 'Squat with barbell',
        'BY' : 'Прысядаючы са штангай',
    },
    'p-1' : {
        'RU' : 'Нагрузка равномерно распределяется между длинными мышцами спины, квадрицепсами, ягодицами, бицепсами бедер и икроножными. Как стабилизаторы работают мышцы пресса, дельты, широчайшие. Иногда считают, что длинные мышцы спины тоже стабилизируют в приседе, но реальная ситуация зависит от техники. Если спортсмен длинноногий и бедро у него тоже длинное, естественный наклон спины вперед будет компенсироваться работой длинных мышц спины.',
        'EN' : 'The load is evenly distributed between the long muscles of the back, quadriceps, buttocks, biceps of the hips and calves. As stabilizers, the muscles of the press, deltas, and the widest work. Sometimes it is believed that long back muscles also stabilize in a squat, but the real situation depends on the technique. If an athlete is long-legged and his hip is also long, the natural inclination of the back forward will be compensated by the work of the long muscles of the back.',
        'BY' : 'Нагрузка раўнамерна размяркоўваецца паміж доўгімі цягліцамі спіны, квадрицепсами, ягадзіцамі, біцэпсамі сцёгнаў і ікроножными. Як стабілізатары працуюць мышцы прэса, дэльты, найшырэйшыя. Часам лічаць, што доўгія мышцы спіны таксама стабілізуюць у прыседзе, але рэальная сітуацыя залежыць ад тэхнікі. Калі спартсмен даўганогі і сцягно ў яго таксама доўгае, натуральны нахіл спіны наперад будзе кампенсавацца працай доўгіх цягліц спіны.',
    },
	'p-2' : {
        'RU' : 'Для фитнессиста главное преимущество – возможность проработать максимум мышц за минимум времени. Правда сурова – человек, который делает, например, 4 рабочих сета приседаний по 8-10 повторений с относительно высоким весом, качает пресс и уходит домой или на работу будет сложен лучше, чем его товарищ, торчащий в зале по полтора часа, но выполняющий только сгибания и разгибания, и, максимум, какие-нибудь жимы платформы ногами.',
        'EN' : 'For a fitness player, the main advantage is the ability to work out maximum muscles in a minimum of time. The truth is harsh – a person who does, for example, 4 working sets of squats of 8-10 repetitions with a relatively high weight, shakes the press and goes home or to work will be better built than his friend, who sticks out in the gym for an hour and a half, but performs only flexion and extension, and, at most, some presses platforms with feet.',
        'BY' : 'Для фитнессиста галоўная перавага-магчымасць прапрацаваць максімум цягліц за мінімум часу. Праўда суровая-чалавек, які робіць, напрыклад, 4 рабочых Сэта прысяданняў па 8-10 паўтораў з адносна высокім вагой, пампуе прэс і сыходзіць дадому або на працу будзе складзены лепш, чым яго таварыш, які тырчыць у зале па паўтары гадзіны, але які выконвае толькі згінання і выпроствання, і, максімум, якія-небудзь жимы платформы нагамі.',
    },
	'p-3' : {
        'RU' : 'Относительно пользы приседа для новичков и любителей физкультуры мнения разошлись. Объективно присед с минимальными весами улучшает координацию движений, повышает подвижность суставов и укрепляет связки. Он не способствует травматизации, если выполнять плавно и подконтрольно. Противники приседаний у новичков утверждают, что мышцы таких людей слишком слабы, чтобы удерживать вес на спине, и выполнять движение технически верно. На самом деле, имеет смысл давать небольшой период «закачки» мышц в тренажерах перед приседанием, но затягивать его на 4-5 месяцев, как это делают некоторые тренеры, чтобы не ставить новичкам технику, не стоит. Проблема с начинающими и любителями заключается как раз в отсутствии навыка и небольшой подвижности суставов. Наработать это проще всего как раз приседанием.',
        'EN' : 'Regarding the benefits of the squat for beginners and fans of physical education, opinions differed. Objectively, a squat with minimal weights improves coordination of movements, increases joint mobility and strengthens ligaments. It does not contribute to injury if performed smoothly and under control. Opponents of squats for beginners claim that the muscles of such people are too weak to hold weight on their backs, and perform the movement technically correctly. In fact, it makes sense to give a short period of "pumping" muscles in simulators before squatting, but it is not worth delaying it for 4-5 months, as some trainers do, so as not to put the technique to beginners. The problem with beginners and amateurs is precisely the lack of skill and little joint mobility. It\'s easiest to work it out just by squatting.',
        'BY' : 'Адносна карысці прыседу для пачаткоўцаў і аматараў фізкультуры думкі разышліся. Аб\'ектыўна прысед з мінімальнымі вагамі паляпшае каардынацыю рухаў, павышае рухомасць суставаў і умацоўвае звязкі. Ён не спрыяе траўматызацыі, калі выконваць плаўна і падкантрольна. Праціўнікі прысяданняў у пачаткоўцаў сцвярджаюць, што мышцы такіх людзей занадта слабыя, каб утрымліваць вагу на спіне, і выконваць рух тэхнічна дакладна. На самай справе, мае сэнс даваць невялікі перыяд "запампоўкі" цягліц у трэнажорах перад прысяданнем, але зацягваць яго на 4-5 месяцаў, як гэта робяць некаторыя трэнеры, каб не ставіць пачаткоўцам тэхніку, не варта. Праблема з пачаткоўцамі і аматарамі заключаецца як раз у адсутнасці навыку і невялікі рухомасці суставаў. Напрацаваць гэта прасцей за ўсё як раз прысяданнем.',
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