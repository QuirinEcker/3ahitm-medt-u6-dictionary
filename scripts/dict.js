window.addEventListener('load', () => {
    let submitButton = document.querySelector('#submit-button');
    let inputField = document.querySelector('#input')

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {}
    xhttp.open("POST", "dict.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("val=" + "load");

    submitButton.addEventListener('click',() => {
        let search_val = document.getElementById("input").value;
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status == 200) {
                // parse response into JSON object
                let answer = JSON.parse(this.responseText);

                // generate html output
                let answer_html = "";
                for (let value of answer) {
                    // create html code and save it in answer_html
                    answer_html += `<p> ${value} </p>`;
                }

                // send output to DOM
                document.getElementById("answer").innerHTML = answer_html;

            }
        };
        xhttp.open("POST", "dict.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("val=" + search_val);
    })
});