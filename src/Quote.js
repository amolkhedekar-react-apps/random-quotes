import React, { useState } from "react";
import "./Quote.css";
import Logo from "./static/logo.svg";
import QuoteIcon from "./static/quote.svg";
import quotes from "./data";

const Quote = () => {
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  const showQuoteHandler = () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  return (
    <div className="quote">
      <div className="quote__container">
        <div className="quote__title">
          <img src={Logo} alt="Logo" height="60" width="60" />
          <p className="quote__titleText">Random Quotes</p>
        </div>
        <div className="quote__infoContainer">
          <div className="quote__info">
            <img src={QuoteIcon} alt="Quote" height="30" width="30" />
            <p className="quote__infoText">{quote.quote}</p>
          </div>
          <p className="quote__infoAuthor"> 👉🏿 {quote.author}</p>
        </div>
        <button className="quote__button" onClick={showQuoteHandler}>
          Generate Quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
