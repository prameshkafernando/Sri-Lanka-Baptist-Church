/* ============================================================
   Sri Lanka Baptist Church — Church & Mission Point Data
   ------------------------------------------------------------
   Single source of truth used by BOTH churches.html (directory
   grid + zone filter) and church-profile.html (detail pages).

   HOW TO EDIT
   -----------
   • To edit a church's info: find it in the CHURCHES array below
     and change the fields directly (name, address, phone, logo…).
   • History: the "history" field is one prose paragraph — edit it
     directly as plain text (it renders as-is, no HTML needed).
   • Photo album: the "gallery" array holds image paths for that
     church's photo album, e.g. gallery: ["Images/Churches/kandy/1.jpg",
     "Images/Churches/kandy/2.jpg"] — add 3 to 6 paths whenever photos
     are available; leave it as [] and the page shows placeholder
     "photo coming soon" tiles instead, so nothing breaks meanwhile.
   • To add a brand-new church: copy an existing object in
     CHURCHES, give it a unique "id" (lowercase, no spaces —
     used in the URL as church-profile.html?id=your-id), fill in
     the fields, and it will automatically appear in the
     directory grid, the zone filter, and get its own profile
     page — no other file needs to change.
   • To edit / add a Mission Point: do the same in the
     MISSION_POINTS array — set "church" to the id of the church
     that oversees it, and it will automatically appear as a
     linked chip on that church's card and in its profile page.
     Mission points also have a "gallery" array, same as churches
     — add 3 to 6 image paths and they show on the mission point's
     own profile page; leave it as [] for "photo coming soon" tiles.
   • Logos: drop the image into Images/Churches/ and point
     "logo" at it. If a church has no logo yet, set logo to null
     and a plain church icon will show instead — nothing breaks.
   • Service times: add an optional "serviceTimes" object to any
     church, e.g. serviceTimes: { sundayWorship: "8:00 AM & 6:00 PM",
     bibleStudy: "Wednesdays, 6:30 PM", sundaySchool: "9:00 AM" }.
     Any of the three keys can be left out — the profile page shows
     "Not yet added" for whichever is missing. Leave the whole
     object out entirely if none are known yet.
   • Additional info: add an optional "additionalInfo" string to any
     church for anything specific to that congregation (special
     services, contact notes, etc.) — it renders as its own section
     on the profile page. Leave it out if there's nothing to add.
   ============================================================ */

/* ---------- ZONES -------------------------------------------- */
const ZONES = {
    colombo: {
        name: "Colombo Zone",
        short: "Colombo",
        note: "Working together is important for the growth of the Colombo Zone. The issues unique to the Colombo Zone should be identified, and plans should be prepared accordingly so that the zone can move forward."
    },
    siyane: {
        name: "Siyane Zone",
        short: "Siyane",
        note: "The churches and mission stations in the Siyane Zone are functioning well. The fellowship among the churches is appreciated. As a denomination, we give thanks for the loving partnership shown towards the Sri Lanka Baptist Church and its affiliated sections."
    },
    kandurata: {
        name: "Kandurata Zone",
        short: "Kandurata",
        note: "This zone, extending from Beligodapitiya to Chavakachcheri in the northern region, contains people with many different ways of life and patterns of behaviour. We pray that the Lord will provide the full guidance needed to identify these needs and take His Word to them accordingly. The Kandurata Zone includes several churches that were severely affected by the Ditwah cyclone, and while facing this challenge, the people experienced the Lord's grace greatly."
    },
    kelani: {
        name: "Kelaniweli Zone",
        short: "Kelaniweli",
        note: "At present, the Sri Lanka Baptist Church has made a significant level of investment in the Kelaniweli Zone for the welfare of the community in the area. However, systematic and continuous support at regional level is needed to make proper and effective use of these resources."
    }
};

/* ---------- DISTRICTS (restored per user request — used for the
   "All Districts" filter dropdown alongside the "All Zones" one) */
const DISTRICTS = {
    colombo: "Colombo", gampaha: "Gampaha", kalutara: "Kalutara",
    kandy: "Kandy", matale: "Matale", ratnapura: "Ratnapura",
    kegalle: "Kegalle", puttalam: "Puttalam", anuradhapura: "Anuradhapura",
    ampara: "Ampara", kilinochchi: "Kilinochchi", jaffna: "Jaffna"
};

/* ---------- MISSION POINTS ------------------------------------
   Each mission point is overseen by one host church ("church").
   It will automatically show as a chip on that church's card. */
const MISSION_POINTS = [
    {
        id: "mugunuwatawana",
        name: "Mugunuwatawana Mission Station",
        church: "madampe",
        supervisor: "Rev. Malith Andrady",
        description: "A brother appointed by the church resides there with his wife and serves. Worship services and prayer meetings are held.",
        gallery: [] // add 3-6 photo paths here later, e.g. "images/mission-points/mugunuwatawana/1.jpg"
    },
    {
        id: "minuwangoda",
        name: "Minuwangoda Mission Station",
        church: "hendala",
        supervisor: "Rev. S. Vigneswaran",
        description: "Operates under the supervision of the Hendala Church; the ministry continues as a mission station.",
        gallery: [] // add 3-6 photo paths here later, e.g. "images/mission-points/minuwangoda/1.jpg"
    },
    {
        id: "anuradhapura",
        name: "Anuradhapura Mission Station",
        church: "chavakachcheri",
        supervisor: "Rev. V. Moorthy",
        description: "Operates under the Chavakachcheri Church. Worship is held every Sunday.",
        gallery: [] // add 3-6 photo paths here later, e.g. "images/mission-points/anuradhapura/1.jpg"
    },
    {
        id: "trincomalee",
        name: "Trincomalee Mission Station",
        church: "beligodapitiya",
        supervisor: "Mission Committee",
        description: "Maintained under the Mission Committee; a missionary resides in a rented house with his family and serves there. For five months of the year, the Beligodapitiya Church has also undertaken service at this station.",
        gallery: [] // add 3-6 photo paths here later, e.g. "images/mission-points/trincomalee/1.jpg"
    },
    {
        id: "aiyankulam",
        name: "Aiyankulam Mission Station",
        church: "kilinochchi",
        supervisor: "Rev. Sugunraj",
        description: "Operates under the supervision of the Kilinochchi Church; a church worker resides there and serves.",
        gallery: [] // add 3-6 photo paths here later, e.g. "images/mission-points/aiyankulam/1.jpg"
    },
    {
        id: "vavuniya",
        name: "Vavuniya Mission Station",
        church: "kilinochchi",
        supervisor: "Rev. Sugunraj",
        description: "Operates as a mission station under the Kilinochchi Church. A temporary missionary brother resides there and serves.",
        gallery: [] // add 3-6 photo paths here later, e.g. "images/mission-points/vavuniya/1.jpg"
    },
    {
        id: "mullaitivu",
        name: "Mullaitivu Mission Station",
        church: "chavakachcheri",
        supervisor: "Rev. V. Moorthy",
        description: "A missionary brother resides with his wife and child and serves there. With the support of Christian Mission Service, a free evening class is held for children in the area; a new person was baptized at the start of the year.",
        gallery: [] // add 3-6 photo paths here later, e.g. "images/mission-points/mullaitivu/1.jpg"
    },
    {
        id: "ilavalai",
        name: "Ilavalai Mission Station",
        church: "chavakachcheri",
        supervisor: "Rev. V. Moorthy",
        description: "A missionary brother resides with his wife and child. Sunday worship is held at 9:30 a.m., followed by Sunday School. Building work has been completed and is in use.",
        gallery: [] // add 3-6 photo paths here later, e.g. "images/mission-points/ilavalai/1.jpg"
    },
    {
        id: "atchuveli",
        name: "Atchuveli Mission Station",
        church: "chavakachcheri",
        supervisor: "Rev. V. Moorthy",
        description: "Ministry continues under the supervision of the Chavakachcheri Church.",
        gallery: [] // add 3-6 photo paths here later, e.g. "images/mission-points/atchuveli/1.jpg"
    },
    {
        id: "punnala-kattuwan",
        name: "Punnala Kattuwan Mission Station",
        church: "chavakachcheri",
        supervisor: "Rev. V. Moorthy",
        description: "Ministry continues under the supervision of the Chavakachcheri Church.",
        gallery: [] // add 3-6 photo paths here later, e.g. "images/mission-points/punnala-kattuwan/1.jpg"
    },
    {
        id: "tangalle",
        name: "Tangalle Mission Station",
        church: "hanwella",
        supervisor: "Rev. Shehan de Silva",
        description: "Continues as a mission station under the supervision of the Hanwella Church.",
        gallery: [] // add 3-6 photo paths here later, e.g. "images/mission-points/tangalle/1.jpg"
    },
    {
        id: "ampegama",
        name: "Ampegama Mission Station",
        church: "hanwella",
        supervisor: "Rev. Shehan de Silva",
        description: "Operates under the Hanwella Church; a temporary worker resides there and serves.",
        gallery: [] // add 3-6 photo paths here later, e.g. "images/mission-points/ampegama/1.jpg"
    },
    {
        id: "palawatta",
        name: "Palawatta Mission Station",
        church: "ratnapura",
        supervisor: "Rev. Jayantha Costa",
        description: "Operates under the Ratnapura Church and its supervision.",
        gallery: [] // add 3-6 photo paths here later, e.g. "images/mission-points/palawatta/1.jpg"
    },
    {
        id: "elpitiya",
        name: "Elpitiya Mission Station",
        church: "ratnapura",
        supervisor: "Elpitiya Mission Committee",
        description: "The ministry operates under the Elpitiya Mission Committee.",
        gallery: [] // add 3-6 photo paths here later, e.g. "images/mission-points/elpitiya/1.jpg"
    }
];

/* ---------- CHURCHES -------------------------------------------
   stats keys (all optional — omit any not supplied and the
   profile page will simply skip that row):
   membership, families, ssStudents, ssTeachers, ssClasses,
   brotherhood, womensSociety, youthSociety, convertedChristians,
   convertedOtherReligions, sundayWorship, bibleStudies,
   missionStations, prayerMeetings, otherProjects              */
const CHURCHES = [
    {
        id: "cinnamon-gardens",
        name: "Cinnamon Gardens Baptist Church",
        zone: "colombo",
        district: "colombo",
        address: "Colombo 07, Colombo District",
        phone: "+94 11 269 5153",
        logo: "Images/Churches/CGBC.jpg",
        facebook: "https://www.facebook.com/cinnamongardensbaptistchurch",
        pastor: { name: "Rev. Shriyan Jayamanna", term: "1 January 2025 – 31 December 2029" },
        history: "Cinnamon Gardens Baptist Church traces back to the mid-1870s, when the foundation stone for a new church building in Colombo's Cinnamon Gardens was laid in 1876; the building itself, designed under Rev. F. D. Waldock, was finished the following year. Its location at a busy road junction later earned it the nickname the \"Roundabout Church\" among locals. The adjoining Ferguson Memorial Hall was added in 1896, and the congregation saw a notable revival in the late 1950s under long-serving pastor Rev. Erec Sutton Smith, who introduced open-air evangelism and modern gospel outreach. The church continues to serve the Cinnamon Gardens community today.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/cinnamon-gardens/1.jpg"
        stats: { membership: 220, families: 200, ssStudents: 60, ssTeachers: 13, ssClasses: 6, brotherhood: "All", womensSociety: "All", youthSociety: "All", convertedChristians: 5, convertedOtherReligions: 6, sundayWorship: 3, bibleStudies: 5, missionStations: 4, prayerMeetings: 2 }
    },
    {
        id: "grandpass",
        name: "Grandpass Baptist Church",
        zone: "colombo",
        district: "colombo",
        address: "Grandpass, Colombo 14",
        phone: "+94 11 233 8613",
        logo: "Images/Churches/grandpass.png",
        facebook: null,
        pastor: { name: "Rev. M. D. R. Mayuranjana", term: "1 January 2025 – 31 December 2029" },
        history: "Grandpass Baptist Church was planted in 1817 by Rev. James Chater, the first Baptist missionary to reach Ceylon, in what was then a busy Sinhalese quarter of Colombo. From just 26 members recorded in 1826, the congregation grew under pastors such as Rev. Ebenezer Daniel — remembered as the \"Apostle of Lanka\" — and became fully self-governing in 1863. The present church building dates to 1879, and the congregation has since marked milestones including its 125th anniversary in 1939 and a long, steady pastorate under Rev. P. P. Balasuriya from 1963 to 1997. Renovations around the 2012 bicentenary of Baptist work in Sri Lanka keep the historic building in active use.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/grandpass/1.jpg"
        stats: { membership: 140, families: 80, ssStudents: 50, ssTeachers: 8, ssClasses: 5, brotherhood: 10, womensSociety: 15, youthSociety: 20, convertedChristians: 6, convertedOtherReligions: 1, sundayWorship: 1, bibleStudies: 2, missionStations: 0, prayerMeetings: 2 }
    },
    {
        id: "nugegoda",
        name: "Nugegoda Baptist Church",
        zone: "colombo",
        district: "colombo",
        address: "Nugegoda, Colombo District",
        phone: "+94 11 281 1700",
        logo: "Images/Churches/nugegoda.png",
        facebook: null,
        pastor: { name: "Rev. Danushka Dilshan", term: "1 January 2025 – 31 December 2029" },
        history: "Nugegoda Baptist Church started in July 1912, when four believers began meeting for worship in a private home known as \"Dickland,\" under the wing of the nearby Cinnamon Gardens congregation. A plot on Chapel Road was acquired in 1921, and the church has expanded its facilities gradually ever since, including a Sunday School building raised for its centenary in 2012. Several of its pastors trained at Serampore College, and the congregation has long maintained active youth and women's ministries. Now past its 110th anniversary, the church continues with regular Sunday worship.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/nugegoda/1.jpg"
        stats: { membership: 203, families: 115, ssStudents: 24, ssTeachers: 11, ssClasses: 10, brotherhood: 16, womensSociety: 28, youthSociety: 24, convertedChristians: 4, convertedOtherReligions: 0, sundayWorship: 1, bibleStudies: 2, missionStations: 0, prayerMeetings: 2 }
    },
    {
        id: "kotikawatta",
        name: "Kotikawatta Baptist Church",
        zone: "colombo",
        district: "colombo",
        address: "Kotikawatta, Colombo District",
        phone: "+94 11 256 8044",
        logo: "Images/Churches/kotikawatta.png",
        facebook: null,
        pastor: { name: "Rev. Kingsley Wijeykoon", term: "From 1 January 2025" },
        history: "Kotikawatta Baptist Church began in 1841 after missionary Ebenezer Daniel met a village schoolmaster, Franciscu Perera, who became its first convert; villagers then built a hall on donated land large enough to seat 500. Rev. Isaac Whyttu Nadan led the young congregation for 27 years, and a more permanent church was raised between 1885 and 1899. Wartime conditions pushed the planned 1941 centenary back to 1950. In more recent years the church has added a senior citizens' home (2005–2008), enlarged its building, and rebuilt its belfry in 2016, continuing nearly two centuries of ministry in the area.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/kotikawatta/1.jpg"
        stats: { membership: 385, families: 160, ssStudents: 41, ssTeachers: 7, ssClasses: 10, brotherhood: 70, womensSociety: 85, youthSociety: 68, convertedChristians: 11, convertedOtherReligions: 6, sundayWorship: 1, bibleStudies: 2, missionStations: 0, prayerMeetings: 1 }
    },
    {
        id: "mattakkuliya",
        name: "Mattakkuliya Baptist Church",
        zone: "colombo",
        district: "colombo",
        address: "Mattakkuliya, Colombo 15",
        phone: "+94 11 252 1599",
        logo: "Images/Churches/mattakkuliya.png",
        facebook: null,
        pastor: { name: "Rev. Sunera Vas Gunawardena", term: "1 January 2025 – 31 December 2029" },
        history: "Mattakkuliya Baptist Church was founded on 29 December 1822 by Rev. James Chater — ten years after his arrival in Ceylon — becoming the first Protestant congregation in the village. Pastors from Grandpass shared its early oversight before the present church building went up in 1862, funded largely by local donors Thomas and Jakonis Fernando. Under Rev. G. A. Aponso in the early 1900s the church opened its first Sunday School and built a baptistry (1909). Its centenary was marked in 1922 and its 125th anniversary in 1963, and the church remains active in Mattakkuliya today.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/mattakkuliya/1.jpg"
        stats: { membership: 85, families: 25, ssStudents: 20, ssTeachers: 6, ssClasses: 5, brotherhood: 10, womensSociety: 12, youthSociety: 15, convertedChristians: 5, convertedOtherReligions: 0, sundayWorship: 1, bibleStudies: 1, missionStations: 0, prayerMeetings: 1 }
    },
    {
        id: "kollupitiya",
        name: "Kollupitiya Baptist Church",
        altName: "Colpetty Baptist Church",
        zone: "colombo",
        district: "colombo",
        address: "Colombo 03, Colombo District",
        phone: "+94 11 259 5228",
        logo: "Images/Churches/colpetty.png",
        facebook: null,
        pastor: { name: "Rev. S. Weerasinghe", term: "1 January 2025 – 31 December 2029" },
        history: "Kollupitiya Baptist Church grew out of Tamil-language services Rev. P. I. Jacob began at Ferguson Hall in 1917. Under Rev. Samuel Manoharen Edwards, ordained in 1925, the young congregation secured a permanent home on Bagatelle Road with support from the Baptist Mission. Rev. David R. Edward's 37-year pastorate from 1967 to 2004 carried the church through a long, stable season, and as the surrounding Tamil community changed, worship moved to a bilingual format around 2004. The church marked its 93rd anniversary in 2010 and continues to serve the Kollupitiya area today.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/kollupitiya/1.jpg"
        stats: { membership: 50, families: 20, ssStudents: 10, ssTeachers: 4, ssClasses: 3, brotherhood: 5, womensSociety: 5, youthSociety: 5, convertedChristians: 1, convertedOtherReligions: 10, sundayWorship: 1, bibleStudies: 1, missionStations: 3, prayerMeetings: 1 }
    },

    {
        id: "biyanwila",
        name: "Biyanwila Baptist Church",
        zone: "siyane",
        district: "gampaha",
        address: "Biyanwila, Gampaha District",
        phone: "+94 11 292 9902",
        logo: "Images/Churches/biyanwila.png",
        facebook: null,
        pastor: { name: "Rev. Joseph Andrady", term: "1 January 2025 – 31 December 2029" },
        history: "Biyanwila Baptist Church has its roots in 1832, when missionaries Ebenezer Daniel and Hendrick Siers began evangelistic work in the area. A local shopkeeper who initially resisted their message was won over by their patience and later donated her own premises for a church building in 1836. Under Rev. J. Miguel Perera's three-decade pastorate from 1882, the congregation grew its schools and outreach considerably. The church celebrated 150 years in 1982 alongside the founding of a vocational training institute, and completed a major sanctuary renovation in 2023 that preserved much of its original character.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/biyanwila/1.jpg"
        stats: { membership: 282, families: 150, ssStudents: 32, ssTeachers: 12, ssClasses: 12, brotherhood: 24, womensSociety: 40, youthSociety: 16, convertedChristians: 0, convertedOtherReligions: 0, sundayWorship: 1, bibleStudies: 1, missionStations: 0, prayerMeetings: 2 }
    },
    {
        id: "makewita",
        name: "Makewita Baptist Church",
        zone: "siyane",
        district: "gampaha",
        address: "Makewita, Gampaha District",
        phone: "+94 33 222 0844",
        logo: "Images/Churches/makewita.png",
        facebook: null,
        pastor: { name: "Rev. Daminda Padmakumara", term: "1 January 2025 – 31 December 2029" },
        history: "Makewita Baptist Church can be traced to Isabella Pinto, whose marriage into the Kaluwalgoda area in 1833 planted the first seeds of a Christian community; Rev. John Melder later became its founding pastor in 1839. A permanent building followed in 1866, and by the 1870s the church was running five local schools for over 300 children. A baptistry was added in 1914, and the church has since marked its centenary (1939), 175th (2014) and 180th (2019) anniversaries. Rev. Daminda Padmakumara now leads the congregation, which continues to gather for Sunday worship at Kaluwalgoda.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/makewita/1.jpg"
        stats: { membership: 148, families: 55, ssStudents: 19, ssTeachers: 8, ssClasses: 8, brotherhood: 20, womensSociety: 30, youthSociety: 41, convertedChristians: 3, convertedOtherReligions: 2, sundayWorship: 1, bibleStudies: 1, missionStations: 1, prayerMeetings: 2 }
    },
    {
        id: "kandana",
        name: "Kandana Baptist Church",
        zone: "siyane",
        district: "gampaha",
        address: "Kandana, Gampaha District",
        phone: "+94 11 224 4065",
        logo: "Images/Churches/kandana.png",
        facebook: null,
        pastor: { name: "Rev. T. S. Kumarage", term: "1 January 2025 – 31 December 2029" },
        history: "Kandana Baptist Church grew from educational work started by Rev. J. P. de Silva in 1838, with its first church building following in 1864 under Rev. Peter Perera. The congregation spent several decades, from 1926 to 1958, under Wesleyan Methodist oversight before returning to the Baptist fold. After renewal efforts through the 1980s and 90s, Kandana was recognised as a fully independent church in 2008. Its century-old building was demolished in 2007 and replaced with a new one, dedicated in 2012 with the help of overseas donors — the same building where the church serves today.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/kandana/1.jpg"
        stats: { membership: 87, families: 35, ssStudents: 14, ssTeachers: 3, ssClasses: 4, brotherhood: 8, womensSociety: 10, youthSociety: 8, convertedChristians: 0, convertedOtherReligions: 0, sundayWorship: 1, bibleStudies: 6, missionStations: 0, prayerMeetings: 1 }
    },
    {
        id: "gonawala",
        name: "Gonawala Baptist Church",
        zone: "siyane",
        district: "gampaha",
        address: "Gonawala, Gampaha District",
        phone: "+94 11 291 5358",
        logo: "Images/Churches/gonawala.png",
        facebook: "https://www.facebook.com/GBCLK",
        pastor: { name: "Rev. Roshan Chandika", term: "1 January 2025 – 31 December 2029" },
        history: "Gonawala Baptist Church began in 1840 through the work of Rev. Ebenezer Daniel and a remarkable early convert, the Buddhist scholar Juwanis Wijewardena, who offered his own school hall for worship before his father donated land for a permanent church. A temporary building went up in 1848, replaced by the current structure in 1872. Rev. Juan de Silva, an early pastor, was known for taking part in public debates with Buddhist monks during the 1860s. Set beside the Kelani River about eight miles from Colombo, the church marked its 175th anniversary in 2017 and remains an active centre of Baptist life.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/gonawala/1.jpg"
        stats: { membership: 557, families: 315, ssStudents: 120, ssTeachers: 35, ssClasses: 22, brotherhood: 115, womensSociety: 200, youthSociety: 200, convertedChristians: 3, convertedOtherReligions: 3, sundayWorship: 3, bibleStudies: 7, missionStations: 0, prayerMeetings: 7 }
    },
    {
        id: "palahala",
        name: "Palahala Baptist Church",
        altName: "Pelahela (Dompe) Baptist Church",
        zone: "siyane",
        district: "gampaha",
        address: "Pelahela, Dompe, Gampaha District",
        phone: null,
        logo: "Images/Churches/pelahela.png",
        facebook: null,
        pastor: { name: "Rev. Ranjani Liyanarachchi", term: "1 January 2025 – 31 December 2029" },
        history: "Palahala Baptist Church was started in 1865 by Rev. M. Hendrick Perera while he was also serving Makewita Church, reaching out to the Dompe area of Gampaha District. An early preaching hall was lost to fire in 1917 but quickly rebuilt by the congregation. A 1922 land gift allowed for proper facilities, and on 25 February 1933 both a new manse and church building were opened the same day, at a combined cost of around 1,250 rupees. Through baptisms, Sunday Schools and revival meetings, the church has sustained rural Baptist ministry in the area for close to 160 years.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/palahala/1.jpg"
        stats: { membership: 25, families: 26, ssStudents: 25, ssTeachers: 5, ssClasses: 5, brotherhood: "-", womensSociety: 16, youthSociety: 15, convertedChristians: 0, convertedOtherReligions: 0, sundayWorship: 1, bibleStudies: 1, missionStations: 0, prayerMeetings: 0 }
    },
    {
        id: "hendala",
        name: "Hendala Baptist Church",
        zone: "siyane",
        district: "gampaha",
        address: "Hendala, Gampaha District",
        phone: "+94 11 293 2643",
        logo: "Images/Churches/Hendala.jpg",
        facebook: null,
        pastor: { name: "Rev. S. Vigneswaran", term: "1 January 2025 – 31 December 2029" },
        history: "Hendala Baptist Church's story begins in 1812, when Rev. James Chater and Rev. Hendrick Siers began ministering to patients at a Portuguese-era leprosy hospital nearby; the congregation itself was formally established in 1838 under first pastor Rev. J. P. Silva. A church building went up in 1857 and was replaced by a larger one in 1886 as the congregation grew, later followed by a modern building phase in 1980–82. The Dev Asiri Sevena multi-storey building was added more recently for both worship and community service. Today the church runs youth and outreach programmes under the motto \"Restore, Inspire, Strengthen, Encourage.\"",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/hendala/1.jpg"
        stats: { membership: 247, families: 149, ssStudents: 32, ssTeachers: 11, ssClasses: 9, brotherhood: 37, womensSociety: 55, youthSociety: 35, convertedChristians: 0, convertedOtherReligions: 0, sundayWorship: 1, bibleStudies: 2, missionStations: 1, prayerMeetings: 2 }
    },
    {
        id: "kaleliya",
        name: "Kale Eliya Baptist Church",
        altName: "Kal-Eliya Baptist Church",
        zone: "siyane",
        district: "kalutara",
        address: "Kal-Eliya, Kalutara District",
        phone: null,
        logo: "Images/Churches/kal-eliya.png",
        facebook: null,
        pastor: { name: "Rev. Richard Francis", term: "1 January 2025 – 31 December 2029" },
        history: "Kale Eliya Baptist Church grew out of Baptist Missionary Society work in the Mirigama area that began in 1867, with a formal mission station established around 1911 by Rev. S. F. Pearce. The first converts were baptised in 1922, and a Gospel Hall — partly funded by a bequest — opened in 1931. The congregation spent a few years under Methodist administration between 1979 and 1984 before returning to Baptist care, and was recognised as a full church in 2015. A new belfry (2016) and manse (2019) have followed, and the church continues Sunday worship at 9:00 a.m.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/kaleliya/1.jpg"
        stats: { membership: 27, families: 25, ssStudents: 13, ssTeachers: 7, ssClasses: 4, brotherhood: 8, womensSociety: 20, youthSociety: 20, convertedChristians: 0, convertedOtherReligions: 0, sundayWorship: 1, bibleStudies: 1, missionStations: 0, prayerMeetings: 1 }
    },
    {
        id: "madampe",
        name: "Madampe Baptist Church",
        zone: "siyane",
        district: "puttalam",
        address: "Madampe, Puttalam District",
        phone: "+94 32 224 7658",
        logo: "Images/Churches/madampe.png",
        facebook: null,
        pastor: { name: "Rev. Malith Andrady", term: "Pastor-in-Charge from 1 September 2025" },
        history: "Madampe Baptist Church traces its beginnings to 1834, when three young men from the village became Christians after witnessing a flood they considered providential; the church was formally organised in 1870 under its first resident pastor, Rev. M. H. Perera, and its building was opened in April 1871. A property dispute with the Baptist Missionary Society in 1918 was ultimately settled in the church's favour. The congregation marked its centenary in 1970 and 150th anniversary in 2020, having run schools and women's Bible classes over the decades.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/madampe/1.jpg"
        stats: { membership: 50, families: 27, ssStudents: 8, ssTeachers: 5, ssClasses: 5, brotherhood: 12, womensSociety: 15, youthSociety: 18, convertedChristians: 1, convertedOtherReligions: 1, sundayWorship: 1, bibleStudies: 3, missionStations: 1, prayerMeetings: 1 }
    },

    {
        id: "beligodapitiya",
        name: "Beligodapitiya Baptist Church",
        zone: "kandurata",
        district: "kegalle",
        address: "Beligodapitiya, Kegalle District",
        phone: "+94 35 226 5690",
        logo: "Images/Churches/beligodapitiya.png",
        facebook: null,
        pastor: { name: "Rev. Roshan Algama", term: "1 January 2025 – 31 December 2029" },
        history: "Beligodapitiya Baptist Church — in a village once known as Korigammana — was founded in 1863 through the evangelistic work of Rev. Charles Carter and Rev. Amaris de Silva Senapathiratne, whose early converts included a respected local physician and his brother. A permanent building replaced the original cadjan structure in 1872, and the village's present name was adopted in 1902. A baptistry followed in 1927 and a manse in 1980. The congregation has weathered droughts and hardship over the decades — coordinating agricultural relief during a severe dry spell in 2004 — while continuing to serve its farming community.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/beligodapitiya/1.jpg"
        stats: { membership: 240, families: 150, ssStudents: 40, ssTeachers: 8, ssClasses: 8, brotherhood: 50, womensSociety: 60, youthSociety: 50, convertedChristians: 0, convertedOtherReligions: 2, sundayWorship: 1, bibleStudies: 1, missionStations: 0, prayerMeetings: 1 }
    },
    {
        id: "matale",
        name: "Matale Baptist Church",
        zone: "kandurata",
        district: "matale",
        address: "Matale, Matale District",
        phone: "+94 66 223 3706",
        logo: "Images/Churches/matale.png",
        facebook: null,
        pastor: { name: "Rev. Gayan Goonasekara", term: "1 January 2025 – 31 December 2029" },
        history: "Matale Baptist Church began in 1838 through the efforts of lay evangelist F. J. Corea, who had settled in the town a few years earlier; the congregation worshipped for over a century in a building on Trincomalee Street. Notable convert C. P. Dharmakeerthi went on to serve as an unpaid pastor for twenty years after his own dramatic conversion. The church relocated to a new building on Hulangamuwa Road in 1952 and, alongside its schools and an orphanage, marked 172 years of ministry in 2008. The congregation continues meeting weekly today.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/matale/1.jpg"
        stats: { membership: 70, families: 33, ssStudents: 12, ssTeachers: 4, ssClasses: 4, brotherhood: "-", womensSociety: 14, youthSociety: 10, convertedChristians: 0, convertedOtherReligions: 0, sundayWorship: 1, bibleStudies: 1, missionStations: 0, prayerMeetings: 1 }
    },
    {
        id: "ambagastenne",
        name: "Ambagastenna Baptist Church",
        zone: "kandurata",
        district: "kandy",
        address: "Ambagastenna, Kandy District",
        phone: "+94 66 225 5107",
        logo: "Images/Churches/ambagastenna.png",
        facebook: null,
        pastor: { name: "Rev. E. K. Yasarathne", term: "Pastor-in-Charge from 1 December 2025" },
        history: "Ambagastenna Baptist Church has its roots in 1865, when Rev. Harmanis Silva opened a mission station in nearby Rattota under the oversight of Matale Church. After the state took over the mission's school in 1960, the congregation lacked a proper home until a member donated land for a new building — completed in 1984 with support from the Australian Baptist Institute. A manse followed in the late 1990s and a bell tower in 2015. Now marking around 160 years of witness in the area, the church continues its ministry and community education work.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/ambagastenne/1.jpg"
        stats: { membership: 79, families: 37, ssStudents: 19, ssTeachers: 5, ssClasses: 11, brotherhood: 17, womensSociety: 14, youthSociety: 5, convertedChristians: 46, convertedOtherReligions: "None", sundayWorship: 1, bibleStudies: "-", missionStations: 0, prayerMeetings: 2 }
    },
    {
        id: "kandy",
        name: "Kandy Baptist Church",
        zone: "kandurata",
        district: "kandy",
        address: "Kandy, Kandy District",
        phone: "+94 81 222 2009",
        logo: "Images/Churches/kandy.png",
        facebook: "https://www.facebook.com/profile.php?id=100084000093284",
        pastor: { name: "Rev. Rukmal Fernando", term: "From 1 January 2025" },
        history: "Kandy Baptist Church dates to 1841, when Rev. Joseph Harris and founding pastor Rev. Charles Cornelius Dawson — who brought a printing press with him — established the church on land granted by the colonial governor; the building was dedicated that same year, on Christmas Day. Rev. Charles Morton Carter's long ministry from 1855 helped the church become self-supporting by 1862, and it went on to run a multilingual printing operation and vernacular schools across the district. A new building replacing earlier facilities was completed in 1987, and the church continues a ministry now well past 180 years old.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/kandy/1.jpg"
        stats: { membership: 198, families: 70, ssStudents: 30, ssTeachers: 10, ssClasses: 10, brotherhood: 12, womensSociety: 15, youthSociety: 24, convertedChristians: 7, convertedOtherReligions: 3, sundayWorship: 1, bibleStudies: 2, missionStations: 0, prayerMeetings: 3 }
    },
    {
        id: "kekirawa",
        name: "Kekirawa Baptist Church",
        zone: "kandurata",
        district: "anuradhapura",
        address: "Kekirawa, Anuradhapura District",
        phone: "+94 25 226 4681",
        logo: "Images/Churches/kekirawa.png",
        facebook: null,
        pastor: { name: "Rev. Heshan de Silva", term: "From 1 January 2025 (Rev. Shamal Fernando to take over as Pastor-in-Charge in May 2026)" },
        history: "Kekirawa Baptist Church started life in 1887 as a mission station and school founded by Rev. Henry Alfred Lapham in Sri Lanka's North Central Province. A church and manse followed in 1906, and a new church building — designed by the son of pioneering missionary Rev. Charter — was dedicated in 1934, surviving the Second World War even as the adjoining school was requisitioned by the military. A quiet period in the late 1940s gave way to renewal under Rev. Hector de Silva from 1951. The church today serves around 60–65 families and has extended its reach with a worship centre in Anuradhapura.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/kekirawa/1.jpg"
        stats: { membership: 254, families: 92, ssStudents: 45, ssTeachers: 2, ssClasses: 0, brotherhood: 8, womensSociety: 35, youthSociety: 40, convertedChristians: 2, convertedOtherReligions: 5, sundayWorship: 1, bibleStudies: 2, missionStations: 0, prayerMeetings: 0 }
    },
    {
        id: "habarana",
        name: "Habarana Baptist Church",
        zone: "kandurata",
        district: "anuradhapura",
        address: "Habarana, Anuradhapura District",
        phone: null,
        logo: "Images/Churches/habarana.png",
        facebook: null,
        pastor: { name: "Rev. Gayan Gunasekara", term: "From 1 January 2025" },
        history: "Baptist ministry reached Sri Lanka's North Central Province in 1902, but the Habarana mission itself began in 1976 under Rev. Denzil Jayamanne, first meeting in a rented house before settling near Habarana Wewa. The mission faced serious opposition in its early years, which forced a pause in services around 2000, before it regathered as a smaller congregation and secured land through the Sri Lanka Baptist Church for a permanent building on the Colombo–Trincomalee Road. Through a succession of pastors and workers, the church has continued its mission of restoration and outreach in a historically difficult region.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/habarana/1.jpg"
        stats: { ssStudents: 7, sundayWorship: 2, bibleStudies: 2, missionStations: 0, prayerMeetings: 2 }
    },
    {
        id: "dehiattakandiya",
        name: "Dehiattakandiya Baptist Church",
        zone: "kandurata",
        district: "ampara",
        address: "Dehiattakandiya, Ampara District",
        phone: null,
        logo: "Images/Churches/dehiattakandiya.png",
        facebook: null,
        pastor: { name: "Rev. Daminda Padmakumara" },
        history: "Dehiattakandiya's Baptist witness began in 1996, when Christian farming families resettled in the area and Rev. W. Warshamanage's survey found five households eager to worship together, leading to around sixteen baptisms. Oversight passed from the Colombo Gospel Baptist Church to Kandurata Korale under Rev. Wilee Ranasinghe in 2000, with several pastors sharing responsibility for the remote outstation over the years, including Rev. Daminda Padmakumara (2004–2012) and Rev. Dhanushke Perera from 2013. Despite ongoing opposition and the lack of a permanent building, the community continues to gather for worship in members' homes.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/dehiattakandiya/1.jpg"
    },
    {
        id: "kilinochchi",
        name: "Kilinochchi Baptist Church",
        zone: "kandurata",
        district: "kilinochchi",
        address: "Kilinochchi, Northern Province",
        phone: "+94 21 312 1079",
        logo: "Images/Churches/kilinochchi.png",
        facebook: null,
        pastor: { name: "Rev. Sugunraj", term: "1 January 2025 – 31 December 2029" },
        history: "Kilinochchi Baptist Church began in 2011, in the aftermath of Sri Lanka's civil conflict, when the Baptist Women's League under Mrs. Ione Algama secured land along Y.M.C.A. Road with the help of Colonel Jayatissa. Brother Vigneswaran and his wife arrived in February 2011 to lead the new work, starting a pre-school and holding services from their home before, with support from Korean missionary Miss Jugni Kang and the Global Mission Church, building a manse, well and church — officially opened in November 2013. Under Rev. Vigneswaran's later leadership the church grew steadily, and by 2024 had planted mission points in Trincomalee and Batticaloa.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/kilinochchi/1.jpg"
        stats: { membership: 153, families: 106, ssStudents: 80, ssTeachers: 7, ssClasses: 7, brotherhood: 15, womensSociety: 20, youthSociety: 80, convertedChristians: 4, convertedOtherReligions: 4, sundayWorship: 1, bibleStudies: 1, missionStations: 4, prayerMeetings: 1 }
    },
    {
        id: "chavakachcheri",
        name: "Chavakachcheri Baptist Church",
        zone: "kandurata",
        district: "jaffna",
        address: "Chavakachcheri, Jaffna District",
        phone: "+94 77 689 1897",
        logo: "Images/Churches/chavakachcheri.png",
        facebook: null,
        pastor: { name: "Rev. V. Moorthy", term: "1 January 2025 – 31 December 2029" },
        history: "Chavakachcheri Baptist Church began as a Bible study group Rev. V. Moorthy started in 2015, renting a house that September to launch what was then a mission point. The congregation later moved into a temporary hall and eventually a permanent building on land purchased by the Sri Lanka Baptist Church, gaining full recognition as a church in August 2023. From this base, Rev. Moorthy has planted satellite mission points in five surrounding communities — Mullaitivu, Ilavalai, Atchuveli, Punnala Kattuwan and Thalawakalle — with the home congregation continuing Sunday worship at 8:30 a.m.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/chavakachcheri/1.jpg"
        stats: { membership: 47, families: 25, ssStudents: 10, ssTeachers: 13, ssClasses: 7, brotherhood: 16, womensSociety: 600, youthSociety: 34, convertedChristians: 3, convertedOtherReligions: 2, sundayWorship: "-", bibleStudies: 11, missionStations: 0, prayerMeetings: 8 }
    },

    {
        id: "hanwella",
        name: "Hanwella Baptist Church",
        zone: "kelani",
        district: "colombo",
        address: "Hanwella, Colombo District",
        phone: "+94 36 225 3441",
        logo: "Images/Churches/hanwella.png",
        facebook: null,
        pastor: { name: "Rev. Shehan de Silva", term: "1 January 2025 – 31 December 2029" },
        history: "Hanwella Baptist Church was founded in 1818 in a riverside village along the Kelani, after missionaries James Chater and Hendrick Siers came across the site during their travels; local leaders funded the first church and manse. The congregation started with just three baptised members, among them Don Carolis, who became its first deacon and later a lay pastor, while the village headman's own conversion in 1826 drew wide attention. Following the deaths of both founding missionaries, Rev. Ebenezer Daniel carried the work forward, and by 1841 membership had reached 50, with outstations planted in nearby villages that became known as \"the first Jungle Church.\"",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/hanwella/1.jpg"
        stats: { membership: 163, families: 75, ssStudents: 43, ssTeachers: 11, ssClasses: 8, brotherhood: 25, womensSociety: 30, youthSociety: 45, convertedChristians: 0, convertedOtherReligions: 0, sundayWorship: 1, bibleStudies: 2, missionStations: 2, prayerMeetings: 2 }
    },
    {
        id: "agalawatta",
        name: "Agalawatta Baptist Church",
        zone: "kelani",
        district: "kalutara",
        address: "Agalawatta, Kalutara District",
        phone: "+94 34 224 9279",
        logo: "Images/Churches/agalawatta.png",
        facebook: "https://www.facebook.com/agalawatta.baptistchurch.7",
        pastor: { name: "Rev. John Gunaratne", term: "1 January 2025 – 31 December 2029" },
        history: "Agalawatta Baptist Church was founded in 1873 by travelling evangelist Rev. Juan de Silva, meeting first in homes and simple shelters across the surrounding villages. A turning point came in 1890, when a well-known traditional healer who had opposed the mission, Don Andris de Silva, embraced the faith. A preaching hall followed in the early 1900s, along with a school and, later, a Montessori programme in 1991. The congregation nearly folded between 1962 and 1982 but was revived under Rev. Paul Koralage, gaining a new hall in 1995 and further facilities since. Today the church serves worshippers across seven surrounding villages.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/agalawatta/1.jpg"
        stats: { membership: 220, families: 95, ssStudents: 35, ssTeachers: 35, ssClasses: 7, brotherhood: 36, womensSociety: 63, youthSociety: 51, convertedChristians: 0, convertedOtherReligions: 0, sundayWorship: 1, bibleStudies: 3, missionStations: 0, prayerMeetings: 2 }
    },
    {
        id: "eheliyagoda",
        name: "Eheliyagoda Baptist Church",
        zone: "kelani",
        district: "ratnapura",
        address: "Eheliyagoda, Ratnapura District",
        phone: "+94 36 225 8427",
        logo: "Images/Churches/eheliyagoda.png",
        facebook: null,
        pastor: { name: "Rev. Nishantha Malthunga", term: "1 January 2025 – 31 December 2029" },
        history: "Eheliyagoda Baptist Church grew out of missionary work Rev. Henry Pigott began around Ratnapura in 1878, taking shape as the \"Thalawitiya Mission Station\" under Rev. Stanley Frederick Pearce by the early 1910s. Two Baptist schools, at Thalawitiya (1914) and Udumatta (1936), served the surrounding villages despite considerable local opposition through the 1920s. The Sri Lanka Baptist Church purchased land for a permanent church, dedicated in January 1979, later adding a manse and a Sunday School hall that hosted a Montessori programme from 1980. The church has now served the community for well over 140 years.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/eheliyagoda/1.jpg"
        stats: { membership: 120, families: 115, ssStudents: 21, ssTeachers: 7, ssClasses: 8, brotherhood: 27, womensSociety: 45, youthSociety: 38, convertedChristians: 7, convertedOtherReligions: 0, sundayWorship: 1, bibleStudies: 2, missionStations: 3, prayerMeetings: 1 }
    },
    {
        id: "ratnapura",
        name: "Ratnapura Baptist Church",
        zone: "kelani",
        district: "ratnapura",
        address: "Ratnapura, Ratnapura District",
        phone: "+94 45 223 2278",
        logo: "Images/Churches/ratnapura.png",
        facebook: null,
        pastor: { name: "Rev. Jayantha Costa", term: "1 January 2025 – 31 December 2029 (serving again)" },
        history: "Ratnapura Baptist Church was founded in 1878 when pioneer missionaries Rev. Henry Pigott and his wife Ellen arrived in Sri Lanka's gem-trading capital, dedicating their church building in 1882. Mrs. Pigott's English classes for local families led to several early conversions, and in 1917 Mrs. Florie Radley began a small English school in the church vestry with just four pupils — the seed of what grew into Ferguson High School. The church later added a Senior Hostel (1929) and a new Principal's Bungalow (1957), and has long held services in both Sinhala and English alongside Tamil-language ministry since 1956.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/ratnapura/1.jpg"
        stats: { membership: 180, families: 70, ssStudents: 84, ssTeachers: 10, ssClasses: 12, brotherhood: 42, womensSociety: 2, youthSociety: 40, convertedChristians: 5, convertedOtherReligions: 12, sundayWorship: 4, bibleStudies: 3, missionStations: 1, prayerMeetings: 1 }
    },
    {
        id: "moratuwa",
        name: "Moratuwa Baptist Church",
        zone: "kelani",
        district: "colombo",
        address: "Moratuwa, Colombo District",
        phone: "+94 11 264 7672",
        logo: "Images/Churches/Moratuwa.jpg",
        facebook: "https://www.facebook.com/BaptistChurchMoratuwa",
        pastor: { name: "Rev. William Wijeykoon", term: "From 1 January 2025" },
        history: "Moratuwa Baptist Church traces back to Rev. Ebenezer Daniel's visit in 1841, which led residents Juan de Silva and Arnolis Peiris to embrace Baptist teaching; de Silva was baptised in 1855 and later ordained to lead the fledgling congregation. Formally constituted in 1877, the church moved from its original Koralawella site into a new sanctuary in 1915, known as the \"Centenary Church.\" A Sunday School hall (1940) and new manse (1970) followed, and membership grew from around 18 in 1881 to over 230 by 2010. The congregation has also supported mission work in Agalawatta and Bulathsinhala, and took part in 2004 tsunami relief efforts.",
        gallery: [], // add 3-6 photo paths here later, e.g. "Images/Churches/moratuwa/1.jpg"
        stats: { membership: 333, families: 15, ssStudents: 40, ssTeachers: 10, ssClasses: 10, brotherhood: 55, womensSociety: 100, youthSociety: 40, convertedChristians: 4, convertedOtherReligions: 0, sundayWorship: 2, bibleStudies: 2, missionStations: 0, prayerMeetings: 3 }
    }
];

/* Attach each church's mission points (computed once, used by both pages) */
CHURCHES.forEach(c => {
    c.missionPoints = MISSION_POINTS.filter(mp => mp.church === c.id);
});

/* Enrich each mission point with its host church's zone/district —
   mission points don't have independent location data of their own,
   they inherit it from the church that oversees them. Also adds an
   "established" slot (left null for now — no verified founding year
   was available in the source material, so none was invented; add a
   real year here, e.g. established: 1998, once you have it and it
   will appear automatically on that mission point's page). */
MISSION_POINTS.forEach(mp => {
    const host = CHURCHES.find(c => c.id === mp.church);
    mp.hostChurch = host || null;
    mp.zone       = host ? host.zone     : null;
    mp.district   = host ? host.district : null;
    if (mp.established === undefined) mp.established = null;
});
