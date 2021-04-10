async function request(req, url, data) {
    let res;
    if (req === "GET") {
        res = await fetch(url, {
            method: req, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
        });
    } else {
        res = await fetch(url, {
            method: req, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: data // body data type must match "Content-Type" header
        });
    }

    let inf = await res;
    console.log(inf);

    let jso = await res.text();
    Swal.fire({
        title: 'Request',
        text: jso,
        icon: 'success',
        confirmButtonText: 'Continue'
    })

}

$(document).ready(function(){
    $("#sendbut").click(function(){
        if($("#req").val() === "Choose request") {
            alert("Please, choose request type!");
        } else if ($("#reqbody").val() === "" && $("#req").val() !== "GET") {
            alert("Enter request's Body!");
        } else {
            request($("#req").val(), $("#url").val(), $("#reqbody").val());
        }

    });

    $("#req").change(function() {
        if($("#req").val() === "GET") {
            $("#bodydiv").hide(1000);
        } else {
            $("#bodydiv").show(1000);
        }
    });

});