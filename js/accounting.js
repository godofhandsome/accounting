var fdb = new ForerunnerDB();
var db = fdb.db("accounting");
var accountingCollection = db.collection('accounting');
accountingCollection.load();


function SubmitCost(){
var dateval = $("#date").val();
var categoryval = $("#category").val();
var itemval = $("#item").val();
var costval = $("#cost").val();
var newaccounting = {
    date: dateval,
    category: categoryval,
    item: itemval,
    cost: costval
}   
accountingCollection.insert(newaccounting);
accountingCollection.save()
alert("儲存成功")
$("#date").val("")
$("#item").val("")
$("#category").val("")
$("#cost").val("")
}