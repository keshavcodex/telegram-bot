import express from "express";

import {subscribe, unSubscribe, updateCity, getData } from '../controller/subscriptionController.js';

const router = express.Router()

router.get('/', async (req, res)=>{
    res.send(await getData());
});
router.post('/subscribe', async(req, res) =>{
    var chatId = req.body.chatId;
    var location = req.body.location;
    res.send(await subscribe(chatId, location));
});
router.delete('/unSubscribe', async(req, res) =>{
    var chatId = req.body.chatId;
    res.send(await unSubscribe(chatId));
});
router.put('/updateCity', async(req, res) =>{
    var chatId = req.body.chatId;
    var location = req.body.location;
    res.send(await updateCity(chatId, location));
});



export default router;