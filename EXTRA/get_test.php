<?php
    header('Access-Control-Allow-Origin: *');
    $file = fopen("bands.csv", "w");
    fputcsv($file, $_REQUEST);
    fclose($file);

    echo "Data wtitten: [" . implode(",", $_REQUEST) . "]";
?>