@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\jsx\bin\jsx-with-server" %*
) ELSE (
  node  "%~dp0\..\jsx\bin\jsx-with-server" %*
)