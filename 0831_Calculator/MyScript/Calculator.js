// 顯示數字在txtbox
$(document).ready(function () {
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
    // 加法 +
    $("#NPlus").click(function () {
        if ($("#txtDisplay").val() == "") {
            return false;
        }
        else {
            $("#hideOperation").val($("#txtDisplay").val() + $("#NPlus").val());
            $('#txtDisplay').val('');
        }
    })
    // 減法 -
    $("#NMinus").click(function () {
        if ($("#txtDisplay").val() == "") {
            return false;
        }
        else {
            $("#hideOperation").val($("#txtDisplay").val() + $("#NMinus").val());
            $('#txtDisplay').val('');
        }
    });
    // 乘法 *
    $("#NMulti").click(function () {
        if ($("#txtDisplay").val() == "") {
            return false;
        }
        else {
            $("#hideOperation").val($("#txtDisplay").val() + $("#NMulti").val());
            $('#txtDisplay').val('');
        }
    });
    // 除法 /
    $("#NDivide").click(function () {
        if ($("#txtDisplay").val() == "") {
            return false;
        }
        else {
            $("#hideOperation").val($("#txtDisplay").val() + $("#NDivide").val());
            $('#txtDisplay').val('');
        }
    });

    //等於 =
    $("#NEquals").click(function () {
        if ($('#NEquals').click) {
            var tmpOperation = $('#hideOperation').val();
            var tmpDisplay = $('#txtDisplay').val();
            var Result = tmpOperation.concat(tmpDisplay);
            $('#txtDisplay').val(eval(Result));
            $('#hideOperation').val("");

            console.info(tmpOperation);
            console.info(tmpDisplay);
            console.info(Result); NEquals
            
        }

    });

});
