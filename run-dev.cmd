@echo off
title %~n0 - %~t0��
pushd .
%~d0
cd %~dp0
setlocal

:: Nuxt�̊J���T�[�o���N��
:: �� http://localhost:3000/
:: npm run dev
start cmd /c npm run dev

endlocal
popd
:: pause
timeout /t 10
echo on
