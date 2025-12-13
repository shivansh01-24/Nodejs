import express from 'express';
const router = express.Router();
router.get('/profile', (req, res)=>{
    res.send("User profile")
});
router.get('/settings', (req, res)=>{
    res.send("User settings");
});

export default router;