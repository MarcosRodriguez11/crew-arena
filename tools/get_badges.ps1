$d = 'C:\Users\Marcos\.kiro\crew\workspace\crew-arena\img\badges'
New-Item -ItemType Directory -Force -Path $d | Out-Null
foreach ($n in 1..8) {
  $url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/' + $n + '.png'
  $out = Join-Path $d ($n.ToString() + '.png')
  try {
    Invoke-WebRequest -Uri $url -OutFile $out -UseBasicParsing
    Write-Output ('ok ' + $n)
  } catch {
    Write-Output ('FAIL ' + $n + ' ' + $_.Exception.Message)
  }
}
