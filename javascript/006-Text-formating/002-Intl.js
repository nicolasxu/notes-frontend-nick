// July 17, 2014 00:00:00 UTC:
const july172014 = new Date("2014-07-17");

const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};
const americanDateTime = new Intl.DateTimeFormat("en-US", options).format;

// Local timezone vary depending on your settings
// In CEST, logs: 07/17/14, 02:00 AM GMT+2
// In PDT, logs: 07/16/14, 05:00 PM GMT-7
console.log(americanDateTime(july172014));


/////////////////////////////////////////


const gasPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 3,
});

console.log(gasPrice.format(3335.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
  style: "currency",
  currency: "CNY",
});

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五



//////////////////////////////////////////////
// The Intl.Collator object is useful for comparing and sorting strings.

const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(", "));
// "Hochberg, Hönigswald, Holzman"
