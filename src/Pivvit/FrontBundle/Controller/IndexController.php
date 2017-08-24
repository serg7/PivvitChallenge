<?php

namespace Pivvit\FrontBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IndexController extends Controller
{
    public function indexAction()
    {
        return $this->render('PivvitFrontBundle:main:index.html.twig');
    }
}
