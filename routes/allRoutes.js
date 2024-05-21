const express = require('express');
const router = express.Router();
const IndexController = require('../controller/indexController');
const Product = require('../controller/product');


router.get('/',(req ,res) => {
    res.render('index')
});

router.get('/about',(req ,res) => {
    res.render('about')
})
router.get('/testimonial',(req ,res) => {
    res.render('testimonial')
})
router.get('/privacy_policy',(req ,res) => {
    res.render('privacy_policy')
})
router.get('/about_us',(req ,res) => {
    res.render('about')
})
router.get('/contact_us',(req ,res) => {
    res.render('contact')
})

router.get('/e-commerce',(req ,res) => {
    res.render('e-commerce',{products:Product})
})

router.post('/sendmail' , IndexController.sendMail)

module.exports=router