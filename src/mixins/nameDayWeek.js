export default function nameDayWeek(day){ 
    let dayWeek= ""

    switch (day) {
      case 0:
    dayWeek= "domingo";         
        break;
    case 1:
    dayWeek= "segunda-feira"
      break;
      case 2:
        dayWeek="terça-feira"
      break;
      case 3:    
    dayWeek="quarta-feira"
      break;
      case 4:
    dayWeek= "quinta-feira"
      break;
      case 5:
    dayWeek="sexta-feira"
      break;
      case 6:
    dayWeek= "sábado"
      break;
      default:
    dayWeek="Invalid"
        break;          
    }
    return dayWeek
}
