define(function () {
    return {
        makeGoldWidget: function (elements) {
            var xhttp = new XMLHttpRequest();


            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log('updating gold');
                    let results = JSON.parse(xhttp.responseText);
                    for (key in elements) {
                        document.querySelector(elements[key]).innerHTML = '$'+results[key].CAD;
                    }
                    //docElement.innerHTML = JSON.parse(xhttp.responseText)[0].CAD;
                }
            };
            xhttp.open('GET', '/api/gold/', true);
            xhttp.send();
        }
    }
})