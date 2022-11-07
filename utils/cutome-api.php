<?php 
if(isset($_GET['get-withdrawals'])){
    define('_HOST', 'localhost');
    define('_DATABASE', 'earnclic_ptclab');
    define('_USERNAME', 'earnclic_money');
    define('_PASSWORD', 'nw&(bhiBdVfk');
    $con = mysqli_connect(_HOST, _USERNAME, _PASSWORD,_DATABASE);
    $sql = 'SELECT COUNT(*) AS total FROM withdrawals';
    $q = $con->query($sql);
    $data = []; 
    if($q->num_rows > 0){
        while($row = $q->fetch_assoc()) $data[] = $row;
    }
    $sql = "SELECT withdrawals.final_amount as amount, withdrawals.currency as currency, withdrawals.created_at as date, users.username FROM withdrawals, users WHERE withdrawals.user_id = users.id ORDER BY withdrawals.id  DESC LIMIT 15";
    $q = $con->query($sql);
    if($q->num_rows > 0) {
        while($row = $q->fetch_assoc()) $data['withdrawals'][] = $row;
    }
    $sql = "SELECT deposits.amount as amount,  deposits.method_currency as currency, deposits.created_at as date, users.username FROM deposits, users WHERE deposits.user_id = users.id ORDER BY deposits.id  DESC LIMIT 15";
    $q = $con->query($sql);
    if($q->num_rows > 0) {
        while($row = $q->fetch_assoc()) $data['deposits'][] = $row;
    }
    exit(json_encode($data));
}
?>