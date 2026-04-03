{\rtf1\ansi\ansicpg949\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const express = require('express');\
const http = require('http');\
const \{ Server \} = require('socket.io');\
\
const app = express();\
const server = http.createServer(app);\
const io = new Server(server);\
\
// public \uc0\u54260 \u45908 \u51032  HTML \u54028 \u51068 \u51012  \u54868 \u47732 \u50640  \u46916 \u50892 \u51468 \
app.use(express.static('public'));\
\
let gameState = \{ phase: 0, users: \{\} \};\
\
io.on('connection', (socket) => \{\
    console.log('\uc0\u50976 \u51200  \u51217 \u49549 :', socket.id);\
    // (\uc0\u51060 \u44275 \u50640  \u51060 \u51204  \u45813 \u48320 \u50640 \u49436  \u46300 \u47160 \u45912  \u51452 \u49885  \u47588 \u49688 /\u47588 \u46020 , \u44288 \u47532 \u51088  \u53685 \u49888  \u47196 \u51649 \u51060  \u46308 \u50612 \u44049 \u45768 \u45796 .)\
    \
    socket.on('disconnect', () => \{\
        console.log('\uc0\u50976 \u51200  \u53748 \u51109 :', socket.id);\
    \});\
\});\
\
// \uc0\u9733  Railway\u45716  \u51088 \u52404 \u51201 \u51064  \u54252 \u53944 \u47484  \u54624 \u45817 \u54616 \u48064 \u47196  process.env.PORT\u44032  \u44845  \u54596 \u50836 \u54633 \u45768 \u45796 .\
const PORT = process.env.PORT || 3000;\
server.listen(PORT, () => \{\
    console.log(`\uc0\u49436 \u48260 \u44032  \u54252 \u53944  $\{PORT\}\u50640 \u49436  \u49892 \u54665  \u51473 \u51077 \u45768 \u45796 .`);\
\});}