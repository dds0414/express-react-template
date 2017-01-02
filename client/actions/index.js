/**
 * Created by yangbo on 17/1/3.
 */
"use strict";

export const ADD_NUMBER = 'ADD_NUMBER';

export const add_number = (number) => ({
    type:ADD_NUMBER,
    number
});