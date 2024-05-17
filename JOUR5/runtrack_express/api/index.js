// POINT D'ENTRÉE DU SITE WEB

const express = require('express');
//instance d'express
const app = express();
const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/LaPlateforme';