foreach ($f in 'hierba','centro','objeto','entrenador','jugador') {
  $u = 'http://127.0.0.1:8765/img/mapa/' + $f + '.svg'
  try {
    $r = Invoke-WebRequest -Uri $u -UseBasicParsing
    Write-Output ($f + ' -> ' + $r.StatusCode)
  } catch {
    Write-Output ($f + ' -> FAIL ' + $_.Exception.Message)
  }
}
