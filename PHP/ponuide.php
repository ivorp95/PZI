<?php
    $server = "ucka.veleri.hr";
    $database = "ipangos";
    $username = "ipangos";
    $password = "11";

    $conn = mysqli_connect($server, $username, $password, $database);
    $query = "SELECT * FROM mobiteli_pzi";
    $res = mysqli_query($conn, $query);
    while($row = mysqli_fetch_assoc($res)){
        echo $row ["naziv"];
    }
    mysqli_close($conn);