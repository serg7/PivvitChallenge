<?php

namespace Pivvit\ApiBundle\Controller;

use Pivvit\ApiBundle\Entity\Purchase;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

class PurchaseController extends Controller
{
    public function purchasesAction()
    {
            // fetch purchases data with related offerings
        $purchases = $this->getDoctrine()->getRepository('PivvitApiBundle:Purchase')
            ->createQueryBuilder('p')
            ->select('p.id, p.quantity, p.customerName')
            ->innerJoin('p.offering', 'o')
            ->addSelect('o.title, o.price')
            ->getQuery()->getArrayResult();

        $response = new JsonResponse($purchases);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    public function createPurchase()
    {
        // get data from form
        $request = Request::createFromGlobals();
        $quantity = $request->query->get('quantity');
        $customer_name = $request->query->get('customer_name');
        $offeringId = $request->query->get('offering_id');

        $response = new JsonResponse();
        $response->headers->set('Content-Type', 'application/json');
        $em = $this->get('doctrine')->getManager();


        try
        {
            // create new purchase
            $purchase = new Purchase();
            $purchase->setQuantity($quantity);
            $purchase->setCustomerName($customer_name);

            $offering = $em->getRepository('PivvitApiBundle:Offering')->find($offeringId);

            $purchase->setOffering($offering);
            $em->persist($purchase);
            $em->flush();
        }
        catch (Exception $e)
        {
            return $response->setContent(array('Result'=> 'failure'));
        }

        $response->setContent(array('Result'=> 'success'));

        return $response;
    }
}