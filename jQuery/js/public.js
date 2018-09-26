/**
 * Created by 123 on 2015/12/9.
 */
/*文字省略*/
jQuery.fn.limit=function(){
    var self = $("[limit]");
    self.each(function(){
        var objString = $(this).text();
        var objLength = $(this).text().length;
        var num = $(this).attr("limit");
        if(objLength > num){
            $(this).attr("title",objString);
            objString = $(this).text(objString.substring(0,num) );
        }
    })
}
$(function(){
    $("[limit]").limit();
})