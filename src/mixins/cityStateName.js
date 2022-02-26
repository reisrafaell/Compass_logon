export default function cityStateName(region) {
    let regionName = "";
  
    switch (region) {
      case "Acre":
        regionName = "AC";
        break;
      case "Alagoas":
        regionName = "AL";
        break;
      case "Amapá":
        regionName = "AP";
        break;
      case "Amazonas":
        regionName = "AM";
        break;
      case "Bhaia":
        regionName = "BA";
        break;
      case "Ceará":
        regionName = "CE";
        break;
      case "Espírito Santo":
        regionName = "ES";
        break;
      case "Goiás":
        regionName = "GO";
        break;
      case "Maranhão":
        regionName = "MA";
        break;
      case "Mato Grosso":
        regionName = "MT";
        break;
      case "Mato Grosso do Sul":
        regionName = "MS";
        break;
      case "Minas Gerais":
        regionName = "MG";
        break;
      case "Pará":
        regionName = "PA";
        break;
      case "Paraíba":
        regionName = "PB";
        break;
      case "Paraná":
        regionName = "PR";
        break;
      case "Pernambuco":
        regionName = "PE";
        break;
      case "Piauí":
        regionName = "PI";
        break;
      case "Rio de Janeiro":
        regionName = "RJ";
        break;
      case "Rio Grande do Norte":
        regionName = "RN";
        break;
      case "Rio Grande do Sul":
        regionName = "RS";
        break;
      case "Rondônia":
        regionName = "RO";
        break;
      case "Roraima":
        regionName = "RR";
        break;
      case "Santa Catarina":
        regionName = "SC";
        break;
      case "São Paulo":
        regionName = "SP";
        break;
      case "Sergipe":
        regionName = "SE";
        break;
      case "Tocantins":
        regionName = "TO";
        break;
    }
  
    return regionName;
  }