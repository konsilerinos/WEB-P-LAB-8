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
        'RU' : 'Юрий Власов, цитаты',
        'EN' : 'Yuri Vlasov, quotes',
        'BY' : 'Юрый Уласаў, цытаты',
    },
    'p-1' : {
        'RU' : 'Самая высшая опора — ты сам. Нет ничего надежней этой опоры',
        'EN' : 'The highest support is yourself. There is nothing more reliable than this support',
        'BY' : 'Самая вышэйшая апора-ты сам. Няма нічога надзейней гэтай апоры',
    },
    'p-2' : {
        'RU' : 'Вещь банальная, известная каждому, но все же повторюсь: надо, чтобы ребенок не только научился делиться, отрывать от себя нечто чрезвычайно ценное (по его представлениям), но и знал труд. Без труда дома, в помощь семье (подчеркиваю: не в школе, а дома), он не оценит того, что делают для него близкие, станет все принимать как должное, а в окружающих видеть один источник удовлетворения своих желаний',
        'EN' : 'The thing is banal, known to everyone, but still I repeat: it is necessary that the child not only learns to share, to tear something extremely valuable from himself (according to his ideas), but also knows the work. Without difficulty at home, to help the family (I emphasize: not at school, but at home), he will not appreciate what his loved ones are doing for him, he will take everything for granted, and see in others one source of satisfaction of his desires',
        'BY' : 'Рэч банальная, вядомая кожнаму, але ўсё ж паўтаруся: трэба, каб дзіця не толькі навучыўся дзяліцца, адрываць ад сябе нешта надзвычай каштоўнае (па яго паданнях), але і ведаў працу. Без працы дома, у дапамогу сям\'і (падкрэсліваю: не ў школе, а дома), ён не ацэніць таго, што робяць для яго блізкія, стане ўсё прымаць як належнае, а ў навакольных бачыць адна крыніца задавальнення сваіх жаданняў',
    },
    'p-3' : {
        'RU' : 'А как же иначе?! Нет плохой жизни - есть неумение жить. Во всех провалах виноват я, а не жизнь. Я не сумел повести себя разумно. В нервных срывах, болезнях, бессонницах и безвыходных положениях, которые мне мерещились, - неумение жить. Во всех провалах виноват я, а не жизнь!',
        'EN' : 'But how else?! There is no bad life - there is an inability to live. I am to blame for all the failures, not life. I failed to behave sensibly. In nervous breakdowns, illnesses, insomnia and hopeless situations that I imagined - the inability to live. I am to blame for all the failures, not life!',
        'BY' : 'А як жа інакш?! Няма дрэннай жыцця - значыць, няўменне жыць. Ва ўсіх правалах вінаваты я, а не жыццё. Я не здолеў аповесці сябе разумна. У нервовых зрывах, хваробах, бессань і бязвыхадных палажэннях, якія мне мроіліся, - няўменне жыць. Ва ўсіх правалах вінаваты я, а не жыццё!',
    },
    'p-4' : {
        'RU' : 'Сила должна доказывать и утверждать величие духа и красоту преодоления. Именно в этом великая ее справедливость',
        'EN' : 'Strength must prove and affirm the greatness of the spirit and the beauty of overcoming. This is the great justice of it',
        'BY' : 'Сіла павінна даказваць і сцвярджаць веліч духу і прыгажосць пераадолення. Менавіта ў гэтым вялікая яе справядлівасць',
    },
    'p-5' : {
        'RU' : 'Старайся, когда никто не верит, когда так называемым здравым смыслом ты уже обречен, когда больно жить, когда никто не верит в твою мечту, когда тебя предают, когда ты один, когда... — словом, все равно старайся! И не признавать усталости. Отлеживаться, приводить себя в порядок — и снова идти',
        'EN' : 'Try when no one believes, when you are already doomed by so-called common sense, when it hurts to live, when no one believes in your dream, when you are betrayed, when you are alone, when... — in short, try anyway! And not to admit fatigue. To lie down, put yourself in order — and go again',
        'BY' : 'Старайся, калі ніхто не верыць, калі так званым здаровым сэнсам ты ўжо асуджаны, калі балюча жыць, калі ніхто не верыць у тваю мару, калі цябе здраджваюць, калі ты адзін, калі... - словам, усё роўна старайся! І не прызнаваць стомленасці. Адлежвацца, прыводзіць сябе ў парадак-і зноў ісці',
    },
    'p-6' : {
        'RU' : 'Маленькая слабость рождает большую. Большая – трусость и подлость. Так разъедается душа',
        'EN' : 'A small weakness gives birth to a big one. The big one is cowardice and meanness. So the soul is corroded',
        'BY' : 'Маленькая слабасць нараджае вялікую. Вялікая-баязлівасць і подласць. Так раз\'ядаецца душа',
    },
    'p-7' : {
        'RU' : 'Нельзя долго о чем-то жалеть — это всегда от оглядывания назад, сомнений в своих способностях, это умаление значения воли. Надо нести в себе правило: будь господином своих мыслей, любая мысль переходит в твое физическое состояние, осваивай дисциплинированное мышление, дави отрицательные чувства, убирай «мусор»…',
        'EN' : 'You can\'t regret something for a long time - it\'s always from looking back, doubts about your abilities, it\'s a diminution of the value of the will. It is necessary to carry a rule in yourself: be the master of your thoughts, any thought passes into your physical state, master disciplined thinking, crush negative feelings, remove "garbage"…',
        'BY' : 'Нельга доўга пра нешта шкадаваць-гэта заўсёды ад аглядвання назад, сумненняў у сваіх здольнасцях, гэта прымяншэнне значэння волі. Трэба несці ў сабе правіла: будзь спадаром сваіх думак, любая думка пераходзіць у твой фізічны стан, асвойвай дысцыплінаванае мысленне, душы адмоўныя пачуцці, прыбірай»смецце"…',
    },
    'p-8' : {
        'RU' : 'Я окончательно осознал, что мы копаемся в мелочах, являемся рабами имен и традиций — надо ломать тренировку, искать свое и не страшиться ни бога, ни черта! Тогда я впервые написал в своей тренировочной тетради: «Ничего не властно надо мной!» И верно, совсем не редко авторитеты лишают нас воли…',
        'EN' : 'I finally realized that we are digging into the little things, we are slaves to names and traditions — we need to break training, look for our own and not be afraid of God or the devil! That was the first time I wrote in my training notebook: "Nothing has power over me!" And it\'s true, it\'s not uncommon for authorities to deprive us of our will…',
        'BY' : 'Я канчаткова ўсвядоміў, што мы капаемся ў дробязях, з\'яўляемся рабамі імёнаў і традыцый-трэба ламаць трэніроўку, шукаць сваё і не баяцца ні бога, ні чорта! Тады я ўпершыню напісаў у сваёй трэніровачнай сшыткі: «Нічога не уладна трэба мной!"І дакладна, зусім не рэдка аўтарытэты пазбаўляюць нас волі…',
    },
    'p-9' : {
        'RU' : 'Любовь к женщине… Что может сравниться с этим чувством? Оно дает осознание своей силы, всемогущества, бесконечной веры в себя. Это любовь уберегает тебя от падения. Она поднимает тебя из ничтожества падения. Она не позволяет человеку быть жалким и грязным. Она делает тебя красивым. Это любовь дает великое чувство отцовства. Бесплодна, засушенно-черства жизнь без любви. Все чувства – недоразвитые стебли чувств, размытая тень настоящих чувств',
        'EN' : 'Love for a woman… What can compare with this feeling? It gives awareness of its power, omnipotence, infinite self-belief. It\'s love that keeps you from falling. She lifts you out of the nothingness of falling. It does not allow a person to be pathetic and dirty. She makes you beautiful. This love gives a great feeling of fatherhood. Barren, arid-callous life without love. All feelings are underdeveloped stems of feelings, a blurred shadow of real feelings',
        'BY' : 'Любоў да жанчыны... што можа параўнацца з гэтым пачуццём? Яно дае ўсведамленне сваёй сілы, ўсемагутнасці, бясконцай веры ў сябе. Гэта любоў засцерагаю цябе ад падзення. Яна падымае цябе з нікчэмнасці падзення. Яна не дазваляе чалавеку быць вартым жалю і брудным. Яна робіць цябе прыгожым. Гэта любоў дае вялікае пачуццё бацькоўства. Бясплодная, засушана-чэрствы жыццё без кахання. Усе пачуцці-недаразвітыя сцеблы пачуццяў, размытая цень сапраўдных пачуццяў',
    },
    'p-10' : {
        'RU' : 'Ничего, что руки мертвы усталостью, не всегда так будет… Мне казалось: вместо души у меня огненный расплав и он жжет, жжет… ни мгновения покоя. Я не сомневался: раздвину завалы неудач, просчетов и снова узнаю счастье возрождения в силе. Из болезней и срывов я выходил закаленным и с запасом сил. Пусть эксперимент был жесток и во многом неоправдан, но силу я добыл. Счастливы ищущие!',
        'EN' : 'It\'s okay that the hands are dead with fatigue, it won\'t always be like this… It seemed to me: instead of a soul, I have a fiery melt and it burns, burns ... not a moment of peace. I had no doubt: I would push aside the rubble of failures, miscalculations and again recognize the happiness of rebirth in power. I came out of illnesses and breakdowns seasoned and with a reserve of strength. Even though the experiment was cruel and in many ways unjustifiably I got strength. Happy are the seekers!',
        'BY' : 'Нічога, што рукі мёртвыя стомленасцю, не заўсёды так будзе ... Мне здавалася: замест душы ў мяне агністы расплаў і ён паліць, паліць... ні імгнення спакою. Я не сумняваўся: раздвину завалы няўдач, пралікаў і зноў даведаюся шчасце адраджэння ў сіле. З хвароб і зрываў я выходзіў загартаваным і з запасам сіл. Хай эксперымент быў жорсткі і шмат у чым неапраўдана сілу я здабыў. Шчаслівыя шукаюць!',
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