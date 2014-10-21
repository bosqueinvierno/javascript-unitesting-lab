rem ejecutar test
echo %1

echo %2
echo %3
echo %4
pause
REM echo ejecutando tests
phantomjs ejemplos/ejemplo12.js ejemplos/ejemplo12.html


REM IF NOT ERRORLEVEL 1 GOTO DONE
  REM ECHO  An error occurred with exit code 1 or higher.
  REM PAUSE
  REM EXIT
REM :DONE

minificar
copiar en carpeta de salida
REM echo minificando...
REM mkdir build
REM uglifyjs ejemplo12.js -o build\package.js
