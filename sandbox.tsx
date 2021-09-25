import React, { useContext, useState } from 'react';

const flat = nested.reduce((arr, it) => [...arr, ...it], []);

const nested = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
