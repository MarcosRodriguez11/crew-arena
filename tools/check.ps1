$base = 'C:\Users\Marcos\.kiro\crew\workspace\crew-arena'
foreach ($f in 'game.js','mapas.js','app.js') {
  $p = Join-Path $base $f
  if (-not (Test-Path $p)) { Write-Output ("MISSING $f"); continue }
  & node --check $p 2>&1 | ForEach-Object { Write-Output ("[$f] " + $_) }
  if ($LASTEXITCODE -eq 0) { Write-Output ("OK $f") } else { Write-Output ("FAIL $f exit=$LASTEXITCODE") }
}
