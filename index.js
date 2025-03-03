// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Swap currency function
document.getElementById('swap').addEventListener('click', function () {
  const fromCurrency = document.getElementById('from-currency');
  const toCurrency = document.getElementById('to-currency');
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;

  // Update conversion
  updateConversion();
});

// Convert button
document.getElementById('convert').addEventListener('click', function () {
  updateConversion();
});

// Simple conversion demo logic (would be replaced with real API in production)
function updateConversion() {
  const amount = parseFloat(document.getElementById('amount').value) || 0;
  const fromCurrency = document.getElementById('from-currency').value;
  const toCurrency = document.getElementById('to-currency').value;

  // Demo rates (these would come from an API in a real app)
  const rates = {
    USD: 1,
    EUR: 0.93,
    GBP: 0.78,
    JPY: 150.24,
    CAD: 1.35,
    AUD: 1.51,
    CHF: 0.87,
    CNY: 7.23,
    INR: 83.15,
    BDT: 114.78,
  };

  // Calculate conversion
  const result = amount * (rates[toCurrency] / rates[fromCurrency]);
  document.getElementById('result').value = result.toFixed(2);

  // Update display rate
  document.querySelector(
    '.result-amount'
  ).textContent = `1 ${fromCurrency} = ${(
    rates[toCurrency] / rates[fromCurrency]
  ).toFixed(2)} ${toCurrency}`;

  // Update last updated
  const now = new Date();
  document.querySelector(
    '.result-text'
  ).textContent = `Last updated: ${now.toLocaleDateString()}`;
}

// Currency card click function
document.querySelectorAll('.currency-card').forEach(card => {
  card.addEventListener('click', function () {
    const pair = this.querySelector('.currency-name').textContent.split('/');
    document.getElementById('from-currency').value = pair[0];
    document.getElementById('to-currency').value = pair[1];
    updateConversion();
  });
});
