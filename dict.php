<?php
$search = $_POST['val'];
$file = fopen("words_alpha.txt", "r") or die("Unable to open file!");
$matches = [];
$words = [];

while(!feof($file)) {
    $currentWord = fgets($file);

    if (stripos($currentWord, $search) !== false) {
        $matches[] = $currentWord;
    }
}

fclose($file);

if (sizeof($matches) === 0) {
    $error = ["word not found"];
    echo json_encode($error);
} else {
    echo json_encode($matches);
}