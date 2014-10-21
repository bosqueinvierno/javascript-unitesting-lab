rem ejecutar test
echo %1

echo %2
echo %3
echo %4
pause
REM echo ejecutando tests
phantomjs ejemplos/ejemplo12.js ejemplos/ejemplo12.html


IF NOT ERRORLEVEL 1 GOTO DONE
  ECHO  An error occurred with exit code 1 or higher.
  PAUSE
  EXIT
:DONE

REM minificar
REM copiar en carpeta de salida
REM echo minificando...
mkdir build
uglifyjs ejemplos/ejemplo12.js -o build/package.js
