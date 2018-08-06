<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type");

function getPosiçãoTitulo(){

    $connection = odbc_connect('SQLServer', '', '');
    if (!$connection) {exit("Não foi possível conectar ao servidor de dados");} 
    
    $sqlTexto = "Select top 1000 ";
	$sqlTexto.= "   Cliente.nome, ";
	$sqlTexto.= "   Cliente.cpf, ";
	$sqlTexto.= "   t.NumeroTitulo, ";
	$sqlTexto.= "   Convert(date,t.DataEntrada) as DataEntrada, ";
	$sqlTexto.= "   (select isnull(sum(valor),0) as valor from TITULO_PARCELA where tituloid = t.id) as Valor ";
    $sqlTexto.= "from ";
    $sqlTexto.= "   [COBRANCA].[DBO].titulo t ";
    $sqlTexto.= "   inner join [COBRANCA].[DBO].cadastro cliente on cliente.id = t.ClienteId";
    
    //echo $sqlTexto;
    $rs=odbc_exec($connection,$sqlTexto); 
    if (!$rs) {exit("Error in SQL");}

    $dados = array();
    while (odbc_fetch_row($rs)) {

        array_push($dados, array(
            "nome" => utf8_encode(odbc_result($rs, "nome")),
            "cpf" =>  utf8_encode(odbc_result($rs, "cpf")),
            "NumeroTitulo" =>  utf8_encode(odbc_result($rs, "NumeroTitulo")),
            "DataEntrada" =>  utf8_encode(odbc_result($rs, "DataEntrada")),
            "Valor" =>  utf8_encode(odbc_result($rs, "Valor"))
        ));
    }

    return json_encode($dados, JSON_PRETTY_PRINT);   
    odbc_close($connection);     
}

$json = getPosiçãoTitulo();
echo $json;

/*
$server = "SQLServer";
$database = "erp";
$user = "sa";
$password = "developer1_";


echo "Criando a conexao..<br /> <br />";
$connection = odbc_connect('SQLServer', '', '');
//odbc_connect("Driver={SQL Server Native Client 11.0};Server=$server;Database=$database;", $user, $password);

echo "Testando a conexao..<br /> <br />";
if($connection){
    echo "Conexao ok! <br /> <br />";
}
 //execute sql
 $rs=odbc_exec($connection,"SELECT codigo, descricao FROM [AGORAMENGE].[DBO].PRODUTO");
 if (!$rs) {exit("Error in SQL");}


$dados = array();
while (odbc_fetch_row($rs)) {

    array_push($dados, array(
        "codigo" => odbc_result($rs, "codigo"),
        "descricao" =>  utf8_encode(odbc_result($rs, "descricao"))
       // "subcategoria" => utf8_encode($r['subcategoria']),
       // "valor" => number_format($r['valor'],2,',','.')
    ));


    //echo odbc_result($rs, "codigo");
    //echo odbc_result($rs, "descricao");
}

echo json_encode($dados, JSON_PRETTY_PRINT);

odbc_close($connection); 

*/

/*
$n = odbc_num_rows($rs);
$dados = array();

//Mesclar resultados em um array

for($i = 0; $i<$n; $i++) { 
    $dados[] = odbc_fetch_array($rs,$i); 
    //print_r($dados);
} 

echo json_encode($dados);

*/
/*
 //retreive data into array
 $data = array();
 while( $row = odbc_fetch_array($rs) ) {
     $data[] = $row;
     print_r($data);
 } 

 odbc_close($connection);
 
 //output as json string
//echo json_encode($data, JSON_PRETTY_PRINT);
*/



/*
$query = <<<EOF
SELECT codigo, descricao, referencia FROM [ERP].[DBO].PRODUTO 
EOF;

$resultado = odbc_exec($connection, $query);
odbc_result_all($resultado, "cellpadding='3' background-color='d3d3d3'");

*/
?>