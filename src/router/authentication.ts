import express from 'express';
import { login, register } from '../controllers/authentication';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
  router.post('/auth/register', isAuthenticated, isOwner, register);
  router.post('/auth/login', isAuthenticated, isOwner, login);
};
