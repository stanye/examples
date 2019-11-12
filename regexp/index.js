var str = 'Ys666aa*';

var reg = /^.*(?=.{6,})(?=.*[A-Z])(?=.*[a-z])(?=.*[~!@#$%^&*()])/;

var res = reg.test(str);
console.log('res: ', res);