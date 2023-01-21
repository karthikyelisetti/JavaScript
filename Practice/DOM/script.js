console.log("This is from script.js file");

function myFun() {
    // Generating random text
    let el = document.getElementById("firstp");
    var arr = ["John","David","James","Albert"];
    let randomText = Math.floor(Math.random() * arr.length);
    el.innerText = arr[randomText];

    // Multiplication of two numbers
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);
    let outputValue = document.getElementById("output");

    outputValue.innerText = Math.floor(num1 * num2);

    //appending the output
    let parentel = document.getElementById("mul");
    parentel.appendchild(el);
}

function myTable() {
    //appending the output    
    var num = parseInt(document.getElementById("input4").value);
    var val = parseInt(document.getElementById("input3").value);
    let parentel = document.getElementById("output");

    for (i=1;i<=num;i++) {
        let el = document.createElement('h5');
        el.innerHTML = `${val} * ${i} = ${value}`;
        // 
        // var val1 = val * i;
    }
    
    // parentel.appendchild(el);
}
