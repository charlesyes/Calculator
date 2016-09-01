// 顯示數字在txtbox
$(document).ready(function () {
    var tmpOperation = 0;
    var tmpHideValue = 0;
    $(".NumBtn").click(function () {
        var tmpNum = $(this).val();
        $("#txtDisplay").val($("#txtDisplay").val() + tmpNum);
        //console.info(tmpNum);
    })
    // 清除 C
    $("#NClean").click(function () {
        $("#txtDisplay").val("");
        $("#hideOperation").val("");
    })
    // 運算
    $(".CalcuOperation").click(function (eOpera) {
        console.info("Start Calcu Click");
        $('#NEquals').trigger('click');
        tmpHideValue = $("#txtDisplay").val();
        tmpOperation = eOpera;
        $("#hideOperation").val(tmpHideValue);
        $("#txtDisplay").val("");
        console.info("End Calcu Click");

    });
    ////等於 =
    $("#NEquals").click(function () {
        console.info("Start Equal Click");
        switch (tmpOperation) {
            case '+':
                console.info("Start ++");
                $("#txtDisplay").val(tmpHideValue + $(".txtDisplay").val());
                break;
            case '-':
                console.info("Start --");
                $("#txtDisplay").val($("#hideOperation").val() - $(".txtDisplay").val());
                break;
            case '*':
                console.info("Start **");
                $("#txtDisplay").val($("#hideOperation").val() * $(".txtDisplay").val());
                break;
            case '/':
                console.info("Start //");
                $("#txtDisplay").val($("#hideOperation").val() / $(".txtDisplay").val());
                break;
            default:
                break;
        }
        console.info("End Equal Click");
        
    });


    //// 加法 +
    //$("#NPlus").click(function () {
    //    $("#hideOperation").val($("#txtDisplay").val() + $("#NPlus").val());
    //    $("#txtDisplay").val("");
    //});
    //// 減法 -
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
    //// 乘法 *
    //$("#NMulti").click(function () {
    //    if ($("#txtDisplay").val() == "") {
    //        return false;
    //    }
    //    else {
    //        $("#hideOperation").val($("#txtDisplay").val() + $("#NMulti").val());
    //        $('#txtDisplay').val('');
    //    }
    //});
    //// 除法 /
    //$("#NDivide").click(function () {
    //    if ($("#txtDisplay").val() == "") {
    //        return false;
    //    }
    //    else {
    //        $("#hideOperation").val($("#txtDisplay").val() + $("#NDivide").val());
    //        $('#txtDisplay').val('');
    //    }
    //});


});

