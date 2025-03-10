using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public enum Interests
{
    Art,
    Music,
    Sports,
    Reading,
    Cooking,
    Gardening,
    Traveling,
    Hiking,
    Movies,
    Theater,
    Dancing,
    Photography,
    Writing,
    Gaming,
    Pets,
    Other
}

public enum Religiosity
{
    Secular,
    Religious,
    Orthodox,
    Other
}
public enum Gender
{
    Male,
    Female
}
public enum Language
{
    Hebrew,
    English,
    Arabic,
    Yiddish,
    Russian,
    Spanish,
    French,
    German,
    Italian,
    Chinese,
    Japanese,
    Korean,
    Other
}
public enum Area
{
    // אזור הצפון
    Haifa,          // חיפה, נשר, טירת כרמל, הקריות (קריית אתא, קריית ים, קריית מוצקין, קריית ביאליק)
    Akko,           // עכו, נהריה, שלומי, מעלות-תרשיחא
    Karmiel,        // כרמיאל, משגב, סכנין, מג'ד אל-כרום
    Tiberias,       // טבריה, ראש פינה, עמק הירדן
    Safed,          // צפת, חצור הגלילית, מירון
    Golan,          // קצרין, רמת הגולן
    Nazareth,       // נצרת, נוף הגליל, מגדל העמק, ריינה
    Afula,          // עפולה, בית שאן, יוקנעם, גבעת המורה

    // אזור השומרון
    Ariel,          // אריאל, קדומים, ברקן, קרני שומרון, אלקנה

    // אזור השרון
    Hadera,         // חדרה, פרדס חנה-כרכור, אור עקיבא, זיכרון יעקב
    Netanya,        // נתניה, כפר יונה, אבן יהודה, קדימה-צורן
    Herzliya,       // הרצליה, רמת השרון
    KfarSaba,       // כפר סבא, הוד השרון, רעננה

    // אזור המרכז והשפלה
    TelAviv,        // תל אביב, רמת גן, גבעתיים, בני ברק
    PetahTikva,     // פתח תקווה, ראש העין, אלעד
    RishonLezion,   // ראשון לציון, נס ציונה, רחובות, יבנה
    Holon,          // חולון, בת ים
    LodRamla,       // לוד, רמלה
    Modiin,         // מודיעין, מודיעין עילית, מכבים-רעות

    // אזור ירושלים והסביבה
    Jerusalem,      // ירושלים, מבשרת ציון, בית שמש, מעלה אדומים, גוש עציון

    // אזור הדרום
    Ashdod,         // אשדוד, גן יבנה
    Ashkelon,       // אשקלון, קריית גת, שדרות, נתיבות
    BeerSheva,      // באר שבע, אופקים, דימונה, ערד, מיתר, להבים
    Eilat,          // אילת והערבה (כולל יטבתה, נווה זוהר)

    Other           // אזורים אחרים שאין להם קבוצה ספציפית
}

public enum City
{
    // צפון
    Haifa,          // חיפה
    Akko,           // עכו
    Karmiel,        // כרמיאל
    Tiberias,       // טבריה
    Safed,          // צפת
    Nahariya,       // נהריה
    Shlomi,         // שלומי
    Maalot,         // מעלות-תרשיחא
    Golan,          // קצרין, רמת הגולן
    Nazareth,       // נצרת
    NofHagalil,     // נוף הגליל
    Afula,          // עפולה
    BeitShean,      // בית שאן
    Yokneam,        // יקנעם
    MigdalHaemek,   // מגדל העמק
    RoshPina,       // ראש פינה
    MeromGolan,     // מרום גולן

    // שומרון
    Ariel,          // אריאל
    Kedumim,        // קדומים
    KarneiShomron,  // קרני שומרון
    Barkan,         // ברקן
    Elkana,         // אלקנה
    MaaleEfraim,    // מעלה אפרים

    // השרון
    Hadera,         // חדרה
    PardesHanna,    // פרדס חנה-כרכור
    OrAkiva,        // אור עקיבא
    ZichronYaakov,  // זיכרון יעקב
    Netanya,        // נתניה
    KfarYona,       // כפר יונה
    EvenYehuda,     // אבן יהודה
    KadimaZoran,    // קדימה-צורן
    Herzliya,       // הרצליה
    KfarSaba,       // כפר סבא
    HodHasharon,    // הוד השרון
    RaAnana,        // רעננה

    // מרכז והשפלה
    TelAviv,        // תל אביב
    RamatGan,       // רמת גן
    Givatayim,      // גבעתיים
    BneiBrak,       // בני ברק
    PetahTikva,     // פתח תקווה
    RoshHaAyin,     // ראש העין
    Elad,           // אלעד
    RishonLezion,   // ראשון לציון
    NessZiona,      // נס ציונה
    Rehovot,        // רחובות
    Yavne,          // יבנה
    Holon,          // חולון
    BatYam,         // בת ים
    Lod,            // לוד
    Ramla,          // רמלה
    Modiin,         // מודיעין
    ModiinIlit,     // מודיעין עילית
    MevoModiin,     // מכבים-רעות

    // ירושלים והסביבה
    Jerusalem,      // ירושלים
    MevaseretZion,  // מבשרת ציון
    BeitShemesh,    // בית שמש
    MaaleAdumim,    // מעלה אדומים
    GushEtzion,     // גוש עציון
    Efrat,          // אפרת

    // דרום
    Ashdod,         // אשדוד
    GanYavne,       // גן יבנה
    Ashkelon,       // אשקלון
    KiryatGat,      // קריית גת
    Sderot,         // שדרות
    Netivot,        // נתיבות
    BeerSheva,      // באר שבע
    Ofakim,         // אופקים
    Dimona,         // דימונה
    Arad,           // ערד
    Meitar,         // מיתר
    Lehavim,        // להבים
    Eilat,          // אילת
    Yotvata,        // יטבתה
    NeveZohar,      // נווה זוהר
    Arava,          // הערבה

    Other           // אחר
}



public enum Hospital
{
    Rambam_Hospital_Haifa, // רמב"ם, חיפה
    Carmel_Medical_Center_Haifa, // מרכז רפואי כרמל, חיפה
    Horev_Medical_Center_Haifa, // מרכז רפואי חורב, חיפה
    Haemek_Medical_Center_Afula, // מרכז רפואי העמק, עפולה
    Bnei_Zion_Hospital_Haifa, // בני ציון, חיפה
    Poriya_Hospital_Tiberias, // בית חולים פוריה, טבריה
    Galilee_Raphael_Center_Nahariya, // מרכז רפואי גליל רפאל (לשעבר בית חולים נהריה)
    Elisha_Hospital_Haifa, // בית חולים אלישע, חיפה
    Hillel_Yaffe_Hospital_Hadera, // בית חולים הלל יפה, חדרה
    Assuta_Haifa_Hospital_Haifa, // אסותא חיפה
    Italian_Hospital_Haifa, // בית החולים האיטלקי, חיפה
    Scottish_IMMS_Hospital_Nazareth, // בית החולים הסקוטי (IMMS), נצרת
    Holy_Family_Hospital_Nazareth, // בית החולים המשפחה הקדושה, נצרת
    Rivka_Ziv_Medical_Center_Safed, // מרכז רפואי רבקה זיו, צפת
    Fliman_Geriatric_Center_Haifa, // מרכז גריאטרי פלימן, חיפה
    Shoham_Integrated_Geriatric_Center_Pardes_Hanna_Karkur, // מרכז גריאטרי שוהם, פרדס חנה-כרכור
    Shaar_Menashe_Mental_Health_Center_Emek_Hefer, // שער מנשה, עמק חפר
    Mizra_Mental_Health_Center_Acre, // בית חולים מזרע, עכו
    Mental_Health_Center_Tirat_Carmel, // המרכז לבריאות הנפש, טירת כרמל
    Home_Neve_Shalva_Hospital_Pardes_Hana_Karkur, // נווה שלווה, פרדס חנה-כרכור
    Herzliya_Medical_Center_Herzliya, // הרצליה מדיקל סנטר, הרצליה
    Landiado_Hospital_Netanya, // בית חולים לניאדו, נתניה
    Meir_Hospital_Kfar_Saba, // בית חולים מאיר, כפר סבא
    Beit_Levinstein_Raanana, // בית לוינשטיין, רעננה
    Netanya_Geriatric_Center_Netanya, // מרכז גריאטרי נתניה
    Beit_Gadi_Medical_Center_Netanya, // בית גדי, נתניה
    Shalvata_Mental_Health_Center_Hod_Hasharon, // שלוותה, הוד השרון
    Lev_Hasharon_Mental_Health_Center_Netanya, // לב השרון, נתניה
    Shaare_Zedek_Hospital_Jerusalem, // שערי צדק, ירושלים
    Misgav_Ladach_Hospital_Jerusalem, // משגב לדך, ירושלים
    Bikur_Holim_Hospital_Jerusalem, // ביקור חולים, ירושלים
    Hadassah_Hospital_Jerusalem, // הדסה, ירושלים
    Home_Elin_Rehabilitation_Hospitals_Jerusalem, // מרכז שיקומי איל"ן, ירושלים
    St_Johns_Eye_Hospital_Jerusalem, // בית החולים לעיניים סנט ג'ון, ירושלים
    Augusta_Victoria_Hospital_Jerusalem, // אוגוסטה ויקטוריה, ירושלים
    St_Josephs_Hospital_Jerusalem, // בית החולים סנט ג'וזף, ירושלים
    Herzog_Hospital_Jerusalem, // בית חולים הרצוג, ירושלים
    Jerusalem_Mental_Health_Center_Jerusalem, // מרכז בריאות הנפש, ירושלים
    Mayanei_Hayeshua_Medical_Center_Bnei_Brak, // מעייני הישועה, בני ברק
    Yehudah_Abarbanel_Mental_Health_Center_Bat_Yam, // יהודה אברבנאל, בת ים
    Wolfson_Hospital_Holon, // בית חולים וולפסון, חולון
    Blinson_Rabin_Hospital_Petah_Tikva, // בית חולים בילינסון-רבין, פתח תקווה
    Schneider_Childrens_Center_Israel_Petah_Tikva, // מרכז שניידר לרפואת ילדים, פתח תקווה
    Beit_Rivka_Hospital_Petah_Tikva, // בית רבקה, פתח תקווה
    Geha_Mental_Health_Center_Petah_Tikva, // גהה, פתח תקווה
    Sheba_Medical_Center_Tel_Hashomer_Ramat_Gan, // מרכז רפואי שיבא - תל השומר, רמת גן
    Sourasky_Medical_Center_Ichilov_Tel_Aviv, // מרכז רפואי סוראסקי (איכילוב), תל אביב
    Assuta_Hashalom_Hospital_Tel_Aviv, // אסותא השלום, תל אביב
    Home_Dana_Hospitals_Tel_Aviv, // דנה, תל אביב
    Reut_Hospital_Tel_Aviv, // בית חולים שיקומי רעות, תל אביב
    Shmuel_Harofeh_Geriatric_Center_Beer_Yaakov, // מרכז גריאטרי שמואל הרופא, באר יעקב
    Beer_Yaakov_Mental_Health_Center_Beer_Yaakov, // המרכז לבריאות הנפש באר יעקב
    Asaf_Harofeh_Medical_Center_Rishon_Lezion, // אסף הרופא, ראשון לציון
    Assuta_Hospital_Rishon_Lezion, // אסותא ראשון לציון
    Geriatric_Center_Rishon_Lezion, // מרכז גריאטרי ראשון לציון
    Kaplan_Medical_Center_Rehovot, // מרכז רפואי קפלן, רחובות
    Herzfeld_Geriatric_Medical_Center_Gedera, // מרכז גריאטרי הרצפלד, גדרה
    Yoseftal_Hospital_Eilat, // בית חולים יוספטל, אילת
    Barzilai_Hospital_Ashkelon, // ברזילי, אשקלון
    Soroka_University_Medical_Center_Beer_Sheva, // מרכז רפואי אוניברסיטאי סורוקה, באר שבע
    Assuta_Hospital_Beer_Sheva, // אסותא באר שבע
    Beer_Sheva_Mental_Health_Center_Beer_Sheva, // המרכז לבריאות הנפש באר שבע
    Other // אחר
}

public enum Ward
{
    Emergency, // חדר מיון
    InternalMedicine, // מחלקה פנימית
    GeneralSurgery, // כירורגיה כללית
    Orthopedics, // אורתופדיה
    Pediatrics, // ילדים
    Maternity, // יולדות
    Neonatology, // פגיה
    Oncology, // אונקולוגיה
    Hematology, // המטולוגיה
    IntensiveCare, // טיפול נמרץ כללי
    RespiratoryICU, // טיפול נמרץ נשימתי
    CardiacICU, // טיפול נמרץ לבבי
    PediatricICU, // טיפול נמרץ ילדים
    Cardiology, // קרדיולוגיה
    Neurology, // נוירולוגיה
    Psychiatry, // פסיכיאטריה
    Geriatrics, // גריאטריה
    Dialysis, // דיאליזה
    ENT, // אף אוזן גרון
    Ophthalmology, // עיניים
    Dermatology, // עור ומין
    Gastroenterology, // גסטרואנטרולוגיה
    Pulmonology, // ריאות
    Endocrinology, // אנדוקרינולוגיה
    Immunology, // אימונולוגיה ואלרגיה
    InfectiousDiseases, // מחלות זיהומיות
    PainManagement, // רפואת כאב
    Rehabilitation, // שיקום רפואי
    Fertility, // פוריות והפריה חוץ גופית
    Neurosurgery, // נוירוכירורגיה
    VascularSurgery, // כירורגיית כלי דם
    CardiothoracicSurgery, // כירורגיית לב-חזה
    PediatricSurgery, // כירורגיית ילדים
    PlasticSurgery, // כירורגיית פלסטית
    OralAndMaxillofacialSurgery, // כירורגיית פה ולסת
    OrthopedicOncology, // אורתופדיה אונקולוגית
    Rheumatology, // ראומטולוגיה
    Urology, // אורולוגיה
    Gynecology, // גינקולוגיה
    ClinicalPharmacology, // פרמקולוגיה קלינית
    PainClinic, // מרפאת כאב
    ClinicalPsychology, // פסיכולוגיה קלינית
    Nutrition, // דיאטנים ותזונה קלינית
    OccupationalTherapy, // ריפוי בעיסוק
    Physiotherapy, // פיזיותרפיה
    SpeechTherapy, // קלינאות תקשורת
    SleepLab, // מעבדת שינה
    ComplementaryMedicine, // רפואה משלימה
    HospitalDentistry, // רפואת שיניים בבית חולים
    GeriatricCommunityCare, // רפואה גריאטרית קהילתית
    CommunityMentalHealth, // בריאות הנפש בקהילה
    NursingCare, // מערך הסיעוד הכללי
    EmotionalSupport, // ליווי רגשי
    SocialServices, // שירותים חברתיים
    OncologySupportCenter, // מרכז תמיכה אונקולוגי
    PatientGuidance, // שירותי הכוונה וליווי מטופלים
    ChildrensActivity, // הפגת בדידות במחלקות ילדים
    ElderlyActivity, // הפגת בדידות במחלקות גריאטריות
    Other
}

public enum AgeGroup
{
    Children,// 0-12
    Teenagers,// 13-18
    YoungAdults,// 19-30
    Adults,// 31-60
    Elderly// 61+
}

//namespace CarePair.Core.Models
//{

//    //public  class Enums
//    //{

//    //}
//}
public static class EnumHelper
{
    public static Dictionary<string, string> GetEnumValues<T>() where T : Enum
    {
        return Enum.GetValues(typeof(T))
            .Cast<T>()
            .ToDictionary(
                e => e.ToString(),
                e => GetEnumDisplayName(e) // פונקציה להחזרת שם ידידותי (עברית)
            );
    }

    private static string GetEnumDisplayName<T>(T value)
    {
        // אפשר לקרוא את התיאור מתוך קומנט/Attribute במידת הצורך
        // כרגע נחזיר פשוט ToString (או להשתמש ב־DescriptionAttribute אם קיים)
        return value.ToString().Replace("_", " ");
    }
}

