let string = 'INDIA';
string = string.split('');
string.splice(3, 0, 'ONES');
string = string.join('');
console.log(string);
