export  function whatsMyType<T> (argument: T ) : T {

    return argument;
}

let valueAsString = whatsMyType('Hola Mundo');
console.log('va;ueasString ' + valueAsString);