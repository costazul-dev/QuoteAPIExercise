const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.get("/api/quotes/random", (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  res.send({ quote: randomQuote });
});

app.get("/api/quotes/", (req, res, next) => {
  if (req.query.person) {
    const requestedQuotes = quotes.filter(
      (quoteObj) => quoteObj.person === req.query.person
    );
    res.send({ quotes: requestedQuotes });
  } else {
    res.send({ quotes: quotes });
  }
});

app.post("/api/quotes", (req, res, next) => {
  if (req.query.person && req.query.quote) {
    const newQuote = { quote: req.query.quote, person: req.query.person };
    quotes.push(newQuote);
    res.send({ quote: newQuote });
  } else {
    res.status(400).send("Invalid quote formatting.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
