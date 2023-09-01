document.write('Tabuada: <br><br>');

var y = 0, x = 0;

for (x = 1; x <= 10; x++) {

    for (y = 1; y <= 10; y++) {

        document.write(x + ' X ' + y + ' = ' + x * y + '<br>');


    }

    document.write('<br>');

}
