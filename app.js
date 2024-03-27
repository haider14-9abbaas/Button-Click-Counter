var counter= 0;

document.addEventListener('keydown',function(){
counter++;
showAlert(counter);
});
function showAlert(count){
    const message = 'Alert= '+ count;
    alert(message);
}