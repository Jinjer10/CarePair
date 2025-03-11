using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

public enum Interests
{
    [Display(Name = "אמנות")] Art,
    [Display(Name = "מוזיקה")] Music,
    [Display(Name = "ספורט")] Sports,
    [Display(Name = "קריאה")] Reading,
    [Display(Name = "בישול")] Cooking,
    [Display(Name = "גינון")] Gardening,
    [Display(Name = "טיולים לחו״ל")] Traveling,
    [Display(Name = "טיולים רגליים")] Hiking,
    [Display(Name = "סרטים")] Movies,
    [Display(Name = "תיאטרון")] Theater,
    [Display(Name = "ריקוד")] Dancing,
    [Display(Name = "צילום")] Photography,
    [Display(Name = "כתיבה")] Writing,
    [Display(Name = "גיימינג")] Gaming,
    [Display(Name = "חיות מחמד")] Pets,
    [Display(Name = "אחר")] Other
}


public enum Religiosity
{
    [Display(Name = "חילוני/ת")] Secular,
    [Display(Name = "דתי/ה")] Religious,
    [Display(Name = "חרדי/ת")] Orthodox,
    [Display(Name = "אחר")] Other
}
public enum Gender
{
    [Display(Name = "זכר")] Male,
    [Display(Name = "נקבה")] Female
}
public enum Language
{
    [Display(Name = "עברית")] Hebrew,
    [Display(Name = "אנגלית")] English,
    [Display(Name = "ערבית")] Arabic,
    [Display(Name = "יידיש")] Yiddish,
    [Display(Name = "רוסית")] Russian,
    [Display(Name = "ספרדית")] Spanish,
    [Display(Name = "צרפתית")] French,
    [Display(Name = "גרמנית")] German,
    [Display(Name = "איטלקית")] Italian,
    [Display(Name = "סינית")] Chinese,
    [Display(Name = "יפנית")] Japanese,
    [Display(Name = "קוריאנית")] Korean,
    [Display(Name = "אחר")] Other
}
public enum Area
{
    [Display(Name = "חיפה והקריות")]
    Haifa,

    [Display(Name = "עכו והסביבה")]
    Akko,

    [Display(Name = "כרמיאל והגליל המערבי")]
    Karmiel,

    [Display(Name = "טבריה ועמק הירדן")]
    Tiberias,

    [Display(Name = "צפת והגליל העליון")]
    Safed,

    [Display(Name = "רמת הגולן")]
    Golan,

    [Display(Name = "נצרת והעמקים")]
    Nazareth,

    [Display(Name = "עפולה ובית שאן")]
    Afula,

    [Display(Name = "השומרון")]
    Ariel,

    [Display(Name = "חדרה והסביבה")]
    Hadera,

    [Display(Name = "נתניה והשרון")]
    Netanya,

    [Display(Name = "הרצליה ורמת השרון")]
    Herzliya,

    [Display(Name = "כפר סבא והוד השרון")]
    KfarSaba,

    [Display(Name = "תל אביב וגוש דן")]
    TelAviv,

    [Display(Name = "פתח תקווה והסביבה")]
    PetahTikva,

    [Display(Name = "ראשון לציון והשפלה")]
    RishonLezion,

    [Display(Name = "חולון ובת ים")]
    Holon,

    [Display(Name = "לוד ורמלה")]
    LodRamla,

    [Display(Name = "מודיעין והסביבה")]
    Modiin,

    [Display(Name = "ירושלים והסביבה")]
    Jerusalem,

    [Display(Name = "אשדוד והסביבה")]
    Ashdod,

    [Display(Name = "אשקלון והדרום המערבי")]Ashkelon,

    [Display(Name = "באר שבע והנגב")]
    BeerSheva,

    [Display(Name = "אילת והערבה")]
    Eilat,

    [Display(Name = "אחר")]
    Other
}

public enum City
{
    [Display(Name = "חיפה")]Haifa,

    [Display(Name = "עכו")]
    Akko,

    [Display(Name = "כרמיאל")]
    Karmiel,

    [Display(Name = "טבריה")]
    Tiberias,

    [Display(Name = "צפת")]
    Safed,

    [Display(Name = "נהריה")]
    Nahariya,

    [Display(Name = "שלומי")]
    Shlomi,

    [Display(Name = "מעלות-תרשיחא")]
    Maalot,

    [Display(Name = "רמת הגולן")]
    Golan,

    [Display(Name = "נצרת")]
    Nazareth,

    [Display(Name = "נוף הגליל")]
    NofHagalil,

    [Display(Name = "עפולה")]
    Afula,

    [Display(Name = "בית שאן")]
    BeitShean,

    [Display(Name = "יקנעם")]
    Yokneam,

    [Display(Name = "מגדל העמק")]
    MigdalHaemek,

    [Display(Name = "ראש פינה")]
    RoshPina,

    [Display(Name = "מרום גולן")]
    MeromGolan,

    [Display(Name = "אריאל")]
    Ariel,

    [Display(Name = "קדומים")]
    Kedumim,

    [Display(Name = "קרני שומרון")]
    KarneiShomron,

    [Display(Name = "ברקן")]
    Barkan,

    [Display(Name = "אלקנה")]
    Elkana,

    [Display(Name = "מעלה אפרים")]
    MaaleEfraim,

    [Display(Name = "חדרה")]
    Hadera,

    [Display(Name = "פרדס חנה-כרכור")]
    PardesHanna,

    [Display(Name = "אור עקיבא")]
    OrAkiva,

    [Display(Name = "זיכרון יעקב")]
    ZichronYaakov,

    [Display(Name = "נתניה")]
    Netanya,

    [Display(Name = "כפר יונה")]
    KfarYona,

    [Display(Name = "אבן יהודה")]
    EvenYehuda,

    [Display(Name = "קדימה-צורן")]
    KadimaZoran,

    [Display(Name = "הרצליה")]
    Herzliya,

    [Display(Name = "כפר סבא")]
    KfarSaba,

    [Display(Name = "הוד השרון")]
    HodHasharon,

    [Display(Name = "רעננה")]
    RaAnana,

    [Display(Name = "תל אביב")]
    TelAviv,

    [Display(Name = "רמת גן")]
    RamatGan,

    [Display(Name = "גבעתיים")]
    Givatayim,

    [Display(Name = "בני ברק")]
    BneiBrak,

    [Display(Name = "פתח תקווה")]
    PetahTikva,

    [Display(Name = "ראש העין")]
    RoshHaAyin,

    [Display(Name = "אלעד")]
    Elad,

    [Display(Name = "ראשון לציון")]
    RishonLezion,

    [Display(Name = "נס ציונה")]
    NessZiona,

    [Display(Name = "רחובות")]
    Rehovot,

    [Display(Name = "יבנה")]
    Yavne,

    [Display(Name = "חולון")]
    Holon,

    [Display(Name = "בת ים")]
    BatYam,

    [Display(Name = "לוד")]
    Lod,

    [Display(Name = "רמלה")]
    Ramla,

    [Display(Name = "מודיעין")]
    Modiin,

    [Display(Name = "מודיעין עילית")]
    ModiinIlit,

    [Display(Name = "מכבים-רעות")]
    MevoModiin,

    [Display(Name = "ירושלים")]
    Jerusalem,

    [Display(Name = "מבשרת ציון")]
    MevaseretZion,

    [Display(Name = "בית שמש")]
    BeitShemesh,

    [Display(Name = "מעלה אדומים")]
    MaaleAdumim,

    [Display(Name = "גוש עציון")]
    GushEtzion,

    [Display(Name = "אפרת")]
    Efrat,

    [Display(Name = "אשדוד")]
    Ashdod,

    [Display(Name = "גן יבנה")]
    GanYavne,

    [Display(Name = "אשקלון")]
    Ashkelon,

    [Display(Name = "קריית גת")]
    KiryatGat,

    [Display(Name = "שדרות")]
    Sderot,

    [Display(Name = "נתיבות")]
    Netivot,

    [Display(Name = "באר שבע")]
    BeerSheva,

    [Display(Name = "אופקים")]
    Ofakim,

    [Display(Name = "דימונה")]
    Dimona,

    [Display(Name = "ערד")]
    Arad,

    [Display(Name = "מיתר")]
    Meitar,

    [Display(Name = "להבים")]
    Lehavim,

    [Display(Name = "אילת")]
    Eilat,

    [Display(Name = "יטבתה")]
    Yotvata,

    [Display(Name = "נווה זוהר")]
    NeveZohar,

    [Display(Name = "הערבה")]
    Arava,

    [Display(Name = "אחר")]
    Other
}




public enum Hospital
{
    [Display(Name = "רמב\"ם, חיפה")] Rambam_Hospital_Haifa,
    [Display(Name = "מרכז רפואי כרמל, חיפה")] Carmel_Medical_Center_Haifa,
    [Display(Name = "מרכז רפואי חורב, חיפה")] Horev_Medical_Center_Haifa,
    [Display(Name = "מרכז רפואי העמק, עפולה")] Haemek_Medical_Center_Afula,
    [Display(Name = "בני ציון, חיפה")] Bnei_Zion_Hospital_Haifa,
    [Display(Name = "בית חולים פוריה, טבריה")] Poriya_Hospital_Tiberias,
    [Display(Name = "מרכז רפואי גליל רפאל (לשעבר בית חולים נהריה)")] Galilee_Raphael_Center_Nahariya,
    [Display(Name = "בית חולים אלישע, חיפה")] Elisha_Hospital_Haifa,
    [Display(Name = "בית חולים הלל יפה, חדרה")] Hillel_Yaffe_Hospital_Hadera,
    [Display(Name = "אסותא חיפה")] Assuta_Haifa_Hospital_Haifa,
    [Display(Name = "בית החולים האיטלקי, חיפה")] Italian_Hospital_Haifa,
    [Display(Name = "בית החולים הסקוטי (IMMS), נצרת")] Scottish_IMMS_Hospital_Nazareth,
    [Display(Name = "בית החולים המשפחה הקדושה, נצרת")] Holy_Family_Hospital_Nazareth,
    [Display(Name = "מרכז רפואי רבקה זיו, צפת")] Rivka_Ziv_Medical_Center_Safed,
    [Display(Name = "מרכז גריאטרי פלימן, חיפה")] Fliman_Geriatric_Center_Haifa,
    [Display(Name = "מרכז גריאטרי שוהם, פרדס חנה-כרכור")] Shoham_Integrated_Geriatric_Center_Pardes_Hanna_Karkur,
    [Display(Name = "שער מנשה, עמק חפר")] Shaar_Menashe_Mental_Health_Center_Emek_Hefer,
    [Display(Name = "בית חולים מזרע, עכו")] Mizra_Mental_Health_Center_Acre,
    [Display(Name = "המרכז לבריאות הנפש, טירת כרמל")] Mental_Health_Center_Tirat_Carmel,
    [Display(Name = "נווה שלווה, פרדס חנה-כרכור")] Home_Neve_Shalva_Hospital_Pardes_Hana_Karkur,
    [Display(Name = "הרצליה מדיקל סנטר, הרצליה")] Herzliya_Medical_Center_Herzliya,
    [Display(Name = "בית חולים לניאדו, נתניה")] Landiado_Hospital_Netanya,
    [Display(Name = "בית חולים מאיר, כפר סבא")] Meir_Hospital_Kfar_Saba,
    [Display(Name = "בית לוינשטיין, רעננה")] Beit_Levinstein_Raanana,
    [Display(Name = "מרכז גריאטרי נתניה")] Netanya_Geriatric_Center_Netanya,
    [Display(Name = "בית גדי, נתניה")] Beit_Gadi_Medical_Center_Netanya,
    [Display(Name = "שלוותה, הוד השרון")] Shalvata_Mental_Health_Center_Hod_Hasharon,
    [Display(Name = "לב השרון, נתניה")] Lev_Hasharon_Mental_Health_Center_Netanya,
    [Display(Name = "שערי צדק, ירושלים")] Shaare_Zedek_Hospital_Jerusalem,
    [Display(Name = "משגב לדך, ירושלים")] Misgav_Ladach_Hospital_Jerusalem,
    [Display(Name = "ביקור חולים, ירושלים")] Bikur_Holim_Hospital_Jerusalem,
    [Display(Name = "הדסה, ירושלים")] Hadassah_Hospital_Jerusalem,
    [Display(Name = "מרכז שיקומי איל\"ן, ירושלים")] Home_Elin_Rehabilitation_Hospitals_Jerusalem,
    [Display(Name = "בית החולים לעיניים סנט ג'ון, ירושלים")] St_Johns_Eye_Hospital_Jerusalem,
    [Display(Name = "אוגוסטה ויקטוריה, ירושלים")] Augusta_Victoria_Hospital_Jerusalem,
    [Display(Name = "בית החולים סנט ג'וזף, ירושלים")] St_Josephs_Hospital_Jerusalem,
    [Display(Name = "בית חולים הרצוג, ירושלים")] Herzog_Hospital_Jerusalem,
    [Display(Name = "מרכז בריאות הנפש, ירושלים")] Jerusalem_Mental_Health_Center_Jerusalem,
    [Display(Name = "מעייני הישועה, בני ברק")] Mayanei_Hayeshua_Medical_Center_Bnei_Brak,
    [Display(Name = "יהודה אברבנאל, בת ים")] Yehudah_Abarbanel_Mental_Health_Center_Bat_Yam,
    [Display(Name = "בית חולים וולפסון, חולון")] Wolfson_Hospital_Holon,
    [Display(Name = "בית חולים בילינסון-רבין, פתח תקווה")] Blinson_Rabin_Hospital_Petah_Tikva,
    [Display(Name = "מרכז שניידר לרפואת ילדים, פתח תקווה")] Schneider_Childrens_Center_Israel_Petah_Tikva,
    [Display(Name = "בית רבקה, פתח תקווה")] Beit_Rivka_Hospital_Petah_Tikva,
    [Display(Name = "גהה, פתח תקווה")] Geha_Mental_Health_Center_Petah_Tikva,
    [Display(Name = "מרכז רפואי שיבא - תל השומר, רמת גן")] Sheba_Medical_Center_Tel_Hashomer_Ramat_Gan,
    [Display(Name = "מרכז רפואי סוראסקי (איכילוב), תל אביב")] Sourasky_Medical_Center_Ichilov_Tel_Aviv,
    [Display(Name = "אסותא השלום, תל אביב")] Assuta_Hashalom_Hospital_Tel_Aviv,
    [Display(Name = "דנה, תל אביב")] Home_Dana_Hospitals_Tel_Aviv,
    [Display(Name = "בית חולים שיקומי רעות, תל אביב")] Reut_Hospital_Tel_Aviv,
    [Display(Name = "מרכז גריאטרי שמואל הרופא, באר יעקב")] Shmuel_Harofeh_Geriatric_Center_Beer_Yaakov,
    [Display(Name = "המרכז לבריאות הנפש באר יעקב")] Beer_Yaakov_Mental_Health_Center_Beer_Yaakov,
    [Display(Name = "אסף הרופא, ראשון לציון")] Asaf_Harofeh_Medical_Center_Rishon_Lezion,
    [Display(Name = "אסותא ראשון לציון")] Assuta_Hospital_Rishon_Lezion,
    [Display(Name = "מרכז גריאטרי ראשון לציון")] Geriatric_Center_Rishon_Lezion,
    [Display(Name = "מרכז רפואי קפלן, רחובות")] Kaplan_Medical_Center_Rehovot,
    [Display(Name = "מרכז גריאטרי הרצפלד, גדרה")] Herzfeld_Geriatric_Medical_Center_Gedera,
    [Display(Name = "בית חולים יוספטל, אילת")] Yoseftal_Hospital_Eilat,
    [Display(Name = "ברזילי, אשקלון")] Barzilai_Hospital_Ashkelon,
    [Display(Name = "מרכז רפואי אוניברסיטאי סורוקה, באר שבע")] Soroka_University_Medical_Center_Beer_Sheva,
    [Display(Name = "אסותא באר שבע")] Assuta_Hospital_Beer_Sheva,
    [Display(Name = "המרכז לבריאות הנפש באר שבע")] Beer_Sheva_Mental_Health_Center_Beer_Sheva,
    [Display(Name = "אחר")] Other
}


public enum Ward
{
    [Display(Name = "חדר מיון")]
    Emergency,

    [Display(Name = "מחלקה פנימית")]
    InternalMedicine,

    [Display(Name = "כירורגיה כללית")]
    GeneralSurgery,

    [Display(Name = "אורתופדיה")]
    Orthopedics,

    [Display(Name = "ילדים")]
    Pediatrics,

    [Display(Name = "יולדות")]
    Maternity,

    [Display(Name = "פגיה")]
    Neonatology,

    [Display(Name = "אונקולוגיה")]
    Oncology,

    [Display(Name = "המטולוגיה")]
    Hematology,

    [Display(Name = "טיפול נמרץ כללי")]
    IntensiveCare,

    [Display(Name = "טיפול נמרץ נשימתי")]
    RespiratoryICU,

    [Display(Name = "טיפול נמרץ לבבי")]
    CardiacICU,

    [Display(Name = "טיפול נמרץ ילדים")]
    PediatricICU,

    [Display(Name = "קרדיולוגיה")]
    Cardiology,

    [Display(Name = "נוירולוגיה")]
    Neurology,

    [Display(Name = "פסיכיאטריה")]
    Psychiatry,

    [Display(Name = "גריאטריה")]
    Geriatrics,

    [Display(Name = "דיאליזה")]
    Dialysis,

    [Display(Name = "אף אוזן גרון")]
    ENT,

    [Display(Name = "עיניים")]
    Ophthalmology,

    [Display(Name = "עור ומין")]
    Dermatology,

    [Display(Name = "גסטרואנטרולוגיה")]
    Gastroenterology,

    [Display(Name = "ריאות")]
    Pulmonology,

    [Display(Name = "אנדוקרינולוגיה")]
    Endocrinology,

    [Display(Name = "אימונולוגיה ואלרגיה")]
    Immunology,

    [Display(Name = "מחלות זיהומיות")]
    InfectiousDiseases,

    [Display(Name = "רפואת כאב")]
    PainManagement,

    [Display(Name = "שיקום רפואי")]
    Rehabilitation,

    [Display(Name = "פוריות והפריה חוץ גופית")]
    Fertility,

    [Display(Name = "נוירוכירורגיה")]
    Neurosurgery,

    [Display(Name = "כירורגיית כלי דם")]
    VascularSurgery,

    [Display(Name = "כירורגיית לב-חזה")]
    CardiothoracicSurgery,

    [Display(Name = "כירורגיית ילדים")]
    PediatricSurgery,

    [Display(Name = "כירורגיה פלסטית")]
    PlasticSurgery,

    [Display(Name = "כירורגיית פה ולסת")]
    OralAndMaxillofacialSurgery,

    [Display(Name = "אורתופדיה אונקולוגית")]
    OrthopedicOncology,

    [Display(Name = "ראומטולוגיה")]
    Rheumatology,

    [Display(Name = "אורולוגיה")]
    Urology,

    [Display(Name = "גינקולוגיה")]
    Gynecology,

    [Display(Name = "פרמקולוגיה קלינית")]
    ClinicalPharmacology,

    [Display(Name = "מרפאת כאב")]
    PainClinic,

    [Display(Name = "פסיכולוגיה קלינית")]
    ClinicalPsychology,

    [Display(Name = "דיאטנים ותזונה קלינית")]
    Nutrition,

    [Display(Name = "ריפוי בעיסוק")]
    OccupationalTherapy,

    [Display(Name = "פיזיותרפיה")]
    Physiotherapy,

    [Display(Name = "קלינאות תקשורת")]
    SpeechTherapy,

    [Display(Name = "מעבדת שינה")]
    SleepLab,

    [Display(Name = "רפואה משלימה")]
    ComplementaryMedicine,

    [Display(Name = "רפואת שיניים בבית חולים")]
    HospitalDentistry,

    [Display(Name = "רפואה גריאטרית קהילתית")]
    GeriatricCommunityCare,

    [Display(Name = "בריאות הנפש בקהילה")]
    CommunityMentalHealth,

    [Display(Name = "מערך הסיעוד הכללי")]
    NursingCare,

    [Display(Name = "ליווי רגשי")]
    EmotionalSupport,

    [Display(Name = "שירותים חברתיים")]
    SocialServices,

    [Display(Name = "מרכז תמיכה אונקולוגי")]
    OncologySupportCenter,

    [Display(Name = "שירותי הכוונה וליווי מטופלים")]
    PatientGuidance,

    [Display(Name = "הפגת בדידות במחלקות ילדים")]
    ChildrensActivity,

    [Display(Name = "הפגת בדידות במחלקות גריאטריות")]
    ElderlyActivity,

    [Display(Name = "אחר")]
    Other
}

public enum AgeGroup
{
    [Display(Name = "ילדים")]
    Children,        // 0-12

    [Display(Name = "נערים")]
    Teenagers,       // 13-18

    [Display(Name = "צעירים")]
    YoungAdults,     // 19-30

    [Display(Name = "מבוגרים")]
    Adults,          // 31-60

    [Display(Name = "קשישים")]
    Elderly          // 61+
}

public static class EnumHelper
{
    public static Dictionary<string, string> GetEnumValues<T>() where T : Enum
    {
        return Enum.GetValues(typeof(T))
            .Cast<T>()
            .ToDictionary(
                e => e.ToString(),
                e => GetDisplayName(e as Enum) // שימוש נכון בפונקציה עם DisplayAttribute
            );
    }

    //private static string GetEnumDisplayName<T>(T value)
    //{
    //    // אפשר לקרוא את התיאור מתוך קומנט/Attribute במידת הצורך
    //    // כרגע נחזיר פשוט ToString (או להשתמש ב־DescriptionAttribute אם קיים)
    //    return value.ToString().Replace("_", " ");
    //}
    public static string GetDisplayName(Enum enumValue)
    {
        return enumValue.GetType()
            .GetMember(enumValue.ToString())
            .First()
            .GetCustomAttribute<DisplayAttribute>()?.Name
            ?? enumValue.ToString();
    }
}
