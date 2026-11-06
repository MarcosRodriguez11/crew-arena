$c = (Invoke-WebRequest -Uri 'http://127.0.0.1:8765/game.css?v=24' -UseBasicParsing).Content
$i = $c.IndexOf('.medallas-mapa')
if ($i -ge 0) {
  $len = [Math]::Min(260, $c.Length - $i)
  Write-Output $c.Substring($i, $len)
} else {
  Write-Output 'NOT FOUND in served css'
}
