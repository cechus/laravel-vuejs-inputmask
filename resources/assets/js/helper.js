
export function moneyInputMask() {
  return {
    alias: "numeric",
    groupSeparator: ",",
    autoGroup: true,
    digits: 2,
    digitsOptional: false,
    prefix: "Bs ",
    placeholder: "0"
  };
}
export function dateInputMask() {
  return {
    alias: "date",
    inputFormat: "dd/mm/yyyy",
  };
}
export function parseMoney(value) {
    let result = value.replace(/(Bs|\s+)/ig, ``);
    result = result.replace(/,/g, ``);
    return result;
}
