define(function () {
    return {
        makeGoldWidget: function (elementQuery) {
            var docElement = document.querySelector(elementQuery);
            var xhttp = new XMLHttpRequest();


            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log('updating gold');
                    docElement.innerHTML = JSON.parse(xhttp.responseText)[0].CAD;
                }
            };
            xhttp.open('GET', '/api/gold/', true);
            xhttp.send();
        }
    }
})