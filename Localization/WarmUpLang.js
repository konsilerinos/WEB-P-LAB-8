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
        'RU' : 'Разминка',
        'EN' : 'Warm-up',
        'BY' : 'Размінка',
    },
    'p-1' : {
        'RU' : 'Вводная часть тренировки. Подготавливает человека к более интенсивным физическим нагрузкам. Выполнение разминки может предохранять спортсмена от травм и является важной частью тренировки.',
        'EN' : 'The introductory part of the training. Prepares a person for more intense physical exertion. Doing a warm-up can protect an athlete from injury and is an important part of training.',
        'BY' : 'Ўступная частка трэніроўкі. Падрыхтоўвае чалавека да больш інтэнсіўным фізічным нагрузак. Выкананне размінкі можа засцерагчы спартсмена ад траўмаў і з\'яўляецца важнай часткай трэніроўкі.',
    },
    'p-2' : {
        'RU' : 'Разминка может состоять из любой физической нагрузки, способной значительно повысить частоту сердечно-сосудистых сокращений: бег трусцой (на воздухе или просто в помещении на месте), занятия на велосипеде (обычном или стационарном), прыжки через скакалку и другое.',
        'EN' : 'A warm-up can consist of any physical activity that can significantly increase the frequency of cardiovascular contractions: jogging (outdoors or just indoors on the spot), cycling (regular or stationary), jumping rope and more.',
        'BY' : 'Размінка можа складацца з любой фізічнай нагрузкі, здольнай значна павысіць частату сардэчна-сасудзістых скарачэнняў: бег трушком (на паветры ці проста ў памяшканні на месцы), заняткі на ровары (звычайным або стацыянарным), скачкі праз скакалку і іншае.',
    },
    'p-3' : {
        'RU' : 'Разминка нужна для подготовки к тренировке всего организма. В её процессе в результате повышения температуры тела и разогрева мышц активизируется обмен веществ, изменяется в лучшую сторону состояние сердечно-сосудистой и дыхательной систем, повышается работоспособность мышц.',
        'EN' : 'Warm-up is necessary to prepare for the training of the whole body. In its process, as a result of an increase in body temperature and warming up of muscles, metabolism is activated, the state of the cardiovascular and respiratory systems changes for the better, and muscle performance increases.',
        'BY' : 'Размінка патрэбна для падрыхтоўкі да трэніроўкі ўсяго арганізма. У яе працэсе ў выніку павышэння тэмпературы цела і разагрэву цягліц актывізуецца абмен рэчываў, змяняецца ў лепшы бок стан сардэчна-сасудзістай і дыхальнай сістэм, павышаецца працаздольнас',
    },
    'p-4' : {
        'RU' : 'Отказ от разминки может привести к заболеваниям и травмам.',
        'EN' : 'Failure to warm up can lead to illness and injury.',
        'BY' : 'Адмова ад размінкі можа прывесці да захворванняў і траўмаў.',
    },
    'p-5' : {
        'RU' : 'Продолжительность разогрева большей частью зависит от степени подготовленности спортсмена, температуры воздуха, тренировочной одежды.',
        'EN' : 'The duration of the warm-up mostly depends on the degree of fitness of the athlete, air temperature, training clothes.',
        'BY' : 'Працягласць разагрэву большай часткай залежыць ад ступені падрыхтаванасці спартсмена, тэмпературы паветра, трэніровачнай адзення.',
    },
    'p-6' : {
        'RU' : 'Независимо от того, какой разминки придерживается спортсмен, результат один — обязательно должны быть разогреты все мышцы и суставы.',
        'EN' : 'No matter what kind of warm—up an athlete adheres to, the result is the same - all muscles and joints must be warmed up.',
        'BY' : 'Незалежна ад таго, які размінкі прытрымліваецца спартсмен, вынік адзін-абавязкова павінны быць разагрэты ўсе мышцы і суставы.',
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