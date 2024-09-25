const CurrentDate = () => {
    // Obtenir la date actuelle
    const today = new Date();
    const formattedDate = today.toLocaleDateString();
  
    return (
    <div className="date-container">
        <div className="dateDisplay">
            {formattedDate}
        </div>
      </div>
    );
  };
  
  export default CurrentDate;