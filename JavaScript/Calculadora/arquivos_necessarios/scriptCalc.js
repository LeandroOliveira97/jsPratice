function calcular (tipo , valor) {

    if(tipo == 'acao'){

        switch (valor) {
            case 'c':
                    document.getElementById('campo_in').value = '';
                    document.getElementById('campo_out').value = '';
                break;
        
            case '+':
            case '-':
            case '/':
            case '*':
            case '.':
            
                document.getElementById('campo_in').value = eval(document.getElementById('campo_in').value);

                document.getElementById('campo_in').value += valor;
            
            break;

        }

        if (valor === '=') {
             
            var valor_campo_calculado = eval(document.getElementById('campo_in').value);

            
            document.getElementById('campo_out').value = valor_campo_calculado;

        }

    } else if(tipo == 'valor') {

        var valor_campo = document.getElementById('campo_in').value;

        document.getElementById('campo_in').value += valor;

    }

}