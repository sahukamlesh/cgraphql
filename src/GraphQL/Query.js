import { gql } from "@apollo/client";
export const GET_COVID_DATA =gql`
query country($name:String!){
  country(name:$name){
    countryInfo{
      long
      iso3
      flag
    }
   result{
    updated
    cases
    active
    deaths
    todayCases
    todayDeaths
    critical
    todayRecovered
    recovered
    
  }
  }
}
`;

// export const GET_COVID_DATA = gql`
//   query country($code:String!){
//      country(code:$code){
//       name
//       latest{
//         confirmed
//         deceased
//         lastUpdated
//       }
//       region{
//         name
//       }
//       subRegion{
//         name
//       }
//     }
//   }
  
// `

