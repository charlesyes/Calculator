    var Operation = 0; // 暫存符號
    var tmpHideValue = 0 // 暫存運算結果
// 顯示數字在txtbox
    $(".NumBtn").click(function () {
        var tmpNum = $(this).val();
        $("#txtDisplay").val($("#txtDisplay").val() + tmpNum);
    })
// 清除 C
    function Clean() {
        tmpHideValue = 0;
        document.getElementById("txtDisplay").value = document.getElementById("hideOperation").value = "";
    }
// 全部運算 + - * / 
    function CalcuOpera(eOpera) {
        CalcuEq();
        tmpHideValue = document.getElementById("txtDisplay").value;
        Operation = eOpera;
        document.getElementById("hideOperation").value = tmpHideValue;
        document.getElementById("txtDisplay").value = "";
        console.info(Operation);
    }
// 等於 =
    function CalcuEq() {
        document.getElementById("hideOperation").value = "";
        switch (Operation) {
            case '+':
                document.getElementById("txtDisplay").value =
                    parseFloat(tmpHideValue) + parseFloat(document.getElementById("txtDisplay").value);
                break;
            case '-':
                document.getElementById("txtDisplay").value =
                    parseInt(tmpHideValue) - parseInt(document.getElementById("txtDisplay").value);
                break;
            case '*':
                document.getElementById("txtDisplay").value =
                    parseInt(tmpHideValue) * parseInt(document.getElementById("txtDisplay").value);
                break;
            case '/':
                document.getElementById("txtDisplay").value =
                    parseInt(tmpHideValue) / parseInt(document.getElementById("txtDisplay").value);
                break;
            default:
                break;
        }
        Operation = null;
        tmpHideValue = null;
    }






    // 加法 +

    //$("#NPlus").click(function () {
        //var tmpTxt = parseInt($("#txtDisplay").val());
        //var tmpHide = parseInt($("#hideOperation").val());
        //if ($("#txtDisplay").val() == "") {
        //    return false;
        //}
        //else if ($("#hideOperation").val() != "" && $("#txtDisplay").val() != "") {
        //    console.info("Run PLUS else if");
        //    Operation = '+';
        //    $("#hideOperation").val(tmpHide + tmpTxt);
        //    $('#txtDisplay').val('');
        //}
        //else {
        //    console.info("Run PLUS else");
        //    Operation = '+';
        //    $("#hideOperation").val($("#txtDisplay").val() + $("#NPlus").val());
        //    $('#txtDisplay').val('');
        //    console.info($("#hideOperation").val());
        //}
        //var tmpTxt = parseInt($("#txtDisplay").val());
        //var tmpHide = parseInt($("#hideOperation").val());
        //var a = $("#txtDisplay").val();
        //var b = $("#hideOperation").val()
        //switch (Operation) {
        //    case Operation = "":
        //        console.info("Start NPlus Space Case");
        //        $("#hideOperation").val($("#txtDisplay").val() + $("#NPlus").val());
        //        $("#txtDisplay").val("");
        //        break;
        //        console.info("End NPlus Space Case");
        //    case Operation = "+":
        //        console.info("Start NPlus Plus Case");
        //        $("#hideOperation").val(tmpTxt + $("#NPlus").val());
        //        console.info($("#hideOperation").val());
        //        $("#hideOperation").val($("#hideOperation").val() + $("#txtDisplay").val());
        //        $("#txtDisplay").val("");
        //        alert($("#hideOperation").val());
        //        Operation = "+";
        //        console.info("End NPlus Plus Case");
        //        break;
        //    case Operation = "-":
        //        $("#hideOperation").val(tmpHide - tmpTxt);
        //        $("#txtDisplay").val("");
        //        Operation = "";
        //        console.info("NPlus Minus Case");
        //        Operation = "+";
        //        break;
        //    case Operation = "*":
        //        $("#hideOperation").val(tmpHide * tmpTxt);
        //        $("#txtDisplay").val("");
        //        Operation = "";
        //        console.info("NPlus Multi Case");
        //        Operation = "+";
        //        break;
        //    case Operation = "/":
        //        $("#hideOperation").val(tmpHide / tmpTxt);
        //        $("#txtDisplay").val("");
        //        Operation = "";
        //        console.info("NPlus Divide Case");
        //        Operation = "+";
        //        break;
        //    default:
        //}
    //})

    // 減法 -

    //$("#NMinus").click(function () {
    //    var tmpTxt = parseInt($("#txtDisplay").val());
    //    var tmpHide = parseInt($("#hideOperation").val());
    //    switch (Operation) {
    //        case Operation = "+":
    //            $("#hideOperation").val(tmpHide + tmpTxt);
    //            Operation = "";
    //            $("#txtDisplay").val("");
    //            Operation = "-";
    //            console.info("NMinus Plus Case");
    //            break;
    //        case Operation = "-":
    //            $("#hideOperation").val(tmpHide - tmpTxt);
    //            $("#txtDisplay").val("");
    //            Operation = "";
    //            console.info("NMinus Minus Case");
    //            Operation = "-";
    //            break;
    //        case Operation = "*":
    //            $("#hideOperation").val(tmpHide * tmpTxt);
    //            $("#txtDisplay").val("");
    //            Operation = "";
    //            console.info("NMinus Multi Case");
    //            Operation = "-";
    //            break;
    //        case Operation = "/":
    //            $("#hideOperation").val(tmpHide / tmpTxt);
    //            $("#txtDisplay").val("");
    //            Operation = "";
    //            console.info("NMinus Divide Case");
    //            Operation = "-";
    //            break;
    //        default:
    //    }
    //    //if ($("#txtDisplay").val() == "") {
    //    //    return false;
    //    //}
    //    //else if ($("#txtDisplay").val() != "" && $("#hideOperation").val() != "") {
    //    //    console.info("1Minus else if");
    //    //    $('#txtDisplay').val('');
    //    //    $("#hideOperation").val(tmpHide + tmpTxt);
    //    //}
    //    //else if ($("#hideOperation").val() != "") {
    //    //    console.info("2Minus else if");
    //    //    console.info(tmpTxt);
    //    //    console.info(tmpHide);
    //    //    $("#hideOperation").val(tmpHide + tmpTxt);
    //    //    $('#txtDisplay').val('');
    //    //    //$("#hideOperation").val(tmpHide - tmpTxt);
    //    //    Operation = '-';
    //    //}
    //    //else {
    //    //    console.info("3 Minus else ");
    //    //    $("#hideOperation").val(tmpHide + tmpTxt);
    //    //    $('#txtDisplay').val('');
    //    //    $("#hideOperation").val($("#txtDisplay").val() + $("#NMinus").val());
    //    //    Operation = '-';
    //    //}
    //});

    // 乘法 *

    //$("#NMulti").click(function () {
    //    //if ($("#txtDisplay").val() == "") {
    //    //    return false;
    //    //}
    //    //else {
    //    //    $("#hideOperation").val($("#txtDisplay").val() + $("#NMulti").val());
    //    //    $('#txtDisplay').val('');
    //    //}
    //    var tmpTxt = parseInt($("#txtDisplay").val());
    //    var tmpHide = parseInt($("#hideOperation").val());
    //    switch (Operation) {
    //        case Operation = "+":
    //            $("#hideOperation").val(tmpHide + tmpTxt);
    //            Operation = "";
    //            $("#txtDisplay").val("");
    //            Operation = "*";
    //            console.info("NMulti Plus Case");
    //            break;
    //        case Operation = "*":
    //            $("#hideOperation").val(tmpHide - tmpTxt);
    //            $("#txtDisplay").val("");
    //            Operation = "";
    //            console.info("NMulti Minus Case");
    //            Operation = "*";
    //            break;
    //        case Operation = "*":
    //            $("#hideOperation").val(tmpHide * tmpTxt);
    //            $("#txtDisplay").val("");
    //            Operation = "";
    //            console.info("NMulti Multi Case");
    //            Operation = "*";
    //            break;
    //        case Operation = "*":
    //            $("#hideOperation").val(tmpHide / tmpTxt);
    //            $("#txtDisplay").val("");
    //            Operation = "";
    //            console.info("NMulti Divide Case");
    //            Operation = "*";
    //            break;
    //        default:
    //    }
    //});

    // 除法 /

    //$("#NDivide").click(function () {
    //    //if ($("#txtDisplay").val() == "") {
    //    //    return false;
    //    //}
    //    //else {
    //    //    $("#hideOperation").val($("#txtDisplay").val() + $("#NDivide").val());
    //    //    $('#txtDisplay').val('');
    //    //}
    //    var tmpTxt = parseInt($("#txtDisplay").val());
    //    var tmpHide = parseInt($("#hideOperation").val());
    //    switch (Operation) {
    //        case Operation = "+":
    //            $("#hideOperation").val(tmpHide + tmpTxt);
    //            Operation = "";
    //            $("#txtDisplay").val("");
    //            console.info("NDivide Plus Case");
    //            Operation = "/";
    //            break;
    //        case Operation = "-":
    //            $("#hideOperation").val(tmpHide - tmpTxt);
    //            $("#txtDisplay").val("");
    //            Operation = "";
    //            console.info("NDivide Minus Case");
    //            Operation = "/";
    //            break;
    //        case Operation = "*":
    //            $("#hideOperation").val(tmpHide * tmpTxt);
    //            $("#txtDisplay").val("");
    //            Operation = "";
    //            console.info("NDivide Multi Case");
    //            Operation = "/";
    //            break;
    //        case Operation = "/":
    //            $("#hideOperation").val(tmpHide / tmpTxt);
    //            $("#txtDisplay").val("");
    //            Operation = "";
    //            console.info("NDivide Divide Case");
    //            Operation = "/";
    //            break;
    //        default:
    //    }
//});


        //if (Operation == '+') {
        //    $('#txtDisplay').val(tmpHide + tmpTxt);
        //    $('#hideOperation').val('');
        //}
        //else if (Operation == '-') {
        //    $('#txtDisplay').val(tmpHide - tmpTxt);
        //    $('#hideOperation').val('');
        //}
    
