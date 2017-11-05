var fdb = new ForerunnerDB();
var db = fdb.db("accounting");
var accountingCollection = db.collection('accounting');
accountingCollection.load();


function search() {
    $("#lookupTable").find("tr").remove();                  
    if ($("input:checked").val() == "curmonth") {
        var date = new Date();
        var year = date.getUTCFullYear();
        var month = date.getUTCMonth() + 1;//取得當月月份，可是值會比原本少一

        if (month < 10) {
            month = "0" + month;
        }

        var datestring = year + "-" + month + "-01"
        var accountings = accountingCollection.find(
            {
                date: {
                    $gte: datestring//gte代表大於等於 字串仍然可比較大小，只是會從第一字開始比
                }//找資料的條件
            },
            {
                $orderBy: { "date": -1 },
            }//資料排序方式:以日期降冪排列
        );

        for (var i = 0; i < accountings.length; i++) {
            var datedata = accountings[i].date
            var itemdata = accountings[i].item
            var categorydata = accountings[i].category
            var costdata = accountings[i].cost

            $("#lookupTable").append("<tr><td>" + datedata +
                "</td><td>" + itemdata +
                "</td><td>" + categorydata +
                "</td><td>" + costdata +
                "</td></tr>")
        }
    } else {
        var fromtime = $("#exacttimeno1").val()
        var totime = $("#exacttimeno2").val()
        var accountings = accountingCollection.find(
            {
                date: {
                    $gte: fromtime,//gte代表大於等於 字串仍然可比較大小，只是會從第一字開始比
                    $lte: totime
                }//找資料的條件
            },
            {
                $orderBy: { "date": -1 },
            }//資料排序方式:以日期降冪排列
        );

        for (var i = 0; i < accountings.length; i++) {
            var datedata = accountings[i].date
            var itemdata = accountings[i].item
            var categorydata = accountings[i].category
            var costdata = accountings[i].cost

            $("#lookupTable").append("<tr><td>" + datedata +
                "</td><td>" + itemdata +
                "</td><td>" + categorydata +
                "</td><td>" + costdata +
                "</td></tr>")

        }
    }
}