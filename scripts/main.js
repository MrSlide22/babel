var obj = {
    nombre: 'Pepito',
    saludo: function() {
        return 'Hola, ' + this.nombre + '!';
    }
};

obj.nombre;
obj.saludo;
obj['saludo']();
var fn = obj["saludo"];
fn();
