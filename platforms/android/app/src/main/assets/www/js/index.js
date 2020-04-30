var xmlhttp;

window.onload= function() {
    this.document.addEventListener('deviceready', init, false);
    init();
}

function init() {
    document.getElementById('btnSendData').addEventListener('click', sendData, true);

    //preparing xmlhttp var as XMLHttpRequest object and set its onreadystatechange property
    xmlhttp = new XMLHttpRequest;
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("response").innerHTML = xmlhttp.responseText;
        }
    };
}

function sendData() {
    var song = document.getElementById("song").value;
    var band = document.getElementById("band").value;
    var year = document.getElementById("year").value;
    var rating = document.getElementById("rating").value;

    var url = "http://localhost/get_test.php?song=" + song + "&band=" +
        band + "&year=" + year + "&rating=" + rating;

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}

