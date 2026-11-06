& node 'C:\Users\Marcos\.kiro\crew\workspace\crew-arena\tools\test_medallas.js' 2>&1 | ForEach-Object { Write-Output $_ }
Write-Output ('EXIT=' + $LASTEXITCODE)
