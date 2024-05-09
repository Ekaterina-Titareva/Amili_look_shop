export function createData(size, size34, size36, size38, size40, size42, size44, size46, size48, size50, size52) {
    return {size, size34, size36, size38, size40, size42, size44, size46, size48, size50, size52};
}

export const rows = [
    createData('Обхват груди, см', 80, 84, 88, 92, 96, 100, 104, 110, 116, 122),
    createData('Обхват талии, см', 62,	66,	70,	74,	78,	82,	86,	92,	98,	104),
    createData('Обхват бедер, см', 86, 90,	94,	98,	102, 106, 110, 116, 122, 128),
    createData('Длина рукава, см', 59, 59, 60, 60, 61, 61, 61, 61, 62, 92),
    createData('Охват верхней части руки, см', 26, 27, 28, 29, 30, 31, 32, 34, 36, 38),
    createData('Ширина спины, см', 33.5, 34.5, 35.5, 36.5, 37.5, 38.5, 39.5, 41, 42.5, 44),
];

export const navLinks = [
    {id: "home_link", value: "Главная", href: "/"},
    {id: "about_link", value: "О нас", href: "/about"},
    {id: "goods_link", value: "Наши товары", href: "/allGoods"},
    {id: "private_link", value: "Политика конфиденциальности", href: "/privacyPolicy"}
]

export const goods = [
    {
        id: "1",
        categoryEng: "dress",
        category: "Платья",
        name: "Черное платье",
        description: "Черное платье с асимметричным лифом. Облегающий силуэт, платье в длине миди с разрезом на ноге. Без рукавов, с молнией на спине. Не прихотлив в уходе. Деликатная стрика при максимальной температуре 40ºС, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС. ",
        image1: "/assets/images/clothes/id1I1.jpg",
        image2: "/assets/images/clothes/id1I2.jpg",
        image3: "/assets/images/clothes/id1I3.jpg",
        color: "Черный, Красный",
        size: "42-50",
        price: "7500",
        material: "52% вискоза , 40% полиэстер 8% эластан",
        text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
        text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
        id: "2",
        categoryEng: "cardigan",
        category: "Кардиганы",
        name: "Кардиган с перьями страуса",
        description: "Белый кардиган с перьями страуса. Кардиган свободного кроя, хорошо подойдет под любой типы фигуры. Благодаря своему составу, модель отлично сохраняет тепло и поддерживает комфортную температуру тела. Уход: Бережная стирка при максимальной температуре 40ºС, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим. ",
        image1: "/assets/images/clothes/id2I1.jpg",
        image2: "/assets/images/clothes/id2I2.jpg",
        image3: "/assets/images/clothes/id2I3.jpg",
        color: "Белый",
        size: "44-54",
        price: "8500",
        material: "67% вискоза, 25% полиэстер, 8% эластан, 100% перья страуса",
        text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
        text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "3",
            categoryEng: "set",
            category: "Комплекты",
            name: "Рубашка+брюки",
            description: "Классическая рубашка из мягкой струящийся вискозной ткани. Брюки свободного кроя, пояс на резинке. Принт: цветочный. Комфортный, легкий, красивый летний образ. К комплекту идет топ на завязках.",
            image1: "/assets/images/clothes/id3I1.jpg",
            image2: "/assets/images/clothes/id3I2.jpg",
            image3: "/assets/images/clothes/id3I3.jpg",
            color: "Цветочный, Зеленый, Белый, Оранжевый",
            size: "44-46",
            price: "8500",
            material: "100% вискоза",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "4",
            categoryEng: "set",
            category: "Комплекты",
            name: "Топ и юбка из муслина",
            description: "Круизный комплект из муслина. Легкий, воздушный образ. Топ на резинке с открытыми плечами и коротким рукавом. Юбка на запах с разрезом на ноге.  Уход: ручная или деликатная стирка. Отжим не более 600 оборотов. Сушить на плоской поверхности, предварительно расправив.",
            image1: "/assets/images/clothes/id4I1.jpg",
            image2: "/assets/images/clothes/id4I2.jpg",
            image3: "/assets/images/clothes/id4I3.jpg",
            color: "Желтый",
            size: "40-52",
            price: "4799",
            material: "100% хлопок",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "5",
            categoryEng: "set",
            category: "Комплекты",
            name: "Футболка и леггинсы из спортивного трикотажа",
            description: "Спортивный женский костюм для спорта, для прогулок, для фитнеса, для йоги, для бега. Оверсайз футболка из мягкого хлопкового трикотажа и укороченные леггинсы на высокой посадки.",
            image1: "/assets/images/clothes/id5I1.jpg",
            image2: "/assets/images/clothes/id5I2.jpg",
            image3: "/assets/images/clothes/id5I3.jpg",
            color: "Песочный, Черный, Белый",
            size: "44-46",
            price: "4799",
            material: "92 % хлопок, 8% эластана",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "6",
            categoryEng: "set",
            category: "Комплекты",
            name: "Юбка миди + топ",
            description: "Комплект из летящей, полупрозрачной вискозы. Натуральный плотностью, юбка на подкладке. Ткань струится в движении, мягко подчеркивая силуэт, а нежный цветочный принт и V-образный вырез усиливают ощущение хрупкости — вне времени и вне возраста. Два варианта на выбор. Ярусная юбка в длине миди + блуза с рукавами фонарик или ярусная юбка в длине миди + топ спущенным плечом.",
            image1: "/assets/images/clothes/id6I1.jpg",
            image2: "/assets/images/clothes/id6I2.jpg",
            image3: "/assets/images/clothes/id6I3.jpg",
            color: "Белый, Цветочный принт",
            size: "40-48",
            price: "8000",
            material: "100% вискоза",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "7",
            categoryEng: "set",
            category: "Комплекты",
            name: "Домашний комплект",
            description: "Элегантный, красивый образ для дома. Рубашка с длинным рукавами, струящая ткань позволяет образ сделать легким и свободным, благодаря этому не сковывает движения. Расслабленный силуэт. Рубашка оверсайз. Брюки на резинки прямого кроя. ",
            image1: "/assets/images/clothes/id7I1.jpg",
            image2: "/assets/images/clothes/id7I2.jpg",
            image3: "/assets/images/clothes/id7I3.jpg",
            color: "Серый",
            size: "40-52",
            price: "7999",
            material: "100% бамбук",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "8",
            categoryEng: "shirt",
            category: "Рубашки",
            name: "Рубашка в клетку",
            description: "Базовая женская рубашка в клетку с длинными рукавами – идеально подходит для многослойных образов как для повседневной носки, так и для особых событий.",
            image1: "/assets/images/clothes/id8I1.jpg",
            image2: "/assets/images/clothes/id8I2.jpg",
            image3: "/assets/images/clothes/id8I3.jpg",
            color: "Коричневый",
            size: "38-52",
            price: "5200",
            material: "100% хлопок",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "9",
            categoryEng: "shirt",
            category: "Рубашки",
            name: "Блуза с декоративными манжетами",
            description: "Классическая рубашка из струящейся шелковистой ткани с декоративными манжетами. Прямая, удлиненная рубашка. Универсальная модель идеально впишется в любой гардероб.  Яркий, элегантный образ можно комбинировать с юбкой из нашей коллекции.",
            image1: "/assets/images/clothes/id9I1.jpg",
            image2: "/assets/images/clothes/id9I2.jpg",
            image3: "/assets/images/clothes/id9I3.jpg",
            color: "Горчичный, Оливковый",
            size: "38-50",
            price: "4650",
            material: "52% полиэстер, 48% вискоза",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "10",
            categoryEng: "shirt",
            category: "Рубашки",
            name: "Рубашка с рукавами фонарик",
            description: "Полуприталенная женская рубашка с рукавами фонариками из фактурного теплого хлопка. Она идеально сочетается с любыми элементами гардероба: джинсами, строгими штанами или классическими юбками. Но идеальное сочетание и готовый образ можно составить с мини юбкой с разрезами из нашей коллекции. См. разделе юбки.",
            image1: "/assets/images/clothes/id10I1.jpg",
            image2: "/assets/images/clothes/id10I2.jpg",
            image3: "/assets/images/clothes/id10I3.jpg",
            color: "Зеленый",
            size: "38-52",
            price: "5500",
            material: "93 % хлопок, 7% шерсть",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "11",
            categoryEng: "scirt",
            category: "Юбки",
            name: "Юбка из замши",
            description: "Прямая юбка миди комфортно облегает бедра, формируя элегантный женственный силуэт. Выполнена из плотной и гладкой искусственной замши, с разрезом спереди, хорошо держит форму и практична в уходе. Сочетайте блузой с декоративными манжетами из нашей коллекции. См. разделе юбки.",
            image1: "/assets/images/clothes/id11I1.jpg",
            image2: "/assets/images/clothes/id11I2.jpg",
            image3: "/assets/images/clothes/id11I3.jpg",
            color: "Светло-бежевый, Светло-розовый",
            size: "38-52",
            price: "5500",
            material: "100% искусственная замша",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "12",
            categoryEng: "scirt",
            category: "Юбки",
            name: "Юбки с разрезами",
            description: "Мини юбка из мягкого буклированной фактурной ткани. Маленькие разрезы спереди делают образ женственной, утонченной. Эту модель можно выполнить в другом цвете, а также хорошо сочетается блузой с фонариками из нашей коллекции. Юбка застегивается на молнию. Деликатный материал требует бережного ухода.",
            image1: "/assets/images/clothes/id12I1.jpg",
            image2: "/assets/images/clothes/id12I2.jpg",
            image3: "/assets/images/clothes/id12I3.jpg",
            color: "Желтый",
            size: "38-52",
            price: "6200",
            material: "57% п/э, 35% акрил, 8% шерсть",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "13",
            categoryEng: "dress",
            category: "Платья",
            name: "Черное платье с длинными рукавами",
            description: "Уютное платье-жакет мягко очерчивает силуэт. Классический крой, длина мини, акцентные складки на талии. Длинные рукава позволяют носить данное платье в любое время года.",
            image1: "/assets/images/clothes/id13I1.jpg",
            image2: "/assets/images/clothes/id13I2.jpg",
            image3: "/assets/images/clothes/id13I3.jpg",
            color: "Черный, Белый, Красный",
            size: "38-46",
            price: "6500",
            material: "68% полиэстер, 32% вискоза",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "14",
            categoryEng: "dress",
            category: "Платья",
            name: "Платье-крестьянка",
            description: "Платье с глубоким декольте подчеркнет вашу королевскую осанку, красивую шею и хрупкий силуэт. Мы сшили его из тонкой дышащего льна с добавлением вискозы, который придает материалу сияние и гладкость. Благодаря простому крою и эффектным рукавам платье получилось женственным и очень нежном. Осталось лишь добавить босоножки на каблуке и маленькую сумку.",
            image1: "/assets/images/clothes/id14I1.jpg",
            image2: "/assets/images/clothes/id14I2.jpg",
            image3: "/assets/images/clothes/id14I3.jpg",
            color: "Бежевый в цветочек",
            size: "40-48",
            price: "7000",
            material: "97% лен, 3% эластан",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "15",
            categoryEng: "dress",
            category: "Платья",
            name: "Платье мини в бежевом цвете",
            description: "Лаконичное бежевое платье создает хрупкий женственный образ - дополните платье клатчем и парой любимых босоножек и будьте готовы принимать комплименты.",
            image1: "/assets/images/clothes/id15I1.jpg",
            image2: "/assets/images/clothes/id15I2.jpg",
            image3: "/assets/images/clothes/id15I3.jpg",
            color: "Бежевый, Черный",
            size: "42-46",
            price: "5500",
            material: "55% вискоза, 48% полиэстер, 2% эластан",
            text1: "Возможен индивидуальный пошив по вашим меркам.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "16",
            categoryEng: "dress",
            category: "Платья",
            name: "Платье-комбинация с принтом «зебра»",
            description: "Платье макси на тонких бретелях подчеркивает силуэт и делает вас центром внимания благодаря, крою по косой мягкий искусственный шелк, волнами ниспадает вниз и переливается во время движения. Деликатный материал требует бережного обращения. Аксессуары могут оставить затяжки или повредить нить.",
            image1: "/assets/images/clothes/id16I1.jpg",
            image2: "/assets/images/clothes/id16I2.jpg",
            image3: "/assets/images/clothes/id16I3.jpg",
            color: "Анималистичный принт",
            size: "40-46",
            price: "7000",
            material: "100% шелк-армани",
            text1: "Возможен индивидуальный пошив в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "17",
            categoryEng: "dress",
            category: "Платья",
            name: "Платье - халат в цвете горчицы",
            description: "Комфортное платье на каждый день — прямое, длинное, скрытыми застежками (пуговицы). В комплекте идет пояс в тон, можно носить с поясом или без него, подчеркнув силуэт оверсайз и сделав акцент на талии. Выполнено из гладкой, матовой, пластичной и легкой ткани.",
            image1: "/assets/images/clothes/id17I1.jpg",
            image2: "/assets/images/clothes/id17I2.jpg",
            image3: "/assets/images/clothes/id17I3.jpg",
            color: "Горчичный",
            size: "44-52",
            price: "9200",
            material: "68% хлопок, 12% вискозы, 20 % п/э",
            text1: "Возможен индивидуальный пошив в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "18",
            categoryEng: "dress",
            category: "Платья",
            name: "Черное платье с открытой спиной",
            description: "Универсальное платье-футляр из легкой матовой ткани. Можно стилизовать как для офиса, накинув на себя жакет, так и для вечера. Оно садится точно по фигуре, мягко облегая силуэт, а высокий вырез на спине эффектно дополняет образ. Застегивается на молнию. ",
            image1: "/assets/images/clothes/id18I1.jpg",
            image2: "/assets/images/clothes/id18I2.jpg",
            image3: "/assets/images/clothes/id18I3.jpg",
            color: "Белый",
            size: "44-46",
            price: "7799",
            material: "68% вискозы, 27% акрила, 5% эластана "
        },
        {
            id: "19",
            categoryEng: "scirt",
            category: "Юбки",
            name: "Юбка из шитья",
            description: "Юбка мини из хлопкового шитья, с красивым набивным рисунком. Отлично сочетается с нашими базовыми футболками, свитшотами, рубашками. Дополнить образ можно с казаками, босоножками. См. раздел рубашки.",
            image1: "/assets/images/clothes/id19I1.jpg",
            image2: "/assets/images/clothes/id19I2.jpg",
            image3: "/assets/images/clothes/id19I3.jpg",
            color: "Белый",
            size: "38-46",
            price: "5000",
            material: "100% хлопок",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "20",
            categoryEng: "underwear",
            category: "Белье",
            name: "Комплект белье из трикотажа",
            description: "Топ без косточек, съемные чашки, мягкая бельевая резинка. Рельефный шов под грудью подчеркивает и хорошо держит грудь. ",
            image1: "/assets/images/clothes/id20I1.jpg",
            image2: "/assets/images/clothes/id20I2.jpg",
            image3: "/assets/images/clothes/id20I3.jpg",
            color: "Черный, Белый, Розовый",
            size: "38-46",
            price: "3500",
            material: "98% хлопок 2% эластан",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "21",
            categoryEng: "scirt",
            category: "Юбки",
            name: "Юбка скроенная по косой",
            description: "Струящиеся юбка скроенная по косой, красиво подчеркивает бедра и спадает вниз волнами. Округлые плавные линии и глянцевый блеск придает юбке особый акцент. Шелк-сатин, из которого выполнена модель, несложный в уходе и мало мнется. Комбинируйте с топом, жакетом из нашей коллекции. Деликатный материал требует бережного ухода.",
            image1: "/assets/images/clothes/id21I1.jpg",
            image2: "/assets/images/clothes/id21I2.jpg",
            image3: "/assets/images/clothes/id21I3.jpg",
            color: "Бежевый, Черный, Белый",
            size: "42-48",
            price: "5000 ",
            material: "48% сатин, 52% п/э",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "22",
            categoryEng: "jacket",
            category: "Жакеты",
            name: "Жакет из трикотажного твида",
            description: "Аккуратная, чуть укороченная модель с втачным рукавом и красивыми перламутровыми пуговицами. Жакет настолько уютный и универсальный, что сразу станет любимой. Плотное комбинированное переплетение делает твидовый трикотаж ровным и гладким — благодаря этому жакет со временем не потеряет форму. Комбинируйте с атласной юбкой из нашей коллекции. Уход: деликатная стирка до 40 °C, не отбеливать, сушка на плоскости, температура утюга до 110 °C, сухая чистка (химчистка).",
            image1: "/assets/images/clothes/id22I1.jpg",
            image2: "/assets/images/clothes/id22I2.jpg",
            image3: "/assets/images/clothes/id22I3.jpg",
            color: "Бежевый",
            size: "44-46",
            price: "8000",
            material: "65% п/э, 32% акрил, 3% шерсть",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "23",
            categoryEng: "jacket",
            category: "Жакеты",
            name: "Жакет с мужского плеча",
            description: "Свободный, прямой, однобортный, со спущенным плечом. Жакет позаимствовал свои лучшие черты у мужских жакетов. Сшитый из плотной костюмной ткани и дополненный подкладкой, он поможет создать в меру строгий и одновременно расслабленный образ. Сочетайте с белыми брюками, бежевым платьем мини из нашей коллекции. Уход: деликатная стирка до 40 °C, не отбеливать, сушка на плоскости, температура утюга до 110 °C, сухая чистка (химчистка).",
            image1: "/assets/images/clothes/id23I1.jpg",
            image2: "/assets/images/clothes/id23I2.jpg",
            image3: "/assets/images/clothes/id23I3.jpg",
            color: "Розовый",
            size: "one size (44-48)",
            price: "9500",
            material: "60% п/э, 40% вискоза",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "24",
            categoryEng: "corsage",
            category: "Корсажи",
            name: "Корсаж в шоколадном цвете",
            description: "Корсаж прилегающего силуэта, на цельнокроеных бретелях, с фигурной линией низа на подкладке. Длина изделия ниже линии талии. Застежка на молнии по спинке. Идеально сочетается с белыми брюками, юбкой из шитья из нашей коллекции. Благородный блеск корсажа придает элегантность к образу и подчеркивает достоинства фигуры, скрывая недостатки. Уход: не отбеливать, температура утюга до 110 °C, сухая чистка (химчистка).",
            image1: "/assets/images/clothes/id24I1.jpg",
            image2: "/assets/images/clothes/id24I2.jpg",
            image3: "/assets/images/clothes/id24I3.jpg",
            color: "Коричневый",
            size: "44-48",
            price: "9000",
            material: "85% хлопок, 15% п/э",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "25",
            categoryEng: "gift",
            category: "Подарки",
            name: "Косметички",
            description: "Мягкие, нежные, легкие, стеганные косметички-зефирки. Выполнены из 100% хлопка. Косметичка идеально вмещает себя косметику, дорожные принадлежности, канцелярию, аксессуары для волос, украшения. Незаменимый аксессуар для поездок и путешествий. Удобен в использовании: в машине, на прогулке, в поезде, в самолете.",
            image1: "/assets/images/clothes/id25I1.jpg",
            image2: "/assets/images/clothes/id25I2.jpg",
            image3: "/assets/images/clothes/id25I3.jpg",
            color: "Светло-розовый",
            size: "S, M",
            price: "1500",
            material: "100% хлопок"
        },
        {
            id: "26",
            categoryEng: "gift",
            category: "Подарки",
            name: "Подарочный бокс косметички+фартук",
            description: "С трепетом и большой любовью подобраны все компоненты подарочного бокса. Фартук и прихватки ручной работы, выполнены из 100% хлопка. Косметички также ручной работы. Мягкие, стеганные на подкладке из хлопка. Делитесь своей любовью и дарите своим близким заботу и признательность через подарочные боксы: -резинка для волос; -стеганные косметички (2 шт., размер: S,M); -2 прихватки; -фартук",
            image1: "/assets/images/clothes/id26I1.jpg",
            image2: "/assets/images/clothes/id26I2.jpg",
            image3: "/assets/images/clothes/id26I3.jpg",
            color: "Коричневый",
            size: "260*240*100 мм",
            price: "2200",
            material: "Ручная работа"
        },
        {
            id: "27",
            categoryEng: "gift",
            category: "Подарки",
            name: "Подарок-комплимент",
            description: "С трепетом и большой любовью подобраны все компоненты подарочного бокса. Травы собирались в экологически чистом районе Татарстана, затем придавались естественной сушке. Косметички также ручной работы. Мягкие, стеганные на подкладке из хлопка. Делитесь своей любовью и дарите своим близким заботу и признательность через подарочные боксы: -черный час соцветиями клевера и зверобоя,  -резинка для волос; -мягкие, стеганные косметички 2 шт. (размер: S,M).",
            image1: "/assets/images/clothes/id27I1.jpg",
            image2: "/assets/images/clothes/id27I2.jpg",
            image3: "/assets/images/clothes/id27I3.jpg",
            color: "Коричневый",
            size: "260*240*100 мм",
            price: "1800",
            material: "Ручная работа"
        },
        {
            id: "28",
            categoryEng: "gift",
            category: "Подарки",
            name: "Дорожные косметички",
            description: "Косметичка на молнии, без которой невозможно представить отпускной чемодан. Отсутствие внутренних отделений делает ее очень вместительной, а мягкие стенки — компактной и готовой принимать нужную форму.",
            image1: "/assets/images/clothes/id28I1.jpg",
            image2: "/assets/images/clothes/id28I2.jpg",
            image3: "/assets/images/clothes/id28I3.jpg",
            color: "На Ваш выбор",
            size: "S, M",
            price: "2500",
            material: "Твид"
        },
        {
            id: "29",
            categoryEng: "dress",
            category: "Платья",
            name: "Платье с длинным рукавом и стойкой воротником",
            description: "Длинное платье с воротником-стойкой — лаконичная модель, формирующая графичный женственный силуэт. Оно садится точно по фигуре, а длинный узкий рукав дополнили манжетами. С помощью пришивного пояса на пуговицах из прямой силуэт делает образ приталенным",
            image1: "/assets/images/clothes/id29I1.jpg",
            image2: "/assets/images/clothes/id29I2.jpg",
            image3: "/assets/images/clothes/id29I3.jpg",
            color: "Бело-синий, Цветочный принт",
            size: "48-52",
            price: "6500",
            material: "50% вискоза, 35% п/э, 15% эластан",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        },
        {
            id: "30",
            categoryEng: "set",
            category: "Комплекты",
            name: "Велюровый костюм с капюшоном/без",
            description: "Комфортный комплект для повседневных образов: прямой силуэт, на кнопках, с капюшоном. Брюки идут на резинки, прямого кроя. Бархатистая, мягкая основа велюра, придает образу легкость и уют. Такой костюм вам точно не захочется снимать. Костюм идеально подходит для прогулок и долгих поездок.",
            image1: "/assets/images/clothes/id30I1.jpg",
            image2: "/assets/images/clothes/id30I2.jpg",
            image3: "/assets/images/clothes/id30I3.jpg",
            color: "Приглушенно розовый, Шоколадный, Глубокий серый",
            size: "48-52",
            price: "9500",
            material: "60% п/э, 40% вискоза",
            text1: "Возможен индивидуальный пошив по вашим меркам и в других расцветках.",
            text2: "Наш менеджер свяжется с Вами для уточнения деталей после оформления предзаказа."
        }
    ]

export const categories = 
    [
        {
            id: "dress",
            name: "Платья",
            image1: "/assets/images/categories/id1I1.jpg",
            image2: "/assets/images/categories/id1I2.jpg"
        },
        {
            id: "cardigan",
            name: "Кардиганы",
            image1: "/assets/images/categories/id2I1.jpg",
            image2: "/assets/images/categories/id2I2.jpg"
        },
        {
            id: "set",
            name: "Комплекты",
            image1: "/assets/images/categories/id3I1.jpg",
            image2: "/assets/images/categories/id3I2.jpg"
        },
        {
            id: "shirt",
            name: "Рубашки",
            image1: "/assets/images/categories/id4I1.jpg",
            image2: "/assets/images/categories/id4I2.jpg"
        },
        {
            id: "scirt",
            name: "Юбки",
            image1: "/assets/images/categories/id5I1.jpg",
            image2: "/assets/images/categories/id5I2.jpg"
        },
        {
            id: "jacket",
            name: "Жакеты",
            image1: "/assets/images/categories/id6I1.jpg",
            image2: "/assets/images/categories/id6I2.jpg"
        },
        {
            id: "underwear",
            name: "Белье",
            image1: "/assets/images/categories/id7I1.jpg",
            image2: "/assets/images/categories/id7I2.jpg"
        },
        {
            id: "corsage",
            name: "Корсажи",
            image1: "/assets/images/categories/id8I1.jpg",
            image2: "/assets/images/categories/id8I2.jpg"
        },
        {
            id: "gift",
            name: "Подарки",
            image1: "/assets/images/categories/id9I1.jpg",
            image2: "/assets/images/categories/id9I2.jpg"
        }
    ]