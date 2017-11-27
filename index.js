$(function() {
    var wid = $(".dialog").width();
    $(".dialog").height(wid * (678 / 1265));

    var wid1 = $(".dialog-phone").width();
    $(".dialog-phone").height(wid1 * (932 / 699));


    if (IsPC()) {
        $(".dialog").show();
        $(".dialog-phone").hide();
    } else {

        $(".dialog").hide();
        $(".dialog-phone").show();
    }

    $(window).on("resize", function() {
        var wid = $(".dialog").width();
        $(".dialog").height(wid * (678 / 1265));
    })
    var innerDiv = $(".inner-div");
    $(".dialog .qu").hover(function() {
        var num = $(this).attr("hover");
        var cls = 'hover' + num;
        innerDiv.addClass(cls);
        $(".tip" + num).fadeIn();
    }, function() {
        var num = $(this).attr("hover");
        var cls = 'hover' + num;
        innerDiv.removeClass(cls);
        $(".tip" + num).hide();
    })


    $(".dialog-phone").on('click', '.qu', function() {
        var num = $(this).attr('hover');
        num = num + ''
        switch (num) {
            case "1":
                tip('暂留', '片长：暂留')
                break;
            case "2":
                tip('云南大商汇布料区非公企业联合党支部', '片长：罗建文')
                break;
            case "3":
                tip('云南大商汇文教茶叶区非公企业联合党支部', '片长：代文龙')
                break;
            case "4":
                tip('实业支部&nbsp;片长：陈先烈', '商业支部&nbsp;片长：罗静')
                break;
            case "5":
                tip('云南大商汇陶瓷区非公企业联合党支部', '片长：王丽娟')
                break;
            case "6":
                tip('暂留', '片长：暂留')
                break;
            case "7":
                tip('云南大商汇木制品区非公企业联合党支部', '片长：陈洁')
                break;
            case "8":
                tip('云南大商汇灯具区非公企业联合党支部', '片长：王丽娟')
                break;
            case "9":
                tip('云南大商汇卫浴区非公企业联合党支部', '片长：孙炀')
                break;
            default:
                break;
        }
    })

    $(".close").click(function() {
        $(".dialog").hide();
        $(".mask").hide();
    })

    function tip(str1, str2) {
        $("#tip .p1").html(str1)
        $("#tip .p2").html(str2)
    }

    function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"
        ];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
})