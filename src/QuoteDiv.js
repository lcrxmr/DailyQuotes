
import { quotes } from './quotes';

const getDailyQuote = () => {
    const currentDate = new Date();
    const dayOfYear = Math.floor(
      (currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
    );
    return quotes[dayOfYear % quotes.length]; // Cycle through quotes based on day of the year
  };
  
  function QuoteDiv() {
    return (
        <div className="quote-container">
          <h1 className="quote">{getDailyQuote()}</h1>
        </div>
    );
}

export default QuoteDiv;