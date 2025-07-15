const ERROR_MESSAGE = "Something went wrong. We have logged the error and will get the resolution."

const COUNTRY_CODE = [
   {
      "COUNTRY": "Afghanistan",
      "COUNTRYCODE": "93",
      "ISOCODES": "AF/AFG",
      "POPULATION": "29,121,286",
      "AREAKM2": "647,500",
      "GDP$USD": "20.65Billion"
   },
   {
      "COUNTRY": "Albania",
      "COUNTRYCODE": "355",
      "ISOCODES": "AL/ALB",
      "POPULATION": "2,986,952",
      "AREAKM2": "28,748",
      "GDP$USD": "12.8Billion"
   },
   {
      "COUNTRY": "Algeria",
      "COUNTRYCODE": "213",
      "ISOCODES": "DZ/DZA",
      "POPULATION": "34,586,184",
      "AREAKM2": "2,381,740",
      "GDP$USD": "215.7Billion"
   },
   {
      "COUNTRY": "AmericanSamoa",
      "COUNTRYCODE": "1-684",
      "ISOCODES": "AS/ASM",
      "POPULATION": "57,881",
      "AREAKM2": "199",
      "GDP$USD": "462.2Million"
   },
   {
      "COUNTRY": "Andorra",
      "COUNTRYCODE": "376",
      "ISOCODES": "AD/AND",
      "POPULATION": "84,000",
      "AREAKM2": "468",
      "GDP$USD": "4.8Billion"
   },
   {
      "COUNTRY": "Angola",
      "COUNTRYCODE": "244",
      "ISOCODES": "AO/AGO",
      "POPULATION": "13,068,161",
      "AREAKM2": "1,246,700",
      "GDP$USD": "124Billion"
   },
   {
      "COUNTRY": "Anguilla",
      "COUNTRYCODE": "1-264",
      "ISOCODES": "AI/AIA",
      "POPULATION": "13,254",
      "AREAKM2": "102",
      "GDP$USD": "175.4Million"
   },
   {
      "COUNTRY": "Antarctica",
      "COUNTRYCODE": "672",
      "ISOCODES": "AQ/ATA",
      "POPULATION": "0",
      "AREAKM2": "14,000,000"
   },
   {
      "COUNTRY": "AntiguaandBarbuda",
      "COUNTRYCODE": "1-268",
      "ISOCODES": "AG/ATG",
      "POPULATION": "86,754",
      "AREAKM2": "443",
      "GDP$USD": "1.22Billion"
   },
   {
      "COUNTRY": "Argentina",
      "COUNTRYCODE": "54",
      "ISOCODES": "AR/ARG",
      "POPULATION": "41,343,201",
      "AREAKM2": "2,766,890",
      "GDP$USD": "484.6Billion"
   },
   {
      "COUNTRY": "Armenia",
      "COUNTRYCODE": "374",
      "ISOCODES": "AM/ARM",
      "POPULATION": "2,968,000",
      "AREAKM2": "29,800",
      "GDP$USD": "10.44Billion"
   },
   {
      "COUNTRY": "Aruba",
      "COUNTRYCODE": "297",
      "ISOCODES": "AW/ABW",
      "POPULATION": "71,566",
      "AREAKM2": "193",
      "GDP$USD": "2.516Billion"
   },
   {
      "COUNTRY": "Australia",
      "COUNTRYCODE": "61",
      "ISOCODES": "AU/AUS",
      "POPULATION": "21,515,754",
      "AREAKM2": "7,686,850",
      "GDP$USD": "1.488Trillion"
   },
   {
      "COUNTRY": "Austria",
      "COUNTRYCODE": "43",
      "ISOCODES": "AT/AUT",
      "POPULATION": "8,205,000",
      "AREAKM2": "83,858",
      "GDP$USD": "417.9Billion"
   },
   {
      "COUNTRY": "Azerbaijan",
      "COUNTRYCODE": "994",
      "ISOCODES": "AZ/AZE",
      "POPULATION": "8,303,512",
      "AREAKM2": "86,600",
      "GDP$USD": "76.01Billion"
   },
   {
      "COUNTRY": "Bahamas",
      "COUNTRYCODE": "1-242",
      "ISOCODES": "BS/BHS",
      "POPULATION": "301,790",
      "AREAKM2": "13,940",
      "GDP$USD": "8.373Billion"
   },
   {
      "COUNTRY": "Bahrain",
      "COUNTRYCODE": "973",
      "ISOCODES": "BH/BHR",
      "POPULATION": "738,004",
      "AREAKM2": "665",
      "GDP$USD": "28.36Billion"
   },
   {
      "COUNTRY": "Bangladesh",
      "COUNTRYCODE": "880",
      "ISOCODES": "BD/BGD",
      "POPULATION": "156,118,464",
      "AREAKM2": "144,000",
      "GDP$USD": "140.2Billion"
   },
   {
      "COUNTRY": "Barbados",
      "COUNTRYCODE": "1-246",
      "ISOCODES": "BB/BRB",
      "POPULATION": "285,653",
      "AREAKM2": "431",
      "GDP$USD": "4.262Billion"
   },
   {
      "COUNTRY": "Belarus",
      "COUNTRYCODE": "375",
      "ISOCODES": "BY/BLR",
      "POPULATION": "9,685,000",
      "AREAKM2": "207,600",
      "GDP$USD": "69.24Billion"
   },
   {
      "COUNTRY": "Belgium",
      "COUNTRYCODE": "32",
      "ISOCODES": "BE/BEL",
      "POPULATION": "10,403,000",
      "AREAKM2": "30,510",
      "GDP$USD": "507.4Billion"
   },
   {
      "COUNTRY": "Belize",
      "COUNTRYCODE": "501",
      "ISOCODES": "BZ/BLZ",
      "POPULATION": "314,522",
      "AREAKM2": "22,966",
      "GDP$USD": "1.637Billion"
   },
   {
      "COUNTRY": "Benin",
      "COUNTRYCODE": "229",
      "ISOCODES": "BJ/BEN",
      "POPULATION": "9,056,010",
      "AREAKM2": "112,620",
      "GDP$USD": "8.359Billion"
   },
   {
      "COUNTRY": "Bermuda",
      "COUNTRYCODE": "1-441",
      "ISOCODES": "BM/BMU",
      "POPULATION": "65,365",
      "AREAKM2": "53",
      "GDP$USD": "5.6Billion"
   },
   {
      "COUNTRY": "Bhutan",
      "COUNTRYCODE": "975",
      "ISOCODES": "BT/BTN",
      "POPULATION": "699,847",
      "AREAKM2": "47,000",
      "GDP$USD": "2.133Billion"
   },
   {
      "COUNTRY": "Bolivia",
      "COUNTRYCODE": "591",
      "ISOCODES": "BO/BOL",
      "POPULATION": "9,947,418",
      "AREAKM2": "1,098,580",
      "GDP$USD": "30.79Billion"
   },
   {
      "COUNTRY": "BosniaandHerzegovina",
      "COUNTRYCODE": "387",
      "ISOCODES": "BA/BIH",
      "POPULATION": "4,590,000",
      "AREAKM2": "51,129",
      "GDP$USD": "18.87Billion"
   },
   {
      "COUNTRY": "Botswana",
      "COUNTRYCODE": "267",
      "ISOCODES": "BW/BWA",
      "POPULATION": "2,029,307",
      "AREAKM2": "600,370",
      "GDP$USD": "15.53Billion"
   },
   {
      "COUNTRY": "Brazil",
      "COUNTRYCODE": "55",
      "ISOCODES": "BR/BRA",
      "POPULATION": "201,103,330",
      "AREAKM2": "8,511,965",
      "GDP$USD": "2.19Trillion"
   },
   {
      "COUNTRY": "BritishIndianOceanTerritory",
      "COUNTRYCODE": "246",
      "ISOCODES": "IO/IOT",
      "POPULATION": "4,000",
      "AREAKM2": "60"
   },
   {
      "COUNTRY": "BritishVirginIslands",
      "COUNTRYCODE": "1-284",
      "ISOCODES": "VG/VGB",
      "POPULATION": "21,730",
      "AREAKM2": "153",
      "GDP$USD": "1.095Billion"
   },
   {
      "COUNTRY": "Brunei",
      "COUNTRYCODE": "673",
      "ISOCODES": "BN/BRN",
      "POPULATION": "395,027",
      "AREAKM2": "5,770",
      "GDP$USD": "16.56Billion"
   },
   {
      "COUNTRY": "Bulgaria",
      "COUNTRYCODE": "359",
      "ISOCODES": "BG/BGR",
      "POPULATION": "7,148,785",
      "AREAKM2": "110,910",
      "GDP$USD": "53.7Billion"
   },
   {
      "COUNTRY": "BurkinaFaso",
      "COUNTRYCODE": "226",
      "ISOCODES": "BF/BFA",
      "POPULATION": "16,241,811",
      "AREAKM2": "274,200",
      "GDP$USD": "12.13Billion"
   },
   {
      "COUNTRY": "Burundi",
      "COUNTRYCODE": "257",
      "ISOCODES": "BI/BDI",
      "POPULATION": "9,863,117",
      "AREAKM2": "27,830",
      "GDP$USD": "2.676Billion"
   },
   {
      "COUNTRY": "Cambodia",
      "COUNTRYCODE": "855",
      "ISOCODES": "KH/KHM",
      "POPULATION": "14,453,680",
      "AREAKM2": "181,040",
      "GDP$USD": "15.64Billion"
   },
   {
      "COUNTRY": "Cameroon",
      "COUNTRYCODE": "237",
      "ISOCODES": "CM/CMR",
      "POPULATION": "19,294,149",
      "AREAKM2": "475,440",
      "GDP$USD": "27.88Billion"
   },
   {
      "COUNTRY": "Canada",
      "COUNTRYCODE": "1",
      "ISOCODES": "CA/CAN",
      "POPULATION": "33,679,000",
      "AREAKM2": "9,984,670",
      "GDP$USD": "1.825Trillion"
   },
   {
      "COUNTRY": "CapeVerde",
      "COUNTRYCODE": "238",
      "ISOCODES": "CV/CPV",
      "POPULATION": "508,659",
      "AREAKM2": "4,033",
      "GDP$USD": "1.955Billion"
   },
   {
      "COUNTRY": "CaymanIslands",
      "COUNTRYCODE": "1-345",
      "ISOCODES": "KY/CYM",
      "POPULATION": "44,270",
      "AREAKM2": "262",
      "GDP$USD": "2.25Billion"
   },
   {
      "COUNTRY": "CentralAfricanRepublic",
      "COUNTRYCODE": "236",
      "ISOCODES": "CF/CAF",
      "POPULATION": "4,844,927",
      "AREAKM2": "622,984",
      "GDP$USD": "2.05Billion"
   },
   {
      "COUNTRY": "Chad",
      "COUNTRYCODE": "235",
      "ISOCODES": "TD/TCD",
      "POPULATION": "10,543,464",
      "AREAKM2": "1,284,000",
      "GDP$USD": "13.59Billion"
   },
   {
      "COUNTRY": "Chile",
      "COUNTRYCODE": "56",
      "ISOCODES": "CL/CHL",
      "POPULATION": "16,746,491",
      "AREAKM2": "756,950",
      "GDP$USD": "281.7Billion"
   },
   {
      "COUNTRY": "China",
      "COUNTRYCODE": "86",
      "ISOCODES": "CN/CHN",
      "POPULATION": "1,330,044,000",
      "AREAKM2": "9,596,960",
      "GDP$USD": "9.33Trillion"
   },
   {
      "COUNTRY": "ChristmasIsland",
      "COUNTRYCODE": "61",
      "ISOCODES": "CX/CXR",
      "POPULATION": "1,500",
      "AREAKM2": "135"
   },
   {
      "COUNTRY": "CocosIslands",
      "COUNTRYCODE": "61",
      "ISOCODES": "CC/CCK",
      "POPULATION": "628",
      "AREAKM2": "14"
   },
   {
      "COUNTRY": "Colombia",
      "COUNTRYCODE": "57",
      "ISOCODES": "CO/COL",
      "POPULATION": "47,790,000",
      "AREAKM2": "1,138,910",
      "GDP$USD": "369.2Billion"
   },
   {
      "COUNTRY": "Comoros",
      "COUNTRYCODE": "269",
      "ISOCODES": "KM/COM",
      "POPULATION": "773,407",
      "AREAKM2": "2,170",
      "GDP$USD": "658Million"
   },
   {
      "COUNTRY": "CookIslands",
      "COUNTRYCODE": "682",
      "ISOCODES": "CK/COK",
      "POPULATION": "21,388",
      "AREAKM2": "240",
      "GDP$USD": "183.2Million"
   },
   {
      "COUNTRY": "CostaRica",
      "COUNTRYCODE": "506",
      "ISOCODES": "CR/CRI",
      "POPULATION": "4,516,220",
      "AREAKM2": "51,100",
      "GDP$USD": "48.51Billion"
   },
   {
      "COUNTRY": "Croatia",
      "COUNTRYCODE": "385",
      "ISOCODES": "HR/HRV",
      "POPULATION": "4,491,000",
      "AREAKM2": "56,542",
      "GDP$USD": "59.14Billion"
   },
   {
      "COUNTRY": "Cuba",
      "COUNTRYCODE": "53",
      "ISOCODES": "CU/CUB",
      "POPULATION": "11,423,000",
      "AREAKM2": "110,860",
      "GDP$USD": "72.3Billion"
   },
   {
      "COUNTRY": "Curacao",
      "COUNTRYCODE": "599",
      "ISOCODES": "CW/CUW",
      "POPULATION": "141,766",
      "AREAKM2": "444",
      "GDP$USD": "5.6Billion"
   },
   {
      "COUNTRY": "Cyprus",
      "COUNTRYCODE": "357",
      "ISOCODES": "CY/CYP",
      "POPULATION": "1,102,677",
      "AREAKM2": "9,250",
      "GDP$USD": "21.78Billion"
   },
   {
      "COUNTRY": "CzechRepublic",
      "COUNTRYCODE": "420",
      "ISOCODES": "CZ/CZE",
      "POPULATION": "10,476,000",
      "AREAKM2": "78,866",
      "GDP$USD": "194.8Billion"
   },
   {
      "COUNTRY": "DemocraticRepublicoftheCongo",
      "COUNTRYCODE": "243",
      "ISOCODES": "CD/COD",
      "POPULATION": "70,916,439",
      "AREAKM2": "2,345,410",
      "GDP$USD": "18.56Billion"
   },
   {
      "COUNTRY": "Denmark",
      "COUNTRYCODE": "45",
      "ISOCODES": "DK/DNK",
      "POPULATION": "5,484,000",
      "AREAKM2": "43,094",
      "GDP$USD": "324.3Billion"
   },
   {
      "COUNTRY": "Djibouti",
      "COUNTRYCODE": "253",
      "ISOCODES": "DJ/DJI",
      "POPULATION": "740,528",
      "AREAKM2": "23,000",
      "GDP$USD": "1.459Billion"
   },
   {
      "COUNTRY": "Dominica",
      "COUNTRYCODE": "1-767",
      "ISOCODES": "DM/DMA",
      "POPULATION": "72,813",
      "AREAKM2": "754",
      "GDP$USD": "495Million"
   },
   {
      "COUNTRY": "DominicanRepublic",
      "COUNTRYCODE": "1-809,1-829,1-849",
      "ISOCODES": "DO/DOM",
      "POPULATION": "9,823,821",
      "AREAKM2": "48,730",
      "GDP$USD": "59.27Billion"
   },
   {
      "COUNTRY": "EastTimor",
      "COUNTRYCODE": "670",
      "ISOCODES": "TL/TLS",
      "POPULATION": "1,154,625",
      "AREAKM2": "15,007",
      "GDP$USD": "6.129Billion"
   },
   {
      "COUNTRY": "Ecuador",
      "COUNTRYCODE": "593",
      "ISOCODES": "EC/ECU",
      "POPULATION": "14,790,608",
      "AREAKM2": "283,560",
      "GDP$USD": "91.41Billion"
   },
   {
      "COUNTRY": "Egypt",
      "COUNTRYCODE": "20",
      "ISOCODES": "EG/EGY",
      "POPULATION": "80,471,869",
      "AREAKM2": "1,001,450",
      "GDP$USD": "262Billion"
   },
   {
      "COUNTRY": "ElSalvador",
      "COUNTRYCODE": "503",
      "ISOCODES": "SV/SLV",
      "POPULATION": "6,052,064",
      "AREAKM2": "21,040",
      "GDP$USD": "24.67Billion"
   },
   {
      "COUNTRY": "EquatorialGuinea",
      "COUNTRYCODE": "240",
      "ISOCODES": "GQ/GNQ",
      "POPULATION": "1,014,999",
      "AREAKM2": "28,051",
      "GDP$USD": "17.08Billion"
   },
   {
      "COUNTRY": "Eritrea",
      "COUNTRYCODE": "291",
      "ISOCODES": "ER/ERI",
      "POPULATION": "5,792,984",
      "AREAKM2": "121,320",
      "GDP$USD": "3.438Billion"
   },
   {
      "COUNTRY": "Estonia",
      "COUNTRYCODE": "372",
      "ISOCODES": "EE/EST",
      "POPULATION": "1,291,170",
      "AREAKM2": "45,226",
      "GDP$USD": "24.28Billion"
   },
   {
      "COUNTRY": "Ethiopia",
      "COUNTRYCODE": "251",
      "ISOCODES": "ET/ETH",
      "POPULATION": "88,013,491",
      "AREAKM2": "1,127,127",
      "GDP$USD": "47.34Billion"
   },
   {
      "COUNTRY": "FalklandIslands",
      "COUNTRYCODE": "500",
      "ISOCODES": "FK/FLK",
      "POPULATION": "2,638",
      "AREAKM2": "12,173",
      "GDP$USD": "164.5Million"
   },
   {
      "COUNTRY": "FaroeIslands",
      "COUNTRYCODE": "298",
      "ISOCODES": "FO/FRO",
      "POPULATION": "48,228",
      "AREAKM2": "1,399",
      "GDP$USD": "2.32Billion"
   },
   {
      "COUNTRY": "Fiji",
      "COUNTRYCODE": "679",
      "ISOCODES": "FJ/FJI",
      "POPULATION": "875,983",
      "AREAKM2": "18,270",
      "GDP$USD": "4.218Billion"
   },
   {
      "COUNTRY": "Finland",
      "COUNTRYCODE": "358",
      "ISOCODES": "FI/FIN",
      "POPULATION": "5,244,000",
      "AREAKM2": "337,030",
      "GDP$USD": "259.6Billion"
   },
   {
      "COUNTRY": "France",
      "COUNTRYCODE": "33",
      "ISOCODES": "FR/FRA",
      "POPULATION": "64,768,389",
      "AREAKM2": "547,030",
      "GDP$USD": "2.739Trillion"
   },
   {
      "COUNTRY": "FrenchPolynesia",
      "COUNTRYCODE": "689",
      "ISOCODES": "PF/PYF",
      "POPULATION": "270,485",
      "AREAKM2": "4,167",
      "GDP$USD": "5.65Billion"
   },
   {
      "COUNTRY": "Gabon",
      "COUNTRYCODE": "241",
      "ISOCODES": "GA/GAB",
      "POPULATION": "1,545,255",
      "AREAKM2": "267,667",
      "GDP$USD": "19.97Billion"
   },
   {
      "COUNTRY": "Gambia",
      "COUNTRYCODE": "220",
      "ISOCODES": "GM/GMB",
      "POPULATION": "1,593,256",
      "AREAKM2": "11,300",
      "GDP$USD": "896Million"
   },
   {
      "COUNTRY": "Georgia",
      "COUNTRYCODE": "995",
      "ISOCODES": "GE/GEO",
      "POPULATION": "4,630,000",
      "AREAKM2": "69,700",
      "GDP$USD": "15.95Billion"
   },
   {
      "COUNTRY": "Germany",
      "COUNTRYCODE": "49",
      "ISOCODES": "DE/DEU",
      "POPULATION": "81,802,257",
      "AREAKM2": "357,021",
      "GDP$USD": "3.593Trillion"
   },
   {
      "COUNTRY": "Ghana",
      "COUNTRYCODE": "233",
      "ISOCODES": "GH/GHA",
      "POPULATION": "24,339,838",
      "AREAKM2": "239,460",
      "GDP$USD": "45.55Billion"
   },
   {
      "COUNTRY": "Gibraltar",
      "COUNTRYCODE": "350",
      "ISOCODES": "GI/GIB",
      "POPULATION": "27,884",
      "AREAKM2": "7",
      "GDP$USD": "1.106Billion"
   },
   {
      "COUNTRY": "Greece",
      "COUNTRYCODE": "30",
      "ISOCODES": "GR/GRC",
      "POPULATION": "11,000,000",
      "AREAKM2": "131,940",
      "GDP$USD": "243.3Billion"
   },
   {
      "COUNTRY": "Greenland",
      "COUNTRYCODE": "299",
      "ISOCODES": "GL/GRL",
      "POPULATION": "56,375",
      "AREAKM2": "2,166,086",
      "GDP$USD": "2.16Billion"
   },
   {
      "COUNTRY": "Grenada",
      "COUNTRYCODE": "1-473",
      "ISOCODES": "GD/GRD",
      "POPULATION": "107,818",
      "AREAKM2": "344",
      "GDP$USD": "811Million"
   },
   {
      "COUNTRY": "Guam",
      "COUNTRYCODE": "1-671",
      "ISOCODES": "GU/GUM",
      "POPULATION": "159,358",
      "AREAKM2": "549",
      "GDP$USD": "4.6Billion"
   },
   {
      "COUNTRY": "Guatemala",
      "COUNTRYCODE": "502",
      "ISOCODES": "GT/GTM",
      "POPULATION": "13,550,440",
      "AREAKM2": "108,890",
      "GDP$USD": "53.9Billion"
   },
   {
      "COUNTRY": "Guernsey",
      "COUNTRYCODE": "44-1481",
      "ISOCODES": "GG/GGY",
      "POPULATION": "65,228",
      "AREAKM2": "78",
      "GDP$USD": "2.742Billion"
   },
   {
      "COUNTRY": "Guinea",
      "COUNTRYCODE": "224",
      "ISOCODES": "GN/GIN",
      "POPULATION": "10,324,025",
      "AREAKM2": "245,857",
      "GDP$USD": "6.544Billion"
   },
   {
      "COUNTRY": "Guinea-Bissau",
      "COUNTRYCODE": "245",
      "ISOCODES": "GW/GNB",
      "POPULATION": "1,565,126",
      "AREAKM2": "36,120",
      "GDP$USD": "880Million"
   },
   {
      "COUNTRY": "Guyana",
      "COUNTRYCODE": "592",
      "ISOCODES": "GY/GUY",
      "POPULATION": "748,486",
      "AREAKM2": "214,970",
      "GDP$USD": "3.02Billion"
   },
   {
      "COUNTRY": "Haiti",
      "COUNTRYCODE": "509",
      "ISOCODES": "HT/HTI",
      "POPULATION": "9,648,924",
      "AREAKM2": "27,750",
      "GDP$USD": "8.287Billion"
   },
   {
      "COUNTRY": "Honduras",
      "COUNTRYCODE": "504",
      "ISOCODES": "HN/HND",
      "POPULATION": "7,989,415",
      "AREAKM2": "112,090",
      "GDP$USD": "18.88Billion"
   },
   {
      "COUNTRY": "HongKong",
      "COUNTRYCODE": "852",
      "ISOCODES": "HK/HKG",
      "POPULATION": "6,898,686",
      "AREAKM2": "1,092",
      "GDP$USD": "272.1Billion"
   },
   {
      "COUNTRY": "Hungary",
      "COUNTRYCODE": "36",
      "ISOCODES": "HU/HUN",
      "POPULATION": "9,982,000",
      "AREAKM2": "93,030",
      "GDP$USD": "130.6Billion"
   },
   {
      "COUNTRY": "Iceland",
      "COUNTRYCODE": "354",
      "ISOCODES": "IS/ISL",
      "POPULATION": "308,910",
      "AREAKM2": "103,000",
      "GDP$USD": "14.59Billion"
   },
   {
      "COUNTRY": "India",
      "COUNTRYCODE": "91",
      "ISOCODES": "IN/IND",
      "POPULATION": "1,173,108,018",
      "AREAKM2": "3,287,590",
      "GDP$USD": "1.67Trillion"
   },
   {
      "COUNTRY": "Indonesia",
      "COUNTRYCODE": "62",
      "ISOCODES": "ID/IDN",
      "POPULATION": "242,968,342",
      "AREAKM2": "1,919,440",
      "GDP$USD": "867.5Billion"
   },
   {
      "COUNTRY": "Iran",
      "COUNTRYCODE": "98",
      "ISOCODES": "IR/IRN",
      "POPULATION": "76,923,300",
      "AREAKM2": "1,648,000",
      "GDP$USD": "411.9Billion"
   },
   {
      "COUNTRY": "Iraq",
      "COUNTRYCODE": "964",
      "ISOCODES": "IQ/IRQ",
      "POPULATION": "29,671,605",
      "AREAKM2": "437,072",
      "GDP$USD": "221.8Billion"
   },
   {
      "COUNTRY": "Ireland",
      "COUNTRYCODE": "353",
      "ISOCODES": "IE/IRL",
      "POPULATION": "4,622,917",
      "AREAKM2": "70,280",
      "GDP$USD": "220.9Billion"
   },
   {
      "COUNTRY": "IsleofMan",
      "COUNTRYCODE": "44-1624",
      "ISOCODES": "IM/IMN",
      "POPULATION": "75,049",
      "AREAKM2": "572",
      "GDP$USD": "4.076Billion"
   },
   {
      "COUNTRY": "Israel",
      "COUNTRYCODE": "972",
      "ISOCODES": "IL/ISR",
      "POPULATION": "7,353,985",
      "AREAKM2": "20,770",
      "GDP$USD": "272.7Billion"
   },
   {
      "COUNTRY": "Italy",
      "COUNTRYCODE": "39",
      "ISOCODES": "IT/ITA",
      "POPULATION": "60,340,328",
      "AREAKM2": "301,230",
      "GDP$USD": "2.068Trillion"
   },
   {
      "COUNTRY": "IvoryCoast",
      "COUNTRYCODE": "225",
      "ISOCODES": "CI/CIV",
      "POPULATION": "21,058,798",
      "AREAKM2": "322,460",
      "GDP$USD": "28.28Billion"
   },
   {
      "COUNTRY": "Jamaica",
      "COUNTRYCODE": "1-876",
      "ISOCODES": "JM/JAM",
      "POPULATION": "2,847,232",
      "AREAKM2": "10,991",
      "GDP$USD": "14.39Billion"
   },
   {
      "COUNTRY": "Japan",
      "COUNTRYCODE": "81",
      "ISOCODES": "JP/JPN",
      "POPULATION": "127,288,000",
      "AREAKM2": "377,835",
      "GDP$USD": "5.007Trillion"
   },
   {
      "COUNTRY": "Jersey",
      "COUNTRYCODE": "44-1534",
      "ISOCODES": "JE/JEY",
      "POPULATION": "90,812",
      "AREAKM2": "116",
      "GDP$USD": "5.1Billion"
   },
   {
      "COUNTRY": "Jordan",
      "COUNTRYCODE": "962",
      "ISOCODES": "JO/JOR",
      "POPULATION": "6,407,085",
      "AREAKM2": "92,300",
      "GDP$USD": "34.08Billion"
   },
   {
      "COUNTRY": "Kazakhstan",
      "COUNTRYCODE": "7",
      "ISOCODES": "KZ/KAZ",
      "POPULATION": "15,340,000",
      "AREAKM2": "2,717,300",
      "GDP$USD": "224.9Billion"
   },
   {
      "COUNTRY": "Kenya",
      "COUNTRYCODE": "254",
      "ISOCODES": "KE/KEN",
      "POPULATION": "40,046,566",
      "AREAKM2": "582,650",
      "GDP$USD": "45.31Billion"
   },
   {
      "COUNTRY": "Kiribati",
      "COUNTRYCODE": "686",
      "ISOCODES": "KI/KIR",
      "POPULATION": "92,533",
      "AREAKM2": "811",
      "GDP$USD": "173Million"
   },
   {
      "COUNTRY": "Kosovo",
      "COUNTRYCODE": "383",
      "ISOCODES": "XK/XKX",
      "POPULATION": "1,800,000",
      "AREAKM2": "10,887",
      "GDP$USD": "7.15Billion"
   },
   {
      "COUNTRY": "Kuwait",
      "COUNTRYCODE": "965",
      "ISOCODES": "KW/KWT",
      "POPULATION": "2,789,132",
      "AREAKM2": "17,820",
      "GDP$USD": "179.5Billion"
   },
   {
      "COUNTRY": "Kyrgyzstan",
      "COUNTRYCODE": "996",
      "ISOCODES": "KG/KGZ",
      "POPULATION": "5,508,626",
      "AREAKM2": "198,500",
      "GDP$USD": "7.234Billion"
   },
   {
      "COUNTRY": "Laos",
      "COUNTRYCODE": "856",
      "ISOCODES": "LA/LAO",
      "POPULATION": "6,368,162",
      "AREAKM2": "236,800",
      "GDP$USD": "10.1Billion"
   },
   {
      "COUNTRY": "Latvia",
      "COUNTRYCODE": "371",
      "ISOCODES": "LV/LVA",
      "POPULATION": "2,217,969",
      "AREAKM2": "64,589",
      "GDP$USD": "30.38Billion"
   },
   {
      "COUNTRY": "Lebanon",
      "COUNTRYCODE": "961",
      "ISOCODES": "LB/LBN",
      "POPULATION": "4,125,247",
      "AREAKM2": "10,400",
      "GDP$USD": "43.49Billion"
   },
   {
      "COUNTRY": "Lesotho",
      "COUNTRYCODE": "266",
      "ISOCODES": "LS/LSO",
      "POPULATION": "1,919,552",
      "AREAKM2": "30,355",
      "GDP$USD": "2.457Billion"
   },
   {
      "COUNTRY": "Liberia",
      "COUNTRYCODE": "231",
      "ISOCODES": "LR/LBR",
      "POPULATION": "3,685,076",
      "AREAKM2": "111,370",
      "GDP$USD": "1.977Billion"
   },
   {
      "COUNTRY": "Libya",
      "COUNTRYCODE": "218",
      "ISOCODES": "LY/LBY",
      "POPULATION": "6,461,454",
      "AREAKM2": "1,759,540",
      "GDP$USD": "70.92Billion"
   },
   {
      "COUNTRY": "Liechtenstein",
      "COUNTRYCODE": "423",
      "ISOCODES": "LI/LIE",
      "POPULATION": "35,000",
      "AREAKM2": "160",
      "GDP$USD": "5.113Billion"
   },
   {
      "COUNTRY": "Lithuania",
      "COUNTRYCODE": "370",
      "ISOCODES": "LT/LTU",
      "POPULATION": "2,944,459",
      "AREAKM2": "65,200",
      "GDP$USD": "46.71Billion"
   },
   {
      "COUNTRY": "Luxembourg",
      "COUNTRYCODE": "352",
      "ISOCODES": "LU/LUX",
      "POPULATION": "497,538",
      "AREAKM2": "2,586",
      "GDP$USD": "60.54Billion"
   },
   {
      "COUNTRY": "Macau",
      "COUNTRYCODE": "853",
      "ISOCODES": "MO/MAC",
      "POPULATION": "449,198",
      "AREAKM2": "254",
      "GDP$USD": "51.68Billion"
   },
   {
      "COUNTRY": "Macedonia",
      "COUNTRYCODE": "389",
      "ISOCODES": "MK/MKD",
      "POPULATION": "2,062,294",
      "AREAKM2": "25,333",
      "GDP$USD": "10.65Billion"
   },
   {
      "COUNTRY": "Madagascar",
      "COUNTRYCODE": "261",
      "ISOCODES": "MG/MDG",
      "POPULATION": "21,281,844",
      "AREAKM2": "587,040",
      "GDP$USD": "10.53Billion"
   },
   {
      "COUNTRY": "Malawi",
      "COUNTRYCODE": "265",
      "ISOCODES": "MW/MWI",
      "POPULATION": "15,447,500",
      "AREAKM2": "118,480",
      "GDP$USD": "3.683Billion"
   },
   {
      "COUNTRY": "Malaysia",
      "COUNTRYCODE": "60",
      "ISOCODES": "MY/MYS",
      "POPULATION": "28,274,729",
      "AREAKM2": "329,750",
      "GDP$USD": "312.4Billion"
   },
   {
      "COUNTRY": "Maldives",
      "COUNTRYCODE": "960",
      "ISOCODES": "MV/MDV",
      "POPULATION": "395,650",
      "AREAKM2": "300",
      "GDP$USD": "2.27Billion"
   },
   {
      "COUNTRY": "Mali",
      "COUNTRYCODE": "223",
      "ISOCODES": "ML/MLI",
      "POPULATION": "13,796,354",
      "AREAKM2": "1,240,000",
      "GDP$USD": "11.37Billion"
   },
   {
      "COUNTRY": "Malta",
      "COUNTRYCODE": "356",
      "ISOCODES": "MT/MLT",
      "POPULATION": "403,000",
      "AREAKM2": "316",
      "GDP$USD": "9.541Billion"
   },
   {
      "COUNTRY": "MarshallIslands",
      "COUNTRYCODE": "692",
      "ISOCODES": "MH/MHL",
      "POPULATION": "65,859",
      "AREAKM2": "181",
      "GDP$USD": "193Million"
   },
   {
      "COUNTRY": "Mauritania",
      "COUNTRYCODE": "222",
      "ISOCODES": "MR/MRT",
      "POPULATION": "3,205,060",
      "AREAKM2": "1,030,700",
      "GDP$USD": "4.183Billion"
   },
   {
      "COUNTRY": "Mauritius",
      "COUNTRYCODE": "230",
      "ISOCODES": "MU/MUS",
      "POPULATION": "1,294,104",
      "AREAKM2": "2,040",
      "GDP$USD": "11.9Billion"
   },
   {
      "COUNTRY": "Mayotte",
      "COUNTRYCODE": "262",
      "ISOCODES": "YT/MYT",
      "POPULATION": "159,042",
      "AREAKM2": "374"
   },
   {
      "COUNTRY": "Mexico",
      "COUNTRYCODE": "52",
      "ISOCODES": "MX/MEX",
      "POPULATION": "112,468,855",
      "AREAKM2": "1,972,550",
      "GDP$USD": "1.327Trillion"
   },
   {
      "COUNTRY": "Micronesia",
      "COUNTRYCODE": "691",
      "ISOCODES": "FM/FSM",
      "POPULATION": "107,708",
      "AREAKM2": "702",
      "GDP$USD": "339Million"
   },
   {
      "COUNTRY": "Moldova",
      "COUNTRYCODE": "373",
      "ISOCODES": "MD/MDA",
      "POPULATION": "4,324,000",
      "AREAKM2": "33,843",
      "GDP$USD": "7.932Billion"
   },
   {
      "COUNTRY": "Monaco",
      "COUNTRYCODE": "377",
      "ISOCODES": "MC/MCO",
      "POPULATION": "32,965",
      "AREAKM2": "2",
      "GDP$USD": "5.748Billion"
   },
   {
      "COUNTRY": "Mongolia",
      "COUNTRYCODE": "976",
      "ISOCODES": "MN/MNG",
      "POPULATION": "3,086,918",
      "AREAKM2": "1,565,000",
      "GDP$USD": "11.14Billion"
   },
   {
      "COUNTRY": "Montenegro",
      "COUNTRYCODE": "382",
      "ISOCODES": "ME/MNE",
      "POPULATION": "666,730",
      "AREAKM2": "14,026",
      "GDP$USD": "4.518Billion"
   },
   {
      "COUNTRY": "Montserrat",
      "COUNTRYCODE": "1-664",
      "ISOCODES": "MS/MSR",
      "POPULATION": "9,341",
      "AREAKM2": "102"
   },
   {
      "COUNTRY": "Morocco",
      "COUNTRYCODE": "212",
      "ISOCODES": "MA/MAR",
      "POPULATION": "31,627,428",
      "AREAKM2": "446,550",
      "GDP$USD": "104.8Billion"
   },
   {
      "COUNTRY": "Mozambique",
      "COUNTRYCODE": "258",
      "ISOCODES": "MZ/MOZ",
      "POPULATION": "22,061,451",
      "AREAKM2": "801,590",
      "GDP$USD": "14.67Billion"
   },
   {
      "COUNTRY": "Myanmar",
      "COUNTRYCODE": "95",
      "ISOCODES": "MM/MMR",
      "POPULATION": "53,414,374",
      "AREAKM2": "678,500",
      "GDP$USD": "59.43Billion"
   },
   {
      "COUNTRY": "Namibia",
      "COUNTRYCODE": "264",
      "ISOCODES": "NA/NAM",
      "POPULATION": "2,128,471",
      "AREAKM2": "825,418",
      "GDP$USD": "12.3Billion"
   },
   {
      "COUNTRY": "Nauru",
      "COUNTRYCODE": "674",
      "ISOCODES": "NR/NRU",
      "POPULATION": "10,065",
      "AREAKM2": "21"
   },
   {
      "COUNTRY": "Nepal",
      "COUNTRYCODE": "977",
      "ISOCODES": "NP/NPL",
      "POPULATION": "28,951,852",
      "AREAKM2": "140,800",
      "GDP$USD": "19.34Billion"
   },
   {
      "COUNTRY": "Netherlands",
      "COUNTRYCODE": "31",
      "ISOCODES": "NL/NLD",
      "POPULATION": "16,645,000",
      "AREAKM2": "41,526",
      "GDP$USD": "722.3Billion"
   },
   {
      "COUNTRY": "NetherlandsAntilles",
      "COUNTRYCODE": "599",
      "ISOCODES": "AN/ANT",
      "POPULATION": "136,197",
      "AREAKM2": "960"
   },
   {
      "COUNTRY": "NewCaledonia",
      "COUNTRYCODE": "687",
      "ISOCODES": "NC/NCL",
      "POPULATION": "216,494",
      "AREAKM2": "19,060",
      "GDP$USD": "9.28Billion"
   },
   {
      "COUNTRY": "NewZealand",
      "COUNTRYCODE": "64",
      "ISOCODES": "NZ/NZL",
      "POPULATION": "4,252,277",
      "AREAKM2": "268,680",
      "GDP$USD": "181.1Billion"
   },
   {
      "COUNTRY": "Nicaragua",
      "COUNTRYCODE": "505",
      "ISOCODES": "NI/NIC",
      "POPULATION": "5,995,928",
      "AREAKM2": "129,494",
      "GDP$USD": "11.26Billion"
   },
   {
      "COUNTRY": "Niger",
      "COUNTRYCODE": "227",
      "ISOCODES": "NE/NER",
      "POPULATION": "15,878,271",
      "AREAKM2": "1,267,000",
      "GDP$USD": "7.304Billion"
   },
   {
      "COUNTRY": "Nigeria",
      "COUNTRYCODE": "234",
      "ISOCODES": "NG/NGA",
      "POPULATION": "154,000,000",
      "AREAKM2": "923,768",
      "GDP$USD": "502Billion"
   },
   {
      "COUNTRY": "Niue",
      "COUNTRYCODE": "683",
      "ISOCODES": "NU/NIU",
      "POPULATION": "2,166",
      "AREAKM2": "260",
      "GDP$USD": "10.01Million"
   },
   {
      "COUNTRY": "NorthKorea",
      "COUNTRYCODE": "850",
      "ISOCODES": "KP/PRK",
      "POPULATION": "22,912,177",
      "AREAKM2": "120,540",
      "GDP$USD": "28Billion"
   },
   {
      "COUNTRY": "NorthernMarianaIslands",
      "COUNTRYCODE": "1-670",
      "ISOCODES": "MP/MNP",
      "POPULATION": "53,883",
      "AREAKM2": "477",
      "GDP$USD": "733Million"
   },
   {
      "COUNTRY": "Norway",
      "COUNTRYCODE": "47",
      "ISOCODES": "NO/NOR",
      "POPULATION": "5,009,150",
      "AREAKM2": "324,220",
      "GDP$USD": "515.8Billion"
   },
   {
      "COUNTRY": "Oman",
      "COUNTRYCODE": "968",
      "ISOCODES": "OM/OMN",
      "POPULATION": "2,967,717",
      "AREAKM2": "212,460",
      "GDP$USD": "81.95Billion"
   },
   {
      "COUNTRY": "Pakistan",
      "COUNTRYCODE": "92",
      "ISOCODES": "PK/PAK",
      "POPULATION": "184,404,791",
      "AREAKM2": "803,940",
      "GDP$USD": "236.5Billion"
   },
   {
      "COUNTRY": "Palau",
      "COUNTRYCODE": "680",
      "ISOCODES": "PW/PLW",
      "POPULATION": "19,907",
      "AREAKM2": "458",
      "GDP$USD": "221Million"
   },
   {
      "COUNTRY": "Palestine",
      "COUNTRYCODE": "970",
      "ISOCODES": "PS/PSE",
      "POPULATION": "3,800,000",
      "AREAKM2": "5,970",
      "GDP$USD": "6.641Billion"
   },
   {
      "COUNTRY": "Panama",
      "COUNTRYCODE": "507",
      "ISOCODES": "PA/PAN",
      "POPULATION": "3,410,676",
      "AREAKM2": "78,200",
      "GDP$USD": "40.62Billion"
   },
   {
      "COUNTRY": "PapuaNewGuinea",
      "COUNTRYCODE": "675",
      "ISOCODES": "PG/PNG",
      "POPULATION": "6,064,515",
      "AREAKM2": "462,840",
      "GDP$USD": "16.1Billion"
   },
   {
      "COUNTRY": "Paraguay",
      "COUNTRYCODE": "595",
      "ISOCODES": "PY/PRY",
      "POPULATION": "6,375,830",
      "AREAKM2": "406,750",
      "GDP$USD": "30.56Billion"
   },
   {
      "COUNTRY": "Peru",
      "COUNTRYCODE": "51",
      "ISOCODES": "PE/PER",
      "POPULATION": "29,907,003",
      "AREAKM2": "1,285,220",
      "GDP$USD": "210.3Billion"
   },
   {
      "COUNTRY": "Philippines",
      "COUNTRYCODE": "63",
      "ISOCODES": "PH/PHL",
      "POPULATION": "99,900,177",
      "AREAKM2": "300,000",
      "GDP$USD": "272.2Billion"
   },
   {
      "COUNTRY": "Pitcairn",
      "COUNTRYCODE": "64",
      "ISOCODES": "PN/PCN",
      "POPULATION": "46",
      "AREAKM2": "47"
   },
   {
      "COUNTRY": "Poland",
      "COUNTRYCODE": "48",
      "ISOCODES": "PL/POL",
      "POPULATION": "38,500,000",
      "AREAKM2": "312,685",
      "GDP$USD": "513.9Billion"
   },
   {
      "COUNTRY": "Portugal",
      "COUNTRYCODE": "351",
      "ISOCODES": "PT/PRT",
      "POPULATION": "10,676,000",
      "AREAKM2": "92,391",
      "GDP$USD": "219.3Billion"
   },
   {
      "COUNTRY": "PuertoRico",
      "COUNTRYCODE": "1-787,1-939",
      "ISOCODES": "PR/PRI",
      "POPULATION": "3,916,632",
      "AREAKM2": "9,104",
      "GDP$USD": "93.52Billion"
   },
   {
      "COUNTRY": "Qatar",
      "COUNTRYCODE": "974",
      "ISOCODES": "QA/QAT",
      "POPULATION": "840,926",
      "AREAKM2": "11,437",
      "GDP$USD": "213.1Billion"
   },
   {
      "COUNTRY": "RepublicoftheCongo",
      "COUNTRYCODE": "242",
      "ISOCODES": "CG/COG",
      "POPULATION": "3,039,126",
      "AREAKM2": "342,000",
      "GDP$USD": "14.25Billion"
   },
   {
      "COUNTRY": "Reunion",
      "COUNTRYCODE": "262",
      "ISOCODES": "RE/REU",
      "POPULATION": "776,948",
      "AREAKM2": "2,517"
   },
   {
      "COUNTRY": "Romania",
      "COUNTRYCODE": "40",
      "ISOCODES": "RO/ROU",
      "POPULATION": "21,959,278",
      "AREAKM2": "237,500",
      "GDP$USD": "188.9Billion"
   },
   {
      "COUNTRY": "Russia",
      "COUNTRYCODE": "7",
      "ISOCODES": "RU/RUS",
      "POPULATION": "140,702,000",
      "AREAKM2": "17,100,000",
      "GDP$USD": "2.113Trillion"
   },
   {
      "COUNTRY": "Rwanda",
      "COUNTRYCODE": "250",
      "ISOCODES": "RW/RWA",
      "POPULATION": "11,055,976",
      "AREAKM2": "26,338",
      "GDP$USD": "7.7Billion"
   },
   {
      "COUNTRY": "SaintBarthelemy",
      "COUNTRYCODE": "590",
      "ISOCODES": "BL/BLM",
      "POPULATION": "8,450",
      "AREAKM2": "21"
   },
   {
      "COUNTRY": "SaintHelena",
      "COUNTRYCODE": "290",
      "ISOCODES": "SH/SHN",
      "POPULATION": "7,460",
      "AREAKM2": "410"
   },
   {
      "COUNTRY": "SaintKittsandNevis",
      "COUNTRYCODE": "1-869",
      "ISOCODES": "KN/KNA",
      "POPULATION": "51,134",
      "AREAKM2": "261",
      "GDP$USD": "767Million"
   },
   {
      "COUNTRY": "SaintLucia",
      "COUNTRYCODE": "1-758",
      "ISOCODES": "LC/LCA",
      "POPULATION": "160,922",
      "AREAKM2": "616",
      "GDP$USD": "1.377Billion"
   },
   {
      "COUNTRY": "SaintMartin",
      "COUNTRYCODE": "590",
      "ISOCODES": "MF/MAF",
      "POPULATION": "35,925",
      "AREAKM2": "53",
      "GDP$USD": "561.5Million"
   },
   {
      "COUNTRY": "SaintPierreandMiquelon",
      "COUNTRYCODE": "508",
      "ISOCODES": "PM/SPM",
      "POPULATION": "7,012",
      "AREAKM2": "242",
      "GDP$USD": "215.3Million"
   },
   {
      "COUNTRY": "SaintVincentandtheGrenadines",
      "COUNTRYCODE": "1-784",
      "ISOCODES": "VC/VCT",
      "POPULATION": "104,217",
      "AREAKM2": "389",
      "GDP$USD": "742Million"
   },
   {
      "COUNTRY": "Samoa",
      "COUNTRYCODE": "685",
      "ISOCODES": "WS/WSM",
      "POPULATION": "192,001",
      "AREAKM2": "2,944",
      "GDP$USD": "705Million"
   },
   {
      "COUNTRY": "SanMarino",
      "COUNTRYCODE": "378",
      "ISOCODES": "SM/SMR",
      "POPULATION": "31,477",
      "AREAKM2": "61",
      "GDP$USD": "1.866Billion"
   },
   {
      "COUNTRY": "SaoTomeandPrincipe",
      "COUNTRYCODE": "239",
      "ISOCODES": "ST/STP",
      "POPULATION": "175,808",
      "AREAKM2": "1,001",
      "GDP$USD": "311Million"
   },
   {
      "COUNTRY": "SaudiArabia",
      "COUNTRYCODE": "966",
      "ISOCODES": "SA/SAU",
      "POPULATION": "25,731,776",
      "AREAKM2": "1,960,582",
      "GDP$USD": "718.5Billion"
   },
   {
      "COUNTRY": "Senegal",
      "COUNTRYCODE": "221",
      "ISOCODES": "SN/SEN",
      "POPULATION": "12,323,252",
      "AREAKM2": "196,190",
      "GDP$USD": "15.36Billion"
   },
   {
      "COUNTRY": "Serbia",
      "COUNTRYCODE": "381",
      "ISOCODES": "RS/SRB",
      "POPULATION": "7,344,847",
      "AREAKM2": "88,361",
      "GDP$USD": "43.68Billion"
   },
   {
      "COUNTRY": "Seychelles",
      "COUNTRYCODE": "248",
      "ISOCODES": "SC/SYC",
      "POPULATION": "88,340",
      "AREAKM2": "455",
      "GDP$USD": "1.271Billion"
   },
   {
      "COUNTRY": "SierraLeone",
      "COUNTRYCODE": "232",
      "ISOCODES": "SL/SLE",
      "POPULATION": "5,245,695",
      "AREAKM2": "71,740",
      "GDP$USD": "4.607Billion"
   },
   {
      "COUNTRY": "Singapore",
      "COUNTRYCODE": "65",
      "ISOCODES": "SG/SGP",
      "POPULATION": "4,701,069",
      "AREAKM2": "693",
      "GDP$USD": "295.7Billion"
   },
   {
      "COUNTRY": "SintMaarten",
      "COUNTRYCODE": "1-721",
      "ISOCODES": "SX/SXM",
      "POPULATION": "37,429",
      "AREAKM2": "34",
      "GDP$USD": "794.7Million"
   },
   {
      "COUNTRY": "Slovakia",
      "COUNTRYCODE": "421",
      "ISOCODES": "SK/SVK",
      "POPULATION": "5,455,000",
      "AREAKM2": "48,845",
      "GDP$USD": "96.96Billion"
   },
   {
      "COUNTRY": "Slovenia",
      "COUNTRYCODE": "386",
      "ISOCODES": "SI/SVN",
      "POPULATION": "2,007,000",
      "AREAKM2": "20,273",
      "GDP$USD": "46.82Billion"
   },
   {
      "COUNTRY": "SolomonIslands",
      "COUNTRYCODE": "677",
      "ISOCODES": "SB/SLB",
      "POPULATION": "559,198",
      "AREAKM2": "28,450",
      "GDP$USD": "1.099Billion"
   },
   {
      "COUNTRY": "Somalia",
      "COUNTRYCODE": "252",
      "ISOCODES": "SO/SOM",
      "POPULATION": "10,112,453",
      "AREAKM2": "637,657",
      "GDP$USD": "2.372Billion"
   },
   {
      "COUNTRY": "SouthAfrica",
      "COUNTRYCODE": "27",
      "ISOCODES": "ZA/ZAF",
      "POPULATION": "49,000,000",
      "AREAKM2": "1,219,912",
      "GDP$USD": "353.9Billion"
   },
   {
      "COUNTRY": "SouthKorea",
      "COUNTRYCODE": "82",
      "ISOCODES": "KR/KOR",
      "POPULATION": "48,422,644",
      "AREAKM2": "98,480",
      "GDP$USD": "1.198Trillion"
   },
   {
      "COUNTRY": "SouthSudan",
      "COUNTRYCODE": "211",
      "ISOCODES": "SS/SSD",
      "POPULATION": "8,260,490",
      "AREAKM2": "644,329",
      "GDP$USD": "11.77Billion"
   },
   {
      "COUNTRY": "Spain",
      "COUNTRYCODE": "34",
      "ISOCODES": "ES/ESP",
      "POPULATION": "46,505,963",
      "AREAKM2": "504,782",
      "GDP$USD": "1.356Trillion"
   },
   {
      "COUNTRY": "SriLanka",
      "COUNTRYCODE": "94",
      "ISOCODES": "LK/LKA",
      "POPULATION": "21,513,990",
      "AREAKM2": "65,610",
      "GDP$USD": "65.12Billion"
   },
   {
      "COUNTRY": "Sudan",
      "COUNTRYCODE": "249",
      "ISOCODES": "SD/SDN",
      "POPULATION": "35,000,000",
      "AREAKM2": "1,861,484",
      "GDP$USD": "52.5Billion"
   },
   {
      "COUNTRY": "Suriname",
      "COUNTRYCODE": "597",
      "ISOCODES": "SR/SUR",
      "POPULATION": "492,829",
      "AREAKM2": "163,270",
      "GDP$USD": "5.009Billion"
   },
   {
      "COUNTRY": "SvalbardandJanMayen",
      "COUNTRYCODE": "47",
      "ISOCODES": "SJ/SJM",
      "POPULATION": "2,550",
      "AREAKM2": "62,049"
   },
   {
      "COUNTRY": "Swaziland",
      "COUNTRYCODE": "268",
      "ISOCODES": "SZ/SWZ",
      "POPULATION": "1,354,051",
      "AREAKM2": "17,363",
      "GDP$USD": "3.807Billion"
   },
   {
      "COUNTRY": "Sweden",
      "COUNTRYCODE": "46",
      "ISOCODES": "SE/SWE",
      "POPULATION": "9,555,893",
      "AREAKM2": "449,964",
      "GDP$USD": "552Billion"
   },
   {
      "COUNTRY": "Switzerland",
      "COUNTRYCODE": "41",
      "ISOCODES": "CH/CHE",
      "POPULATION": "7,581,000",
      "AREAKM2": "41,290",
      "GDP$USD": "646.2Billion"
   },
   {
      "COUNTRY": "Syria",
      "COUNTRYCODE": "963",
      "ISOCODES": "SY/SYR",
      "POPULATION": "22,198,110",
      "AREAKM2": "185,180",
      "GDP$USD": "64.7Billion"
   },
   {
      "COUNTRY": "Taiwan",
      "COUNTRYCODE": "886",
      "ISOCODES": "TW/TWN",
      "POPULATION": "22,894,384",
      "AREAKM2": "35,980",
      "GDP$USD": "484.7Billion"
   },
   {
      "COUNTRY": "Tajikistan",
      "COUNTRYCODE": "992",
      "ISOCODES": "TJ/TJK",
      "POPULATION": "7,487,489",
      "AREAKM2": "143,100",
      "GDP$USD": "8.513Billion"
   },
   {
      "COUNTRY": "Tanzania",
      "COUNTRYCODE": "255",
      "ISOCODES": "TZ/TZA",
      "POPULATION": "41,892,895",
      "AREAKM2": "945,087",
      "GDP$USD": "31.94Billion"
   },
   {
      "COUNTRY": "Thailand",
      "COUNTRYCODE": "66",
      "ISOCODES": "TH/THA",
      "POPULATION": "67,089,500",
      "AREAKM2": "514,000",
      "GDP$USD": "400.9Billion"
   },
   {
      "COUNTRY": "Togo",
      "COUNTRYCODE": "228",
      "ISOCODES": "TG/TGO",
      "POPULATION": "6,587,239",
      "AREAKM2": "56,785",
      "GDP$USD": "4.299Billion"
   },
   {
      "COUNTRY": "Tokelau",
      "COUNTRYCODE": "690",
      "ISOCODES": "TK/TKL",
      "POPULATION": "1,466",
      "AREAKM2": "10"
   },
   {
      "COUNTRY": "Tonga",
      "COUNTRYCODE": "676",
      "ISOCODES": "TO/TON",
      "POPULATION": "122,580",
      "AREAKM2": "748",
      "GDP$USD": "477Million"
   },
   {
      "COUNTRY": "TrinidadandTobago",
      "COUNTRYCODE": "1-868",
      "ISOCODES": "TT/TTO",
      "POPULATION": "1,228,691",
      "AREAKM2": "5,128",
      "GDP$USD": "27.13Billion"
   },
   {
      "COUNTRY": "Tunisia",
      "COUNTRYCODE": "216",
      "ISOCODES": "TN/TUN",
      "POPULATION": "10,589,025",
      "AREAKM2": "163,610",
      "GDP$USD": "48.38Billion"
   },
   {
      "COUNTRY": "Turkey",
      "COUNTRYCODE": "90",
      "ISOCODES": "TR/TUR",
      "POPULATION": "77,804,122",
      "AREAKM2": "780,580",
      "GDP$USD": "821.8Billion"
   },
   {
      "COUNTRY": "Turkmenistan",
      "COUNTRYCODE": "993",
      "ISOCODES": "TM/TKM",
      "POPULATION": "4,940,916",
      "AREAKM2": "488,100",
      "GDP$USD": "40.56Billion"
   },
   {
      "COUNTRY": "TurksandCaicosIslands",
      "COUNTRYCODE": "1-649",
      "ISOCODES": "TC/TCA",
      "POPULATION": "20,556",
      "AREAKM2": "430"
   },
   {
      "COUNTRY": "Tuvalu",
      "COUNTRYCODE": "688",
      "ISOCODES": "TV/TUV",
      "POPULATION": "10,472",
      "AREAKM2": "26",
      "GDP$USD": "38Million"
   },
   {
      "COUNTRY": "U.S.VirginIslands",
      "COUNTRYCODE": "1-340",
      "ISOCODES": "VI/VIR",
      "POPULATION": "108,708",
      "AREAKM2": "352"
   },
   {
      "COUNTRY": "Uganda",
      "COUNTRYCODE": "256",
      "ISOCODES": "UG/UGA",
      "POPULATION": "33,398,682",
      "AREAKM2": "236,040",
      "GDP$USD": "22.6Billion"
   },
   {
      "COUNTRY": "Ukraine",
      "COUNTRYCODE": "380",
      "ISOCODES": "UA/UKR",
      "POPULATION": "45,415,596",
      "AREAKM2": "603,700",
      "GDP$USD": "175.5Billion"
   },
   {
      "COUNTRY": "UnitedArabEmirates",
      "COUNTRYCODE": "971",
      "ISOCODES": "AE/ARE",
      "POPULATION": "4,975,593",
      "AREAKM2": "82,880",
      "GDP$USD": "390Billion"
   },
   {
      "COUNTRY": "UnitedKingdom",
      "COUNTRYCODE": "44",
      "ISOCODES": "GB/GBR",
      "POPULATION": "62,348,447",
      "AREAKM2": "244,820",
      "GDP$USD": "2.49Trillion"
   },
   {
      "COUNTRY": "UnitedStates",
      "COUNTRYCODE": "1",
      "ISOCODES": "US/USA",
      "POPULATION": "310,232,863",
      "AREAKM2": "9,629,091",
      "GDP$USD": "16.72Trillion"
   },
   {
      "COUNTRY": "Uruguay",
      "COUNTRYCODE": "598",
      "ISOCODES": "UY/URY",
      "POPULATION": "3,477,000",
      "AREAKM2": "176,220",
      "GDP$USD": "57.11Billion"
   },
   {
      "COUNTRY": "Uzbekistan",
      "COUNTRYCODE": "998",
      "ISOCODES": "UZ/UZB",
      "POPULATION": "27,865,738",
      "AREAKM2": "447,400",
      "GDP$USD": "55.18Billion"
   },
   {
      "COUNTRY": "Vanuatu",
      "COUNTRYCODE": "678",
      "ISOCODES": "VU/VUT",
      "POPULATION": "221,552",
      "AREAKM2": "12,200",
      "GDP$USD": "828Million"
   },
   {
      "COUNTRY": "Vatican",
      "COUNTRYCODE": "379",
      "ISOCODES": "VA/VAT",
      "POPULATION": "921",
      "AREAKM2": "0"
   },
   {
      "COUNTRY": "Venezuela",
      "COUNTRYCODE": "58",
      "ISOCODES": "VE/VEN",
      "POPULATION": "27,223,228",
      "AREAKM2": "912,050",
      "GDP$USD": "367.5Billion"
   },
   {
      "COUNTRY": "Vietnam",
      "COUNTRYCODE": "84",
      "ISOCODES": "VN/VNM",
      "POPULATION": "89,571,130",
      "AREAKM2": "329,560",
      "GDP$USD": "170Billion"
   },
   {
      "COUNTRY": "WallisandFutuna",
      "COUNTRYCODE": "681",
      "ISOCODES": "WF/WLF",
      "POPULATION": "16,025",
      "AREAKM2": "274"
   },
   {
      "COUNTRY": "WesternSahara",
      "COUNTRYCODE": "212",
      "ISOCODES": "EH/ESH",
      "POPULATION": "273,008",
      "AREAKM2": "266,000"
   },
   {
      "COUNTRY": "Yemen",
      "COUNTRYCODE": "967",
      "ISOCODES": "YE/YEM",
      "POPULATION": "23,495,361",
      "AREAKM2": "527,970",
      "GDP$USD": "43.89Billion"
   },
   {
      "COUNTRY": "Zambia",
      "COUNTRYCODE": "260",
      "ISOCODES": "ZM/ZMB",
      "POPULATION": "13,460,305",
      "AREAKM2": "752,614",
      "GDP$USD": "22.24Billion"
   },
   {
      "COUNTRY": "Zimbabwe",
      "COUNTRYCODE": "263",
      "ISOCODES": "ZW/ZWE",
      "POPULATION": "11,651,858",
      "AREAKM2": "390,580",
      "GDP$USD": "10.48Billion"
   }
]

const CODES = [
   "93",
   "355",
   "213",
   "1-684",
   "376",
   "244",
   "1-264",
   "672",
   "1-268",
   "54",
   "374",
   "297",
   "61",
   "43",
   "994",
   "1-242",
   "973",
   "880",
   "1-246",
   "375",
   "32",
   "501",
   "229",
   "1-441",
   "975",
   "591",
   "387",
   "267",
   "55",
   "246",
   "1-284",
   "673",
   "359",
   "226",
   "257",
   "855",
   "237",
   "1",
   "238",
   "1-345",
   "236",
   "235",
   "56",
   "86",
   "61",
   "61",
   "57",
   "269",
   "682",
   "506",
   "385",
   "53",
   "599",
   "357",
   "420",
   "243",
   "45",
   "253",
   "1-767",
   "1-809,1-829,1-849",
   "670",
   "593",
   "20",
   "503",
   "240",
   "291",
   "372",
   "251",
   "500",
   "298",
   "679",
   "358",
   "33",
   "689",
   "241",
   "220",
   "995",
   "49",
   "233",
   "350",
   "30",
   "299",
   "1-473",
   "1-671",
   "502",
   "44-1481",
   "224",
   "245",
   "592",
   "509",
   "504",
   "852",
   "36",
   "354",
   "91",
   "62",
   "98",
   "964",
   "353",
   "44-1624",
   "972",
   "39",
   "225",
   "1-876",
   "81",
   "44-1534",
   "962",
   "7",
   "254",
   "686",
   "383",
   "965",
   "996",
   "856",
   "371",
   "961",
   "266",
   "231",
   "218",
   "423",
   "370",
   "352",
   "853",
   "389",
   "261",
   "265",
   "60",
   "960",
   "223",
   "356",
   "692",
   "222",
   "230",
   "262",
   "52",
   "691",
   "373",
   "377",
   "976",
   "382",
   "1-664",
   "212",
   "258",
   "95",
   "264",
   "674",
   "977",
   "31",
   "599",
   "687",
   "64",
   "505",
   "227",
   "234",
   "683",
   "850",
   "1-670",
   "47",
   "968",
   "92",
   "680",
   "970",
   "507",
   "675",
   "595",
   "51",
   "63",
   "64",
   "48",
   "351",
   "1-787,1-939",
   "974",
   "242",
   "262",
   "40",
   "7",
   "250",
   "590",
   "290",
   "1-869",
   "1-758",
   "590",
   "508",
   "1-784",
   "685",
   "378",
   "239",
   "966",
   "221",
   "381",
   "248",
   "232",
   "65",
   "1-721",
   "421",
   "386",
   "677",
   "252",
   "27",
   "82",
   "211",
   "34",
   "94",
   "249",
   "597",
   "47",
   "268",
   "46",
   "41",
   "963",
   "886",
   "992",
   "255",
   "66",
   "228",
   "690",
   "676",
   "1-868",
   "216",
   "90",
   "993",
   "1-649",
   "688",
   "1-340",
   "256",
   "380",
   "971",
   "44",
   "1",
   "598",
   "998",
   "678",
   "379",
   "58",
   "84",
   "681",
   "212",
   "967",
   "260",
   "263"
]

module.exports = {
   ERROR_MESSAGE,
   COUNTRY_CODE,
   CODES,
};
