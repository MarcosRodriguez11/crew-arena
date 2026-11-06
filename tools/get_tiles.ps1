$d = 'C:\Users\Marcos\.kiro\crew\workspace\crew-arena\img\tiles'
New-Item -ItemType Directory -Force -Path $d | Out-Null
$targets = @{
  'punyworld.png' = 'https://opengameart.org/sites/default/files/punyworld-overworld-tileset_0.png'
}
foreach ($name in $targets.Keys) {
  $out = Join-Path $d $name
  try {
    Invoke-WebRequest -Uri $targets[$name] -OutFile $out -UseBasicParsing
    $len = (Get-Item $out).Length
    Write-Output ("ok $name $len bytes")
  } catch {
    Write-Output ("FAIL $name " + $_.Exception.Message)
  }
}
