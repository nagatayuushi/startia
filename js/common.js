$(document).ready(function(e){
    //footerナビゲーションリスト表示
    $('.footer_title').on('click', function(){
        var li = $(this).parent();
        var btn = $(this).find('.toggle_btn');
        var subul = li.children('ul');

        //ボタンが表示されている時だけ実行
        if (btn.is(':visible')){
            li.toggleClass('open');
            subul.slideToggle();

            //＋と−の切り替え
            btn.text(li.hasClass('open') ? '−' : '＋');
        }
    });
});
//回答保存
function Stotage_Save(q_id, value){
    var save_data = JSON.parse(localStorage.getItem("answers") || '{}');
    save_data[q_id] = value;
    localStorage.setItem("answers", JSON.stringify(save_data));
}