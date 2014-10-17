rem ejecutar test
echo ejecutando tests
phantomjs ejemplo12.js ejemplo12.html


IF NOT ERRORLEVEL 1 GOTO DONE
  ECHO  An error occurred with exit code 1 or higher.
  PAUSE
  EXIT
:DONE

rem minificar
rem copiar en carpeta de salida
echo minificando...
mkdir build
uglifyjs ejemplo12.js -o build\package.js
