let noModCharsHu = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'ö', 'ü', 'ó', 
  'q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p', 'ő', 'ú', 
  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'é', 'á', 'ű', 
  'í', 'y', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-'
];

let shiftCharsHu = [
  '§', "'", '"', '+', '!', '%', '/', '=', '(', ')', 'Ö', 'Ü', 'Ó', 
  'Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P', 'Ő', 'Ú', 
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'É', 'Á', 'Ű', 
  'Í', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', '?', ':', '_'
];

let altgrCharsHu = [
  '', '~', 'ˇ', '^', '˘', '°', '˛', '`', '˙', '´', '˝', '¨', '¸', 
  '\\', '|', 'Ä', '', '', '', '€', 'Í', '', '', '÷', '×', 
  'ä', 'đ', 'Đ', '[', ']', '', 'í', 'ł', 'Ł', '$', 'ß', '¤', 
  '<', '>', '#', '&', '@', '{', '}', '<', ';', '>', '*'
];

let altgrShiftCharsHu = [
  '', '', '', '', '', '', '', '', '', '', '', '', '', 
  '', '', '', '', '', '', '', '', '', '', '', '', 
  '', '', '', '', '', '', '', '', '', '', '', '', 
  '', '', '', '', '', '', '', '', '', '', ''
];

let noModCharsFi = [
  '§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '´', 
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'å', '¨', 
  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä', "'", 
  '<', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-'
];

let shiftCharsFi = [
  '½', '!', '"', '#', '¤', '%', '&', '/', '(', ')', '=', '?', '`', 
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Å', '^', 
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ö', 'Ä', '*', 
  '>', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ';', ':', '_'
];

let altgrCharsFi = [
  '&#821;', '', '@', '£', '$', '&permil;', '&sbquo; ', '{', '[', ']', '}', '\\', '&cedil;', 
  '', '', '€', '', '&thorn;', '', '', '&#305;', '&oelig;', '&#777;', '&#733;', '~', 
  '&#601;', '&#7838;', '&eth;', '', '', '', '', '&#312;', '&#821;', '&#248;', '&#230;', '&#711;', 
  '|', '&#658;', '&#215;', '', '', '', '&#331;', 'µ', '&#8217;', '&#729;', '&ndash;'
];

let altgrShiftCharsFi = [
  '', '&iexcl;', '&rdquo;', '&raquo;', '&laquo;', '&ldquo;', '&bdquo;', '', '', '', '&deg;', '&iquest;', '&#731;', 
  '', '', '', '', '&THORN;', '', '', '', '&OElig;', '&#795;', '&#730;', '&macr;', 
  '&#399;', '', '&ETH;', '', '', '', '', '', '', '&#216;', '&#198;', '&#728;', 
  '', '&#439;', '&#183;', '', '', '', '&#330;', '&#8212;', '&#8216;', '&#729;', '&#806;'
];

function switchValuesHu()  {
  document.getElementById("char-1-1").innerHTML = noModCharsHu[0]
  document.getElementById("char-1-2").innerHTML = shiftCharsHu[0]
  document.getElementById("char-1-3").innerHTML = altgrCharsHu[0]
  document.getElementById("char-1-3").style.background = "white";
  document.getElementById("char-1-4").innerHTML = altgrShiftCharsHu[0]
  document.getElementById("char-2-1").innerHTML = noModCharsHu[1]
  document.getElementById("char-2-2").innerHTML = shiftCharsHu[1]
  document.getElementById("char-2-3").innerHTML = altgrCharsHu[1]
  document.getElementById("char-2-4").innerHTML = altgrShiftCharsHu[1]
  document.getElementById("char-3-1").innerHTML = noModCharsHu[2]
  document.getElementById("char-3-2").innerHTML = shiftCharsHu[2]
  document.getElementById("char-3-3").innerHTML = altgrCharsHu[2]
  document.getElementById("char-3-3").style.background = "#dedede";
  document.getElementById("char-3-4").innerHTML = altgrShiftCharsHu[2]
  document.getElementById("char-4-1").innerHTML = noModCharsHu[3]
  document.getElementById("char-4-2").innerHTML = shiftCharsHu[3]
  document.getElementById("char-4-3").innerHTML = altgrCharsHu[3]
  document.getElementById("char-4-3").style.background = "#dedede";
  document.getElementById("char-4-4").innerHTML = altgrShiftCharsHu[3]
  document.getElementById("char-5-1").innerHTML = noModCharsHu[4]
  document.getElementById("char-5-2").innerHTML = shiftCharsHu[4]
  document.getElementById("char-5-3").innerHTML = altgrCharsHu[4]
  document.getElementById("char-5-3").style.background = "#dedede";
  document.getElementById("char-5-4").innerHTML = altgrShiftCharsHu[4]
  document.getElementById("char-6-1").innerHTML = noModCharsHu[5]
  document.getElementById("char-6-2").innerHTML = shiftCharsHu[5]
  document.getElementById("char-6-3").innerHTML = altgrCharsHu[5]
  document.getElementById("char-6-3").style.background = "#dedede";
  document.getElementById("char-6-4").innerHTML = altgrShiftCharsHu[5]
  document.getElementById("char-7-1").innerHTML = noModCharsHu[6]
  document.getElementById("char-7-2").innerHTML = shiftCharsHu[6]
  document.getElementById("char-7-3").innerHTML = altgrCharsHu[6]
  document.getElementById("char-7-3").style.background = "#dedede";
  document.getElementById("char-7-4").innerHTML = altgrShiftCharsHu[6]
  document.getElementById("char-8-1").innerHTML = noModCharsHu[7]
  document.getElementById("char-8-2").innerHTML = shiftCharsHu[7]
  document.getElementById("char-8-3").innerHTML = altgrCharsHu[7]
  document.getElementById("char-8-4").innerHTML = altgrShiftCharsHu[7]
  document.getElementById("char-9-1").innerHTML = noModCharsHu[8]
  document.getElementById("char-9-2").innerHTML = shiftCharsHu[8]
  document.getElementById("char-9-3").innerHTML = altgrCharsHu[8]
  document.getElementById("char-9-3").style.background = "#dedede";
  document.getElementById("char-9-4").innerHTML = altgrShiftCharsHu[8]
  document.getElementById("char-10-1").innerHTML = noModCharsHu[9]
  document.getElementById("char-10-2").innerHTML = shiftCharsHu[9]
  document.getElementById("char-10-3").innerHTML = altgrCharsHu[9]
  document.getElementById("char-10-3").style.background = "#dedede";
  document.getElementById("char-10-4").innerHTML = altgrShiftCharsHu[9]
  document.getElementById("char-11-1").innerHTML = noModCharsHu[10]
  document.getElementById("char-11-2").innerHTML = shiftCharsHu[10]
  document.getElementById("char-11-3").innerHTML = altgrCharsHu[10]
  document.getElementById("char-11-3").style.background = "#dedede";
  document.getElementById("char-11-4").innerHTML = altgrShiftCharsHu[10]
  document.getElementById("char-12-1").innerHTML = noModCharsHu[11]
  document.getElementById("char-12-2").innerHTML = shiftCharsHu[11]
  document.getElementById("char-12-3").innerHTML = altgrCharsHu[11]
  document.getElementById("char-12-3").style.background = "#dedede";
  document.getElementById("char-12-4").innerHTML = altgrShiftCharsHu[11]
  document.getElementById("char-13-1").innerHTML = noModCharsHu[12]
  document.getElementById("char-13-1").style.background = "white";
  document.getElementById("char-13-2").innerHTML = shiftCharsHu[12]
  document.getElementById("char-13-2").style.background = "white";
  document.getElementById("char-13-3").innerHTML = altgrCharsHu[12]
  document.getElementById("char-13-3").style.background = "#dedede";
  document.getElementById("char-13-4").innerHTML = altgrShiftCharsHu[12]
  document.getElementById("char-13-4").style.background = "white";
  document.getElementById("char-14-1").innerHTML = noModCharsHu[13]
  document.getElementById("char-14-2").innerHTML = shiftCharsHu[13]
  document.getElementById("char-14-3").innerHTML = altgrCharsHu[13]
  document.getElementById("char-14-4").innerHTML = altgrShiftCharsHu[13]
  document.getElementById("char-15-1").innerHTML = noModCharsHu[14]
  document.getElementById("char-15-2").innerHTML = shiftCharsHu[14]
  document.getElementById("char-15-3").innerHTML = altgrCharsHu[14]
  document.getElementById("char-15-4").innerHTML = altgrShiftCharsHu[14]
  document.getElementById("char-16-1").innerHTML = noModCharsHu[15]
  document.getElementById("char-16-2").innerHTML = shiftCharsHu[15]
  document.getElementById("char-16-3").innerHTML = altgrCharsHu[15]
  document.getElementById("char-16-4").innerHTML = altgrShiftCharsHu[15]
  document.getElementById("char-17-1").innerHTML = noModCharsHu[16]
  document.getElementById("char-17-2").innerHTML = shiftCharsHu[16]
  document.getElementById("char-17-3").innerHTML = altgrCharsHu[16]
  document.getElementById("char-17-4").innerHTML = altgrShiftCharsHu[16]
  document.getElementById("char-18-1").innerHTML = noModCharsHu[17]
  document.getElementById("char-18-2").innerHTML = shiftCharsHu[17]
  document.getElementById("char-18-3").innerHTML = altgrCharsHu[17]
  document.getElementById("char-18-4").innerHTML = altgrShiftCharsHu[17]
  document.getElementById("char-19-1").innerHTML = noModCharsHu[18]
  document.getElementById("char-19-2").innerHTML = shiftCharsHu[18]
  document.getElementById("char-19-3").innerHTML = altgrCharsHu[18]
  document.getElementById("char-19-4").innerHTML = altgrShiftCharsHu[18]
  document.getElementById("char-20-1").innerHTML = noModCharsHu[19]
  document.getElementById("char-20-2").innerHTML = shiftCharsHu[19]
  document.getElementById("char-20-3").innerHTML = altgrCharsHu[19]
  document.getElementById("char-20-4").innerHTML = altgrShiftCharsHu[19]
  document.getElementById("char-21-1").innerHTML = noModCharsHu[20]
  document.getElementById("char-21-2").innerHTML = shiftCharsHu[20]
  document.getElementById("char-21-3").innerHTML = altgrCharsHu[20]
  document.getElementById("char-21-4").innerHTML = altgrShiftCharsHu[20]
  document.getElementById("char-22-1").innerHTML = noModCharsHu[21]
  document.getElementById("char-22-2").innerHTML = shiftCharsHu[21]
  document.getElementById("char-22-3").innerHTML = altgrCharsHu[21]
  document.getElementById("char-22-4").innerHTML = altgrShiftCharsHu[21]
  document.getElementById("char-23-1").innerHTML = noModCharsHu[22]
  document.getElementById("char-23-2").innerHTML = shiftCharsHu[22]
  document.getElementById("char-23-3").innerHTML = altgrCharsHu[22]
  document.getElementById("char-23-3").style.background = "white";
  document.getElementById("char-23-4").innerHTML = altgrShiftCharsHu[22]
  document.getElementById("char-23-4").style.background = "white";
  document.getElementById("char-24-1").innerHTML = noModCharsHu[23]
  document.getElementById("char-24-2").innerHTML = shiftCharsHu[23]
  document.getElementById("char-24-3").innerHTML = altgrCharsHu[23]
  document.getElementById("char-24-3").style.background = "white";
  document.getElementById("char-24-4").innerHTML = altgrShiftCharsHu[23]
  document.getElementById("char-24-4").style.background = "white";
  document.getElementById("char-25-1").innerHTML = noModCharsHu[24]
  document.getElementById("char-25-1").style.background = "white";
  document.getElementById("char-25-2").innerHTML = shiftCharsHu[24]
  document.getElementById("char-25-2").style.background = "white";
  document.getElementById("char-25-3").innerHTML = altgrCharsHu[24]
  document.getElementById("char-25-3").style.background = "white";
  document.getElementById("char-25-4").innerHTML = altgrShiftCharsHu[24]
  document.getElementById("char-25-4").style.background = "white";
  document.getElementById("char-26-1").innerHTML = noModCharsHu[25]
  document.getElementById("char-26-2").innerHTML = shiftCharsHu[25]
  document.getElementById("char-26-3").innerHTML = altgrCharsHu[25]
  document.getElementById("char-26-4").innerHTML = altgrShiftCharsHu[25]
  document.getElementById("char-27-1").innerHTML = noModCharsHu[26]
  document.getElementById("char-27-2").innerHTML = shiftCharsHu[26]
  document.getElementById("char-27-3").innerHTML = altgrCharsHu[26]
  document.getElementById("char-27-4").innerHTML = altgrShiftCharsHu[26]
  document.getElementById("char-28-1").innerHTML = noModCharsHu[27]
  document.getElementById("char-28-2").innerHTML = shiftCharsHu[27]
  document.getElementById("char-28-3").innerHTML = altgrCharsHu[27]
  document.getElementById("char-28-4").innerHTML = altgrShiftCharsHu[27]
  document.getElementById("char-29-1").innerHTML = noModCharsHu[28]
  document.getElementById("char-29-2").innerHTML = shiftCharsHu[28]
  document.getElementById("char-29-3").innerHTML = altgrCharsHu[28]
  document.getElementById("char-29-4").innerHTML = altgrShiftCharsHu[28]
  document.getElementById("char-30-1").innerHTML = noModCharsHu[29]
  document.getElementById("char-30-2").innerHTML = shiftCharsHu[29]
  document.getElementById("char-30-3").innerHTML = altgrCharsHu[29]
  document.getElementById("char-30-4").innerHTML = altgrShiftCharsHu[29]
  document.getElementById("char-31-1").innerHTML = noModCharsHu[30]
  document.getElementById("char-31-2").innerHTML = shiftCharsHu[30]
  document.getElementById("char-31-3").innerHTML = altgrCharsHu[30]
  document.getElementById("char-31-4").innerHTML = altgrShiftCharsHu[30]
  document.getElementById("char-32-1").innerHTML = noModCharsHu[31]
  document.getElementById("char-32-2").innerHTML = shiftCharsHu[31]
  document.getElementById("char-32-3").innerHTML = altgrCharsHu[31]
  document.getElementById("char-32-4").innerHTML = altgrShiftCharsHu[31]
  document.getElementById("char-33-1").innerHTML = noModCharsHu[32]
  document.getElementById("char-33-2").innerHTML = shiftCharsHu[32]
  document.getElementById("char-33-3").innerHTML = altgrCharsHu[32]
  document.getElementById("char-33-4").innerHTML = altgrShiftCharsHu[32]
  document.getElementById("char-34-1").innerHTML = noModCharsHu[33]
  document.getElementById("char-34-2").innerHTML = shiftCharsHu[33]
  document.getElementById("char-34-3").innerHTML = altgrCharsHu[33]
  document.getElementById("char-34-3").style.background = "white";
  document.getElementById("char-34-4").innerHTML = altgrShiftCharsHu[33]
  document.getElementById("char-35-1").innerHTML = noModCharsHu[34]
  document.getElementById("char-35-2").innerHTML = shiftCharsHu[34]
  document.getElementById("char-35-3").innerHTML = altgrCharsHu[34]
  document.getElementById("char-35-4").innerHTML = altgrShiftCharsHu[34]
  document.getElementById("char-36-1").innerHTML = noModCharsHu[35]
  document.getElementById("char-36-2").innerHTML = shiftCharsHu[35]
  document.getElementById("char-36-3").innerHTML = altgrCharsHu[35]
  document.getElementById("char-36-4").innerHTML = altgrShiftCharsHu[35]
  document.getElementById("char-37-1").innerHTML = noModCharsHu[36]
  document.getElementById("char-37-2").innerHTML = shiftCharsHu[36]
  document.getElementById("char-37-3").innerHTML = altgrCharsHu[36]
  document.getElementById("char-37-3").style.background = "white";
  document.getElementById("char-37-4").innerHTML = altgrShiftCharsHu[36]
  document.getElementById("char-37-4").style.background = "white";
  document.getElementById("char-38-1").innerHTML = noModCharsHu[37]
  document.getElementById("char-38-2").innerHTML = shiftCharsHu[37]
  document.getElementById("char-38-3").innerHTML = altgrCharsHu[37]
  document.getElementById("char-38-4").innerHTML = altgrShiftCharsHu[37]
  document.getElementById("char-39-1").innerHTML = noModCharsHu[38]
  document.getElementById("char-39-2").innerHTML = shiftCharsHu[38]
  document.getElementById("char-39-3").innerHTML = altgrCharsHu[38]
  document.getElementById("char-39-4").innerHTML = altgrShiftCharsHu[38]
  document.getElementById("char-40-1").innerHTML = noModCharsHu[39]
  document.getElementById("char-40-2").innerHTML = shiftCharsHu[39]
  document.getElementById("char-40-3").innerHTML = altgrCharsHu[39]
  document.getElementById("char-40-4").innerHTML = altgrShiftCharsHu[39]
  document.getElementById("char-41-1").innerHTML = noModCharsHu[40]
  document.getElementById("char-41-2").innerHTML = shiftCharsHu[40]
  document.getElementById("char-41-3").innerHTML = altgrCharsHu[40]
  document.getElementById("char-41-4").innerHTML = altgrShiftCharsHu[40]
  document.getElementById("char-42-1").innerHTML = noModCharsHu[41]
  document.getElementById("char-42-2").innerHTML = shiftCharsHu[41]
  document.getElementById("char-42-3").innerHTML = altgrCharsHu[41]
  document.getElementById("char-42-4").innerHTML = altgrShiftCharsHu[41]
  document.getElementById("char-43-1").innerHTML = noModCharsHu[42]
  document.getElementById("char-43-2").innerHTML = shiftCharsHu[42]
  document.getElementById("char-43-3").innerHTML = altgrCharsHu[42]
  document.getElementById("char-43-4").innerHTML = altgrShiftCharsHu[42]
  document.getElementById("char-44-1").innerHTML = noModCharsHu[43]
  document.getElementById("char-44-2").innerHTML = shiftCharsHu[43]
  document.getElementById("char-44-3").innerHTML = altgrCharsHu[43]
  document.getElementById("char-44-4").innerHTML = altgrShiftCharsHu[43]
  document.getElementById("char-45-1").innerHTML = noModCharsHu[44]
  document.getElementById("char-45-2").innerHTML = shiftCharsHu[44]
  document.getElementById("char-45-3").innerHTML = altgrCharsHu[44]
  document.getElementById("char-45-4").innerHTML = altgrShiftCharsHu[44]
  document.getElementById("char-46-1").innerHTML = noModCharsHu[45]
  document.getElementById("char-46-2").innerHTML = shiftCharsHu[45]
  document.getElementById("char-46-3").innerHTML = altgrCharsHu[45]
  document.getElementById("char-46-4").innerHTML = altgrShiftCharsHu[45]
  document.getElementById("char-47-1").innerHTML = noModCharsHu[46]
  document.getElementById("char-47-2").innerHTML = shiftCharsHu[46]
  document.getElementById("char-47-3").innerHTML = altgrCharsHu[46]
  document.getElementById("char-47-3").style.background = "white";
  document.getElementById("char-47-4").innerHTML = altgrShiftCharsHu[46]
  document.getElementById("char-47-4").style.background = "white";
  document.getElementById("char-48-1").innerHTML = noModCharsHu[47]
  document.getElementById("char-48-2").innerHTML = shiftCharsHu[47]
  document.getElementById("char-48-3").innerHTML = altgrCharsHu[47]
  document.getElementById("char-48-4").innerHTML = altgrShiftCharsHu[47]
  document.getElementById("char-48-4").style.background = "white";
}

function switchValuesFi()  {
  document.getElementById("char-1-1").innerHTML = noModCharsFi[0]
  document.getElementById("char-1-2").innerHTML = shiftCharsFi[0]
  document.getElementById("char-1-3").innerHTML = altgrCharsFi[0]
  document.getElementById("char-1-3").style.background = "#dedede";
  document.getElementById("char-1-4").innerHTML = altgrShiftCharsFi[0]
  document.getElementById("char-2-1").innerHTML = noModCharsFi[1]
  document.getElementById("char-2-2").innerHTML = shiftCharsFi[1]
  document.getElementById("char-2-3").innerHTML = altgrCharsFi[1]
  document.getElementById("char-2-4").innerHTML = altgrShiftCharsFi[1]
  document.getElementById("char-3-1").innerHTML = noModCharsFi[2]
  document.getElementById("char-3-2").innerHTML = shiftCharsFi[2]
  document.getElementById("char-3-3").innerHTML = altgrCharsFi[2]
  document.getElementById("char-3-3").style.background = "white";
  document.getElementById("char-3-4").innerHTML = altgrShiftCharsFi[2]
  document.getElementById("char-4-1").innerHTML = noModCharsFi[3]
  document.getElementById("char-4-2").innerHTML = shiftCharsFi[3]
  document.getElementById("char-4-3").innerHTML = altgrCharsFi[3]
  document.getElementById("char-4-3").style.background = "white";
  document.getElementById("char-4-4").innerHTML = altgrShiftCharsFi[3]
  document.getElementById("char-5-1").innerHTML = noModCharsFi[4]
  document.getElementById("char-5-2").innerHTML = shiftCharsFi[4]
  document.getElementById("char-5-3").innerHTML = altgrCharsFi[4]
  document.getElementById("char-5-3").style.background = "white";
  document.getElementById("char-5-4").innerHTML = altgrShiftCharsFi[4]
  document.getElementById("char-6-1").innerHTML = noModCharsFi[5]
  document.getElementById("char-6-2").innerHTML = shiftCharsFi[5]
  document.getElementById("char-6-3").innerHTML = altgrCharsFi[5]
  document.getElementById("char-6-3").style.background = "white";
  document.getElementById("char-6-4").innerHTML = altgrShiftCharsFi[5]
  document.getElementById("char-7-1").innerHTML = noModCharsFi[6]
  document.getElementById("char-7-2").innerHTML = shiftCharsFi[6]
  document.getElementById("char-7-3").innerHTML = altgrCharsFi[6]
  document.getElementById("char-7-3").style.background = "white";
  document.getElementById("char-7-4").innerHTML = altgrShiftCharsFi[6]
  document.getElementById("char-8-1").innerHTML = noModCharsFi[7]
  document.getElementById("char-8-2").innerHTML = shiftCharsFi[7]
  document.getElementById("char-8-3").innerHTML = altgrCharsFi[7]
  document.getElementById("char-8-4").innerHTML = altgrShiftCharsFi[7]
  document.getElementById("char-9-1").innerHTML = noModCharsFi[8]
  document.getElementById("char-9-2").innerHTML = shiftCharsFi[8]
  document.getElementById("char-9-3").innerHTML = altgrCharsFi[8]
  document.getElementById("char-9-3").style.background = "white";
  document.getElementById("char-9-4").innerHTML = altgrShiftCharsFi[8]
  document.getElementById("char-10-1").innerHTML = noModCharsFi[9]
  document.getElementById("char-10-2").innerHTML = shiftCharsFi[9]
  document.getElementById("char-10-3").innerHTML = altgrCharsFi[9]
  document.getElementById("char-10-3").style.background = "white";
  document.getElementById("char-10-4").innerHTML = altgrShiftCharsFi[9]
  document.getElementById("char-11-1").innerHTML = noModCharsFi[10]
  document.getElementById("char-11-2").innerHTML = shiftCharsFi[10]
  document.getElementById("char-11-3").innerHTML = altgrCharsFi[10]
  document.getElementById("char-11-3").style.background = "white";
  document.getElementById("char-11-4").innerHTML = altgrShiftCharsFi[10]
  document.getElementById("char-12-1").innerHTML = noModCharsFi[11]
  document.getElementById("char-12-2").innerHTML = shiftCharsFi[11]
  document.getElementById("char-12-3").innerHTML = altgrCharsFi[11]
  document.getElementById("char-12-3").style.background = "white";
  document.getElementById("char-12-4").innerHTML = altgrShiftCharsFi[11]
  document.getElementById("char-13-1").innerHTML = noModCharsFi[12]
  document.getElementById("char-13-1").style.background = "#dedede";
  document.getElementById("char-13-2").innerHTML = shiftCharsFi[12]
  document.getElementById("char-13-2").style.background = "#dedede";
  document.getElementById("char-13-3").innerHTML = altgrCharsFi[12]
  document.getElementById("char-13-3").style.background = "#dedede";
  document.getElementById("char-13-4").innerHTML = altgrShiftCharsFi[12]
  document.getElementById("char-13-4").style.background = "#dedede";
  document.getElementById("char-14-1").innerHTML = noModCharsFi[13]
  document.getElementById("char-14-2").innerHTML = shiftCharsFi[13]
  document.getElementById("char-14-3").innerHTML = altgrCharsFi[13]
  document.getElementById("char-14-4").innerHTML = altgrShiftCharsFi[13]
  document.getElementById("char-15-1").innerHTML = noModCharsFi[14]
  document.getElementById("char-15-2").innerHTML = shiftCharsFi[14]
  document.getElementById("char-15-3").innerHTML = altgrCharsFi[14]
  document.getElementById("char-15-4").innerHTML = altgrShiftCharsFi[14]
  document.getElementById("char-16-1").innerHTML = noModCharsFi[15]
  document.getElementById("char-16-2").innerHTML = shiftCharsFi[15]
  document.getElementById("char-16-3").innerHTML = altgrCharsFi[15]
  document.getElementById("char-16-4").innerHTML = altgrShiftCharsFi[15]
  document.getElementById("char-17-1").innerHTML = noModCharsFi[16]
  document.getElementById("char-17-2").innerHTML = shiftCharsFi[16]
  document.getElementById("char-17-3").innerHTML = altgrCharsFi[16]
  document.getElementById("char-17-4").innerHTML = altgrShiftCharsFi[16]
  document.getElementById("char-18-1").innerHTML = noModCharsFi[17]
  document.getElementById("char-18-2").innerHTML = shiftCharsFi[17]
  document.getElementById("char-18-3").innerHTML = altgrCharsFi[17]
  document.getElementById("char-18-4").innerHTML = altgrShiftCharsFi[17]
  document.getElementById("char-19-1").innerHTML = noModCharsFi[18]
  document.getElementById("char-19-2").innerHTML = shiftCharsFi[18]
  document.getElementById("char-19-3").innerHTML = altgrCharsFi[18]
  document.getElementById("char-19-4").innerHTML = altgrShiftCharsFi[18]
  document.getElementById("char-20-1").innerHTML = noModCharsFi[19]
  document.getElementById("char-20-2").innerHTML = shiftCharsFi[19]
  document.getElementById("char-20-3").innerHTML = altgrCharsFi[19]
  document.getElementById("char-20-4").innerHTML = altgrShiftCharsFi[19]
  document.getElementById("char-21-1").innerHTML = noModCharsFi[20]
  document.getElementById("char-21-2").innerHTML = shiftCharsFi[20]
  document.getElementById("char-21-3").innerHTML = altgrCharsFi[20]
  document.getElementById("char-21-4").innerHTML = altgrShiftCharsFi[20]
  document.getElementById("char-22-1").innerHTML = noModCharsFi[21]
  document.getElementById("char-22-2").innerHTML = shiftCharsFi[21]
  document.getElementById("char-22-3").innerHTML = altgrCharsFi[21]
  document.getElementById("char-22-4").innerHTML = altgrShiftCharsFi[21]
  document.getElementById("char-23-1").innerHTML = noModCharsFi[22]
  document.getElementById("char-23-2").innerHTML = shiftCharsFi[22]
  document.getElementById("char-23-3").innerHTML = altgrCharsFi[22]
  document.getElementById("char-23-3").style.background = "#dedede";
  document.getElementById("char-23-4").innerHTML = altgrShiftCharsFi[22]
  document.getElementById("char-23-4").style.background = "#dedede";
  document.getElementById("char-24-1").innerHTML = noModCharsFi[23]
  document.getElementById("char-24-2").innerHTML = shiftCharsFi[23]
  document.getElementById("char-24-3").innerHTML = altgrCharsFi[23]
  document.getElementById("char-24-3").style.background = "#dedede";
  document.getElementById("char-24-4").innerHTML = altgrShiftCharsFi[23]
  document.getElementById("char-24-4").style.background = "#dedede";
  document.getElementById("char-25-1").innerHTML = noModCharsFi[24]
  document.getElementById("char-25-1").style.background = "#dedede";
  document.getElementById("char-25-2").innerHTML = shiftCharsFi[24]
  document.getElementById("char-25-2").style.background = "#dedede";
  document.getElementById("char-25-3").innerHTML = altgrCharsFi[24]
  document.getElementById("char-25-3").style.background = "#dedede";
  document.getElementById("char-25-4").innerHTML = altgrShiftCharsFi[24]
  document.getElementById("char-25-4").style.background = "#dedede";
  document.getElementById("char-26-1").innerHTML = noModCharsFi[25]
  document.getElementById("char-26-2").innerHTML = shiftCharsFi[25]
  document.getElementById("char-26-3").innerHTML = altgrCharsFi[25]
  document.getElementById("char-26-4").innerHTML = altgrShiftCharsFi[25]
  document.getElementById("char-27-1").innerHTML = noModCharsFi[26]
  document.getElementById("char-27-2").innerHTML = shiftCharsFi[26]
  document.getElementById("char-27-3").innerHTML = altgrCharsFi[26]
  document.getElementById("char-27-4").innerHTML = altgrShiftCharsFi[26]
  document.getElementById("char-28-1").innerHTML = noModCharsFi[27]
  document.getElementById("char-28-2").innerHTML = shiftCharsFi[27]
  document.getElementById("char-28-3").innerHTML = altgrCharsFi[27]
  document.getElementById("char-28-4").innerHTML = altgrShiftCharsFi[27]
  document.getElementById("char-29-1").innerHTML = noModCharsFi[28]
  document.getElementById("char-29-2").innerHTML = shiftCharsFi[28]
  document.getElementById("char-29-3").innerHTML = altgrCharsFi[28]
  document.getElementById("char-29-4").innerHTML = altgrShiftCharsFi[28]
  document.getElementById("char-30-1").innerHTML = noModCharsFi[29]
  document.getElementById("char-30-2").innerHTML = shiftCharsFi[29]
  document.getElementById("char-30-3").innerHTML = altgrCharsFi[29]
  document.getElementById("char-30-4").innerHTML = altgrShiftCharsFi[29]
  document.getElementById("char-31-1").innerHTML = noModCharsFi[30]
  document.getElementById("char-31-2").innerHTML = shiftCharsFi[30]
  document.getElementById("char-31-3").innerHTML = altgrCharsFi[30]
  document.getElementById("char-31-4").innerHTML = altgrShiftCharsFi[30]
  document.getElementById("char-32-1").innerHTML = noModCharsFi[31]
  document.getElementById("char-32-2").innerHTML = shiftCharsFi[31]
  document.getElementById("char-32-3").innerHTML = altgrCharsFi[31]
  document.getElementById("char-32-4").innerHTML = altgrShiftCharsFi[31]
  document.getElementById("char-33-1").innerHTML = noModCharsFi[32]
  document.getElementById("char-33-2").innerHTML = shiftCharsFi[32]
  document.getElementById("char-33-3").innerHTML = altgrCharsFi[32]
  document.getElementById("char-33-4").innerHTML = altgrShiftCharsFi[32]
  document.getElementById("char-34-1").innerHTML = noModCharsFi[33]
  document.getElementById("char-34-2").innerHTML = shiftCharsFi[33]
  document.getElementById("char-34-3").innerHTML = altgrCharsFi[33]
  document.getElementById("char-34-3").style.background = "#dedede";
  document.getElementById("char-34-4").innerHTML = altgrShiftCharsFi[33]
  document.getElementById("char-35-1").innerHTML = noModCharsFi[34]
  document.getElementById("char-35-2").innerHTML = shiftCharsFi[34]
  document.getElementById("char-35-3").innerHTML = altgrCharsFi[34]
  document.getElementById("char-35-4").innerHTML = altgrShiftCharsFi[34]
  document.getElementById("char-36-1").innerHTML = noModCharsFi[35]
  document.getElementById("char-36-2").innerHTML = shiftCharsFi[35]
  document.getElementById("char-36-3").innerHTML = altgrCharsFi[35]
  document.getElementById("char-36-4").innerHTML = altgrShiftCharsFi[35]
  document.getElementById("char-37-1").innerHTML = noModCharsFi[36]
  document.getElementById("char-37-2").innerHTML = shiftCharsFi[36]
  document.getElementById("char-37-3").innerHTML = altgrCharsFi[36]
  document.getElementById("char-37-3").style.background = "#dedede";
  document.getElementById("char-37-4").innerHTML = altgrShiftCharsFi[36]
  document.getElementById("char-37-4").style.background = "#dedede";
  document.getElementById("char-38-1").innerHTML = noModCharsFi[37]
  document.getElementById("char-38-2").innerHTML = shiftCharsFi[37]
  document.getElementById("char-38-3").innerHTML = altgrCharsFi[37]
  document.getElementById("char-38-4").innerHTML = altgrShiftCharsFi[37]
  document.getElementById("char-39-1").innerHTML = noModCharsFi[38]
  document.getElementById("char-39-2").innerHTML = shiftCharsFi[38]
  document.getElementById("char-39-3").innerHTML = altgrCharsFi[38]
  document.getElementById("char-39-4").innerHTML = altgrShiftCharsFi[38]
  document.getElementById("char-40-1").innerHTML = noModCharsFi[39]
  document.getElementById("char-40-2").innerHTML = shiftCharsFi[39]
  document.getElementById("char-40-3").innerHTML = altgrCharsFi[39]
  document.getElementById("char-40-4").innerHTML = altgrShiftCharsFi[39]
  document.getElementById("char-41-1").innerHTML = noModCharsFi[40]
  document.getElementById("char-41-2").innerHTML = shiftCharsFi[40]
  document.getElementById("char-41-3").innerHTML = altgrCharsFi[40]
  document.getElementById("char-41-4").innerHTML = altgrShiftCharsFi[40]
  document.getElementById("char-42-1").innerHTML = noModCharsFi[41]
  document.getElementById("char-42-2").innerHTML = shiftCharsFi[41]
  document.getElementById("char-42-3").innerHTML = altgrCharsFi[41]
  document.getElementById("char-42-4").innerHTML = altgrShiftCharsFi[41]
  document.getElementById("char-43-1").innerHTML = noModCharsFi[42]
  document.getElementById("char-43-2").innerHTML = shiftCharsFi[42]
  document.getElementById("char-43-3").innerHTML = altgrCharsFi[42]
  document.getElementById("char-43-4").innerHTML = altgrShiftCharsFi[42]
  document.getElementById("char-44-1").innerHTML = noModCharsFi[43]
  document.getElementById("char-44-2").innerHTML = shiftCharsFi[43]
  document.getElementById("char-44-3").innerHTML = altgrCharsFi[43]
  document.getElementById("char-44-4").innerHTML = altgrShiftCharsFi[43]
  document.getElementById("char-45-1").innerHTML = noModCharsFi[44]
  document.getElementById("char-45-2").innerHTML = shiftCharsFi[44]
  document.getElementById("char-45-3").innerHTML = altgrCharsFi[44]
  document.getElementById("char-45-4").innerHTML = altgrShiftCharsFi[44]
  document.getElementById("char-46-1").innerHTML = noModCharsFi[45]
  document.getElementById("char-46-2").innerHTML = shiftCharsFi[45]
  document.getElementById("char-46-3").innerHTML = altgrCharsFi[45]
  document.getElementById("char-46-4").innerHTML = altgrShiftCharsFi[45]
  document.getElementById("char-47-1").innerHTML = noModCharsFi[46]
  document.getElementById("char-47-2").innerHTML = shiftCharsFi[46]
  document.getElementById("char-47-3").innerHTML = altgrCharsFi[46]
  document.getElementById("char-47-3").style.background = "#dedede";
  document.getElementById("char-47-4").innerHTML = altgrShiftCharsFi[46]
  document.getElementById("char-47-4").style.background = "#dedede";
  document.getElementById("char-48-1").innerHTML = noModCharsFi[47]
  document.getElementById("char-48-2").innerHTML = shiftCharsFi[47]
  document.getElementById("char-48-3").innerHTML = altgrCharsFi[47]
  document.getElementById("char-48-4").innerHTML = altgrShiftCharsFi[47]
  document.getElementById("char-48-4").style.background = "#dedede";
}