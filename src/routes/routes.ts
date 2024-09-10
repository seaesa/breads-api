import express from 'express';
const router = express.Router();

router.get('/api', (req, res) => {
	return res.json({
		code: 200,
	});
});

export default router;
