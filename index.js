
function receivesAFunction(callback) {
    callback();
}
function returnsAnAnonymousFunction() {
    return (function(){
        console.log("Hello world!")
    });
}
function returnsANamedFunction() {
    return receivesAFunction;
}