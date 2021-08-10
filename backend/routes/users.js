const router = require('express').Router();

const {
  userIdValidation,
  userInfoValidation,
  userAvatarValidation,
} = require('../middlewares/validation');

const {
  getUsers,
  getUserById,
  updateUser,
  updateAvatar,
  getCurrentUserInfo,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/me', getCurrentUserInfo);
router.get('/:userId', userIdValidation, getUserById);

router.patch('/me', userInfoValidation, updateUser);
router.patch('/me/avatar', userAvatarValidation, updateAvatar);

module.exports = router;