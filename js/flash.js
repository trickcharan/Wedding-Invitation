
 $(document).ready(function() {
    console.log( "ready!" );
    setTimeout(() => {
        window.location.href = "./index1.html";
     }, 5000);
});
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    console.log("Completed")
  }
};