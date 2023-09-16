type IconSize = {
    width: string | number,
    height: string | number,
}

// header
export const manArmIconSize: IconSize = {
    width: 64,
    height: 64,
};
export const whatIsArm = 'Армрестлинг — это искусство силы и стратегии, в котором два человека сходятся в поединке, чтобы определить, кто из них сильнее. В этом соревновании сила, выносливость и мастерство встречаются в дружественной борьбе. Покажите свою мощь и силу рук, соревнуясь с маевскими товарищами. Это отличная возможность не только продемонстрировать свои армрестлинговые навыки, но и поддержать свою команду или просто насладиться динамичными поединками.';
export const headerButtonText = [
    'Зарегистрироваться',
    'Войти',
];
export const mainPageButtonTextLoggedIn = [
    'Личный кабинет',
    'Выйти',
]

// main page
export const titleText = 'МЕЖГАЛАКТИЧЕСКОЕ СОРЕВНОВАНИЕ ПО АРМРЕСТЛИНГУ';
export const infoText = ''; // нужен nbsp, поэтому в строку не запихнуть
export const mainPageButtonText = [
    'Участвовать',
    'Подробнее',
];
export const contacts = [
    'Klivan1',
    'mosesgodown',
    'Platon_Leb',
    'Haliaven',
];
export const MAIiconSize: IconSize = {
    width: 400,
    height: 400,
};
export const armIconSize: IconSize = {
    width: 550,
    height: 550,
};


// registration page
type FormFieldId = string;
type InputType = 'email' | 'password' | 'text' | 'dropdown';
type FormField = {
    inputTitle: string,
    inputType: InputType,
    note?: string,
    options?: string[], // only for dropdowns
}
export type PersInfoMapType = {
    surname: FormField,
    name: FormField,
    faculty: FormField,
    stage: FormField,
    course: FormField,
}
export type FormFieldsMapType = {
    email: FormField,
    password: FormField,
    repeatPassword: FormField,
    telegram: FormField,
}
export const formFieldsMap: FormFieldsMapType = {
    email: {
        inputTitle: 'Адрес электронной почты',
        inputType: 'email',
        note: 'Она будет использоваться в качестве логина при входе на портал',
    },
    password: {
        inputTitle: 'Пароль',
        inputType: 'password',
    },
    repeatPassword: {
        inputTitle: 'Повторите пароль',
        inputType: 'password',
    },
    telegram: {
        inputTitle: 'Telegram',
        inputType: 'text',
        note: 'Исключительно для связи',
    },
};
export const persInfoMap: PersInfoMapType = {
    surname: {
        inputTitle: 'Фамилия',
        inputType: 'text',
    },
    name: {
        inputTitle: 'Имя',
        inputType: 'text',
    },
    stage: {
        inputTitle: 'Степень образования',
        inputType: 'dropdown',
        options: [
            '1', '2', '3', '4'
        ],
    },
    faculty: {
        inputTitle: 'Институт',
        inputType: 'dropdown',
        options: [
            '1', '2', '3', '4'
        ],
    },
    course: {
        inputTitle: 'Курс',
        inputType: 'dropdown',
        options: [
            '1', '2', '3', '4'
        ],
    },
}
export const formFieldsIds: (keyof FormFieldsMapType)[] = Object.keys(formFieldsMap) as (keyof FormFieldsMapType)[];
export const persFieldsIds: (keyof PersInfoMapType)[] = Object.keys(persInfoMap) as (keyof PersInfoMapType)[];


// login page
export type LoginPageFieldTypes = {
    email: FormField,
    password: FormField,
}
export const loginPageFieldsMap = {
    email: {
        inputTitle: 'Адрес электронной почты',
        inputType: 'email',
    },
    password: {
        inputTitle: 'Пароль',
        inputType: 'password',
    },
}

// competition page
export const competitionDescription = 'Я в своем познании настолько преисполнился, что я как будто бы уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, как эта Земля, мне этот мир абсолютно понятен, и я здесь ищу только одного - покоя, умиротворения и вот этой гармонии, от слияния с бесконечно вечным, от созерцания великого фрактального подобия и от вот этого замечательного всеединства существа, бесконечно вечного, куда ни посмотри, хоть вглубь - бесконечно малое, хоть ввысь - бесконечное большое, понимаешь? А ты мне опять со своим вот этим, иди суетись дальше, это твоё распределение, это твой путь и твой горизонт познания и ощущения твоей природы, он несоизмеримо мелок по сравнению с моим, понимаешь? Я как будто бы уже давно глубокий старец, бессмертный, ну или там уже почти бессмертный, который на этой планете от её самого зарождения, ещё когда только Солнце только-только сформировалось как звезда, и вот это газопылевое облако, вот, после взрыва, Солнца, когда оно вспыхнуло, как звезда, начало формировать вот эти коацерваты, планеты, понимаешь, я на этой Земле уже как будто почти пять миллиардов лет живу и знаю её вдоль и поперёк этот весь мир, а ты мне какие-то... мне не важно на твои тачки, на твои яхты, на твои квартиры, там, на твоё благо. Я был на этой планете бесконечным множеством, и круче Цезаря, и круче Гитлера, и круче всех великих, понимаешь, был, а где-то был конченым говном, ещё хуже, чем здесь. Я множество этих состояний чувствую. Где-то я был больше подобен растению, где-то я больше был подобен птице, там, червю, где-то был просто сгусток камня, это всё есть душа, понимаешь? Она имеет грани подобия совершенно многообразные, бесконечное множество. Но тебе этого не понять, поэтому ты езжай себе , мы в этом мире как бы живем разными ощущениями и разными стремлениями, соответственно, разное наше и место, разное и наше распределение. Тебе я желаю все самые крутые тачки чтоб были у тебя, и все самые лучше самки, если мало идей, обращайся ко мне, я тебе на каждую твою идею предложу сотню триллионов, как всё делать. Ну а я всё, я иду как глубокий старец,узревший вечное, прикоснувшийся к Божественному, сам стал богоподобен и устремлен в это бесконечное, и который в умиротворении, покое, гармонии, благодати, в этом сокровенном блаженстве пребывает, вовлеченный во всё и во вся, понимаешь, вот и всё, в этом наша разница. Так что я иду любоваться мирозданием, а ты идёшь преисполняться в ГРАНЯХ каких-то, вот и вся разница, понимаешь, ты не зришь это вечное бесконечное, оно тебе не нужно. Ну зато ты, так сказать, более активен, как вот этот дятел долбящий, или муравей, который очень активен в своей стезе, поэтому давай, наши пути здесь, конечно, имеют грани подобия, потому что всё едино, но я-то тебя прекрасно понимаю, а вот ты меня - вряд ли, потому что я как бы тебя в себе содержу, всю твою природу, она составляет одну маленькую там песчиночку, от того что есть во мне, вот и всё, поэтому давай, ступай, езжай, а я пошел наслаждаться прекрасным осенним закатом на берегу теплой южной реки. Всё, ступай, и я пойду.'

// LK
export type LKFieldsType = Omit<FormFieldsMapType, 'repeatPassword'> & PersInfoMapType;
export const lkFieldsMap: LKFieldsType = {
    email: {
        inputTitle: 'Адрес электронной почты',
        inputType: 'email',
    },
    password: {
        inputTitle: 'Пароль',
        inputType: 'password',
    },
    telegram: {
        inputTitle: 'Telegram',
        inputType: 'text',
    },
    surname: {
        inputTitle: 'Фамилия',
        inputType: 'text',
    },
    name: {
        inputTitle: 'Имя',
        inputType: 'text',
    },
    stage: {
        inputTitle: 'Степень образования',
        inputType: 'dropdown',
        options: [
            'Бакалавриат',
            'Магистратура',
            'Аспирантура',
            'Специалитет',
            'Базовое высшее',
        ],
    },
    faculty: {
        inputTitle: 'Институт',
        inputType: 'dropdown',
        options: [
            'Институт №1 «Авиационная техника»',
            'Институт №2 «Авиационные, ракетные двигатели и энергетические установки»',
            'Институт №3 «Системы управления, информатика и электроэнергетика»',
            'Институт №4 «Радиоэлектроника, инфокоммуникации и информационная безопасность»',
            'Институт №9 «Институт общеинженерной подготовки»',
        ],
    },
    course: {
        inputTitle: 'Курс',
        inputType: 'dropdown',
        options: [
            '1', '2', '3', '4'
        ],
    },
};
export const lkFieldsIds: (keyof LKFieldsType)[] = Object.keys(lkFieldsMap) as (keyof LKFieldsType)[];