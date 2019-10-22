<?php
// read and save the POST variable


$search = $_POST['val'];
$file = fopen("words_alpha.txt", "r") or die("Unable to open file!");
$matches = [];


while(!feof($file)) {
    $currentWord = fgets($file);

    if (stripos($currentWord, $search)) {
        $matches[] = $currentWord . '\n';
    }
}

echo var_dump($matches);
// initiate new empty array $matches


// iterate through each line of the file
// visit https://www.w3schools.com/php/php_file_open.asp

// loop here
	// inside the loop: use stripos(str1, str2) to look for matches
	// push matches to array $matches


fclose($file);


// check if nothing found -> error message


// return result as JSON

#echo json_encode($matches);
