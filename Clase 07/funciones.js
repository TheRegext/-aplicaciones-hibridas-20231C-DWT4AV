async function A() {
    console.log("A");

    throw "Error controlado, puesto a proposito para que falle y me llamen, asi cobro mas xD" // dispara una excepcion

    return 5;
}

// const promise = A();
// then se utiliza cunado la promesa se resuelve correctamente
/*
A()
    .then(function (data) {
        console.log("Se resolvio correctamente", data);
    })
    .catch(function (data) {
        console.log("Se resolvio incorrectamente", data);
    })
    .finally(function () {
        console.log("Se resolvio de una forma u otra");
    });

console.log("Fin del programa");
*/
async function B() {
    console.log("B");

    return A()
        .then(function (data) {
            return data * 2;
        })
        .catch(function (data) {
            throw data
        })
}

B()
    .then(function (data) {
        console.log("Se resolvio correctamente", data);
        return data * 2;
    })
    .then(function (data) {
        console.log("Se resolvio, nuevamente, correctamente", data);
    })
    .catch(function () {
        console.log("Se resolvio incorrectamente");
    })
    .finally(function () {
        console.log("termina");
    })





function C() {
    console.log("C");

    return B();
}
/*
A()
B()
C()
*/
//console.log(B());



async function D() {
    console.log("D");
    return 8;
}

async function E() {
    console.log("E");
    return 9;
}

async function F() {
    console.log("F");
    return 10;
}


async function G() {
    let acum = 0;

    return D()
        .then(function (data) {
            acum += data;
            return E()
        })
        .then(function (data) {
            acum += data;
            return F()
        })
        .then(function () {
            console.log(acum);
        })
}


async function H() {
    let acum = 0;

    acum += await D();
    acum += await E();
    acum += await F();

    console.log(acum);
}
