@echo off
title %~n0 - %~t0版
pushd .
%~d0
cd %~dp0
setlocal

:: Nuxtの開発サーバを起動
:: ⇒ http://localhost:3000/
:: npm run dev
start cmd /c npm run dev

endlocal
popd
:: pause
timeout /t 10
echo on
