module.exports = function toReadable (number) {
    let ones = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    let tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    let hundreds = [' hundred'];
    let numberString = number.toString();
    let result = '';
      if (number === 0) {
        return 'zero';
      } else if (number < 20) {
        return ones[number].slice(1);
      } else if ((number > 99) && (numberString[1] == '1')) {
        result = ones[parseInt(numberString.charAt(0))] + hundreds;
        result += ones[numberString.slice(1)];
        return result.slice(1);
      } else if ((number > 99) && (numberString[1] !== '1')) {
        result = ones[parseInt(numberString.charAt(0))] + hundreds;
        result += tens[numberString.charAt(1)];
        result += ones[numberString.charAt(2)];
        return result.slice(1);
      } else {
        result += tens[numberString.charAt(0)]
        result += ones[numberString.charAt(1)]
        return result.slice(1);
      }
}
