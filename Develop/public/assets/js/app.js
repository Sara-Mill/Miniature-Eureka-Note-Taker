const express = require('express');
const fs = require('fs');
const path = require('path');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
