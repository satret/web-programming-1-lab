<?php
session_start();
date_default_timezone_set('Europe/Moscow');
if (empty($_SESSION['k'])) {
    $_SESSION['k'] = 1;
} else {
    $_SESSION['k']++;
}
$k = $_SESSION['k'];
if (!isset($_SESSION['table']))
    $_SESSION['table'] = array();
$TIME = date_default_timezone_get();
$startTime = microtime(true);
function validateFormat($x, $y, $r): bool
{
    if (!($x == '-3' || $x == '-2' || $x == '-1' || $x == '0' || $x == '1' || $x == '2' || $x == '3' || $x == '4' || $x == '5') && is_numeric($y))
        return false;
    if ($y > 5 || $y < -5 && is_numeric($y) && strlen($y) <= 18)
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
if (!is_numeric($y) || !is_numeric($y) || !is_numeric($y)) {
    echo "number_is_not_numeric";
} else {
    echo $k, '!';
    $validate = validateFormat($x, $y, $r);
    if ($validate)
        $answer = answer($x, $y, $r);
    else
        $answer = false;
    $date = date('d.m.Y H:i:s', time());
    $time = round(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 7);
//    echo $x, '/';
//    echo $y, '/';
//    echo $r, '/';
    if ($answer) {
        $answer = "Попал";
//        echo $answer, '/';
    } else {
        $answer = "Не попал";
//        echo $answer, '/';
    }
//    echo $date, '/';
//    echo $time, ';';


//    $_SESSION['table'][$k][0] = $x;
//    $_SESSION['table'][$k][1]  = $y;
//    $_SESSION['table'][$k][2]  = $r;
//    $_SESSION['table'][$k][3]  = $answer;
//    $_SESSION['table'][$k][4]  = $date;
//    $_SESSION['table'][$k][5]  = $time;
//    if (isset($_SESSION[$k][0])) {
//        $_SESSION['table'][$k][0] = 1;
//        $_SESSION['table'][$k][1] = 2;
//        $_SESSION['table'][$k][2] = 3;
//        $_SESSION['table'][$k][3] = 4;
//        $_SESSION['table'][$k][4] = 5;
//        $_SESSION['table'][$k][5] = 6;
//    } else {
//        $_SESSION['table'][$k][0] = 'a';
//        $_SESSION['table'][$k][1] = 'b';
//        $_SESSION['table'][$k][2] = 'c';
//        $_SESSION['table'][$k][3] = 'd';
//        $_SESSION['table'][$k][4] = 'e';
//        $_SESSION['table'][$k][5] = 'f';
//
//    }
//    $_SESSION['table'][2][0] = 1;
//    $_SESSION['table'][2][1]  = 2;
//    $_SESSION['table'][2][2]  = 3;
//    $_SESSION['table'][2][3]  = 4;
//    $_SESSION['table'][2][4]  = 5;
//    $_SESSION['table'][2][5]  = 6;
    $attempt = array('x' => $x, 'y' => $y, 'r' => $r, 'result' => $answer, 'current_time' => $date, 'execution_time' => $time, 5);
    //if ($r != 0) {
        array_push($_SESSION['table'], $attempt);
    //}
//    else if($_SESSION['k'] <= 1) {
//        foreach ($_SESSION['table'] as $values) {
//            $chet = 0;
//            foreach ($values as $value) {
//                $chet++;
//                //echo $value, "/";
//                if ($chet >= 6) {
//                    echo $value;
//                } else {
//                    echo $value, "/";
//                }
//            }
//            echo ";";
//        }
//    }
        //else{

        foreach ($_SESSION['table'] as $values) {
            $chet = 0;
            foreach ($values as $value) {
                $chet++;
                //echo $value, "/";
                if ($chet >= 6) {
                    echo $value;
                } else {
                    echo $value, "/";
                }
            }
            echo ";";
        }
    }

    foreach ($_SESSION['table'] as $values) {
        $chet = 0;
        foreach ($values as $value) {
            $chet++;
            //echo $value, "/";
            if ($chet >= 6) {
                echo $value;
            } else {
                echo $value, "/";
            }
        }
        echo ";";
    //}


//$chet = 0;
//    if (isset($_SESSION['table'])) {
//        foreach ($_SESSION['table'] as $item => $itemAr) {
//            $chet = 0;
//            foreach ($itemAr as $attr => $value) {
//                $chet++;
////                echo "[$item][$attr] = [$value]";
//                if($chet >= 6){
//                    echo $value;
//                }
//                else {
//                    echo $value, "/";
//                }


////                echo $elem['x'], '/';
////                echo $elem['y'], '/';
////                echo $elem['r'], '/';
////                echo $elem['result'], '/';
////                echo $elem['current_time'], '/';
////                echo $elem['execution_time'], ';';
//            }
//            echo ";";
//        }
//    }


//    if (isset($_SESSION['table'])){
//        for($i = 1; $i <= $k; $i++) {
//            echo $_SESSION['table'][$i][0], '/';
//            echo $_SESSION['table'][$i][1], '/';
//            echo $_SESSION['table'][$i][2], '/';
//            echo $_SESSION['table'][$i][3], '/';
//            echo $_SESSION['table'][$i][4], '/';
//            echo $_SESSION['table'][$i][5], ';';
////            echo $i, '/';
////            echo $i, '/';
////            echo $i, '/';
////            echo $i, '/';
////            echo $i, '/';
////            echo $i, ';';
//        }

    //table restore
    //submit.js


//        echo 1, '/';
//        echo 2, '/';
//        echo 3, '/';
//        echo 4, '/';
//        echo 5, '/';
//        echo 6, ';';


//    for($i = 0; $i < $k; $i++){
//        for($j = 0; $j < 6; $j++){
//            echo $_SESSION['table'][$k][$j], '/';
//        }
//        echo ";";
//    }
//    }

//короче тут подписать передачу сессию в цикле каждую строку с нуля
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
}

?>