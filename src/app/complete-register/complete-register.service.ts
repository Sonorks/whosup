import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Organization } from '../_models/Organization';
import { Actor } from '../_models/Actor';


let headers = new HttpHeaders().set('Content-Type','application/json');
headers.set('Accept','application/json');
headers.set('Access-Control-Allow-Origin','*');

@Injectable()
export class CompleteRegisterService {
  

  constructor(private http: HttpClient) {}

  getUserByEmail(email:String){
    //returns all user data
    return this.http.get('http://192.168.0.20:8765/api/actor/getUserByEmail/'+email,{headers:headers}).toPromise();
  }

  getEmployeeByUserId(id:String){
    //return employee in case exists an employee with the userId
    return this.http.get('http://192.168.0.20:8765/api/actor/getEmployeeByUserId/'+id,{headers:headers}).toPromise();
  }

  getOrganizationById(id:String): Observable<any>{
    //returns the actor in case the employee exists
    return this.http.get('http://192.168.0.20:8765/api/actor/getOrganizationById/'+id,{headers:headers});
  }


  /**
   * creates an organization. Doesn't need Ids
   * @param actor 
   */
  createOrganization(actor:Actor){
    return this.http.post<any>('http://192.168.0.20:8765/api/actor/createOrganization',actor,{headers:headers}).toPromise();
  }

  /**Update the organization: needs a full Actor object with the created organization and actors Ids. */
  updateOrganization(actor:Actor){
    console.log("update de actor");
    return this.http.put<any>('http://192.168.0.20:8765/api/actor/updateOrganization',actor,{headers:headers}).toPromise();
    
  }
  
  /**Get All organizations*/
  getOrganizations(): Observable<any>{
    return this.http.get('http://192.168.0.20:8765/api/actor/getAllOrganizations',{headers:headers});
  }


  /**returns an array with all the ecosystems. */
  getEcosystems(): Observable<any>{
    let ecosystems = this.http.get('http://192.168.0.20:8765/api/loadContent/getContentByCategory/ecosystem',{headers:headers});
    return ecosystems;
  }

  /** returns an array with the cells of selected ecosystem */
  getCells(ecosystem:string): Observable<any>{
    return this.http.get('http://192.168.0.20:8765/api/loadContent/getContentByCategory/'+ecosystem,{headers:headers});
  }

  /**Returns an array with the techs of selected cell */
  getTechs(cell:string): Observable<any>{
    return this.http.get('http://192.168.0.20:8765/api/loadContent/getContentByCategory/'+cell,{headers:headers});
  }

  // getIpProtItems(): Observable<any>{
  //   return this.http.get('http://192.168.0.20:8765/api/loadContent/getContentByCategory/ipprot',{headers:headers});
  // }

  // getTlrItems(): Observable<any>{
  //   return this.http.get('http://192.168.0.20:8765/api/loadContent/getContentByCategory/tlr',{headers:headers});
  // }

  /**Get the content from BD by category. Returns an Array with the data. */
  getContent(category:string){
    return this.http.get('http://192.168.0.20:8765/api/loadContent/getContentByCategory/'+category).toPromise();
  }

  getYears(){
    let years: number[] = [];
    let i, j;
    for (i = 1900, j= 0; i <= 2018; i++, j++){
      years[j] = i;
    }
    return years
  }

  getSizes(){
    let size = [{
      size: "Micro"
    },
    {
      size: "Small"
    },
    {
      size: "Medium"
    },
    {
      size: "Large"
    },
    ]
    return size;
  }

  getCountries(){
     let countries = [ {
      "name" : "Afghanistan",
      "alpha2_code" : "AF"
    }, {
      "name" : "Aland Islands",
      "alpha2_code" : "AX"
    }, {
      "name" : "Albania",
      "alpha2_code" : "AL"
    }, {
      "name" : "Algeria",
      "alpha2_code" : "DZ"
    }, {
      "name" : "American Samoa",
      "alpha2_code" : "AS"
    }, {
      "name" : "Andorra",
      "alpha2_code" : "AD"
    }, {
      "name" : "Angola",
      "alpha2_code" : "AO"
    }, {
      "name" : "Anguilla",
      "alpha2_code" : "AI"
    }, {
      "name" : "Antarctica",
      "alpha2_code" : "AQ"
    }, {
      "name" : "Antigua and Barbuda",
      "alpha2_code" : "AG"
    }, {
      "name" : "Argentina",
      "alpha2_code" : "AR"
    }, {
      "name" : "Armenia",
      "alpha2_code" : "AM"
    }, {
      "name" : "Aruba",
      "alpha2_code" : "AW"
    }, {
      "name" : "Australia",
      "alpha2_code" : "AU"
    }, {
      "name" : "Austria",
      "alpha2_code" : "AT"
    }, {
      "name" : "Azerbaijan",
      "alpha2_code" : "AZ"
    }, {
      "name" : "Bahamas",
      "alpha2_code" : "BS"
    }, {
      "name" : "Bahrain",
      "alpha2_code" : "BH"
    }, {
      "name" : "Bangladesh",
      "alpha2_code" : "BD"
    }, {
      "name" : "Barbados",
      "alpha2_code" : "BB"
    }, {
      "name" : "Belarus",
      "alpha2_code" : "BY"
    }, {
      "name" : "Belgium",
      "alpha2_code" : "BE"
    }, {
      "name" : "Belize",
      "alpha2_code" : "BZ"
    }, {
      "name" : "Benin",
      "alpha2_code" : "BJ"
    }, {
      "name" : "Bermuda",
      "alpha2_code" : "BM"
    }, {
      "name" : "Bhutan",
      "alpha2_code" : "BT"
    }, {
      "name" : "Bolivia (Plurinational State of)",
      "alpha2_code" : "BO"
    }, {
      "name" : "Bonaire, Sint Eustatius and Saba",
      "alpha2_code" : "BQ"
    }, {
      "name" : "Bosnia and Herzegovina",
      "alpha2_code" : "BA"
    }, {
      "name" : "Botswana",
      "alpha2_code" : "BW"
    }, {
      "name" : "Bouvet Island",
      "alpha2_code" : "BV"
    }, {
      "name" : "Brazil",
      "alpha2_code" : "BR"
    }, {
      "name" : "British Indian Ocean Territory",
      "alpha2_code" : "IO"
    }, {
      "name" : "Brunei Darussalam",
      "alpha2_code" : "BN"
    }, {
      "name" : "Bulgaria",
      "alpha2_code" : "BG"
    }, {
      "name" : "Burkina Faso",
      "alpha2_code" : "BF"
    }, {
      "name" : "Burundi",
      "alpha2_code" : "BI"
    }, {
      "name" : "Cabo Verde",
      "alpha2_code" : "CV"
    }, {
      "name" : "Cambodia",
      "alpha2_code" : "KH"
    }, {
      "name" : "Cameroon",
      "alpha2_code" : "CM"
    }, {
      "name" : "Canada",
      "alpha2_code" : "CA"
    }, {
      "name" : "Cayman Islands",
      "alpha2_code" : "KY"
    }, {
      "name" : "Central African Republic",
      "alpha2_code" : "CF"
    }, {
      "name" : "Chad",
      "alpha2_code" : "TD"
    }, {
      "name" : "Chile",
      "alpha2_code" : "CL"
    }, {
      "name" : "China",
      "alpha2_code" : "CN"
    }, {
      "name" : "Christmas Island",
      "alpha2_code" : "CX"
    }, {
      "name" : "Cocos (Keeling) Islands",
      "alpha2_code" : "CC"
    }, {
      "name" : "Colombia",
      "alpha2_code" : "CO"
    }, {
      "name" : "Comoros",
      "alpha2_code" : "KM"
    }, {
      "name" : "Congo",
      "alpha2_code" : "CG"
    }, {
      "name" : "Congo (Democratic Republic of the)",
      "alpha2_code" : "CD"
    }, {
      "name" : "Cook Islands",
      "alpha2_code" : "CK"
    }, {
      "name" : "Costa Rica",
      "alpha2_code" : "CR"
    }, {
      "name" : "C��te d'Ivoire",
      "alpha2_code" : "CI"
    }, {
      "name" : "Croatia",
      "alpha2_code" : "HR"
    }, {
      "name" : "Cuba",
      "alpha2_code" : "CU"
    }, {
      "name" : "Cura��ao",
      "alpha2_code" : "CW"
    }, {
      "name" : "Cyprus",
      "alpha2_code" : "CY"
    }, {
      "name" : "Czechia",
      "alpha2_code" : "CZ"
    }, {
      "name" : "Denmark",
      "alpha2_code" : "DK"
    }, {
      "name" : "Djibouti",
      "alpha2_code" : "DJ"
    }, {
      "name" : "Dominica",
      "alpha2_code" : "DM"
    }, {
      "name" : "Dominican Republic",
      "alpha2_code" : "DO"
    }, {
      "name" : "Ecuador",
      "alpha2_code" : "EC"
    }, {
      "name" : "Egypt",
      "alpha2_code" : "EG"
    }, {
      "name" : "El Salvador",
      "alpha2_code" : "SV"
    }, {
      "name" : "Equatorial Guinea",
      "alpha2_code" : "GQ"
    }, {
      "name" : "Eritrea",
      "alpha2_code" : "ER"
    }, {
      "name" : "Estonia",
      "alpha2_code" : "EE"
    }, {
      "name" : "Ethiopia",
      "alpha2_code" : "ET"
    }, {
      "name" : "Falkland Islands (Malvinas)",
      "alpha2_code" : "FK"
    }, {
      "name" : "Faroe Islands",
      "alpha2_code" : "FO"
    }, {
      "name" : "Fiji",
      "alpha2_code" : "FJ"
    }, {
      "name" : "Finland",
      "alpha2_code" : "FI"
    }, {
      "name" : "France",
      "alpha2_code" : "FR"
    }, {
      "name" : "French Guiana",
      "alpha2_code" : "GF"
    }, {
      "name" : "French Polynesia",
      "alpha2_code" : "PF"
    }, {
      "name" : "French Southern Territories",
      "alpha2_code" : "TF"
    }, {
      "name" : "Gabon",
      "alpha2_code" : "GA"
    }, {
      "name" : "Gambia",
      "alpha2_code" : "GM"
    }, {
      "name" : "Georgia",
      "alpha2_code" : "GE"
    }, {
      "name" : "Germany",
      "alpha2_code" : "DE"
    }, {
      "name" : "Ghana",
      "alpha2_code" : "GH"
    }, {
      "name" : "Gibraltar",
      "alpha2_code" : "GI"
    }, {
      "name" : "Greece",
      "alpha2_code" : "GR"
    }, {
      "name" : "Greenland",
      "alpha2_code" : "GL"
    }, {
      "name" : "Grenada",
      "alpha2_code" : "GD"
    }, {
      "name" : "Guadeloupe",
      "alpha2_code" : "GP"
    }, {
      "name" : "Guam",
      "alpha2_code" : "GU"
    }, {
      "name" : "Guatemala",
      "alpha2_code" : "GT"
    }, {
      "name" : "Guernsey",
      "alpha2_code" : "GG"
    }, {
      "name" : "Guinea",
      "alpha2_code" : "GN"
    }, {
      "name" : "Guinea-Bissau",
      "alpha2_code" : "GW"
    }, {
      "name" : "Guyana",
      "alpha2_code" : "GY"
    }, {
      "name" : "Haiti",
      "alpha2_code" : "HT"
    }, {
      "name" : "Heard Island and McDonald Islands",
      "alpha2_code" : "HM"
    }, {
      "name" : "Holy See",
      "alpha2_code" : "VA"
    }, {
      "name" : "Honduras",
      "alpha2_code" : "HN"
    }, {
      "name" : "Hong Kong",
      "alpha2_code" : "HK"
    }, {
      "name" : "Hungary",
      "alpha2_code" : "HU"
    }, {
      "name" : "Iceland",
      "alpha2_code" : "IS"
    }, {
      "name" : "India",
      "alpha2_code" : "IN"
    }, {
      "name" : "Indonesia",
      "alpha2_code" : "ID"
    }, {
      "name" : "Iran (Islamic Republic of)",
      "alpha2_code" : "IR"
    }, {
      "name" : "Iraq",
      "alpha2_code" : "IQ"
    }, {
      "name" : "Ireland",
      "alpha2_code" : "IE"
    }, {
      "name" : "Isle of Man",
      "alpha2_code" : "IM"
    }, {
      "name" : "Israel",
      "alpha2_code" : "IL"
    }, {
      "name" : "Italy",
      "alpha2_code" : "IT"
    }, {
      "name" : "Jamaica",
      "alpha2_code" : "JM"
    }, {
      "name" : "Japan",
      "alpha2_code" : "JP"
    }, {
      "name" : "Jersey",
      "alpha2_code" : "JE"
    }, {
      "name" : "Jordan",
      "alpha2_code" : "JO"
    }, {
      "name" : "Kazakhstan",
      "alpha2_code" : "KZ"
    }, {
      "name" : "Kenya",
      "alpha2_code" : "KE"
    }, {
      "name" : "Kiribati",
      "alpha2_code" : "KI"
    }, {
      "name" : "Korea (Democratic People's Republic of)",
      "alpha2_code" : "KP"
    }, {
      "name" : "Korea (Republic of)",
      "alpha2_code" : "KR"
    }, {
      "name" : "Kuwait",
      "alpha2_code" : "KW"
    }, {
      "name" : "Kyrgyzstan",
      "alpha2_code" : "KG"
    }, {
      "name" : "Lao People's Democratic Republic",
      "alpha2_code" : "LA"
    }, {
      "name" : "Latvia",
      "alpha2_code" : "LV"
    }, {
      "name" : "Lebanon",
      "alpha2_code" : "LB"
    }, {
      "name" : "Lesotho",
      "alpha2_code" : "LS"
    }, {
      "name" : "Liberia",
      "alpha2_code" : "LR"
    }, {
      "name" : "Libya",
      "alpha2_code" : "LY"
    }, {
      "name" : "Liechtenstein",
      "alpha2_code" : "LI"
    }, {
      "name" : "Lithuania",
      "alpha2_code" : "LT"
    }, {
      "name" : "Luxembourg",
      "alpha2_code" : "LU"
    }, {
      "name" : "Macao",
      "alpha2_code" : "MO"
    }, {
      "name" : "Macedonia (the former Yugoslav Republic of)",
      "alpha2_code" : "MK"
    }, {
      "name" : "Madagascar",
      "alpha2_code" : "MG"
    }, {
      "name" : "Malawi",
      "alpha2_code" : "MW"
    }, {
      "name" : "Malaysia",
      "alpha2_code" : "MY"
    }, {
      "name" : "Maldives",
      "alpha2_code" : "MV"
    }, {
      "name" : "Mali",
      "alpha2_code" : "ML"
    }, {
      "name" : "Malta",
      "alpha2_code" : "MT"
    }, {
      "name" : "Marshall Islands",
      "alpha2_code" : "MH"
    }, {
      "name" : "Martinique",
      "alpha2_code" : "MQ"
    }, {
      "name" : "Mauritania",
      "alpha2_code" : "MR"
    }, {
      "name" : "Mauritius",
      "alpha2_code" : "MU"
    }, {
      "name" : "Mayotte",
      "alpha2_code" : "YT"
    }, {
      "name" : "Mexico",
      "alpha2_code" : "MX"
    }, {
      "name" : "Micronesia (Federated States of)",
      "alpha2_code" : "FM"
    }, {
      "name" : "Moldova (Republic of)",
      "alpha2_code" : "MD"
    }, {
      "name" : "Monaco",
      "alpha2_code" : "MC"
    }, {
      "name" : "Mongolia",
      "alpha2_code" : "MN"
    }, {
      "name" : "Montenegro",
      "alpha2_code" : "ME"
    }, {
      "name" : "Montserrat",
      "alpha2_code" : "MS"
    }, {
      "name" : "Morocco",
      "alpha2_code" : "MA"
    }, {
      "name" : "Mozambique",
      "alpha2_code" : "MZ"
    }, {
      "name" : "Myanmar",
      "alpha2_code" : "MM"
    }, {
      "name" : "Namibia",
      "alpha2_code" : "NA"
    }, {
      "name" : "Nauru",
      "alpha2_code" : "NR"
    }, {
      "name" : "Nepal",
      "alpha2_code" : "NP"
    }, {
      "name" : "Netherlands",
      "alpha2_code" : "NL"
    }, {
      "name" : "New Caledonia",
      "alpha2_code" : "NC"
    }, {
      "name" : "New Zealand",
      "alpha2_code" : "NZ"
    }, {
      "name" : "Nicaragua",
      "alpha2_code" : "NI"
    }, {
      "name" : "Niger",
      "alpha2_code" : "NE"
    }, {
      "name" : "Nigeria",
      "alpha2_code" : "NG"
    }, {
      "name" : "Niue",
      "alpha2_code" : "NU"
    }, {
      "name" : "Norfolk Island",
      "alpha2_code" : "NF"
    }, {
      "name" : "Northern Mariana Islands",
      "alpha2_code" : "MP"
    }, {
      "name" : "Norway",
      "alpha2_code" : "NO"
    }, {
      "name" : "Oman",
      "alpha2_code" : "OM"
    }, {
      "name" : "Pakistan",
      "alpha2_code" : "PK"
    }, {
      "name" : "Palau",
      "alpha2_code" : "PW"
    }, {
      "name" : "Palestine, State of",
      "alpha2_code" : "PS"
    }, {
      "name" : "Panama",
      "alpha2_code" : "PA"
    }, {
      "name" : "Papua New Guinea",
      "alpha2_code" : "PG"
    }, {
      "name" : "Paraguay",
      "alpha2_code" : "PY"
    }, {
      "name" : "Peru",
      "alpha2_code" : "PE"
    }, {
      "name" : "Philippines",
      "alpha2_code" : "PH"
    }, {
      "name" : "Pitcairn",
      "alpha2_code" : "PN"
    }, {
      "name" : "Poland",
      "alpha2_code" : "PL"
    }, {
      "name" : "Portugal",
      "alpha2_code" : "PT"
    }, {
      "name" : "Puerto Rico",
      "alpha2_code" : "PR"
    }, {
      "name" : "Qatar",
      "alpha2_code" : "QA"
    }, {
      "name" : "Réunion",
      "alpha2_code" : "RE"
    }, {
      "name" : "Romania",
      "alpha2_code" : "RO"
    }, {
      "name" : "Russian Federation",
      "alpha2_code" : "RU"
    }, {
      "name" : "Rwanda",
      "alpha2_code" : "RW"
    }, {
      "name" : "Saint Barthélemy",
      "alpha2_code" : "BL"
    }, {
      "name" : "Saint Helena, Ascension and Tristan da Cunha",
      "alpha2_code" : "SH"
    }, {
      "name" : "Saint Kitts and Nevis",
      "alpha2_code" : "KN"
    }, {
      "name" : "Saint Lucia",
      "alpha2_code" : "LC"
    }, {
      "name" : "Saint Martin (French part)",
      "alpha2_code" : "MF"
    }, {
      "name" : "Saint Pierre and Miquelon",
      "alpha2_code" : "PM"
    }, {
      "name" : "Saint Vincent and the Grenadines",
      "alpha2_code" : "VC"
    }, {
      "name" : "Samoa",
      "alpha2_code" : "WS"
    }, {
      "name" : "San Marino",
      "alpha2_code" : "SM"
    }, {
      "name" : "Sao Tome and Principe",
      "alpha2_code" : "ST"
    }, {
      "name" : "Saudi Arabia",
      "alpha2_code" : "SA"
    }, {
      "name" : "Senegal",
      "alpha2_code" : "SN"
    }, {
      "name" : "Serbia",
      "alpha2_code" : "RS"
    }, {
      "name" : "Seychelles",
      "alpha2_code" : "SC"
    }, {
      "name" : "Sierra Leone",
      "alpha2_code" : "SL"
    }, {
      "name" : "Singapore",
      "alpha2_code" : "SG"
    }, {
      "name" : "Sint Maarten (Dutch part)",
      "alpha2_code" : "SX"
    }, {
      "name" : "Slovakia",
      "alpha2_code" : "SK"
    }, {
      "name" : "Slovenia",
      "alpha2_code" : "SI"
    }, {
      "name" : "Solomon Islands",
      "alpha2_code" : "SB"
    }, {
      "name" : "Somalia",
      "alpha2_code" : "SO"
    }, {
      "name" : "South Africa",
      "alpha2_code" : "ZA"
    }, {
      "name" : "South Georgia and the South Sandwich Islands",
      "alpha2_code" : "GS"
    }, {
      "name" : "South Sudan",
      "alpha2_code" : "SS"
    }, {
      "name" : "Spain",
      "alpha2_code" : "ES"
    }, {
      "name" : "Sri Lanka",
      "alpha2_code" : "LK"
    }, {
      "name" : "Sudan",
      "alpha2_code" : "SD"
    }, {
      "name" : "Suriname",
      "alpha2_code" : "SR"
    }, {
      "name" : "Svalbard and Jan Mayen",
      "alpha2_code" : "SJ"
    }, {
      "name" : "Swaziland",
      "alpha2_code" : "SZ"
    }, {
      "name" : "Sweden",
      "alpha2_code" : "SE"
    }, {
      "name" : "Switzerland",
      "alpha2_code" : "CH"
    }, {
      "name" : "Syrian Arab Republic",
      "alpha2_code" : "SY"
    }, {
      "name" : "Taiwan, Province of China [a]",
      "alpha2_code" : "TW"
    }, {
      "name" : "Tajikistan",
      "alpha2_code" : "TJ"
    }, {
      "name" : "Tanzania, United Republic of",
      "alpha2_code" : "TZ"
    }, {
      "name" : "Thailand",
      "alpha2_code" : "TH"
    }, {
      "name" : "Timor-Leste",
      "alpha2_code" : "TL"
    }, {
      "name" : "Togo",
      "alpha2_code" : "TG"
    }, {
      "name" : "Tokelau",
      "alpha2_code" : "TK"
    }, {
      "name" : "Tonga",
      "alpha2_code" : "TO"
    }, {
      "name" : "Trinidad and Tobago",
      "alpha2_code" : "TT"
    }, {
      "name" : "Tunisia",
      "alpha2_code" : "TN"
    }, {
      "name" : "Turkey",
      "alpha2_code" : "TR"
    }, {
      "name" : "Turkmenistan",
      "alpha2_code" : "TM"
    }, {
      "name" : "Turks and Caicos Islands",
      "alpha2_code" : "TC"
    }, {
      "name" : "Tuvalu",
      "alpha2_code" : "TV"
    }, {
      "name" : "Uganda",
      "alpha2_code" : "UG"
    }, {
      "name" : "Ukraine",
      "alpha2_code" : "UA"
    }, {
      "name" : "United Arab Emirates",
      "alpha2_code" : "AE"
    }, {
      "name" : "United Kingdom of Great Britain and Northern Ireland",
      "alpha2_code" : "GB"
    }, {
      "name" : "United States of America",
      "alpha2_code" : "US"
    }, {
      "name" : "United States Minor Outlying Islands",
      "alpha2_code" : "UM"
    }, {
      "name" : "Uruguay",
      "alpha2_code" : "UY"
    }, {
      "name" : "Uzbekistan",
      "alpha2_code" : "UZ"
    }, {
      "name" : "Vanuatu",
      "alpha2_code" : "VU"
    }, {
      "name" : "Venezuela (Bolivarian Republic of)",
      "alpha2_code" : "VE"
    }, {
      "name" : "Viet Nam",
      "alpha2_code" : "VN"
    }, {
      "name" : "Virgin Islands (British)",
      "alpha2_code" : "VG"
    }, {
      "name" : "Virgin Islands (U.S.)",
      "alpha2_code" : "VI"
    }, {
      "name" : "Wallis and Futuna",
      "alpha2_code" : "WF"
    }, {
      "name" : "Western Sahara",
      "alpha2_code" : "EH"
    }, {
      "name" : "Yemen",
      "alpha2_code" : "YE"
    }, {
      "name" : "Zambia",
      "alpha2_code" : "ZM"
    }, {
      "name" : "Zimbabwe",
      "alpha2_code" : "ZW"
    } ]
    return countries;
  }

}
