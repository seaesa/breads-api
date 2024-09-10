import express from 'express';
const router = express.Router();

router.get('/api', (req, res) => {
	return res.json({
		code: 2001,
		route: '/api',
	});
});

export default router;
