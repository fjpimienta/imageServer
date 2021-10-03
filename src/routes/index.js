const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => {
  res.send('Página de Inicio');
});

router.get('/upload', (req, res) => {
  res.render('upload');
});

router.post('/upload', (req, res) => {
  console.log('req.file', req.file);
  res.send('Uploadder');
});

router.get('/image/:id', (req, res) => {
  res.send('Profile Image');
});

router.get('/image/:id/delete', (req, res) => {
  res.send('Image Deleted');
});

module.exports = router;