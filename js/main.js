let result;
        multiply = function() {
            result = $("#result").append("<p>" + $("#num1").val() + " * " + $("#num2").val() + " = " + $("#num1").val() * $("#num2").val() + "</p>");
            return result;
        }
        

        divide = function() {
            $("#result").append("<p>" + $("#num1").val() + " / " + $("#num2").val() + " = " + $("#num1").val() / $("#num2").val() + "</p>");
        }

        addFunc = function() {
            let calculate;
            num1 = parseFloat(document.querySelector("#num1").value);
            num2 = parseFloat(document.querySelector("#num2").value);
            result = document.querySelector("#result");
            calculate = num1 + num2;
            $(result).append("<p>" + num1 + " + " + num2 + " = " + calculate) + "</p>";
        }

        minusFunc = function() {
            let calculate;
            num1 = parseFloat(document.querySelector("#num1").value);
            num2 = parseFloat(document.querySelector("#num2").value);
            result = document.querySelector("#result");
            calculate = num1 - num2;
            $(result).append("<p>" + num1 + " - " + num2 + " = " + calculate) + "</p>";
        }

        clearFunc = function() {
            $("#result").html("")
        }

        $("#multiply").on("click", multiply);

        $("#divide").on("click", divide);

        $("#add").on("click", addFunc);

        $("#minus").on("click", minusFunc);

        $("#clear").on("click",clearFunc);