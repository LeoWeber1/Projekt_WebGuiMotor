<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$servername = "sql11.freesqldatabase.com";
$username = "sql11697639";
$password = "fmvYiECHcF";
$dbname = "sql11697639";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die(json_encode(['error' => "Connection failed: " . $conn->connect_error]));
}

// Query the database
$result = $conn->query('SELECT * from your_table_name');

if ($result->num_rows > 0) {
  // Output data of each row
  while($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
  echo json_encode($data);
} else {
  echo json_encode(['message' => 'No results']);
}

$conn->close();
?>