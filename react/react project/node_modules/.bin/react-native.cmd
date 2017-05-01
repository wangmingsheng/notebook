@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\react-native-cli\index.js" %*
) ELSE (
  node  "%~dp0\..\react-native-cli\index.js" %*
)