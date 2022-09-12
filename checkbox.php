<?php
session_start();
date_default_timezone_set('Europe/Moscow');
$TIME = date_default_timezone_get();
$startTime = microtime(true);
//echo session_id();
function validateFormat($x, $y, $r): bool
{
    if (!($x == '-3' || $x == '-2' || $x == '-1' || $x == '0' || $x == '1' || $x == '2' || $x == '3' || $x == '4' || $x == '5') && is_numeric($y))
        return false;
    if ($y > 5 || $y < -5 && is_numeric($y) && strlen($y)<=18)
        return false;
    if ($r > 5 || $r < 1 && is_numeric($y))
        return false;
    return true;
}

function answer($x, $y, $r): bool
{
    if ($x >= 0 and $y >= 0) {
        if ($x <= $r and $y <= ($r / 2)) {
            return true;
        }
    } else if ($x <= 0 and $y >= 0) {
        if ($y <= 2 * $x + $r) {
            return true;
        }
    } else if ($x >= 0 and $y <= 0) {
        if ($y * $y + $x * $x <= 0.25 * $r * $r) {
            return true;
        }
    }
    return false;
}

$x = $_GET["x"];
$y = $_GET["y"];
$r = $_GET["r"];
if(!is_numeric($y) || !is_numeric($y) || !is_numeric($y)){
    echo "number_is_not_numeric";
}
else {
    $startTime = $_GET["startTime"];
    $timeZone = $_GET["timeZone"];
    $validate = validateFormat($x, $y, $r);
    $_SESSION['shot'] = false;
    if ($validate)
        $answer = answer($x, $y, $r);
    else
        $answer = false;


    $date = date('d.m.Y H:i:s', time());
    $time = round(microtime(true) * 1000 - $startTime, 6) / 1000;
    if ($answer) {
        echo "1/";
    } else {
        echo "0/";
    }
    echo $x, '/';
    echo $y, '/';
    echo $r, '/';
    echo $date, '/';
    echo $time;
}

//echo $_SESSION['shot'];
//$_SESSION['test']=$shot;
//echo $_SESSION['test'];

//http_response_code(200);
//$new_url = "index.html";
//header('Location: '.$new_url);

/*$_SESSION['sao'] = '1';
$_SESSION['qwe'] = 'Tutsplus';
echo $_SESSION['sao'];
echo $_SESSION['qwe'];
*/
?>

//обновление страницы
//длинная арифметика
//последов серв валидации
