import {Router} from 'express';
import users from './user';

const router = Router();
router.get("/", function (req, res) {
    res.render('index/index', {
        title: 'index'
    });
});

router.get('/users', users.indexAction);
router.get('/users/:id', users.itemAction);
router.post('/users', users.addAction);
router.put('/users/:id', users.updateAction);
router.delete('/users/:id', users.deleteAction);

export default router;