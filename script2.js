const button = document.getElementById("modoOscuro");

button.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

function valor() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    return { n1, n2 };
}

document.getElementById("sumar").addEventListener("click", function() {
    let { n1, n2 } = valor();
    document.getElementById("result").textContent = n1 + n2;
});

document.getElementById("restar").addEventListener("click", function() {
    let { n1, n2 } = valor();
    document.getElementById("result").textContent = n1 - n2;
});

document.getElementById("multiplicar").addEventListener("click", function() {
    let { n1, n2 } = valor();
    document.getElementById("result").textContent = n1 * n2;
});

document.getElementById("dividir").addEventListener("click", function() {
    let { n1, n2 } = valor();  
    document.getElementById("result").textContent =  n1 / n2 ;
});


