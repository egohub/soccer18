angular.module('country.services', [])

.factory('countryApi', function($http){


    var data = [
      {
        countryName: "Africa",
        id: "africa",
        href: "https://www.sofascore.com/list/category/football/africa/tournaments/json",
        list: " "
      },
      {
        countryName: "Albania",
        id: "albania",
        href: "https://www.sofascore.com/list/category/football/albania/tournaments/json",
        list: " "
      },
      {
        countryName: "Algeria",
        id: "algeria",
        href: "https://www.sofascore.com/list/category/football/algeria/tournaments/json",
        list: " "
      },
      {
        countryName: "Andorra",
        id: "andorra",
        href: "https://www.sofascore.com/list/category/football/andorra/tournaments/json",
        list: " "
      },
      {
        countryName: "Angola",
        id: "angola",
        href: "https://www.sofascore.com/list/category/football/angola/tournaments/json",
        list: " "
      },
      {
        countryName: "Argentina",
        id: "argentina",
        href: "https://www.sofascore.com/list/category/football/argentina/tournaments/json",
        list: " "
      },
      {
        countryName: "Armenia",
        id: "armenia",
        href: "https://www.sofascore.com/list/category/football/armenia/tournaments/json",
        list: " "
      },
      {
        countryName: "Asia",
        id: "asia",
        href: "https://www.sofascore.com/list/category/football/asia/tournaments/json",
        list: " "
      },
      {
        countryName: "Australia",
        id: "australia",
        href: "https://www.sofascore.com/list/category/football/australia/tournaments/json",
        list: " "
      },
      {
        countryName: "Austria",
        id: "austria",
        href: "https://www.sofascore.com/list/category/football/austria/tournaments/json",
        list: " "
      },
      {
        countryName: "Austria Amateur",
        id: "austria-amateur",
        href: "https://www.sofascore.com/list/category/football/austria-amateur/tournaments/json",
        list: " "
      },
      {
        countryName: "Azerbaijan",
        id: "azerbaijan",
        href: "https://www.sofascore.com/list/category/football/azerbaijan/tournaments/json",
        list: " "
      },
      {
        countryName: "Bahrain",
        id: "bahrain",
        href: "https://www.sofascore.com/list/category/football/bahrain/tournaments/json",
        list: " "
      },
      {
        countryName: "Belarus",
        id: "belarus",
        href: "https://www.sofascore.com/list/category/football/belarus/tournaments/json",
        list: " "
      },
      {
        countryName: "Belgium",
        id: "belgium",
        href: "https://www.sofascore.com/list/category/football/belgium/tournaments/json",
        list: " "
      },
      {
        countryName: "Bolivia",
        id: "bolivia",
        href: "https://www.sofascore.com/list/category/football/bolivia/tournaments/json",
        list: " "
      },
      {
        countryName: "Bosnia & Herzegovina",
        id: "bosnia-herzegovina",
        href: "https://www.sofascore.com/list/category/football/bosnia-herzegovina/tournaments/json",
        list: " "
      },
      {
        countryName: "Brazil",
        id: "brazil",
        href: "https://www.sofascore.com/list/category/football/brazil/tournaments/json",
        list: " "
      },
      {
        countryName: "Bulgaria",
        id: "bulgaria",
        href: "https://www.sofascore.com/list/category/football/bulgaria/tournaments/json",
        list: " "
      },
      {
        countryName: "Cameroon",
        id: "cameroon",
        href: "https://www.sofascore.com/list/category/football/cameroon/tournaments/json",
        list: " "
      },
      {
        countryName: "Canada",
        id: "canada",
        href: "https://www.sofascore.com/list/category/football/canada/tournaments/json",
        list: " "
      },
      {
        countryName: "Chile",
        id: "chile",
        href: "https://www.sofascore.com/list/category/football/chile/tournaments/json",
        list: " "
      },
      {
        countryName: "China",
        id: "china",
        href: "https://www.sofascore.com/list/category/football/china/tournaments/json",
        list: " "
      },
      {
        countryName: "Colombia",
        id: "colombia",
        href: "https://www.sofascore.com/list/category/football/colombia/tournaments/json",
        list: " "
      },
      {
        countryName: "Congo Republic",
        id: "congo-republic",
        href: "https://www.sofascore.com/list/category/football/congo-republic/tournaments/json",
        list: " "
      },
      {
        countryName: "Costa Rica",
        id: "costa-rica",
        href: "https://www.sofascore.com/list/category/football/costa-rica/tournaments/json",
        list: " "
      },
      {
        countryName: "Croatia",
        id: "croatia",
        href: "https://www.sofascore.com/list/category/football/croatia/tournaments/json",
        list: " "
      },
      {
        countryName: "Cyprus",
        id: "cyprus",
        href: "https://www.sofascore.com/list/category/football/cyprus/tournaments/json",
        list: " "
      },
      {
        countryName: "Czech Republic",
        id: "czech-republic",
        href: "https://www.sofascore.com/list/category/football/czech-republic/tournaments/json",
        list: " "
      },
      {
        countryName: "Denmark",
        id: "denmark",
        href: "https://www.sofascore.com/list/category/football/denmark/tournaments/json",
        list: " "
      },
      {
        countryName: "Denmark Amateur",
        id: "denmark-amateur",
        href: "https://www.sofascore.com/list/category/football/denmark-amateur/tournaments/json",
        list: " "
      },
      {
        countryName: "Ecuador",
        id: "ecuador",
        href: "https://www.sofascore.com/list/category/football/ecuador/tournaments/json",
        list: " "
      },
      {
        countryName: "Egypt",
        id: "egypt",
        href: "https://www.sofascore.com/list/category/football/egypt/tournaments/json",
        list: " "
      },
      {
        countryName: "El Salvador",
        id: "el-salvador",
        href: "https://www.sofascore.com/list/category/football/el-salvador/tournaments/json",
        list: " "
      },
      {
        countryName: "England",
        id: "england",
        href: "https://www.sofascore.com/list/category/football/england/tournaments/json",
        list: " "
      },
      {
        countryName: "England Amateur",
        id: "england-amateur",
        href: "https://www.sofascore.com/list/category/football/england-amateur/tournaments/json",
        list: " "
      },
      {
        countryName: "Estonia",
        id: "estonia",
        href: "https://www.sofascore.com/list/category/football/estonia/tournaments/json",
        list: " "
      },
      {
        countryName: "Europe",
        id: "europe",
        href: "https://www.sofascore.com/list/category/football/europe/tournaments/json",
        list: " "
      },
      {
        countryName: "Faroe Islands",
        id: "faroe-islands",
        href: "https://www.sofascore.com/list/category/football/faroe-islands/tournaments/json",
        list: " "
      },
      {
        countryName: "Finland",
        id: "finland",
        href: "https://www.sofascore.com/list/category/football/finland/tournaments/json",
        list: " "
      },
      {
        countryName: "France",
        id: "france",
        href: "https://www.sofascore.com/list/category/football/france/tournaments/json",
        list: " "
      },
      {
        countryName: "Georgia",
        id: "georgia",
        href: "https://www.sofascore.com/list/category/football/georgia/tournaments/json",
        list: " "
      },
      {
        countryName: "Germany",
        id: "germany",
        href: "https://www.sofascore.com/list/category/football/germany/tournaments/json",
        list: " "
      },
      {
        countryName: "Germany Amateur",
        id: "germany-amateur",
        href: "https://www.sofascore.com/list/category/football/germany-amateur/tournaments/json",
        list: " "
      },
      {
        countryName: "Ghana",
        id: "ghana",
        href: "https://www.sofascore.com/list/category/football/ghana/tournaments/json",
        list: " "
      },
      {
        countryName: "Gibraltar",
        id: "gibraltar",
        href: "https://www.sofascore.com/list/category/football/gibraltar/tournaments/json",
        list: " "
      },
      {
        countryName: "Greece",
        id: "greece",
        href: "https://www.sofascore.com/list/category/football/greece/tournaments/json",
        list: " "
      },
      {
        countryName: "Guatemala",
        id: "guatemala",
        href: "https://www.sofascore.com/list/category/football/guatemala/tournaments/json",
        list: " "
      },
      {
        countryName: "Honduras",
        id: "honduras",
        href: "https://www.sofascore.com/list/category/football/honduras/tournaments/json",
        list: " "
      },
      {
        countryName: "Hong Kong",
        id: "hong-kong",
        href: "https://www.sofascore.com/list/category/football/hong-kong/tournaments/json",
        list: " "
      },
      {
        countryName: "Hungary",
        id: "hungary",
        href: "https://www.sofascore.com/list/category/football/hungary/tournaments/json",
        list: " "
      },
      {
        countryName: "Iceland",
        id: "iceland",
        href: "https://www.sofascore.com/list/category/football/iceland/tournaments/json",
        list: " "
      },
      {
        countryName: "India",
        id: "india",
        href: "https://www.sofascore.com/list/category/football/india/tournaments/json",
        list: " "
      },
      {
        countryName: "Indonesia",
        id: "indonesia",
        href: "https://www.sofascore.com/list/category/football/indonesia/tournaments/json",
        list: " "
      },
      {
        countryName: "Iran",
        id: "iran",
        href: "https://www.sofascore.com/list/category/football/iran/tournaments/json",
        list: " "
      },
      {
        countryName: "Ireland",
        id: "ireland",
        href: "https://www.sofascore.com/list/category/football/ireland/tournaments/json",
        list: " "
      },
      {
        countryName: "Israel",
        id: "israel",
        href: "https://www.sofascore.com/list/category/football/israel/tournaments/json",
        list: " "
      },
      {
        countryName: "Italy",
        id: "italy",
        href: "https://www.sofascore.com/list/category/football/italy/tournaments/json",
        list: " "
      },
      {
        countryName: "Ivory Coast",
        id: "ivory-coast",
        href: "https://www.sofascore.com/list/category/football/ivory-coast/tournaments/json",
        list: " "
      },
      {
        countryName: "Jamaica",
        id: "jamaica",
        href: "https://www.sofascore.com/list/category/football/jamaica/tournaments/json",
        list: " "
      },
      {
        countryName: "Japan",
        id: "japan",
        href: "https://www.sofascore.com/list/category/football/japan/tournaments/json",
        list: " "
      },
      {
        countryName: "Jordan",
        id: "jordan",
        href: "https://www.sofascore.com/list/category/football/jordan/tournaments/json",
        list: " "
      },
      {
        countryName: "Kazakhstan",
        id: "kazakhstan",
        href: "https://www.sofascore.com/list/category/football/kazakhstan/tournaments/json",
        list: " "
      },
      {
        countryName: "Kenya",
        id: "kenya",
        href: "https://www.sofascore.com/list/category/football/kenya/tournaments/json",
        list: " "
      },
      {
        countryName: "Kosovo",
        id: "kosovo",
        href: "https://www.sofascore.com/list/category/football/kosovo/tournaments/json",
        list: " "
      },
      {
        countryName: "Kuwait",
        id: "kuwait",
        href: "https://www.sofascore.com/list/category/football/kuwait/tournaments/json",
        list: " "
      },
      {
        countryName: "Latvia",
        id: "latvia",
        href: "https://www.sofascore.com/list/category/football/latvia/tournaments/json",
        list: " "
      },
      {
        countryName: "Lebanon",
        id: "lebanon",
        href: "https://www.sofascore.com/list/category/football/lebanon/tournaments/json",
        list: " "
      },
      {
        countryName: "Liechtenstein",
        id: "liechtenstein",
        href: "https://www.sofascore.com/list/category/football/liechtenstein/tournaments/json",
        list: " "
      },
      {
        countryName: "Lithuania",
        id: "lithuania",
        href: "https://www.sofascore.com/list/category/football/lithuania/tournaments/json",
        list: " "
      },
      {
        countryName: "Luxembourg",
        id: "luxembourg",
        href: "https://www.sofascore.com/list/category/football/luxembourg/tournaments/json",
        list: " "
      },
      {
        countryName: "Macedonia",
        id: "macedonia",
        href: "https://www.sofascore.com/list/category/football/macedonia/tournaments/json",
        list: " "
      },
      {
        countryName: "Malaysia",
        id: "malaysia",
        href: "https://www.sofascore.com/list/category/football/malaysia/tournaments/json",
        list: " "
      },
      {
        countryName: "Malta",
        id: "malta",
        href: "https://www.sofascore.com/list/category/football/malta/tournaments/json",
        list: " "
      },
      {
        countryName: "Mexico",
        id: "mexico",
        href: "https://www.sofascore.com/list/category/football/mexico/tournaments/json",
        list: " "
      },
      {
        countryName: "Moldova",
        id: "moldova",
        href: "https://www.sofascore.com/list/category/football/moldova/tournaments/json",
        list: " "
      },
      {
        countryName: "Montenegro",
        id: "montenegro",
        href: "https://www.sofascore.com/list/category/football/montenegro/tournaments/json",
        list: " "
      },
      {
        countryName: "Morocco",
        id: "morocco",
        href: "https://www.sofascore.com/list/category/football/morocco/tournaments/json",
        list: " "
      },
      {
        countryName: "Myanmar",
        id: "myanmar",
        href: "https://www.sofascore.com/list/category/football/myanmar/tournaments/json",
        list: " "
      },
      {
        countryName: "Netherlands",
        id: "netherlands",
        href: "https://www.sofascore.com/list/category/football/netherlands/tournaments/json",
        list: " "
      },
      {
        countryName: "New Zealand",
        id: "new-zealand",
        href: "https://www.sofascore.com/list/category/football/new-zealand/tournaments/json",
        list: " "
      },
      {
        countryName: "Nicaragua",
        id: "nicaragua",
        href: "https://www.sofascore.com/list/category/football/nicaragua/tournaments/json",
        list: " "
      },
      {
        countryName: "Nigeria",
        id: "nigeria",
        href: "https://www.sofascore.com/list/category/football/nigeria/tournaments/json",
        list: " "
      },
      {
        countryName: "North & Central America",
        id: "north-central-america",
        href: "https://www.sofascore.com/list/category/football/north-central-america/tournaments/json",
        list: " "
      },
      {
        countryName: "Northern Ireland",
        id: "northern-ireland",
        href: "https://www.sofascore.com/list/category/football/northern-ireland/tournaments/json",
        list: " "
      },
      {
        countryName: "Norway",
        id: "norway",
        href: "https://www.sofascore.com/list/category/football/norway/tournaments/json",
        list: " "
      },
      {
        countryName: "Oceania",
        id: "oceania",
        href: "https://www.sofascore.com/list/category/football/oceania/tournaments/json",
        list: " "
      },
      {
        countryName: "Oman",
        id: "oman",
        href: "https://www.sofascore.com/list/category/football/oman/tournaments/json",
        list: " "
      },
      {
        countryName: "Pakistan",
        id: "pakistan",
        href: "https://www.sofascore.com/list/category/football/pakistan/tournaments/json",
        list: " "
      },
      {
        countryName: "Palestine",
        id: "palestine",
        href: "https://www.sofascore.com/list/category/football/palestine/tournaments/json",
        list: " "
      },
      {
        countryName: "Panama",
        id: "panama",
        href: "https://www.sofascore.com/list/category/football/panama/tournaments/json",
        list: " "
      },
      {
        countryName: "Paraguay",
        id: "paraguay",
        href: "https://www.sofascore.com/list/category/football/paraguay/tournaments/json",
        list: " "
      },
      {
        countryName: "Peru",
        id: "peru",
        href: "https://www.sofascore.com/list/category/football/peru/tournaments/json",
        list: " "
      },
      {
        countryName: "Philippines",
        id: "philippines",
        href: "https://www.sofascore.com/list/category/football/philippines/tournaments/json",
        list: " "
      },
      {
        countryName: "Poland",
        id: "poland",
        href: "https://www.sofascore.com/list/category/football/poland/tournaments/json",
        list: " "
      },
      {
        countryName: "Portugal",
        id: "portugal",
        href: "https://www.sofascore.com/list/category/football/portugal/tournaments/json",
        list: " "
      },
      {
        countryName: "Qatar",
        id: "qatar",
        href: "https://www.sofascore.com/list/category/football/qatar/tournaments/json",
        list: " "
      },
      {
        countryName: "Romania",
        id: "romania",
        href: "https://www.sofascore.com/list/category/football/romania/tournaments/json",
        list: " "
      },
      {
        countryName: "Russia",
        id: "russia",
        href: "https://www.sofascore.com/list/category/football/russia/tournaments/json",
        list: " "
      },
      {
        countryName: "Rwanda",
        id: "rwanda",
        href: "https://www.sofascore.com/list/category/football/rwanda/tournaments/json",
        list: " "
      },
      {
        countryName: "San Marino",
        id: "san-marino",
        href: "https://www.sofascore.com/list/category/football/san-marino/tournaments/json",
        list: " "
      },
      {
        countryName: "Saudi Arabia",
        id: "saudi-arabia",
        href: "https://www.sofascore.com/list/category/football/saudi-arabia/tournaments/json",
        list: " "
      },
      {
        countryName: "Scotland",
        id: "scotland",
        href: "https://www.sofascore.com/list/category/football/scotland/tournaments/json",
        list: " "
      },
      {
        countryName: "Senegal",
        id: "senegal",
        href: "https://www.sofascore.com/list/category/football/senegal/tournaments/json",
        list: " "
      },
      {
        countryName: "Serbia",
        id: "serbia",
        href: "https://www.sofascore.com/list/category/football/serbia/tournaments/json",
        list: " "
      },
      {
        countryName: "Singapore",
        id: "singapore",
        href: "https://www.sofascore.com/list/category/football/singapore/tournaments/json",
        list: " "
      },
      {
        countryName: "Slovakia",
        id: "slovakia",
        href: "https://www.sofascore.com/list/category/football/slovakia/tournaments/json",
        list: " "
      },
      {
        countryName: "Slovenia",
        id: "slovenia",
        href: "https://www.sofascore.com/list/category/football/slovenia/tournaments/json",
        list: " "
      },
      {
        countryName: "South Africa",
        id: "south-africa",
        href: "https://www.sofascore.com/list/category/football/south-africa/tournaments/json",
        list: " "
      },
      {
        countryName: "South America",
        id: "south-america",
        href: "https://www.sofascore.com/list/category/football/south-america/tournaments/json",
        list: " "
      },
      {
        countryName: "South Korea",
        id: "south-korea",
        href: "https://www.sofascore.com/list/category/football/south-korea/tournaments/json",
        list: " "
      },
      {
        countryName: "Spain",
        id: "spain",
        href: "https://www.sofascore.com/list/category/football/spain/tournaments/json",
        list: " "
      },
      {
        countryName: "Spain Amateur",
        id: "spain-amateur",
        href: "https://www.sofascore.com/list/category/football/spain-amateur/tournaments/json",
        list: " "
      },
      {
        countryName: "Sweden",
        id: "sweden",
        href: "https://www.sofascore.com/list/category/football/sweden/tournaments/json",
        list: " "
      },
      {
        countryName: "Sweden Amateur",
        id: "sweden-amateur",
        href: "https://www.sofascore.com/list/category/football/sweden-amateur/tournaments/json",
        list: " "
      },
      {
        countryName: "Switzerland",
        id: "switzerland",
        href: "https://www.sofascore.com/list/category/football/switzerland/tournaments/json",
        list: " "
      },
      {
        countryName: "Tanzania",
        id: "tanzania",
        href: "https://www.sofascore.com/list/category/football/tanzania/tournaments/json",
        list: " "
      },
      {
        countryName: "Thailand",
        id: "thailand",
        href: "https://www.sofascore.com/list/category/football/thailand/tournaments/json",
        list: " "
      },
      {
        countryName: "Tunisia",
        id: "tunisia",
        href: "https://www.sofascore.com/list/category/football/tunisia/tournaments/json",
        list: " "
      },
      {
        countryName: "Turkey",
        id: "turkey",
        href: "https://www.sofascore.com/list/category/football/turkey/tournaments/json",
        list: " "
      },
      {
        countryName: "Turkey Amateur",
        id: "turkey-amateur",
        href: "https://www.sofascore.com/list/category/football/turkey-amateur/tournaments/json",
        list: " "
      },
      {
        countryName: "USA",
        id: "usa",
        href: "https://www.sofascore.com/list/category/football/usa/tournaments/json",
        list: " "
      },
      {
        countryName: "Uganda",
        id: "uganda",
        href: "https://www.sofascore.com/list/category/football/uganda/tournaments/json",
        list: " "
      },
      {
        countryName: "Ukraine",
        id: "ukraine",
        href: "https://www.sofascore.com/list/category/football/ukraine/tournaments/json",
        list: " "
      },
      {
        countryName: "United Arab Emirates",
        id: "united-arab-emirates",
        href: "https://www.sofascore.com/list/category/football/united-arab-emirates/tournaments/json",
        list: " "
      },
      {
        countryName: "Uruguay",
        id: "uruguay",
        href: "https://www.sofascore.com/list/category/football/uruguay/tournaments/json",
        list: " "
      },
      {
        countryName: "Uzbekistan",
        id: "uzbekistan",
        href: "https://www.sofascore.com/list/category/football/uzbekistan/tournaments/json",
        list: " "
      },
      {
        countryName: "Venezuela",
        id: "venezuela",
        href: "https://www.sofascore.com/list/category/football/venezuela/tournaments/json",
        list: " "
      },
      {
        countryName: "Vietnam",
        id: "vietnam",
        href: "https://www.sofascore.com/list/category/football/vietnam/tournaments/json",
        list: " "
      },
      {
        countryName: "Wales",
        id: "wales",
        href: "https://www.sofascore.com/list/category/football/wales/tournaments/json",
        list: " "
      },
      {
        countryName: "World",
        id: "world",
        href: "https://www.sofascore.com/list/category/football/world/tournaments/json",
        list: " "
      },
      {
        countryName: "Zambia",
        id: "zambia",
        href: "https://www.sofascore.com/list/category/football/zambia/tournaments/json",
        list: " "
      }
    ];

  return {
    all:function () {
      return data;
    },

    detail : function (id) {
      return $http.get('https://www.sofascore.com/list/category/football/'+id+'/tournaments/json')
    }
  // };
}
})
