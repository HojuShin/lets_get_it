//291p
function hello() {
    console.log('hello');
    setTimeout(hello, 1000);
}
setTimeout(hello, 1000);
setInterval(hello, 1000); 