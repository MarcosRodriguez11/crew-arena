$d = 'C:\Users\Marcos\.kiro\crew\workspace\crew-arena\img\tiles'
$zip = Join-Path $d 'puny-characters.zip'
$ex = Join-Path $d 'chars'
New-Item -ItemType Directory -Force -Path $ex | Out-Null
try {
  Invoke-WebRequest -Uri 'https://opengameart.org/sites/default/files/puny-characters.zip' -OutFile $zip -UseBasicParsing
  Write-Output ('downloaded ' + (Get-Item $zip).Length + ' bytes')
  Expand-Archive -Path $zip -DestinationPath $ex -Force
  Get-ChildItem -Path $ex -Recurse -Filter *.png | ForEach-Object {
    Write-Output ($_.FullName.Substring($ex.Length) + ' :: ' + $_.Length + 'b')
  }
} catch {
  Write-Output ('FAIL ' + $_.Exception.Message)
}
