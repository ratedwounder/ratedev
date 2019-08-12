<?php
 
/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
 
//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$msg = $_POST['user_msg'];
$time = date("H:i:s d-m-Y ");

//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  '💰 Заказ ' => $time,
  '👨‍💼 Имя: ' => $name,
  '☎️ Телефон: ' => $phone,
  '✉️ Сообщение ' => $msg
);
 
//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
//Осуществляется отправка данных в переменной $sendToTelegram
$sendToTelegram = fopen("https://api.telegram.org/bot935142691:AAEDx3XniIwU2IpeDBH8M1-wGuCIAGno5rY/sendMessage?chat_id=-1001215444371&parse_mode=html&text={$txt}","r");
 
//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if ($sendToTelegram) {
  echo "Thank you";
} else {
  echo "Error";
}
?>