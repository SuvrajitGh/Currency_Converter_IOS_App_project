function convertAmt() {
  var amount = parseFloat(document.getElementById("amt").value);
  var fromCurrency = document.getElementById("from").value;
  var toCurrency = document.getElementById("to").value;

  var rates = {
    USD: 1, // US Dollar
    EUR: 0.84, // Euro
    GBP: 0.72, // British Pound
    JPY: 109.88, // Japanese Yen
    CAD: 1.22, // Canadian Dollar
    AUD: 1.3, // Australian Dollar
    CHF: 0.91, // Swiss Franc
    CNY: 6.38, // Chinese Yuan
    SEK: 8.67, // Swedish Krona
    NZD: 1.4, // New Zealand Dollar
    INR: 74.64, // Indian Rupee
  };

  var convertedAmount = amount * (rates[toCurrency] / rates[fromCurrency]);
  document.getElementById("convertedAmt").value = convertedAmount.toFixed(2);
}
