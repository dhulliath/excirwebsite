define(function () {
    return {
        makeGoldWidget: function (containerQuery, elements) {
            var container = document.querySelector(containerQuery);
            var xhttp = new XMLHttpRequest();
            console.log(elements);

            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log('updating gold');
                    let results = JSON.parse(xhttp.responseText);
                    for (key in elements) {
                        //document.querySelector(elements[key]).innerHTML = '$'+results[key].CAD;
                        container.appendChild(makeElement(elements[key], 'CA $'+parseFloat(Math.round(results[key].CAD * 100) / 100).toFixed(2)));
                    }
                    console.log(results);
                    //docElement.innerHTML = JSON.parse(xhttp.responseText)[0].CAD;
                }
            };
            xhttp.open('GET', '/api/gold/', true);
            xhttp.send();
        }
    }
})

function makeElement(label, value) {
    var parentElement = document.createElement('div');
    var labelElement = document.createElement('div');
    var valueElement = document.createElement('div');

    labelElement.innerHTML = label;
    valueElement.innerHTML = value;

    parentElement.appendChild(labelElement);
    parentElement.appendChild(valueElement);

    return parentElement;
}