var fdb = new ForerunnerDB();
var db = fdb.db("accounting");
var accountingCollection = db.collection('accounting');

function deletethis(i){
    $("$lookupTable").find(accountingCollection[i]).remove();
}

accountingCollection.load(function(){
    var accountings = accountingCollection.find(
        {},
        {
            $orderBy:{"date":-1},//以日期降冪排列
            $limit:10//最多顯示十筆資料
        }
    );

    for(var i = 0; i<accountings.length; i++ ){
        var datedata = accountings[i].date
        var itemdata = accountings[i].item
        var categorydata = accountings[i].category
        var costdata = accountings[i].cost
        
        $("#accountingTable").append("<tr><td>"+datedata+
                                     "</td><td>"+itemdata+
                                     "</td><td>"+categorydata+
                                     "</td><td>"+costdata+
                                     "</td></tr>")
    }
})