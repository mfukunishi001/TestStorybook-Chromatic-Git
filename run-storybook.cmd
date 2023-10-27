@echo off
title %~n0 - %~t0?
pushd .
%~d0
cd %~dp0
setlocal

:: Storybook???
:: ? http://localhost:6006/
:: npm run storybook
start cmd /c npm run storybook

endlocal
popd
:: pause
timeout /t 10
echo on
