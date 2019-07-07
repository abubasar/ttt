InitDepartDates();
InitSpinners();
InitDestinationAutocomplete('from-0', 'to-0');
InitDestinationAutocomplete('from-1', 'to-1');
InitDestinationAutocomplete('from-2', 'to-2');
InitDestinationAutocomplete('from-3', 'to-3');
InitDestinationAutocomplete('from-4', 'to-4');

$('body').on("click", "#flt-search-btn", function (event) {
    var frm = $("#flt-search-form");
    if (frm.valid()) {
        var l = Ladda.create(this);
        l.start();
        frm.submit();
    }
});
//$('body').on('click', 'input[name=JourneyType]', function (event) {
//    var v = $(this).val();

//    $("#mc-box").hide();
//    $(".first-dest-row").removeClass("w315").removeClass("w225");
//    if (v == "1" || v == "3") {
//        $(".first-dest-row").addClass("w315");
//        $("#first-ret-date").hide();
//        $("#dt-from").val("");
//        InitDateOneway();

//        if (v == "3") {
//            $("#mc-box").show();
//            $("#s-1").val("1");
//        }
//    } else if (v == "2") {
//        $(".first-dest-row").addClass("w225");
//        $("#first-ret-date").show();
//        $("#dt-from").val("");
//        $("#dt-to").val("");
//        InitDateReturn();
//    }

//});
$('body').on('click', 'input[name=TravelClass]', function (event) {
    SetDisplayText();
});

function SetDisplayText() {
    var a = parseInt($("#flt-people-adult").val());
    var c = parseInt($("#flt-people-child").val());
    var i = parseInt($("#flt-people-infant").val());

    var t = a + c + i;
    var txt = t + " Traveller";
    if (t > 1) {
        txt += "s"
    }

    var cType = $("input[name=TravelClass]:checked").val();
    txt += ", " + cType;

    //var txt = "1 ADT";
    //if (a > 1) {
    //    txt = a + " ADT"
    //}

    //if (c > 0) {
    //    if (c == 1) { txt += ", " + c + " CHD"; }
    //    else { txt += ", " + c + " CHD"; }
    //}

    //if (i > 0) {

    //    if (i == 1) { txt += ", " + i + " INF"; }
    //    else { txt += ", " + i + " INF"; }
    //}

    $("#traveller-summary").html(txt);
}