const DateHeader = () => {
    const dateOBJ = new Date();
    const numberDay = dateOBJ.getDay();
  
    const getDay = i => {
      switch (i) {
        case 0: 
        return 'Sunday';
        break;
        case 1 :
        return 'Monday';
        break;
        case 2 :
        return 'Tuesday';
        break;
        case 3: 
        return 'Wednesday';
        break;
        case 4:
        return 'Thursday';
        break;
        case 5: 
        return 'Friday';
        break;
        case 6: 
        return 'Saturday';
        break;
      }
    }
  
  const numberMonth = dateOBJ.getMonth();
  
  const getMonth = i => {
    switch (i) {
      case 0: 
        return 'January';
      case 1 :
        return 'February';
      case 2 :
        return 'March';
      case 3: 
        return 'April';
      case 4:
        return 'May';
      case 5: 
        return 'June';
      case 6: 
        return 'July';
      case 7: 
        return 'August';
      case 8: 
        return 'September';
      case 9: 
        return 'October';
      case 10: 
        return 'November';
      case 11: 
        return 'December';
      default:
        return 'Invalid month';
    }
  };
  
  
  
  
    
  const day = getDay(numberDay)
  const month = getMonth(numberMonth)
  const dayOfMonth = dateOBJ.getDate();
    return (
      <header>
        <h1>{day}, {dayOfMonth}th</h1>
        <h3>{month}</h3>
      </header>
    )
  }

  
export default DateHeader;